import React from "react";
import HeroImage from "./../assets/HeroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div name="home" className="h-screen w-full">
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
          <div className="flex flex-col text-black dark:text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-2">
              I am a Software Engineer
            </h2>
            <p>
              I have 3 years of experience building and desgining software.
              Currently, I love to work on web application using technologies
              like React, Tailwind, Next JS and GraphQL.
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
