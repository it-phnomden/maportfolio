import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({duration:1000});
    AOS.refresh();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="max-w-screen-lg mx-auto px-3">
        <Home />
        <AboutMe />
        <Portfolio duration="700"/>
        <Experience />
        <Contact />
      </div>
    </div>
  );
};
export default App;
