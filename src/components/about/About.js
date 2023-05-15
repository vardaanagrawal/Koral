import React from "react";
import "./about.css";

export default function About() {
  return (
    <div id="about">
      <div id="heading">
        <p id="power">Power up</p>
        <p id="yc">your creativity</p>
      </div>
      <div id="cplimg">
        <img alt="" src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142301/koral/abttopimg_psr4jd.jpg"></img>
      </div>
      <div className="our" id="our1">
        <div className="ournum">01</div>
        <div className="ourtxt">Our Agency</div>
      </div>
      <div className="our" id="our2">
        <div className="ournum">02</div>
        <div className="ourtxt">Our Values</div>
      </div>
      <div className="our" id="our3">
        <div className="ournum">03</div>
        <div className="ourtxt">Our Mission</div>
      </div>
      <div className="our" id="our4">
        <div className="ournum">04</div>
        <div className="ourtxt">Our Strategy</div>
      </div>
      <div id="desc">
        <h3>
          <b>We're Koral</b>
        </h3>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <button>GET KORAL</button>
      </div>
      <div id="chrimg">
        <img alt="" src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142301/koral/abt-btm-chair_jr7gwr.png"></img>
      </div>
    </div>
    
  );
}
