import React from "react";
import Desk from "../about/desk.png";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <h1 className="full-name">Luka Licheli</h1>
      <img src={Desk} alt="desk"></img>
    </div>
  );
}

export default Header;
