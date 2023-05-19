import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <h1 className="logo">ლ</h1>
      <div className="nav-button-container">
        <a href="#about">
          <button className="nav-button">About</button>
        </a>
        <a href="#projects">
          <button className="nav-button">Projects</button>
        </a>
        <a href="#contact">
          <button className="nav-button highlited">Contact</button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
