import React, { useState, useEffect } from "react";
import "./projects.css";
import pro1 from "../images/pro1.jpg";
import pro2 from "../images/pro2.jpg";
import pro3 from "../images/pro3.jpg";
import pro4 from "../images/pro4.jpg";
import pro5 from "../images/pro5.jpg";
import pro6 from "../images/pro6.jpg";
import pro7 from "../images/pro7.jpg";
import pro8 from "../images/pro8.jpg";
import pro9 from "../images/pro9.jpg";
import proimage from "../images/proimg.png";

export default function Projects() {
  useEffect(() => {
    const text = ["apps", "websites", "illustrations", "brands"];
    let count = 0;
    let index = 0;
    let currenttext = "";
    let letter = "";
    (async function type() {
      currenttext = text[count];
      letter = currenttext.slice(0, ++index);
      document.querySelector(".typing").textContent = letter;
      if (letter.length === currenttext.length) {
        if (count == 3) {
          count = 0;
        }  
        else{
          count++;
        }
        index = 0;
        setTimeout(type, 2000); 
      }else{
        setTimeout(type, 150);
      }
      
      
    })();
    return;
  }, []);
  return (
    <div className="projects">
      <div className="proheadimg">
        <img src={proimage}></img>
      </div>
      <div className="prohead">
        We build amazing <span className="typing"></span>
      </div>
      <div className="probody">
        <div className="col1">
          <div className="three">
            <img src={pro1}></img>
            <div className="prodesc">Spectrum</div>
          </div>
          <div className="two">
            <img src={pro2}></img>
            <div className="prodesc">Coral</div>
          </div>
          <div className="one">
            <img src={pro3}></img>
            <div className="prodesc">Dragon Fruit</div>
          </div>
        </div>
        <div className="col2">
          <div className="two">
            <img src={pro4}></img>
            <div className="prodesc">Enjoy Little Things</div>
          </div>
          <div className="one">
            <img src={pro5}></img>
            <div className="prodesc">Think outside the box</div>
          </div>
          <div className="three">
            <img src={pro6}></img>
            <div className="prodesc">Iphone X Wallpaper</div>
          </div>
        </div>
        <div className="col3">
          <div className="two">
            <img src={pro7}></img>
            <div className="prodesc">Concert</div>
          </div>
          <div className="three">
            <img src={pro8}></img>
            <div className="prodesc">Pretty in Pink</div>
          </div>
          <div className="one">
            <img src={pro9}></img>
            <div className="prodesc">Museum</div>
          </div>
        </div>
      </div>
    </div>
  );
}
