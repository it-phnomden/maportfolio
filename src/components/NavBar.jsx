import React, { useEffect, useState } from "react";
import {BsMoonStarsFill } from "react-icons/bs";
import {BsFillSunFill} from "react-icons/bs";
import Hamburger from "./Hamberger";

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

const darkTheme ='text-white bg-[rgb(24,27,33)]';
const lightTheme ='text-black bg-[rgb(248,249,250)]';

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
        <div className={`w-screen h-[50px] px-5 ${themeMode} flex justify-between items-center fixed`}>
            <h1 className="font-signature font-bold text-2xl py-2 cursor-pointer transform duration-300  hover:tracking-widest">PiSeth</h1>
           
            <div className="rounded-full flex absolute top-2 left-[calc(50%-41px)] bg-[rgb(255,255,255)]  dark:bg-[rgb(43,47,66)]">
                <div 
                    onClick={()=> {
                        setDarkMode(false)
                        setThemeMode(lightTheme);
                    }}
                    className={`px-3 py-2 cursor-pointer rounded-l-full ${darkMode?'opacity-50':'opacity-100'} hover:opacity-20`}>
                        <BsFillSunFill size={17} />
                </div>
                <div 
                    onClick={()=> {
                        setDarkMode(true);
                        setThemeMode(darkTheme);
                    }} 
                    className={`px-3 py-2 cursor-pointer rounded-r-full ${darkMode?'opacity-100':'opacity-50'} hover:opacity-20`}>
                    
                    <BsMoonStarsFill size={17} />
                </div>
            </div>

            <ul className={`hidden md:flex space-x-4`}>
                { links.map( ({id, link}) => (
                    <li 
                        key={id}
                        className={`px-5 py-2 cursor-pointer capitalize rounded-l duration-100 active:scale-110 hover:opacity-70`}
                        >{link}
                    </li>
                ))
                }
            </ul>

             <div className="cursor-pointer hidden max-md:flex z-20 hover:opacity-50"
                  onClick={()=> setNav(!nav)} >
                <Hamburger bgColor='bg-black dark:bg-white' isOpen={nav} />
            </div>
           
            <ul className={`${themeMode} flex flex-col absolute right-0 top-0 w-full h-screen justify-center items-center
              z-10 transition ease-in-out duration-500 ${nav?'translate-y-[0vh]':'-translate-y-[100vh]'}`} >
            { links.map( ({id, link}) => (
                <li 
                    key={id}
                    className={`px-5 py-5 cursor-pointer capitalize text-2xl rounded-l duration-100 active:scale-110 hover:opacity-70`}
                    >{link}
                </li>
            ))
            }
            </ul>
           
        </div>

    </>)
}
export default NavBar;