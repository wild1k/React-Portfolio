import React from "react";
import About from "../Components/About";
import Projects from "../Components/Projects";
import "./home.css";

const Home = () => {
  return (
    <div className="homeBackImg">
      <About />
      <Projects />
    </div>
  );
};

export default Home;
