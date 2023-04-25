import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

function GameFooter() {
  const { scores } = useContext(GameContext);

  return (
    <div className="flex margin-300">
      <div>
        <p>User</p>
        <p>{scores.user}</p>
      </div>
      <div>
        <p>Draw</p>
        <p>{scores.draw}</p>
      </div>
      <div>
        <p>Computer</p>
        <p>{scores.computer}</p>
      </div>
    </div>
  );
}

export default GameFooter;
