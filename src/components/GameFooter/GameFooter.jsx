import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import "./GameFooter.css";

function GameFooter() {
  const { scores } = useContext(GameContext);

  const scoresArr = [
    { label: "You", score: scores.user },
    { label: "Ties", score: scores.draw },
    { label: "CPU", score: scores.computer },
  ];

  return (
    <div className="footer flex flex--gap">
      {scoresArr.map((item, index) => (
        <div className="footer__score-wrapper" key={index}>
          <p className="footer__score-label">{item.label}</p>
          <p className="footer__score">{item.score}</p>
        </div>
      ))}
    </div>
  );
}

export default GameFooter;
