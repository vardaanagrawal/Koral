import React, { useState, useEffect } from "react";
import "./navbar.css";
import koralLogo from "../images/logoKoral.png";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {


  useEffect(() => {
      gsap.fromTo(
        '.goup',
        {
          opacity: 0
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: '.home',
            start: '50vh',
            toggleActions: 'restart pause pause reverse'
          }

        }
  )
    return
  }, []);
  





  function openslist(n) {
    const slist = document.querySelector(`.slist${n}`);
    slist.style.left = "0px";
    const flist = document.querySelector(`.flist`);
    flist.style.left = "-100%";
  }
  function back(n) {
    const slist = document.querySelector(`.slist${n}`);
    slist.style.left = "100%";
    const flist = document.querySelector(`.flist`);
    flist.style.left = "0";
  }

  const [mm, setmm] = useState(false);

  function toggleMM() {
    const mobilemenu = document.querySelector(".mobile-menu");
    if (mm === false) {
      mobilemenu.style.display = "block";
    } else {
      mobilemenu.style.display = "none";
    }
    setmm(!mm);
  }

  const [sb, setsb] = useState(false);

  function toggleSB() {
    const sidebar = document.querySelector(".sidebar");
    if (sb === false) {
      let app = document.querySelector(".App");
      app.style.right = "300px";
    } else {
      let app = document.querySelector(".App");
      app.style.right = "0%";
    }
    setsb(!sb);
  }

  return (
    <div id="navbar">
      <div className="goup"><a href="#home">^</a></div>
      <div id="logo">
        <a href="/">
          <img src={koralLogo} alt="Koral" />
        </a>
      </div>
      <div id="desktop-menu">
      <div className="dropdown">
          <a href="#" id="dropdownMenuLink" aria-expanded="false">
            HOME<div className="underline"></div>
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a className="dropdown-item" href="#">Home Page 1</a></li>
            <li><a className="dropdown-item" href="#">Home Page 2</a></li>
            <li><a className="dropdown-item" href="#">Home Page 3</a></li>
            <li><a className="dropdown-item" href="#">Home Page 4</a></li>
            <li><a className="dropdown-item" href="#">Home Page 5</a></li>
            <li><a className="dropdown-item" href="#">Home Page 6</a></li>
            <li><a className="dropdown-item" href="#">Home Page 7</a></li>
            <li><a className="dropdown-item" href="#">Home Page 8</a></li>
            <li><a className="dropdown-item" href="#">Home Page 9 (New)</a></li>
            <li><a className="dropdown-item" href="#">Home Page 10 (New)</a></li>
            <li><a className="dropdown-item" href="#">Home Page 11 (New)</a></li>
            <li><a className="dropdown-item" href="#">Home 12 (Mockup)</a></li>
            <li><a className="dropdown-item" href="#">Home 13 (Isometric)</a></li>
          </ul>
        </div>
        <div className="dropdown">
          <a href="#" id="dropdownMenuLink" aria-expanded="false">
            PAGES<div className="underline"></div>
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a className="dropdown-item" href="#">About Pages</a></li>
            <li><a className="dropdown-item" href="#">Services Pages</a></li>
            <li><a className="dropdown-item" href="#">Contact Pages</a></li>
            <li><a className="dropdown-item" href="#">Special Pages</a></li>
            <li>
              <a className="dropdown-item" href="#">
                Project Pages
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Right Pages
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Left Pages
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                FAQ Pages
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Clients
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <a href="#" id="dropdownMenuLink" aria-expanded="false">
            PORTFOLIOS<div className="underline"></div>
          </a>

          <ul
            className="dropdown-menu"
            id="portfolio-drop"
            aria-labelledby="dropdownMenuLink"
          >
            <ul>
              <li>
                <a className="dropdown-item" href="#">
                  Masonry
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Masonry no Gap Wide
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Masonry no Gap Box
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Masonry Small Gap Wide
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Masonry Small Gap Box
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Masonry Big Gap Wide
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Masonry Big Gap Box
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="dropdown-item" href="#">
                  Grid AJAX
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Grid Ajax Wide
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Grid Ajax 2 Columns
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Grid Ajax 3 Columns
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Grid Ajax 4 Columns
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Grid Ajax with text
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Grid Ajax with video
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="dropdown-item" href="#">
                  Mixed Projects
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Mixed Projects 2 Col
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Mixed Projects 3 Col
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Mixed Projects 4 Col
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Mixed Projects Wide
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Mixed Projects with slider
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Mixed Projects with text
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="dropdown-item" href="#">
                  Wide Style
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Wide Big Projects
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Wide Medium Projects
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Wide Small Projects
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Wide Big with text
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Wide Medium with slider
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Wide Small with video
                </a>
              </li>
            </ul>
          </ul>
        </div>
        <div className="dropdown">
          <a href="#" id="dropdownMenuLink" aria-expanded="false">
            HEADERS<div className="underline"></div>
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a className="dropdown-item" href="#">
                Header Style 1
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Header Style 2
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Header Style 3
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Header Style 4
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Header Style 6
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Header Style 7
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                On Scroll Sections
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <a href="#" id="dropdownMenuLink" aria-expanded="false">
            ELEMENTS<div className="underline"></div>
          </a>

          <ul
            className="dropdown-menu"
            id="element-drop"
            aria-labelledby="dropdownMenuLink"
          >
            <ul>
              <li>
                <a className="dropdown-item" href="#">
                  Elements Col 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Accordion & Tabs
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Advanced Carousel
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Animated Text
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Contact Forms
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Content & Flip Box
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Creative Link
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Gallery & Image Overlay
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="dropdown-item" href="#">
                  Elements Col 2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Google Fonts
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Google Maps
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Icons & Info Box
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  iHover
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Info Banners
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Info Circle
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Info Tables
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="dropdown-item" href="#">
                  Elements Col 3
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Latest Projects
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Latest Posts
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Modal Box
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Multimedia Players
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Partners
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Pie Chart
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Price Box
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="dropdown-item" href="#">
                  Elements Col 4
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Progress Bar
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Round Chart
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Rows Columns
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Section Backgrounds
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Styled Tabs
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Tables
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Timeline
                </a>
              </li>
            </ul>
          </ul>
        </div>
        <div className="dropdown">
          <a href="#" id="dropdownMenuLink" aria-expanded="false">
            BLOG<div className="underline"></div>
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a className="dropdown-item" href="#">
                Blog Grid
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Blog Grid Wide
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Blog Masonry
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Blog Masonry Sidebar
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Blog Masonry Wide
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Blog Right Sidebar
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Blog Left Sidebar
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Blog Wide
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mobile-menu">
        <div className="flist">
          <div className="flist-item" onClick={() => openslist(1)}><div>Home</div><div>{">"}</div></div>
          <div className="flist-item" onClick={() => openslist(2)}><div>Pages</div><div>{">"}</div></div>
          <div className="flist-item" onClick={() => openslist(3)}><div>Portfolios</div><div>{">"}</div></div>
          <div className="flist-item" onClick={() => openslist(4)}><div>Headers</div><div>{">"}</div></div>
          <div className="flist-item" onClick={() => openslist(5)}><div>Elements</div><div>{">"}</div></div>
          <div className="flist-item" onClick={() => openslist(6)}><div>Blog</div><div>{">"}</div></div>
        </div>
        <div className="slist1">
          <div className="slist-item" onClick={() => back(1)}>
            {"< "}Back
          </div>
          <div className="slist-item">Home Page 1</div>
          <div className="slist-item">Home Page 2</div>
          <div className="slist-item">Home Page 3</div>
          <div className="slist-item">Home Page 4</div>
          <div className="slist-item">Home Page 5</div>
          <div className="slist-item">Home Page 6</div>
          <div className="slist-item">Home Page 7</div>
          <div className="slist-item">Home Page 8</div>
          <div className="slist-item">Home Page 9</div>
        </div>
        <div className="slist2">
          <div className="slist-item" onClick={() => back(2)}>
            {"< "}Back
          </div>
          <div className="slist-item">About Page</div>
          <div className="slist-item">Services Page</div>
          <div className="slist-item">Contact Page</div>
          <div className="slist-item">Special Page</div>
          <div className="slist-item">Project Page</div>
          <div className="slist-item">Right Page</div>
          <div className="slist-item">Left Page</div>
          <div className="slist-item">FAQ page</div>
          <div className="slist-item">Clients</div>
        </div>
        <div className="slist3">
          <div className="slist-item" onClick={() => back(3)}>
            {"< "}Back
          </div>
          <div className="slist-item">Masonry</div>
          <div className="slist-item">Grid AJAX</div>
          <div className="slist-item">Mixed Projects</div>
          <div className="slist-item">Wide Style</div>
        </div>
        <div className="slist4">
          <div className="slist-item" onClick={() => back(4)}>
            {"< "}Back
          </div>
          <div className="slist-item">Header Style 1</div>
          <div className="slist-item">Header Style 2</div>
          <div className="slist-item">Header Style 3</div>
          <div className="slist-item">Header Style 4</div>
          <div className="slist-item">Header Style 5</div>
          <div className="slist-item">Header Style 6</div>
          <div className="slist-item">Header Style 7</div>
          <div className="slist-item">On Scroll Section</div>
        </div>
        <div className="slist5">
          <div className="slist-item" onClick={() => back(5)}>
            {"< "}Back
          </div>
          <div className="slist-item">Elements Col 1</div>
          <div className="slist-item">Elements Col 2</div>
          <div className="slist-item">Elements Col 3</div>
          <div className="slist-item">Elements Col 4</div>
        </div>
        <div className="slist6">
          <div className="slist-item" onClick={() => back(6)}>
            {"< "}Back
          </div>
          <div className="slist-item">Blog Grid</div>
          <div className="slist-item">Blog Grid Wide</div>
          <div className="slist-item">Blog Masonry</div>
          <div className="slist-item">Blog Masonry Sidebar</div>
          <div className="slist-item">Blog Masonry Wide</div>
          <div className="slist-item">Blog Right Sidebar</div>
          <div className="slist-item">Blog Left Sidebar</div>
          <div className="slist-item">Blog Wide</div>
        </div>
      </div>
      <div id="sidebar-nav">
        <img src="https://raw.githubusercontent.com/amitjakhu/dripicons/b8b7035c6c0f34035b0a78af4b393a3fd8628c38/SVG/search.svg" />
        <img src="https://raw.githubusercontent.com/amitjakhu/dripicons/b8b7035c6c0f34035b0a78af4b393a3fd8628c38/SVG/cart.svg" />
        <button className="mmbtn" onClick={toggleMM}>
        <div id="sideopenbutton">
            <div id="sidetop"></div>
            <div id="sidemiddle"></div>
            <div id="sidebottom"></div>
          </div>
        </button>
        <button className="sbbtn" onClick={toggleSB}>
        <div id="sideopenbutton">
            <div id="sidetop"></div>
            <div id="sidemiddle"></div>
            <div id="sidebottom"></div>
          </div>
        </button>
      </div>
      <div className="sidebar">
        <div className="newsHead">
          <img src="https://demos.upperthemes.com/koral/demo1/wp-content/uploads/sites/14/2019/07/koral-sidebar.png"></img>{" "}
        </div>
        <div className="newsBody">
          <div
            style={{
              fontSize: "20px",
              marginTop: "30px",
              width: "90%",
              fontWeight: "550",
              letterSpacing: 1,
            }}
          >
            Newsletter
          </div>
          <div style={{ marginTop: "20px", color: "silver", width: "90%" }}>
            Receive news, cool free stuff updates and new released products (no
            spam!)
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your email here"
              style={{
                background: "transparent",
                border: "solid 1px silver",
                height: "40px",
                width: "90%",
                margin: "10px 0px 20px 0px",
                paddingLeft: "10px",
                color: "silver",
              }}
            ></input>
            <button
              style={{
                height: "40px",
                width: "50%",
                borderRadius: "20px",
                backgroundColor: "#fa7268",
                border: "none",
                fontSize: "15px",
                fontWeight: "650",
                color: "white",
              }}
            >
              SUBSCRIBE
            </button>
          </div>
          <div
            style={{
              marginTop: "40px",
              fontSize: "larger",
              fontWeight: "550",
              letterSpacing: 1,
            }}
          >
            Follow us on
            <br />
            <br />
            <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" />
            <img src="https://img.icons8.com/fluency/48/000000/facebook.png" />
            <img src="https://img.icons8.com/emoji/48/000000/globe-with-meridians-emoji.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
