import React, { useEffect, useState } from "react";
import {FaBars, FaTimes } from "react-icons/fa";
import {BsMoonStarsFill } from "react-icons/bs";
import {BsFillSunFill} from "react-icons/bs";

const links = [
    {
        id:1,
        link: 'home'
    }, 
    {
        id:2,
        link: 'about me'
    }, 
    {
        id:3,
        link: 'portfolio'
    }, 
    {
        id:4,
        link: 'experience'
    }, 
    {
        id:5,
        link: 'contact'
    }, 
    
]

const darkTheme ='text-white';
const lightTheme ='text-black';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [themeMode, setThemeMode] = useState(darkTheme);
    useEffect( () =>{
        if ( darkMode ) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
    }, [darkMode] );
    return( 
    <>
        <div className={`w-screen h-[50px] px-5 ${themeMode}  bg-[rgb(248,249,250)] dark:bg-[rgb(24,27,33)] flex justify-between items-center`}>
            <h1 className="font-bold py-2 cursor-pointer">PiSeth</h1>
           
            <div className="rounded-full flex absolute top-2 left-[calc(50%-41px)] bg-[rgb(255,255,255)]  dark:bg-[rgb(43,47,66)]">
                <div 
                    onClick={()=> {
                        setDarkMode(false)
                        setThemeMode(lightTheme);
                    }}
                    // className={`px-3 py-2 cursor-pointer rounded-l-full ${darkMode?'bg-[rgb(30,30,32)] text-black':'bg-[rgb(43,47,66)] text-white'}
                    className={`px-3 py-2 cursor-pointer rounded-l-full ${darkMode?'opacity-50':'opacity-100'} hover:opacity-20`}>
                        <BsFillSunFill size={17} />
                </div>
                <div 
                    onClick={()=> {
                        setDarkMode(true);
                        setThemeMode(darkTheme);
                    }} 
                    // className={`px-3 py-2 cursor-pointer rounded-r-full ${darkMode?'bg-[rgb(43,47,66)] text-white':'bg-[rgb(30,30,32)] text-black'}
                    className={`px-3 py-2 cursor-pointer rounded-r-full ${darkMode?'opacity-100':'opacity-50'} hover:opacity-20`}>
                    
                    <BsMoonStarsFill size={17} />
                </div>
            </div>

            <ul className={`hidden md:flex space-x-4`}>
                { links.map( ({id, link}) => (
                    <li 
                        key={id}
                        className={`${themeMode} px-5 py-2 cursor-pointer capitalize rounded-l duration-100 active:scale-110 hover:opacity-70`}
                        >{link}
                    </li>
                ))
                }
            </ul>
            
            <div
            onClick={()=> setNav(!nav)}
            className="cursor-pointer hidden max-sm:flex"
            >
                {nav? <FaTimes />: <FaBars />}
            </div>

        </div>

    </>)
}
export default NavBar;