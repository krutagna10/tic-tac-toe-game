import Choice from "./components/Choice/Choice";
import Game from "./components/Game/Game";
import GameProvider from "./context/GameProvider";
import { useState } from "react";
import Result from "./components/Result/Result";

function App() {
  const [isChoiceSelected, setIsChoiceSelected] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [result, setResult] = useState("");
  const [scores, setScores] = useState({
    user: 0,
    draw: 0,
    computer: 0,
  });

  function handleUpdateScore(result) {
    switch (result) {
      case "win": {
        setScores((prevScore) => {
          return { ...prevScore, user: prevScore.user + 1 };
        });
        break;
      }
      case "draw": {
        setScores((prevScore) => {
          return { ...prevScore, draw: prevScore.draw + 1 };
        });
        break;
      }
      case "lose": {
        setScores((prevScore) => {
          return { ...prevScore, computer: prevScore.computer + 1 };
        });
        break;
      }
      default: {
        console.error("Invalid action");
      }
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
