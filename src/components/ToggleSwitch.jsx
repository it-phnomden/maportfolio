import React from "react";
import { FaRegSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

const ToggleSwitch = (props) => {
  return (
    <div
      className="bg-slate-300  dark:bg-slate-700 w-[100px] p-[3px] rounded-full flex justify-between items-center cursor-pointer"
    >
      <div
        className={`bg-slate-400 dark:bg-slate-800 relative w-fit p-4 flex justify-center items-center rounded-full
        transform duration-500 ${props.dark?'translate-x-[63px] rotate-[360deg]':'translate-x-0'}`}
      >
        <FaRegSun size={18} className={`absolute ${props.dark?'opacity-0':'opacity-100'}`} />    
        <BsFillMoonStarsFill size={18} className={`absolute ${props.dark?'opacity-100':'opacity-0'}`}/>
        
      </div>
    </div>
  );
};

export default ToggleSwitch;
