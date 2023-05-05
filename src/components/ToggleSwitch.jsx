import React from "react";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

const ToggleSwitch = (props) => {
  return (
    <div className="relative w-20 bg-slate-300 dark:bg-slate-700 rounded-full p-[10px] flex justify-between items-center cursor-pointer">
      <FaSun size={18} className="z-10" />
      <BsFillMoonStarsFill size={18} className="z-10" />
      <div
        className={`bg-slate-200 dark:bg-slate-800 p-4 flex justify-center items-center rounded-full
        transform-gpu transition-transform duration-500 ease-in-out absolute left-[3px] ${
          props.dark ? "translate-x-[42px]" : ""
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
