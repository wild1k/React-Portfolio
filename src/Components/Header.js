import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="jumbotron jumbotron-fluid header nightSkyImg">
    
        <div className="container">
          <h1 className="display-4">Cassandra Chamberlain's Portfolio</h1>
          <h2>Web Developer Extraordinaire</h2>
       
            <a
              className="btn btnColor"
              href="https://www.linkedin.com/in/cassandra-chamberlain-875794166/"
            >
              <i className="fab fa-linkedin nav-link"></i>
            </a>
            <a className="btn btnColor" href="https://github.com/wild1k">
              <i className="fab fa-github nav-link"></i>
            </a>
            <a
              className="btn btnColor"
              href="https://docs.google.com/document/d/1A769j-yg7Qc5zOAEeaTVMbS-6k-Qk3li85m4nYn-5p4/edit?usp=sharing"
            >
              <i className="fab fa-file-text nav-link" aria-hidden="true">Resume</i>
            </a>
            <a
              className="btn btnColor"
              href="mailto: cssndrchmbrln25@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-file-text nav-link" aria-hidden="true">Contact</i>
            </a>
        
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link to="/Projects">
                <li className="nav-link">Projects</li>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/">
                <li className="nav-link">Home</li>
              </Link>
            </li>
          </ul>
        </div>
    
    </header>
  );
};

export default Header;
