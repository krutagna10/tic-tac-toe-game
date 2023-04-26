import { GameContext } from "../../context/GameContext";
import { useContext, useState } from "react";
import Restart from "../Restart/Restart";
import restartIcon from "../../assets/icon-restart.svg";
import logo from "../../assets/logo.svg";
import "./GameHeader.css";

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

  return (
    <>
      <div className="header flex flex--justify-space">
        <div className="header__logo-wrapper">
          <img src={logo} alt="Tic Tac Toe Game" />
        </div>
        <button className="header__btn" onClick={showRestart}>
          <img src={restartIcon} alt="restart" />
        </button>
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
