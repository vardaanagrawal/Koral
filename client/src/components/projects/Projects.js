import React, { useEffect } from "react";
import "./projects.css";

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
        if (count === 3) {
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
        <img alt="" src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142302/koral/proimg_py0w2c.png"></img>
      </div>
      <div className="prohead">
        We build amazing <span className="typing"></span>
      </div>
      <div className="probody">
        <div className="col1">
          <div className="three">
            <img alt="" src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142301/koral/pro1_ostcpp.jpg"></img>
            <div className="prodesc">Spectrum</div>
          </div>
          <div className="two">
            <img alt="" src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142301/koral/pro2_fbpedn.jpg"></img>
            <div className="prodesc">Coral</div>
          </div>
          <div className="one">
            <img alt="" src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142552/koral/pro3_sointf.jpg"></img>
            <div className="prodesc">Dragon Fruit</div>
          </div>
        </div>
        <div className="col2">
          <div className="two">
            <img alt="" src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142302/koral/pro4_rdaxep.jpg"></img>
            <div className="prodesc">Enjoy Little Things</div>
          </div>
          <div className="one">
            <img alt="" src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142301/koral/pro5_afdmlr.jpg"></img>
            <div className="prodesc">Think outside the box</div>
          </div>
          <div className="three">
            <img alt="" src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142302/koral/pro6_buqpf0.jpg"></img>
            <div className="prodesc">Iphone X Wallpaper</div>
          </div>
        </div>
        <div className="col3">
          <div className="two">
            <img alt="" src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142302/koral/pro7_kqcit1.jpg"></img>
            <div className="prodesc">Concert</div>
          </div>
          <div className="three">
            <img alt="" src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142302/koral/pro8_vpkoa5.jpg"></img>
            <div className="prodesc">Pretty in Pink</div>
          </div>
          <div className="one">
            <img alt="" src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142302/koral/pro9_pgkfo4.jpg"></img>
            <div className="prodesc">Museum</div>
          </div>
        </div>
      </div>
    </div>
  );
}
