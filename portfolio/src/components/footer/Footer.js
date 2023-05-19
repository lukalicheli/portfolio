import React from "react";
import "./Footer.css";
import { GrReactjs } from "react-icons/gr";
import { AiOutlineMail, AiFillGithub, AiFillPhone } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div id="contact" className="footer-container">
      <p className="footer-logo">ლ</p>
      <p className="slogan">
        Pushing boundaries with every bug, obstacle and challenge.
      </p>

      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/lukalicheli/">
          <FaLinkedinIn className="contact-icon" size={25}></FaLinkedinIn>
        </a>
        <a href="https://github.com/lukalicheli">
          {" "}
          <AiFillGithub className="contact-icon" size={25}></AiFillGithub>
        </a>
        <a href="mailto: lukalicheli@gmail.com">
          {" "}
          <AiOutlineMail className="contact-icon" size={25}></AiOutlineMail>
        </a>
        <a href="tel:732-586-4369">
          {" "}
          <AiFillPhone className="contact-icon" size={25}></AiFillPhone>
        </a>
      </div>
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
