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
  return (
    <div
      className={`shadow-sm shadow-slate-100 w-screen dark:shadow-slate-900 h-[60px] px-3 flex justify-between items-center fixed backdrop-blur-[100px]`}
    >
      <h1 className="font-signature font-extrabold text-2xl mt-[10px] select-none cursor-pointer transform duration-100  active:tracking-widest">
        PiSeth
      </h1>

      <div className="rounded-full flex max-md:absolute lg:absolute select-none left-[calc(50%-41px)] bg-slate-100  dark:bg-slate-900">
        <div
          onClick={() => {
            setDarkMode(false);
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
        onClick={() => setNav(!nav)}
      >
        <Hamburger bgColor="bg-black dark:bg-white" isOpen={nav} />
      </div>

      <ul
        className={`light-mode dark:dark-mode flex flex-col absolute right-0 top-0 w-full h-screen justify-center items-center
              z-100 transition ease-in-out duration-300 ${
                nav ? "translate-y-[0vh]" : "-translate-y-[100vh]"
              }`}
      >
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`px-5 py-5 cursor-pointer capitalize text-2xl rounded-l duration-100 active:scale-110`}
          >
            <Link to={link} onClick={() => setNav(!nav)} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NavBar;
