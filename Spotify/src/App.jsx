import React, { useContext } from "react";
import Sidebar from "./context/Sidebar";
import Display from "./conponents/Display";
import Player from "./conponents/Players";
import { PlayerContext } from "./conponents/PlayerContext";

const App = () => {
    const {audioRef,track} = useContext(PlayerContext)
    return (
        <div className="h-screen bg-black">
            <div className="h=[90%] flex">
                <Sidebar/>
                <Display/>
            </div>
            <Player/>
            <audio ref={audioRef} src={track.file} preload="auto"></audio>
        </div>
    )
}

export default App;