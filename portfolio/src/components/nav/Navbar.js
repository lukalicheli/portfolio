import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <h1 className="logo">ლ</h1>
      <div className="nav-button-container">
        <button className="nav-button">About</button>
        <button className="nav-button">Projects</button>
        <button className="nav-button highlited">Contact</button>
      </div>
    </div>
  );
}

export default Navbar;
