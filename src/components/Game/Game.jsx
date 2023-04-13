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
    setUserArray((prevUserArray) => [...prevUserArray, index]);
    choices = choices.filter((item) => item !== index);
  }

  function handleComputerChoice() {
    let random = Math.floor(Math.random() * choices.length);
  }

  return (
    <div className="game">
      <h2>Game Board</h2>
      <GameBoard />
    </div>
  );
}

export default Game;
