import React from "react";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

const App = () => {
    return<div className="w-screenh-screen bg-white dark:bg-[rgb(13,17,23)] overflow-x-hidden">
        <NavBar />
        <Home />
        <AboutMe />
        <Portfolio />
        <Experience />
        <Contact />
    </div>
}
export default App;