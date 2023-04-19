import React from "react";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

const App = () => {
    return(
    <div className="w-screen light-mode dark:dark-mode">
        <NavBar />
        <Home />
        <AboutMe />
        <Portfolio />
        <Experience />
        <Contact />
    </div>)
}
export default App;