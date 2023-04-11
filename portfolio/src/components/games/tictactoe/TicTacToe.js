import { useState } from "react";
import "./TicTacToe.css";

function TicTacToe() {
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(""));

  const handleClick = (index) => {
    if (board[index] === "" && !winner) {
      let newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      setPlayer(player === "X" ? "O" : "X");
      checkWinner(newBoard);
      console.log("clicked");
    }
  };

  const checkWinner = (board) => {
    const possibleWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < possibleWins.length; i++) {
      const [a, b, c] = possibleWins[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
      }
    }
  };

  const handleReset = () => {
    setPlayer("X");
    setBoard(Array(9).fill(""));
    setWinner(null);
  };

  return (
    <div className="tictactoe-container">
      <h2 className="tictactoe-title">Tic Tac Toe</h2>
      {winner ? (
        <h3 className="tictactoe-turn">{winner} wins!</h3>
      ) : (
        <h3 className="tictactoe-turn">It is {player}'s turn</h3>
      )}
      <div className="board">
        {board.map((value, index) => {
          return (
            <div
              key={index}
              className={`square ${value}`}
              onClick={() => handleClick(index)}
            >
              {value}
            </div>
          );
        })}
      </div>

      <button className="tictactoe-reset" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
}

export default TicTacToe;
