import GameBoard from "../GameBoard/GameBoard";
import { useState, useRef, useContext } from "react";
import "./Game.css";
import choice from "../Choice/Choice";
import Result from "../Result/Result";
import { GameContext } from "../../context/GameContext";
import Arrays from "../Arrays/Arrays";
import Score from "../Score/Score";

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
  const { onResultChange } = useContext(GameContext);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [userArray, setUserArray] = useState([]);
  const [computerArray, setComputerArray] = useState([]);
  const options = useRef([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  function checkForWin(arr, player) {
    for (const condition of WIN_CONDITIONS) {
      if (condition.every((element) => arr.includes(element))) {
        player === "user" ? onResultChange("win") : onResultChange("lose");
        setIsGameFinished(true);
        return true;
      }
    }
    return false;
  }

  function checkForDraw() {
    if (options.current.length === 0) {
      onResultChange("draw");
      setIsGameFinished(true);
      return true;
    }
    return false;
  }

  function handleUserChoice(index) {
    const nextArray = [...userArray, index];
    setUserArray(nextArray);

    // Removing the index from options array
    options.current = options.current.filter((item) => item !== index);

    if (!checkForWin(nextArray, "user") && !checkForDraw()) {
      handleComputerChoice();
    }
  }

  function handleComputerChoice() {
    const random = Math.floor(Math.random() * options.current.length);
    const index = options.current[random];

    const nextArray = [...computerArray, index];
    setComputerArray(nextArray);

    // Removing the index from options array
    options.current = options.current.filter((item) => item !== index);

    if (!checkForWin(nextArray, "computer")) {
      checkForDraw();
    }
  }

  function handlePlayAgain() {
    setIsGameFinished(false);
    setUserArray([]);
    setComputerArray([]);
    options.current = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  }

  return (
    <div className="game">
      <h1 className="text--center">Game Board</h1>
      <GameBoard
        userArray={userArray}
        computerArray={computerArray}
        onUserChoice={handleUserChoice}
      />
      <Score />
      <Arrays
        userArray={userArray}
        computerArray={computerArray}
        optionsArray={options.current}
      />
      {isGameFinished && <Result onPlayAgain={handlePlayAgain} />}
    </div>
  );
}

export default Game;
