import React from "react";
import "./Footer.css";
import { GrReactjs } from "react-icons/gr";

function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-logo">ლ</p>
      <p className="slogan">
        Pushing boundaries with every bug, obstacle and challenge.
      </p>

      <div className="footer-icons"></div>
      <div className="made-with-react">
        {" "}
        <p>Made with</p>
        <GrReactjs size={25} className="react-icon" />
        <p>React</p>
      </div>
    </div>
  );
}

export default Footer;
