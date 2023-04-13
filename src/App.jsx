import Choice from "./components/Choice/Choice";
import Game from "./components/Game/Game";
import GameProvider from "./context/GameProvider";
import { useState } from "react";

function App() {
  const [isChoiceSelected, setIsChoiceSelected] = useState(true);

  return (
    <div className="app">
      <GameProvider>
        <h1>Tic Tac Toe Game</h1>
        {!isChoiceSelected && <Choice />}
        {isChoiceSelected && <Game />}
      </GameProvider>
    </div>
  );
}

export default App;
