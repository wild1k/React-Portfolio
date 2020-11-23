import React from "react";
import "./home.css";
import About from "../Components/About";
import Projects from "../Pages/Projects";

import "./home.css";

const Home = () => {
  return (

      <div className="aboutSection">
    <div className="homeBackImg">

     <About/>

          <Projects />
          </div>
   
    </div>

  );
};

export default Home;
