import Choice from "./components/Choice/Choice";
import Game from "./components/Game/Game";
import GameProvider from "./context/GameProvider";
import { useReducer, useState } from "react";
import Result from "./components/Result/Result";

function reducer(scores, action) {
  switch (action.type) {
    case "increment-user-score": {
      return { ...scores, user: scores.user + 1 };
    }
    case "increment-draw-score": {
      return { ...scores, draw: scores.draw + 1 };
    }
    case "increment-computer-score": {
      return { ...scores, computer: scores.computer + 1 };
    }
    case "reset-scores": {
      return { user: 0, draw: 0, computer: 0 };
    }
    default: {
      throw new Error("Invalid action: " + action.type);
    }
  }
}

function App() {
  const [isChoiceSelected, setIsChoiceSelected] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [result, setResult] = useState("");
  const [scores, dispatch] = useReducer(reducer, {
    user: 0,
    draw: 0,
    computer: 0,
  });

  function handleUpdateScore(result) {
    if (result === "win") {
      dispatch({ type: "increment-user-score" });
    } else if (result === "draw") {
      dispatch({ type: "increment-draw-score" });
    } else {
      dispatch({ type: "increment-computer-score" });
    }
  }

  function handleStartGame() {
    setIsChoiceSelected(true);
  }

  function handleResultChange(result) {
    setIsGameFinished(true);
    setResult(result);
    handleUpdateScore(result);
  }

  function handlePlayAgain() {
    setIsGameFinished(false);
  }

  function handleQuit() {
    setIsChoiceSelected(false);
    setIsGameFinished(false);
    dispatch({ type: "reset-scores" });
  }

  return (
    <div className="app">
      <GameProvider>
        <h1>Tic Tac Toe Game</h1>
        {!isChoiceSelected && <Choice onStartGame={handleStartGame} />}
        {isChoiceSelected && !isGameFinished && (
          <Game onResultChange={handleResultChange} scores={scores} />
        )}
        {isGameFinished && (
          <Result
            result={result}
            onPlayAgain={handlePlayAgain}
            onQuit={handleQuit}
          />
        )}
      </GameProvider>
    </div>
  );
}

export default App;
