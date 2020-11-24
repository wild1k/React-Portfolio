import React from "react";
import Wavel from "../utils/ProjectsImages/wavel.png";
import quizPic from "../utils/ProjectsImages/quizPic.png";
import pure2 from "../utils/ProjectsImages/pure2.png";
import "./projects.css";

const Projects = () => {
  return (
    <>
      <div className="mobile-responsive container">
        <h1>My Work</h1>

        <div className="row">
          <div className="col-md col-sm d-flex justify-content-center projCont">
            <img
              src={Wavel}
              alt="Travel project"
              height="300"
              width="350"
              className="imgSize my-5 img-thumbnail imgCode"
            />
            <a href="https://wild1k.github.io/Wavel-/" target="#blank">
              <button className="projBtn">Deployed Link</button>
            </a>
            <a href="https://github.com/wild1k/Wavel-" target="#blank">
              <button className="projBtn2">Code on Github</button>
            </a>
          </div>
          <div className="col-md col-sm d-flex justify-content-center projCont">
            <img
              src={pure2}
              alt="pure-cloud project"
              height="300"
              width="350"
              className="imgSize img-fluid my-5 img-thumbnail imgCode"
            />{" "}
            <a href="https://purecloudone.herokuapp.com/" target="#blank">
              <button class="projBtn">Deployed Link</button>
            </a>
            <a
              href="https://github.com/zackdeacon/Prime_Suspects"
              target="#blank"
            >
              <button class="projBtn2">Code on Github</button>
            </a>
          </div>

          <div className="col-md col-sm d-flex justify-content-center projCont">
            <img
              src={quizPic}
              alt="code quiz project"
              height="300"
              width="350"
              className="imgSize img-fluid my-5 img-thumbnail imgCode"
            />
            {""}
            <a
              href="https://wild1k.github.io/quiz-Api-s-Homework/"
              target="#blank"
            >
              <button className="projBtn">Deployed Link</button>
            </a>
            <a
              href="https://github.com/wild1k/quiz-Api-s-Homework"
              target="#blank"
            >
              <button class="projBtn2">Code on Github</button>
            </a>
          </div>
        </div>
      </div>
      <div className="emptyDiv">
        <br />
      </div>
    </>
  );
};

export default Projects;
