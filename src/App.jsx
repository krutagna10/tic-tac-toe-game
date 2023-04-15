import Choice from "./components/Choice/Choice";
import Game from "./components/Game/Game";
import GameProvider from "./context/GameProvider";
import { useState } from "react";
import Result from "./components/Result/Result";

function App() {
  const [isChoiceSelected, setIsChoiceSelected] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [result, setResult] = useState("");

  function handleStartGame() {
    setIsChoiceSelected(true);
  }

  function handleResultChange(result) {
    setIsGameFinished(true);
    setResult(result);
  }

  function handlePlayAgain() {
    setIsGameFinished(false);
  }

  return (
    <div className="app">
      <GameProvider>
        <h1>Tic Tac Toe Game</h1>
        {!isChoiceSelected && <Choice onStartGame={handleStartGame} />}
        {isChoiceSelected && !isGameFinished && (
          <Game onResultChange={handleResultChange} />
        )}
        {isGameFinished && (
          <Result result={result} onPlayAgain={handlePlayAgain} />
        )}
      </GameProvider>
    </div>
  );
}

export default App;
