import React from "react";
import HeroImage from "./../assets/HeroImage.png";
import phpiseth from "./../assets/piseth.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = () => {
  return (
    <div
      name="home"
      className="flex flex-col md:flex-row md:h-screen md:items-center max-md:pt-[80px]"
      data-aos="zoom-in"
    >
      <div className="flex flex-col text-black dark:text-white">
        <div className="text-4xl md:text-6xl mb-2">
          <p className="text-2xl md:text-3xl">
            Hi, I'm <b className="dark:t-g t-g2">PiSeth</b>
          </p>
          <p className="dark:t-g t-g2 font-extrabold tracking-tight py-1 md:py-2">
            A Software Engineer
          </p>
        </div>
        <p>
          I have 3 years of experience building and desgining core banking
          system using Java and Spring framework. Currently, I love to work on
          web and mobile application using technologies like ReactJs,
          TailwindCSS, NodeJs, Flutter. To know me more let's scroll down 😉
        </p>
        <div>
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            <span className="pl-3">Portfolio</span>
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <LazyLoadImage
          className="md:w-[800px] w-screen mx-auto rounded-2xl"
          src={HeroImage}
          placeholderSrc={phpiseth}
          alt="My Profile"
        />
      </div>
    </div>
  );
};
export default Home;
