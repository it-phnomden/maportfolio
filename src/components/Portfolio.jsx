import React from "react";
import calculator from "../assets/portfolio/calculator.png";
import portfolio from "../assets/portfolio/portfolio.png";
import khlakhlouk from "../assets/portfolio/khlakhlouk.png";
import dictionary from "../assets/portfolio/dictionary.png";
import music from "../assets/portfolio/music.png";
import horoscope from "../assets/portfolio/horoscope.png";

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
  }, {
    id: 3,
    imgSrc: khlakhlouk,
    demoLink: 'https://pisethseam.github.io/khlakhlouk/',
    sourceLink: 'https://github.com/PiSethSeam/khlakhlouk'
  }, {
    id: 4,
    imgSrc: dictionary,
    demoLink: 'https://pisethseam.github.io/dictionary/',
    sourceLink: 'https://github.com/PiSethSeam/dictionary'
  }, {
    id: 5,
    imgSrc: music,
    demoLink: 'https://pisethseam.github.io/music/',
    sourceLink: 'https://github.com/PiSethSeam/music'
  }, {
    id: 6,
    imgSrc: horoscope,
    demoLink: 'https://pisethseam.github.io/horoscopse/',
    sourceLink: 'https://github.com/PiSethSeam/horoscopse'
  }
]

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="md:h-screen flex flex-col justify-center max-md:pt-[70px]"
    >
      <div data-aos="fade-up">
        <p className="text-xl font-extrabold w-fit border-b-2 mb-2">
          Portfolio
        </p>
        <p className="indent-7 mb-5">
          Here are some projects that have done before. If you want to see
          the source code and how it works you can check them out below.
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {
            projects.map(({ id, imgSrc, demoLink, sourceLink }) => (
              <div key={id}
                className="rounded-2xl p-5 text-center bg-[#F4F6F8] dark:bg-[#161B22]"
              >
                <img src={imgSrc} alt="Calculator.png" />
                <div className="flex justify-evenly" id="check-out">
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">Live</a>
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
