import React from "react";
import BG from "./backgammon-image.png";
import "./Backgammon.css";

function Backgammon() {
  return (
    <div className="backgammon-container">
      <img className="backgammon-image" src={BG} alt="backgammon board"></img>
    </div>
  );
}

export default Backgammon;
