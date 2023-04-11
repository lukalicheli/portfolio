import React from "react";
import "./Games.css";
import TicTacToe from "./tictactoe/TicTacToe";

function Games() {
  return (
    <div className="games-container">
      <TicTacToe></TicTacToe>
    </div>
  );
}

export default Games;
