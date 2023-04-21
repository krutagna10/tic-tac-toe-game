import GameBoard from "../GameBoard/GameBoard";
import { useState, useRef } from "react";
import "./Game.css";
import choice from "../Choice/Choice";

const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Game() {
  const [userArray, setUserArray] = useState([]);
  const [computerArray, setComputerArray] = useState([]);
  const options = useRef([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  function handleUserChoice(index) {
    const nextArray = [...userArray, index];
    setUserArray(nextArray);

    if (!checkForWin(nextArray, "user") && !checkForDraw()) {
      handleComputerChoice();
    }
  }

  function handleComputerChoice() {
    const random = Math.floor(Math.random() * options.current.length);
    const index = options.current[random];

    const nextArray = [...computerArray, index];
    setComputerArray(nextArray);

    if (!checkForWin(nextArray, "computer")) {
      checkForDraw();
    }
  }

  function checkForWin(arr, player) {
    for (const condition of WIN_CONDITIONS) {
      if (condition.every((element) => arr.includes(element))) {
        return true;
      }
    }
    return false;
  }

  function checkForDraw() {
    return choice.length === 0;
  }

  return (
    <div className="game flow">
      <h1 className="text--center">Game Board</h1>
      <GameBoard
        userArray={userArray}
        computerArray={computerArray}
        onUserChoice={handleUserChoice}
      />
    </div>
  );
}

export default Game;
