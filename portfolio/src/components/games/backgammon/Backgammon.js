import React from "react";
import BG from "./backgammon-image.png";
import "./Backgammon.css";

function Backgammon() {
  return (
    <div className="backgammon-container">
      <h2 className="backgammon-title">Backgammon</h2>
      <h3 className="backgammon-subtitle">Classic Game</h3>
      <img className="backgammon-image" src={BG} alt="backgammon board"></img>
      <a href="https://lukalicheli.github.io/backgammon/">
        <button className="backgammon-play">Play Game</button>
      </a>
    </div>
  );
}

export default Backgammon;
