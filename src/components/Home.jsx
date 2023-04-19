import React from "react";
import HeroImage from "./../assets/HeroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div name="home" className="md:h-screen w-full">
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
          <div className="flex flex-col max-md:mt-[80px] text-black dark:text-white">
            <div className="text-3xl md:text-6xl mb-2">
              <p className="text-2xl md:text-3xl">Hi, I'm <b>PiSeth</b></p>
              <p className="dark:t-g font-extrabold py-1 md:py-2">A Software Engineer</p>
            </div>
            <p>
              I have 3 years of experience building and desgining core banking system using Java and Spring framework.
              Currently, I love to work on web and mobile application using technologies
              like ReactJs, TailwindCSS, NodeJs, Flutter.
            </p>
            <div>
              <Link 
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img
              className="md:w-2/3 mx-auto rounded-2xl"
              src={HeroImage}
              alt="My Profile"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
