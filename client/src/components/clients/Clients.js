import React from "react";
import "./clients.css";

export default function Client() {
  return (
    <div className="client">
      
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" >
              <div className="cartop"><img alt="" src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142300/koral/client1_jt1l12.jpg"></img></div>
              <div className="carmid">"Rapidiously integrate based resources whereas low-risk high-yield technologies. Proactively innovate market positioning products without B2B products resources before one-to-one applications recaptiualize negotiate timely synergy"</div>
              <div className="carbottom">Jack Shapeard<br/><span style={{color: '#fa7268'}}>Upper</span></div>
            </div>
            <div className="carousel-item"  >
            <div className="cartop"><img alt="" src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142300/koral/client3_ucnq2n.jpg"></img></div>
              <div className="carmid">"Compellingly fashion low-risk high-yield "outside the box" thinking after synergistic users. Quickly empower web-enabled manufactured products alignments"</div>
              <div className="carbottom">Maria Madeira<br/><span style={{color: '#fa7268'}}>Agency</span></div>
            </div>
            <div className="carousel-item"  >
            <div className="cartop"><img alt="" src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142300/koral/client2_x1c8bb.jpg"></img></div>
              <div className="carmid">"Rapidiously integrate multimedia based resources whereas low-risk high-yield technologies. Proactively innovate market positioning products"</div>
              <div className="carbottom">Lucas Crasy<br/><span style={{color: '#fa7268'}}>Yhemeforest</span></div>
            </div>
          </div>
          <div style={{height: '40px',width: '100%',display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
            style={{position: 'relative',top: 0}}
          >
            <span className="sr-only"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
            style={{position: 'relative',top: '0px'}}
          >
            <span className="sr-only"></span>
          </a>
          </div>
        </div>
      </div>
    
  );
}
