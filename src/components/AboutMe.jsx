import React from "react";

const AboutMe = () => {
  return (
    <div
      name="about me"
      className="md:h-screen flex flex-col justify-center max-md:pt-[80px]"
    >
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <p className="text-xl font-extrabold w-fit border-b-2 mb-2">About Me</p>
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
