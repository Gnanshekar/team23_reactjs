import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextprovider = (props) => {
  const audioRef = useRef(); // Initialize with the first song
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, settrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minutes: 0,
    }, 
    totalTime: {
      second: 0,
      minutes: 0,
    },
  });

  const Play = () => {
    audioRef.current.play(); 
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (id) => {
    await settrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true)
  }

  const previous = async () => {
    if(track.id>0) {
      await settrack(songsData[track.id-1]);
      await audioRef.current.play();
      setPlayStatus(true)
    }
  }

  const next = async () => {
    if(track.id <songsData.length-1) {
      await settrack(songsData[track.id+1]);
      await audioRef.current.play();
      setPlayStatus(true)
    }
  }

  const seekSong = async (e) => {
    audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)
  }

  useEffect(()=>{
    setTimeout(()=>{
        audioRef.current.ontimeupdate = () => {
          seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";
            setTime({
                currentTime: {
                  second: Math.floor(audioRef.current.currentTime % 60),
                  minutes: Math.floor(audioRef.current.currentTime / 60)
                }, 
                totalTime: {
                  second: Math.floor(audioRef.current.duration % 60),
                  minutes: Math.floor(audioRef.current.duration / 60)
                },
              })
        }
    },1000)
  },[audioRef])

  
  const setTrackAndPlay = (newTrack) => {
    settrack(newTrack);
    audioRef.current.src = newTrack.src;
    Play();
  };

  const ContextValue = {
    audioRef,
    seekBg,
    seekBar,
    track, settrack: setTrackAndPlay,
    playStatus, setPlayStatus,
    time, setTime,
    Play, pause,
    playWithId,
    previous,next,
    seekSong
  };

  return (
    <PlayerContext.Provider value={ContextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextprovider;
