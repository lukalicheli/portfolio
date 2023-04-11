import React from "react";
import "./Games.css";
import TicTacToe from "./tictactoe/TicTacToe";
import SlidingTiles from "./slidingtiles/SlidingTiles";

function Games() {
  return (
    <div className="games-container">
      <TicTacToe></TicTacToe>
      <SlidingTiles></SlidingTiles>
    </div>
  );
}

export default Games;
