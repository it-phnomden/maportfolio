import React from "react";
import calculator from "../assets/portfolio/calculator.png";
import portfolio from "../assets/portfolio/portfolio.png";

const projects = [
  {
    id: 1,
    imgSrc: calculator,
    demoLink: 'https://pisethseam.github.io/easy-calculate/',
    sourceLink: 'https://github.com/PiSethSeam/easy-calculate'
  }, {
    id: 2,
    imgSrc: portfolio,
    demoLink: 'https://pisethseam.github.io/maportfolio/',
    sourceLink: 'https://github.com/PiSethSeam/maportfolio'
  }
]

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="md:h-screen flex flex-col justify-center max-md:pt-[70px]"
    >
      <div data-aos="zoom-in-up">
        <p className="text-xl font-extrabold w-fit border-b-2 mb-2">
          Portfolio
        </p>
        <p className="indent-7">
          Here are some projects that have done before. If you want to see
          the source code and how it works you can check them out below.
        </p>
        <div className="flex flex-wrap justify-evenly space-x-2">
          {
            projects.map(({ id, imgSrc, demoLink, sourceLink }) => (
              <div key={id}
                className="flex flex-col max-sm:w-[45%] w-[20%] p-5 
                rounded-3xl mt-5 bg-[#F4F6F8] dark:bg-[#161B22]"
              >
                <img src={imgSrc} alt="Calculator.png" />
                <div className="flex justify-evenly" id="check-out">
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href={sourceLink} target="_blank" rel="noopener noreferrer">Code</a>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
