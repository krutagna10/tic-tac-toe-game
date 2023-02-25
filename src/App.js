import Choice from "./components/Choice/Choice";
import Game from "./components/Game/Game";
import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({ name: "user", choice: "o" });
  const [computer, setComputer] = useState({ name: "computer", choice: "x" });
  const [isChoiceSelected, setIsChoiceSelected] = useState(true);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleChoice = (userChoice, computerChoice) => {
    // Updating user choice and computer choice
    setUser({ ...user, choice: userChoice });
    setComputer({ ...computer, choice: computerChoice });

    // Setting choice selected to true
    setIsChoiceSelected(true);
  };

  const handleChoiceSwap = () => {
    let tempChoice = user.choice;

    // Swapping the choices
    setUser({ ...user, choice: computer.choice });
    setComputer({ ...computer, choice: tempChoice });
  };

  // Quit Button Handler
  const handleQuit = () => {
    setIsChoiceSelected(false);
    hideOverlay();
  };

  // Overlay Handlers
  const showOverlay = () => {
    setIsOverlayVisible(true);
  };

  const hideOverlay = () => {
    setIsOverlayVisible(false);
  };

  return (
    <div className="app">
      {isOverlayVisible && <div className="overlay"></div>}

      {!isChoiceSelected ? (
        <Choice onChoice={handleChoice} />
      ) : (
        <Game
          user={user}
          computer={computer}
          onQuit={handleQuit}
          swapChoices={handleChoiceSwap}
          showOverlay={showOverlay}
          hideOverlay={hideOverlay}
        />
      )}
    </div>
  );
}

export default App;
