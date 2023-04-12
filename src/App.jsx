import React from "react";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

const App = () => {
    return<div className="w-screen h-screen bg-[rgb(13,17,23)]">
        <NavBar />
        <Home />
        <AboutMe />
        <Experience />
        <Contact />
    </div>
}
export default App;