import React, { useContext } from "react";
import Sidebar from "./context/Sidebar";
import Player from "./conponents/Players";
import Display from "./conponents/Display";
import { PlayerContext } from "./conponents/PlayerContext";

const App = () => {

  const {audioRef,track} = useContext(PlayerContext)
  return (
    <div className="h-screen bg-black">
      <div className="h-[90] flex">
        <Sidebar />
        <Display />
      </div>
      <div>
        <Player />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </div>
  );
};

export default App;
