import './home.css';
import React,{ useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect(() => {
    gsap.fromTo(
      '.hellobox',
      {
        y: 0
      },
      {
        y: '40%',
        scrollTrigger: {
          trigger: '.home',
          start: '100vh',
          end: '850vh',
          scrub: true,
          toggleActions: 'restart pause pause reverse'
        }

      }
)
  return
}, []);


  return (
    <div id="home" className='home'>
      <div id="s1">
        <div id="spinner1" className="spin"></div>
      </div>
      <div id="s2">
        <img alt="" src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142302/koral/wlcmspin_art2vt.png" className="spin"></img>
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
        <img alt="" src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142302/koral/wlcmspin_art2vt.png" className="spin"></img>
      </div>
      <div id="s7">
        <img alt="" src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142303/koral/wlcmzigzag2_spwmwu.png" className="spin"></img>
      </div>
      <div id="arrow">
        <a href="#about">&#8595;</a>
      </div>
      <div id="hellobox" className='hellobox'>
        <div id="hb-inner1">
          <span id="hbi1span1">hello</span>
          <span id="hbi1span2">.</span>
        </div>
        <div id="hb-inner2">
          We're Koral an award winning
          <br /> design agncy <u>from Portugal.</u>
        </div>
        <div style={{ marginTop: "5vh" }}>
          <img alt="" style={{ width: "50px" }} src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142302/koral/wlcmzigzag_vf572e.png"></img>
        </div>
      </div>
      <img alt="" className="imgbox" src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142302/koral/girl1_nnxnrv.png"></img>
    </div>
  );
}
