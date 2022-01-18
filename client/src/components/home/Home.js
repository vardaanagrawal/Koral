import './home.css';
import React from "react";
import wlcmspin from '../images/wlcmspin.png';
import wlcmzigzag2 from '../images/wlcmzigzag2.png';
import wlcmzigzag from '../images/wlcmzigzag.png';
import girl from '../images/girl1.png';

export default function Home() {
  return (
    <div id="home">
      <div id="s1">
        <div id="spinner1" className="spin"></div>
      </div>
      <div id="s2">
        <img src={wlcmspin} className="spin"></img>
      </div>
      <div id="s3">
        <div id="spinner3" className="spin"></div>
      </div>
      <div id="s4">
        <div id="spinner4" className="spin"></div>
      </div>
      <div id="s5">
        <div id="spinner5" className="spin"></div>
      </div>
      <div id="s6">
        <img src={wlcmspin} className="spin"></img>
      </div>
      <div id="s7">
        <img src={wlcmzigzag2} className="spin"></img>
      </div>
      <div id="arrow">
        <a href="#about">&#8595;</a>
      </div>
      <div id="hellobox">
        <div id="hb-inner1">
          <span id="hbi1span1">hello</span>
          <span id="hbi1span2">.</span>
        </div>
        <div id="hb-inner2">
          We're Koral an award winning
          <br /> design agncy <u>from Portugal.</u>
        </div>
        <div style={{ marginTop: "5vh" }}>
          <img style={{ width: "50px" }} src={wlcmzigzag}></img>
        </div>
      </div>
      <img className="imgbox" src={girl}></img>
    </div>
  );
}
