import React from "react";
import "./About.css";
import portfolioPic from "../utils/portfoliopic.JPG";

export default function About(){

    return(
<section className="container mobile-responsive">
        <div className="row">
          <div className="col-sm col-md col-lg">
            <div className="row">
            <p><em>
             Welcome to my Portfolio, I have personalized my website by incorporating a few fun interests about myself throughout my page.  Make sure to look around to catch them all!
            </em></p>
          <hr/>
            <p>
              Educational background: <hr/>
              2020 Full-Stack Web developer: University of Washington <br />{" "}
            </p>
            <hr/>
            <p><em>Checkout my coding projects below to see what I have created.</em></p>
            <p><em> Also, don't forget to check me out on my social Media Accounts and more importantly connect! I am always up for making a new connection!</em></p>
            </div>
          </div>
          <div className="col-sm col-md col-lg d-flex justify-content-center">
            <img
              src={portfolioPic}
              alt="professional"
              height="200"
              width="150"
              className="img-fluid rounded imgPro"
            />
          </div>
        </div>
      </section>

    )
}