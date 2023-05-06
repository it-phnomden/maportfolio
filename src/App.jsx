import React, { useEffect, Suspense  } from "react";
import NavBar from "./components/NavBar";
// import Home from "./components/Home";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({duration:1000});
    AOS.refresh();
  }, []);
  const Home = React.lazy(() => import('./components/Home'));
  return (
    <div>
      <NavBar />
      <div className="max-w-screen-lg mx-auto px-5">
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
        <AboutMe />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
        <Footer />
    </div>
  );
};
export default App;
