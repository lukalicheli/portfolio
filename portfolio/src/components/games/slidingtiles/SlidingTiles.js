import React, { useEffect, useState } from "react";
import "./SlidingTiles.css";
import { RiH3 } from "react-icons/ri";

function SlidingTiles() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [completed, setCompleted] = useState(false);

  const startGame = () => {
    debugger;
    const newBoard = [];
    const tilesNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

    for (let i = 0; i < 8; i++) {
      let randomIndex = Math.floor(Math.random() * tilesNumbers.length);
      let value = tilesNumbers[randomIndex];
      tilesNumbers.splice(randomIndex, 1);
      newBoard.push(value);
    }
    newBoard.push("");
    return newBoard;
  };

  useEffect(() => {
    // const newBoard = startGame();
    const newBoard = [1, 2, 3, 4, 5, 6, 7, "", 8];
    setBoard(newBoard);
  }, []);

  useEffect(() => {
    checkCompletion();
  }, [board]);

  const tileClick = (index, value) => {
    let currIndex = index;

    //left
    if (currIndex - 1 >= 0 && board[currIndex - 1] === "") {
      const switchedTile = [...board];
      switchedTile[currIndex - 1] = value;
      switchedTile[currIndex] = "";
      setBoard(switchedTile);
      // checkCompletion(switchedTile);
      return;
    }

    //right
    if (
      currIndex + 1 <= 8 &&
      board[currIndex + 1] === "" &&
      currIndex % 3 !== 2
    ) {
      const switchedTile = [...board];
      switchedTile[currIndex + 1] = value;
      switchedTile[currIndex] = "";
      setBoard(switchedTile);
      // checkCompletion(switchedTile);
    }

    //above

    if (currIndex - 3 >= 0 && board[currIndex - 3] === "") {
      const switchedTile = [...board];
      switchedTile[currIndex - 3] = value;
      switchedTile[currIndex] = "";
      setBoard(switchedTile);

      return;
    }
    // below
    if (currIndex + 3 <= 8 && board[currIndex + 3] === "") {
      const switchedTile = [...board];
      switchedTile[currIndex + 3] = value;
      switchedTile[currIndex] = "";
      setBoard(switchedTile);

      return;
    }
  };

  const checkCompletion = () => {
    const completedBoard = [1, 2, 3, 4, 5, 6, 7, 8, ""];

    for (let i = 0; i < completedBoard.length; i++) {
      if (completedBoard[i] !== board[i]) {
        return setCompleted(false);
      }
    }
    setCompleted(true);
  };

  return (
    <div className="sliding-game-container">
      <h2 className="sliding-game-title">Sliding Game</h2>

      {completed ? (
        <div>
          <h3 className="completion-status">Completed!</h3>
          <button
            className="start-button"
            onClick={() => {
              const newBoard = startGame();
              setBoard(newBoard);
            }}
          >
            Start Game
          </button>
        </div>
      ) : (
        <h3 className="completion-status">Not yet completed...</h3>
      )}
      <div className="sliding-board">
        {board.map((value, index) => {
          return (
            <div
              key={index}
              className="sliding-square"
              onClick={() => tileClick(index, value)}
            >
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SlidingTiles;
