import React from "react";
import "./index.css";
import media from "../../images/social media.png";
import get from "../../images/started.png";
import ell from "../../images/Ellipse.png";

export const Footer = () => {
  return (
    <div className="footer_container">
      <div className="navigation">
        <ul className="nav">
          <div>
            <img src={ell} />
          </div>
          <li>Home</li>
          <li>Blog</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Documentation</li>
        </ul>
        <span className="footer_text">Copyright © 2018 by Random site</span>
      </div>
      <div className="footer_photo">
        <div>
          <img className="footer_get" src={media} alt="" />
        </div>

        <div className="footer_btn">
          <img className="footer_img" src={get} alt="" />
        </div>
      </div>
    </div>
  );
};
