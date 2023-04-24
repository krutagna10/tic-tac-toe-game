import { useContext, useState } from "react";
import Restart from "../Restart/Restart";
import { GameContext } from "../../context/GameContext";

function GameHeader({ onResetValues }) {
  const { onResetScores } = useContext(GameContext);
  const [isRestartVisible, setIsRestartVisible] = useState(false);

  function showRestart() {
    setIsRestartVisible(true);
  }

  function handleRestart() {
    setIsRestartVisible(false);
    onResetValues();
    onResetScores();
  }

  function handleCancelRestart() {
    setIsRestartVisible(false);
  }

  // function handleRestart()

  return (
    <>
      <div className="grid grid--items-center margin-300">
        <button onClick={showRestart}>Restart</button>
      </div>
      {isRestartVisible && (
        <Restart
          onRestart={handleRestart}
          onCancelRestart={handleCancelRestart}
        />
      )}
    </>
  );
}

export default GameHeader;
