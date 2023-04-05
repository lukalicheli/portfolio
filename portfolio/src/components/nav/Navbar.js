import React from "react";
import logo from "../nav/logo.png";

function Navbar() {
  return (
    <div className="navbar-container">
      <img src={logo} alt="logo"></img>
      <button>About</button>
      <button>Projects</button>
      <button>Contact</button>
    </div>
  );
}

export default Navbar;
