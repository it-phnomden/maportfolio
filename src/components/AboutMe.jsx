import React from "react";
import { IoIosContact } from "react-icons/io"

const AboutMe = () => {
  return (
    <div
      name="about me"
      className="md:h-screen flex flex-col justify-center max-md:pt-[70px]"
    >
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
        data-aos-offset="0"
        className="bg-[#F4F6F8] dark:bg-[#161B22] p-4 rounded-2xl">
        <div className="flex items-center rounded-2xl py-3 bg-[#e9ecf3] dark:bg-[#1f252c] ">
          <IoIosContact size={30} className="mx-3" />
          <p className="text-xl font-extrabold w-fit ">About Me</p>
        </div>
        <p className="text-lg indent-7 p-3 pb-0">
          I'm a software engineer with three years of experience in
          developing and maintaining software applications. I have experience in
          designing and implementing software solutions for various clients and
          projects. I'm proficient in programming languages such as Java, C#,
          PHP, Dart, Swift Tyepscript and Javascript. I graduated from Royal University of Phnom Penh
          with a degree in Computer Science and have been working as a Software
          Engineer at Mobile C&C Cambodia Company since June 2020.
        </p>
      </div>
    </div>
  );
};
export default AboutMe;
