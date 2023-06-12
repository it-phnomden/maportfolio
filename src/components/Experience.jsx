import React from "react";
import html from "../assets/experiences/html.png"
import css from "../assets/experiences/css.png"
import js from "../assets/experiences/javascript.png"
import tailwind from "../assets/experiences/tailwind.png"
import react from "../assets/experiences/react.png"
import node from "../assets/experiences/node.png"
import flutter from "../assets/experiences/flutter.png"
import csharp from "../assets/experiences/csharp.png"
import java from "../assets/experiences/java.png"
import springboot from "../assets/experiences/spring-boot.png"
import sql from "../assets/experiences/sql.png"
import github from "../assets/experiences/github.png"

const skills = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-[#E95626]"
  }, {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-[#0277BD]"
  }, {
    id: 3,
    src: js,
    title: "JsScript",
    style: "shadow-[#FFD600]"
  }, {
    id: 4,
    src: tailwind,
    title: "TailWind",
    style: "shadow-[#44A8B3]"
  }, {
    id: 5,
    src: react,
    title: "ReactJS",
    style: "shadow-[#00D7FE]"
  }, {
    id: 6,
    src: node,
    title: "Node",
    style: "shadow-[#8BC74A]"
  }, {
    id: 7,
    src: flutter,
    title: "Flutter",
    style: "shadow-[#40C4FF]"
  }, {
    id: 8,
    src: csharp,
    title: "C#",
    style: "shadow-[#505D67]"
  }, {
    id: 9,
    src: java,
    title: "Java",
    style: "shadow-[#4651EA]"
  }, {
    id: 10,
    src: springboot,
    title: "Spring",
    style: "shadow-[#8BC34A]"
  }, {
    id: 11,
    src: sql,
    title: "SQL",
    style: "shadow-[#0072C6]"
  }, {
    id: 12,
    src: github,
    title: "GitHub",
    style: "shadow-[#EEEEEE]"
  },
]

const Experience = () => {
  return (
    <div
      name="experience"
      className="md:h-screen flex flex-col justify-center max-md:pt-[70px]"
    >
      <div data-aos="zoom-in-up">
        <p className="text-xl font-extrabold w-fit border-b-2 mb-2">Experience</p>
        <p className="indent-7">These are the technologies that I have worked with.</p>
        <div className="w-full flex justify-evenly flex-wrap">
          {
            skills.map(({id, src, title, style}) => (
              <div 
              key={id}
              className={`flex flex-col max-sm:w-[40%] max-sm:h-[35%] w-[22%] max-sm:p-8 p-10
               mt-5 rounded-2xl items-center shadow-md ${style}`}>
                <img src={src} alt="html.png"/>
                <p>{title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
export default Experience;
