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
import { GiSkills } from "react-icons/gi"

const skills = [
  {
    id: 1,
    src: html,
    title: "HTML",
  }, {
    id: 2,
    src: css,
    title: "CSS",
  }, {
    id: 3,
    src: js,
    title: "JsScript",
  }, {
    id: 4,
    src: tailwind,
    title: "TailWind",
  }, {
    id: 5,
    src: react,
    title: "ReactJS",
  }, {
    id: 6,
    src: node,
    title: "Node",
  }, {
    id: 7,
    src: flutter,
    title: "Flutter",
  }, {
    id: 8,
    src: csharp,
    title: "C#",
  }, {
    id: 9,
    src: java,
    title: "Java",
  }, {
    id: 10,
    src: springboot,
    title: "Spring",
  }, {
    id: 11,
    src: sql,
    title: "SQL",
  }, {
    id: 12,
    src: github,
    title: "GitHub",
  },
]

const Experience = () => {
  return (
    <div
      name="experience"
      className="md:h-screen flex flex-col justify-center max-md:pt-[70px]"
    >
      <div>
        <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
          data-aos-offset="0"
          className="bg-[#F4F6F8] dark:bg-[#161B22] p-4 rounded-t-2xl mb-3">
          <div className="flex items-center rounded-2xl py-3 bg-[#e9ecf3] dark:bg-[#1f252c] ">
            <GiSkills size={30} className="mx-3" />
            <p className="text-xl font-extrabold w-fit ">Experience</p>
          </div>
          <p className="text-lg indent-7 p-3 pb-0">
            These are the technologies that I have worked with.
          </p>
        </div>
        <div data-aos="fade-right"
          className="grid grid-cols-3 gap-4 md:grid-cols-7">
          {
            skills.map(({ id, src, title }) => (
              <div
                key={id}
                className={`bg-[#F4F6F8] dark:bg-[#161B22] rounded-2xl p-5 text-center`}>
                <img src={src} alt="html.png" />
                <p className="mt-2">{title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
export default Experience;
