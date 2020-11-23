import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer page-footer font-small seattleImg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-8 col-sm-4 py-3">

     
            <hr />
            <div className="footer-copyright py-3 footerContent">
                       <h4>Email me: CassandraChamberlain@ymail.com</h4>
             <h4> © 2020 Created By: Cassandra Chamberlain</h4>
              <hr/>
     
            </div>
                   <a
              href="https://www.linkedin.com/in/cassandra-chamberlain-875794166/"
              className="li-ic"
            >
              <h4><i className="fab fa-linkedin-in fa-lg white-text fa-2x"> </i></h4>
            </a>
          </div>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;
