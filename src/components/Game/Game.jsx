import "./Game.css";
import GameBoard from "../GameBoard/GameBoard";
import { useState } from "react";

let choices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Game({ onResultChange }) {
  const [userArray, setUserArray] = useState([]);
  const [computerArray, setComputerArray] = useState([]);

  function checkForWin(arr, player) {
    for (const condition of winConditions) {
      if (condition.every((element) => arr.includes(element))) {
        player === "user" ? onResultChange("win") : onResultChange("lose");
        return true;
      }
    }
  }

  function checkForDraw() {
    if (choices.length === 0) {
      onResultChange("draw");
      return true;
    }
    return false;
  }

  function handleUserChoice(index) {
    // Setting User Array
    const nextArray = [...userArray, index];
    setUserArray(nextArray);

    // Removing the index from choices array
    choices = choices.filter((item) => item !== index);

    if (!checkForWin(nextArray, "user") && !checkForDraw()) {
      handleComputerChoice();
    }
  }

  function handleComputerChoice() {
    // Generating a random index
    const random = Math.floor(Math.random() * choices.length);
    const index = choices[random];

    const nextArray = [...computerArray, index];

    // Setting Computer Array
    setComputerArray(nextArray);

    // Removing index from choices array
    choices = choices.filter((item) => item !== index);

    if (!checkForDraw()) {
      checkForWin(nextArray, "computer");
    }
  }

  return (
    <div className="game">
      <h2>Game Board</h2>
      <GameBoard
        onUserChoice={handleUserChoice}
        userArray={userArray}
        computerArray={computerArray}
      />
    </div>
  );
}

export default Game;
