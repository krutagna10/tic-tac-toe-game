import GameBoard from "../GameBoard/GameBoard";
import { useState, useRef, useContext, useEffect } from "react";
import "./Game.css";
import Result from "../Result/Result";
import { ChoiceContext, GameContext } from "../../context/GameContext";
import GameFooter from "../GameFooter/GameFooter";
import GameHeader from "../GameHeader/GameHeader";

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

function Game({ onQuit }) {
  const { choices, onSwapChoices } = useContext(ChoiceContext);
  const { onResultChange } = useContext(GameContext);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isRestartVisible, setIsRestartVisible] = useState(false);
  const [userArray, setUserArray] = useState([]);
  const [computerArray, setComputerArray] = useState([]);
  const options = useRef([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  // Getting computer choices when the choice of computer is x
  useEffect(() => {
    if (choices.computer === "x") {
      handleComputerChoice();
    }
  }, []);

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

  function handleResetValues() {
    setUserArray([]);
    setComputerArray([]);
    options.current = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  }

  function handlePlayAgain() {
    // Setting is Game Finished to false
    setIsGameFinished(false);

    //  Calling reset values function
    handleResetValues();

    onSwapChoices();
  }

  return (
    <div className="game flow">
      <GameHeader onResetValues={handleResetValues} />
      <GameBoard
        userArray={userArray}
        computerArray={computerArray}
        onUserChoice={handleUserChoice}
      />
      <GameFooter />
      {isGameFinished && (
        <Result onPlayAgain={handlePlayAgain} onQuit={onQuit} />
      )}
    </div>
  );
}

export default Game;
