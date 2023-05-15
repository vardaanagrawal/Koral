import React from "react";
import "./footer2.css";

export default function Footer2() {
  return (
    <div className="footer2">
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        Something went wrong. Please re-authorize Instagram on Appearance {">"}{" "}
        Koral Options {">"} Social Networks {">"} Instagram and clicking on
        Authorize Instagram.
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img alt="" src="https://res.cloudinary.com/dg1awjvew/image/upload/v1684142301/koral/logoKoral_fgagb5.png"></img>
        <br />
        <div className="social">
          <>
            <img alt="" src="https://img.icons8.com/ios-glyphs/30/000000/facebook-f.png" />
          </>
          <>
            <img alt="" src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png" />
          </>
          <>
            <img alt="" src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png" />
          </>
          <>
            <img alt="" src="https://img.icons8.com/material-outlined/24/000000/pinterest--v1.png" />
          </>
          <>
            <img alt="" src="https://img.icons8.com/ios/24/000000/globe--v1.png" />
          </>
        </div>
        <div>Koral © 2021 by Upper</div>
      </div>
    </div>
  );
}
