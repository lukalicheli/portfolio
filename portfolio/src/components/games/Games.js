import React from "react";
import "./Games.css";
import TicTacToe from "./tictactoe/TicTacToe";
import SlidingTiles from "./slidingtiles/SlidingTiles";
import Backgammon from "./backgammon/Backgammon";

function Games() {
  return (
    <div className="games-container">
      <TicTacToe></TicTacToe>
      <Backgammon></Backgammon>
      <SlidingTiles></SlidingTiles>
    </div>
  );
}

export default Games;
