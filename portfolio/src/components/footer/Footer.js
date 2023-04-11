import React from "react";
import "./Footer.css";
import { GrReactjs } from "react-icons/gr";
import { AiOutlineMail, AiFillGithub, AiFillPhone } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-logo">ლ</p>
      <p className="slogan">
        Pushing boundaries with every bug, obstacle and challenge.
      </p>

      <div className="footer-icons">
        <FaLinkedinIn className="contact-icon" size={25}></FaLinkedinIn>
        <AiFillGithub className="contact-icon" size={25}></AiFillGithub>
        <AiOutlineMail className="contact-icon" size={25}></AiOutlineMail>
        <AiFillPhone className="contact-icon" size={25}></AiFillPhone>
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
