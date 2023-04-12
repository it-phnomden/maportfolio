import React, { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {color, motion} from "framer-motion"

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

const NavBar = () => {
    const [nav, setNav] = useState(false);
    return( 
    <>
        <div className="w-screen h-[40px] px-5 text-white bg-[rgb(24,27,33)] flex justify-between items-center">
            <h1 className="font-bold py-2">PiSeth</h1>
            <ul className="hidden md:flex space-x-4">
                { links.map( ({id, link}) => (
                    <motion.li 
                    key={id}
                    className="px-5 py-2 cursor-pointer capitalize rounded-l duration-200"
                    whileHover={{ scale: 1.1}} whileTap={{ scale: 0.8 }}
                    >{link}</motion.li>
                ))
                }
            </ul>
        </div>
        <div
        onClick={()=> setNav(!nav)}
        >
            {nav? <FaTimes />: <FaBars />}
        </div>
    </>)
}
export default NavBar;