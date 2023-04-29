import React from "react";
import { BsGithub, BsTelegram, BsYoutube, BsSkype, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-slate-200 dark:bg-[rgb(22,27,34)] dark:text-[#A3B3BC] 
    py-4 text-slate-00 flex flex-col md:flex-row mt-[70px]">
      <div className="flex justify-center w-full max-md:pb-4">
        <a href="https://github.com/PiSethSeam" target="_blank" rel="noopener noreferrer">
          <BsGithub size={25} />
        </a>
        <a href="https://youtube.com/@pisethseam7746" target="_blank" rel="noopener noreferrer">
          <BsYoutube size={25} />
        </a>
        <a href="https://t.me/PiSethSeam" target="_blank" rel="noopener noreferrer">
          <BsTelegram size={25} />
        </a>
        <a href="https://join.skype.com/invite/VueXnSZyMpar" target="_blank" rel="noopener noreferrer">
          <BsSkype size={25} />
        </a>
        <a href="https://www.linkedin.com/in/piseth-seam-a74264178/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin size={25} />
        </a>
      </div>
      <div className="w-full flex justify-center items-center">
        <p class="">
          Copyright © 2023 <b>PiSeth</b> | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
