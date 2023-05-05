import React from "react";
import { FaRegSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";

const ToggleSwitch = (props) => {
  return (
    <div className="bg-slate-300  dark:bg-slate-700 w-[105px] p-3 rounded-full flex justify-between items-center cursor-pointer">
      <div
        className={`w-fit p-5 flex justify-center items-center rounded-full
        duration-300 transition-transform ease-linear absolute left-1 ${props.dark ? "bg-slate-800 translate-x-14" : "bg-slate-200 translate-x-0"}`}
      ></div>
      <FaRegSun size={25} className="z-10" />
      <BsFillMoonStarsFill size={25} className="z-10" />
    </div>
  );
};

export default ToggleSwitch;
