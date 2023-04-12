import Choice from "./components/Choice/Choice";
import Game from "./components/Game/Game";
import GameProvider from "./context/GameProvider";

function App() {
  return (
    <div className="app">
      <GameProvider>
        <h1>Tic Tac Toe Game</h1>
        <Choice />
        {/*<Game />*/}
      </GameProvider>
    </div>
  );
}

export default App;
