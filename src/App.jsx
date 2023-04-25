import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <div className="con w-full light-mode dark:dark-mode">
      <NavBar />
      <div className="max-w-screen-lg mx-auto px-3">
        <Home />
        <AboutMe />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};
export default App;
