import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer page-footer font-small seattleImg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-8 col-sm-4 py-3">

            <a
              href="https://www.linkedin.com/in/cassandra-chamberlain-875794166/"
              className="li-ic"
            >
              <h2><i className="fab fa-linkedin-in fa-lg white-text fa-2x"> </i></h2>
            </a>
            <hr />
            <div className="footer-copyright py-3 footerContent">
              © 2020 Created By: Cassandra Chamberlain
              <hr/>
              Email me: CassandraChamberlain@ymail.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
