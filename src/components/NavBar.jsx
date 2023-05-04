import React, { useEffect, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { RiArrowRightSFill } from "react-icons/ri";
import { Link } from "react-scroll";
import Hamburger from "./Hamberger";
import { LazyLoadImage } from "react-lazy-load-image-component";
import profile from "./../assets/profile.png";
import ToggleSwitch from "./ToggleSwitch";

const links = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "about me",
  },
  {
    id: 3,
    link: "portfolio",
  },
  {
    id: 4,
    link: "experience",
  },
  {
    id: 5,
    link: "contact",
  },
];

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  function openNave() {
    setNav(!nav);
    nav
      ? document.body.classList.remove("overflow-hidden", "touch-none")
      : document.body.classList.add("overflow-hidden", "touch-none");
  }

  return (
    <div
      className={`w-screen bg-slate-200 dark:bg-[rgb(22,27,34)] dark:text-white h-[60px] px-5 md:px-7 flex justify-between items-center fixed z-10`}
    >
      <Link to="home" smooth duration={500}>
        <h1 className="font-signature font-extrabold text-2xl mt-[10px] select-none cursor-pointer transform duration-100 active:tracking-widest">
          PiSeth
        </h1>
      </Link>

      <div className="max-md:absolute lg:absolute select-none left-[calc(50%-41px)]"
      onClick={()=> setDarkMode(!darkMode)}>
        <ToggleSwitch dark={darkMode} />
      </div>

      <ul className={`hidden md:flex space-x-4 xl:space-x-10`}>
        {links.map(({ id, link }) => (
          <Link to={link} smooth duration={500}>
            <li
              key={id}
              className={`cursor-pointer capitalize duration-300 active:scale-110 md:hover:opacity-70`}
            >
              {link}
            </li>
          </Link>
        ))}
      </ul>

      <div className="hidden max-md:flex items-center">
        <LazyLoadImage
          className="h-[35px] w-[35px] object-cover rounded-[100%] mx-5 p-[2px] bg-slate-300  dark:bg-slate-800 
          border-[2px] dark:border-slate-500 border-slate-400 animate-pulse"
          src={profile}
          alt="My Profile"
        />
        <div onClick={openNave}>
          <Hamburger bgColor="bg-black dark:bg-white z-20" isOpen={nav} />
        </div>
      </div>

      <ul
        className={`bg-inherit flex flex-col space-y-10 fixed right-0 top-0 w-screen h-screen justify-center items-center
               transform ease-in-out duration-500 ${
                 nav ? "translate-y-[0vh]" : "-translate-y-[100vh]"
               }`}
      >
        {links.map(({ id, link }) => (
          <Link to={link} onClick={openNave} smooth duration={500}>
            <li
              key={id}
              className={`cursor-pointer capitalize text-2xl duration-100 active:scale-110`}
            >
              {link}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default NavBar;
