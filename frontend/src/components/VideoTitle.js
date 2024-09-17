import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

const VideoTitle = ( {overview , title}) => {
  return (
    <div className=" w-[vw] aspect-video absolute  text-white pt-[18%] p-12">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="w-1/3 mt-4">
       {overview}
      </p>
      <div className="mt-8 flex items-center">
        <button className=" flex items-center m-2 px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80">


        <FaCirclePlay  size={28} />
       <span className="ml-1">Play</span> 
        </button>
        <button className="flex items-center px-6 py-2 bg-gray-500 bg-opacity-50 text-black rounded-md">

        <FaInfoCircle size={28} />
        
        <span className="ml-1">Watch more</span> 
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
