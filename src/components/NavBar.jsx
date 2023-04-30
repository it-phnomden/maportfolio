import React, { useEffect, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Hamburger from "./Hamberger";
import { LazyLoadImage } from "react-lazy-load-image-component";
import profile from "./../assets/profile.png";

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
      className={`w-screen bg-slate-200 dark:bg-[rgb(22,27,34)] h-[60px] px-3 md:px-7 flex justify-between items-center fixed z-10`}
    >
      <h1 className="font-signature font-extrabold text-2xl mt-[10px] select-none cursor-pointer transform duration-100 active:tracking-widest">
        <Link to="home" smooth duration={500}>
          PiSeth
        </Link>
      </h1>

      <div className="rounded-full flex max-md:absolute lg:absolute select-none left-[calc(50%-41px)] bg-slate-300  dark:bg-slate-800">
        <div
          onClick={() => {
            setDarkMode(false);
            document.querySelector("meta[name='theme-color']").content =
              "#E2E8F0";
          }}
          className={`py-[10px] px-4 cursor-pointer rounded-l-full active:scale-150 transform duration-100 ${
            darkMode ? "opacity-50" : "opacity-100"
          }`}
        >
          <BsFillSunFill size={18} />
        </div>
        <div
          onClick={() => {
            setDarkMode(true);
            document.querySelector("meta[name='theme-color']").content =
              "#161B22";
          }}
          className={`py-[10px] px-4 cursor-pointer rounded-r-full active:scale-150 transform duration-100 ${
            darkMode ? "opacity-100" : "opacity-50"
          }`}
        >
          <BsMoonStarsFill size={18} />
        </div>
      </div>

      <ul className={`hidden md:flex space-x-4`}>
        {links.map(({ id, link }) => (
          <Link to={link} smooth duration={500}>
            <li
              key={id}
              className={`px-1 xl:px-4 py-2 cursor-pointer capitalize rounded-l duration-300 active:scale-110 md:hover:opacity-70`}
            >
              {link}
            </li>
          </Link>
        ))}
      </ul>

      <div className="hidden max-md:flex items-center">
        <LazyLoadImage
          className="h-[40px]  rounded-[100%] mx-2 p-[2px] bg-slate-300  dark:bg-slate-800 border-[2px] dark:border-slate-500 border-slate-400"
          src={profile}
          alt="My Profile"
        />
        <div onClick={openNave}>
          <Hamburger bgColor="bg-black dark:bg-white z-20" isOpen={nav} />
        </div>
      </div>

      <ul
        className={`bg-inherit flex flex-col fixed right-0 top-0 w-screen h-screen justify-center items-center
               transform ease-in-out duration-500 ${
                 nav ? "translate-y-[0vh]" : "-translate-y-[100vh]"
               }`}
      >
        {links.map(({ id, link }) => (
          <Link to={link} onClick={openNave} smooth duration={500}>
            <li
              key={id}
              className={`px-5 py-5 cursor-pointer capitalize text-2xl rounded-l duration-100 active:scale-110`}
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
