import React from "react";
import logo from "../nav/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <img className="logo" src={logo} alt="logo"></img>
      <button>About</button>
      <button>Projects</button>
      <button>Contact</button>
    </div>
  );
}

export default Navbar;
