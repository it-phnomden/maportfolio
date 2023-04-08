import React from "react";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

const App = () => {
    return<>
        <NavBar />
        <Home />
        <AboutMe />
        <Experience />
        <Contact />
    </>
}
export default App;