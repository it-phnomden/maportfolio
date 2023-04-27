import React, { useEffect, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Hamburger from "./Hamberger";

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
      className={`w-screen bg-slate-50 dark:bg-slate-950 h-[60px] px-3 md:px-7 flex justify-between items-center fixed z-10`}
    >
      <h1 className="font-signature font-extrabold text-2xl mt-[10px] select-none cursor-pointer transform duration-100  active:tracking-widest">
        <Link to="home" smooth duration={500}>
          PiSeth
        </Link>
      </h1>

      <div className="rounded-full flex max-md:absolute lg:absolute select-none left-[calc(50%-41px)] bg-slate-200  dark:bg-slate-900">
        <div
          onClick={() => {
            setDarkMode(false);
            document.querySelector("meta[name='theme-color']").content = "#F8FAFC";
          }}
          className={`py-[10px] px-4 cursor-pointer rounded-l-full ${
            darkMode ? "opacity-50" : "opacity-100"
          }`}
        >
          <BsFillSunFill className="active:scale-110" size={18} />
        </div>
        <div
          onClick={() => {
            setDarkMode(true);
            document.querySelector("meta[name='theme-color']").content = "#020617";
          }}
          className={`py-[10px] px-4 cursor-pointer rounded-r-full ${
            darkMode ? "opacity-100" : "opacity-50"
          }`}
        >
          <BsMoonStarsFill className="active:scale-110" size={18} />
        </div>
      </div>

      <ul className={`hidden md:flex space-x-4`}>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`px-1 xl:px-4 py-2 cursor-pointer capitalize rounded-l duration-100 active:scale-110 hover:opacity-70 max-md:hover:opacity-100`}
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="cursor-pointer hidden max-md:flex z-20"
        onClick={openNave}
      >
        <Hamburger bgColor="bg-black dark:bg-white" isOpen={nav} />
      </div>

      <ul
        className={`bg-inherit flex flex-col fixed right-0 top-0 w-screen h-screen justify-center items-center
               transform ease-in-out duration-300 ${
                 nav ? "translate-y-[0vh]" : "-translate-y-[100vh]"
               }`}
      >
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`px-5 py-5 cursor-pointer capitalize text-2xl rounded-l duration-100 active:scale-110`}
          >
            <Link to={link} onClick={openNave} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NavBar;
