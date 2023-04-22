import GameProvider from "./context/GameProvider";
import Choice from "./components/Choice/Choice";
import Game from "./components/Game/Game";
import { useState } from "react";
import "./App.css";

function App() {
  const [isChoiceSelected, setIsChoiceSelected] = useState(false);

  function handleStartGame() {
    setIsChoiceSelected(true);
  }

  return (
    <div className="app">
      <GameProvider>
        <h1 className="sr-only">Tic Tac Toe Game</h1>
        {isChoiceSelected ? <Game /> : <Choice onStartGame={handleStartGame} />}
      </GameProvider>
    </div>
  );
}

export default App;
