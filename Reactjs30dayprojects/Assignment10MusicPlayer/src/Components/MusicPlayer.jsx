import React, { useState, useRef, useEffect } from 'react';
import '../App.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handleMetadataLoaded = () => {
      if (audio) {
        progressRef.current.max = audio.duration;
      }
    };

    const handleTimeUpdate = () => {
      if (audio) {
        setProgress(audio.currentTime);
      }
    };

    audio.addEventListener('loadedmetadata', handleMetadataLoaded);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('loadedmetadata', handleMetadataLoaded);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const playPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = () => {
    const audio = audioRef.current;
    audio.currentTime = progressRef.current.value;
    setProgress(audio.currentTime);
    if (!isPlaying) {
      playPause(); 
    }
  };

  return (
    <div className="container">
      <div className="music-player">

        <nav>
          <div className="circle"><i className="fa-solid fa-angle-left"></i></div>
          <div className="circle"><i className="fa-solid fa-bars"></i></div>
        </nav>

        <img src="./hamuman.png" className="song-img" alt="Album Art" />

        <h1>Despacito</h1>

        <p>Samskrutha SlokaMusic - Dr.Jayashree AravindSinger - Sriraksha Priyaram.</p>

        <audio ref={audioRef}><source src="./Sri Ramadootha Stotram.mp3" /></audio>

        <input type="range" value={progress} onChange={handleProgressChange} ref={progressRef}id="progress"/>

        <div className="control">
          <div><i className="fa-solid fa-backward"></i></div>

          <div onClick={playPause}>
            <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`} id="ctrlIcon"></i>
          </div>

          <div><i className="fa-solid fa-forward"></i></div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;

// * {
//   margin: 0;
//   padding: 0;
//   font-family: 'Poppins', sans-serif;
//   box-sizing: border-box;
// }

// .container {
//   width: 100%;
//   height: 100vh;
//   background: #333;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-wrap: wrap;
// }

// .music-player {
//   background: #ffe0e5;
//   width: 400px;
//   padding: 25px 35px;
//   text-align: center;
// }

// nav {
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 30px;
// }

// nav .circle {
//   border-radius: 50%;
//   width: 40px;
//   height: 40px;
//   line-height: 40px;
//   background: #fff;
//   color: 0 5px 10px rgba(255, 26, 26, 0.22);
// }

// .song-img {
//   width: 220px;
//   border-radius: 50%;
//   border: 8px solid #fff;
//   box-shadow: 0 10px 60px rgba(255, 26, 26, 0.22);
// }

// .music-player p {
//   font-size: 14px;
//   color: #333;
// }

// #progress {
//   -webkit-appearance: none;
//   width: 100%;
//   height: 6px;
//   background: #f53192;
//   border-radius: 4px;
//   cursor: pointer;
//   margin: 40px 0;
// }

// #progress::-webkit-slider-thumb {
//   -webkit-appearance: none;
//   background: #f53192;
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
//   border: 8px solid #fff;
//   box-shadow: 0 5px 5px rgba(255, 26, 26, 0.22);
// }

// .control {
//   display: flex;
//   justify-self: center;
//   align-items: center;
// }

// .control div {
//   width: 60px;
//   height: 60px;
//   margin: 20px;
//   background: #fff;
//   display: inline-flex;
//   align-items: center;
//   border-radius: 50%;
//   color: #f53192;
//   box-shadow: 0 10px 20px rgba(255, 26, 26, 0.22);
//   cursor: pointer;
//   justify-content: center;
// }

// .control div:nth-child(2) {
//   transform: scale(1.5);
//   background: #f53192;
//   color: #fff;
// }



