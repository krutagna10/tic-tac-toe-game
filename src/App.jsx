import Choice from "./components/Choice/Choice";
import Game from "./components/Game/Game";
import GameProvider from "./context/GameProvider";
import { useState } from "react";
import Result from "./components/Result/Result";

function App() {
  const [isChoiceSelected, setIsChoiceSelected] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);

  function handleStartGame() {
    setIsChoiceSelected(true);
  }

  function handleGameFinished() {
    setIsGameFinished(true);
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
          <Game onGameFinished={handleGameFinished} />
        )}
        {isGameFinished && (
          <Result onPlayAgain={handlePlayAgain} onQuit={handleQuit} />
        )}
      </GameProvider>
    </div>
  );
}

export default App;
