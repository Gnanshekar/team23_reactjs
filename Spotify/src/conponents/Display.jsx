import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import Displayalbum from "./Displayalbum";
import { albumsData } from "../assets/assets";

const Display = () => {
  const Displayref = useRef();
  const Location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)].bgColor
  console.log(bgColor);
  
  useEffect(()=>{
    if (isAlbum) {
      Displayref.current.style.background = `linear-gradient(${bgColor},#121212)`
    }
    else {
      Displayref.current.style.background = `#121212`
    }
  }) 
  return (
    <div 
      ref={Displayref}
      className="w-[0%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />}></Route>
        <Route path="/album/:id" element={<Displayalbum />}></Route>
      </Routes>
    </div>
  );
};

export default Display;
