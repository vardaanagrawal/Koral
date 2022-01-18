import React from "react";
import "./clients.css";
import abttopimg from "../images/abttopimg.jpg";
import client1 from '../images/client1.jpg';
import client2 from '../images/client2.jpg';
import client3 from '../images/client3.jpg';

export default function Client() {
  return (
    <div className="client">
      
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" >
              <div className="cartop"><img src={client1}></img></div>
              <div className="carmid">"Rapidiously integrate based resources whereas low-risk high-yield technologies. Proactively innovate market positioning products without B2B products resources before one-to-one applications recaptiualize negotiate timely synergy"</div>
              <div className="carbottom">Jack Shapeard<br/><span style={{color: '#fa7268'}}>Upper</span></div>
            </div>
            <div class="carousel-item"  >
            <div className="cartop"><img src={client2}></img></div>
              <div className="carmid">"Compellingly fashion low-risk high-yield "outside the box" thinking after synergistic users. Quickly empower web-enabled manufactured products alignments"</div>
              <div className="carbottom">Maria Madeira<br/><span style={{color: '#fa7268'}}>Agency</span></div>
            </div>
            <div class="carousel-item"  >
            <div className="cartop"><img src={client3}></img></div>
              <div className="carmid">"Rapidiously integrate multimedia based resources whereas low-risk high-yield technologies. Proactively innovate market positioning products"</div>
              <div className="carbottom">Lucas Crasy<br/><span style={{color: '#fa7268'}}>Yhemeforest</span></div>
            </div>
          </div>
          <div style={{height: '40px',width: '100%',display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
            style={{position: 'relative',top: 0}}
          >
            <span class="sr-only"></span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
            style={{position: 'relative',top: '0px'}}
          >
            <span class="sr-only"></span>
          </a>
          </div>
        </div>
      </div>
    
  );
}
