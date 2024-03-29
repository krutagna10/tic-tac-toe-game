import GameProvider from "./context/GameProvider";
import Choice from "./components/Choice/Choice";
import Game from "./components/Game/Game";
import { useState } from "react";

function App() {
  const [isChoiceSelected, setIsChoiceSelected] = useState(false);

  function handleStartGame() {
    setIsChoiceSelected(true);
  }

  function handleQuit() {
    setIsChoiceSelected(false);
  }

  return (
    <main className="main">
      <GameProvider>
        <h1 className="sr-only">Tic Tac Toe Game</h1>
        {isChoiceSelected ? (
          <Game onQuit={handleQuit} />
        ) : (
          <Choice onStartGame={handleStartGame} />
        )}
      </GameProvider>
    </main>
  );
}

export default App;
