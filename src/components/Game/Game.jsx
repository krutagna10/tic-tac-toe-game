import "./Game.css";
import GameBoard from "../GameBoard/GameBoard";
import { useState } from "react";

let choices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

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

  function handleUserChoice(index) {
    // Setting User Array
    setUserArray((prevUserArray) => [...prevUserArray, index]);

    // Removing the index from choices array
    choices = choices.filter((item) => item !== index);

    // Getting computer choice
    handleComputerChoice();
  }

  function handleComputerChoice() {
    // Generating a random index
    const random = Math.floor(Math.random() * choices.length);
    const index = choices[random];

    // Setting Computer Array
    setComputerArray((prevComputerArray) => [...prevComputerArray, index]);

    // Removing index from choices array
    choices = choices.filter((item) => item !== index);
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
