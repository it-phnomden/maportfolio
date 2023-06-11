import React from "react";
import calculator from "../assets/portfolio/calculator.png";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="md:h-screen flex flex-col justify-center max-md:pt-[70px]"
    >
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <p className="text-xl font-extrabold w-fit border-b-2 mb-2">
          Portfolio
        </p>
        <p className="indent-7">
          Here are some projects that have done before. If you want to see
          the source code and how does it work you can check out them below.
        </p>
        <div
          className="w-60 rounded-3xl mt-5 bg-[#F4F6F8] dark:bg-[#282C34]
        p-3"
        >
          <img src={calculator} alt="Calculator.png" />
          <div className="flex justify-evenly">
            <a href="https://pisethseam.github.io/easy-calculate/">Demo</a>
            <a href="https://github.com/PiSethSeam/easy-calculate">Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
