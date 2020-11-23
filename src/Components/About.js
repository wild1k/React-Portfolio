import React from "react";
import "./About.css";
import portfolioPic from "../utils/portfoliopic.JPG";

export default function About(){
    return(
<section className="container">
        <div className="row">
          <div className="col-sm col-md col-lg d-flex justify-content-center">
            <img
              src={portfolioPic}
              alt="professional"
              height="100"
              width="100"
              className="img-fluid rounded imgPro"
            />
          </div>

          <div className="col-sm col-md col-lg">
            <p>
              Recent graduate from the University of Washington's Full-Stack Web
              Application BootCamp.
            </p>

            <ul>
              <li>React</li>
              <li>KanBan Boards</li>
              <li>Git</li>
              <li>MongoDB</li>
              <li>Handlebars</li>
              <li>API</li>
              <li>Sequelize</li>
              <li>Express</li>
              <li>mySQL</li>
              <li>Node</li>
              <li>JQuery</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>

            <p>
              2020 Full-Stack Web developer: University of Washington <br />{" "}
              2006 Bachelor of Science Degree: Missouri State University <br />{" "}
              2004 Associate of Arts Degree: Longview Community College{" "}
            </p>
          </div>
        </div>
      </section>

    )
}