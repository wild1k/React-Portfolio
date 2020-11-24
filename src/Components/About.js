import React from "react";
import "./About.css";
import portfolioPic from "../utils/portfoliopic.JPG";

export default function About() {
  return (
    <section className="container mobile-responsive">
      <div className="row">
        <div className="col-sm col-md col-lg">
          <div className="row block">
            <p>
              <em>
                Welcome to my Portfolio, I designed my website to incorporate
                images about my personality, interests, or fun facts about
                myself as you navigate my page. How many can YOU find?
              </em>
            </p>
            <p>
              <em>
                Below you can find just a small portion of my past work. Keep
                checking in to see more, as I am always coding up something new!
              </em>
            </p>

            <p>
              <em>
                {" "}
                Also, check me out on my social Media Accounts and more
                importantly connect! I am always up for making a new connection!
              </em>
            </p>
            <hr />
            <p>
              Educational background: <hr />
              2020 Full-Stack Web developer: University of Washington <br />{" "}
            </p>
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
  );
}
