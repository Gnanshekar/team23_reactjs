import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";
 
export const PlayerContext = createContext();


const PlayerContextprovider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, settrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time,setTime] = useState({
        currentTime: {
            second: 0,
            minutes: 0
        },
        totalTime: {
            second: 0,
            minutes: 0
        }
    })

    const Play = () => {
        audioRef.current.Play();
        setPlayStatus(true)
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false)
    }

    const ContextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,settrack,
        playStatus,setPlayStatus,
        time,setTime,
        Play,pause
    }

    return (
        <PlayerContext.Provider value={ContextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextprovider;