import React from "react";
import {IoIosContact} from "react-icons/io"

const AboutMe = () => {
  return (
    <div
      name="about me"
      className="md:h-screen flex flex-col justify-center max-md:pt-[70px]"
    >
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
        data-aos-offset="0">
        <div className="flex items-center space-x-2 rounded-lg mb-2 py-3 px-1 bg-[#F4F6F8] dark:bg-[#161B22]">
          <IoIosContact size={30} />
          <p className="text-xl font-extrabold w-fit ">About Me</p>
        </div>


        <p className="indent-7">
          Hi there! I'm a software engineer with three years of experience in
          developing and maintaining software applications. I have experience in
          designing and implementing software solutions for various clients and
          projects. I'm proficient in programming languages such as Java,
          Javascript and C/C++. I graduated from Royal University of Phnom Penh
          with a degree in Computer Science and have been working as a Software
          Engineer at Mobile C&C Cambodia Company since June 2020.
        </p>
      </div>
    </div>
  );
};
export default AboutMe;
