import Choice from "./components/Choice/Choice";
import GameProvider from "./context/GameProvider";

function App() {
  return (
    <div className="app">
      <GameProvider>
        <h1>Tic Tac Toe Game</h1>
        <Choice />
      </GameProvider>
    </div>
  );
}

export default App;
