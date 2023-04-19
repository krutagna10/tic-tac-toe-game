import { ChoiceContext, GameContext } from "../../context/GameContext";
import GameBoard from "../GameBoard/GameBoard";
import { useEffect, useRef, useState, useContext } from "react";
import Score from "../Score/Score";

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

function Game({ onGameFinished }) {
  const { choices } = useContext(ChoiceContext);
  const { onResultChange } = useContext(GameContext);
  const [userArray, setUserArray] = useState([]);
  const [computerArray, setComputerArray] = useState([]);
  const options = useRef([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  useEffect(() => {
    if (choices.computer === "x") {
      handleComputerChoice();
    }
  }, []);

  function checkForWin(arr, player) {
    for (const condition of winConditions) {
      if (condition.every((element) => arr.includes(element))) {
        player === "user" ? onResultChange("win") : onResultChange("lose");
        onGameFinished();
        return true;
      }
    }
  }

  function checkForDraw() {
    if (options.current.length === 0) {
      onResultChange("draw");
      onGameFinished();
      return true;
    }
    return false;
  }

  function handleUserChoice(index) {
    // Setting User Array
    const nextArray = [...userArray, index];
    setUserArray(nextArray);

    // Removing the index from choices array
    options.current = options.current.filter((item) => item !== index);

    if (!checkForWin(nextArray, "user") && !checkForDraw()) {
      handleComputerChoice();
    }
  }

  function handleComputerChoice() {
    // Generating a random index
    const random = Math.floor(Math.random() * options.current.length);
    const index = options.current[random];

    const nextArray = [...computerArray, index];

    // Setting Computer Array
    setComputerArray(nextArray);

    // Removing index from choices array
    options.current = options.current.filter((item) => item !== index);

    if (!checkForWin(nextArray, "computer")) {
      checkForDraw();
    }
  }

  function handleRestart() {
    setUserArray([]);
    setComputerArray([]);
    options.current = [1, 2, 3, 4, 5, 6, 7, 8];
  }

  return (
    <div className="game">
      <h2>Game Board</h2>
      <GameBoard
        onUserChoice={handleUserChoice}
        userArray={userArray}
        computerArray={computerArray}
      />
      <div className="grid grid--items-center margin-200">
        <button onClick={handleRestart}>Restart Game</button>
      </div>
      <Score />
    </div>
  );
}

export default Game;
