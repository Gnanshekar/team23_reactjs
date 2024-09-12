import React, { useDebugValue } from "react";
import Navebar from "./Navbar";
import AllbumItems from "./Allbum";
import {albumsData} from "../assets/assets"
import {songsData} from "../assets/assets"
import SongItems from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navebar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Chart</h1>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        <div className="flex overflow-auto ">
        {albumsData.map((item,index) => (<AllbumItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today.s biggest hits</h1>
        <div className="flex overflow-auto ">
        {songsData.map((item,index) => (<SongItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
