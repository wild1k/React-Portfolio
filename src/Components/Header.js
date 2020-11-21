import React from "react";
import { Link } from "react-router-dom";
import seattle_img from "../utils/repImg/seattle_img.jpg";
// import profileBackGround from '../utils/profileBackGround.jpg';

const Header = () => {
  return (
    <header>
        
      <div className="jumbotron jumbotron-fluid header seattleImg">

        <div className="container ">
          <h1 className="display-4">Cassandra Chamberlain</h1>

          <div>
            <a
              className="btn btnColor"
              href="https://www.linkedin.com/in/cassandra-chamberlain-875794166/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a className="btn btnColor" href="https://github.com/wild1k">
              <i className="fab fa-github"></i>
            </a>
            <a
              className="btn btnColor"
              href="https://docs.google.com/document/d/1A769j-yg7Qc5zOAEeaTVMbS-6k-Qk3li85m4nYn-5p4/edit?usp=sharing"
            >
              <i className="fab fa-file-text" aria-hidden="true"></i>Resume
            </a>
            <a className="btn btnColor" href="mailto: cssndrchmbrln25@gmail.com" target="_blank" rel='noopener noreferrer'>
              <i className="fab fa-file-text" aria-hidden="true"></i>Contact
              </a>
          </div>

          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link to="/Projects">
                <li className="nav-link">Projects</li>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/">
                <li className="nav-link">Home</li>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
