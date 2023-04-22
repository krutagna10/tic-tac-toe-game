import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

function Score() {
  const { scores } = useContext(GameContext);

  return (
    <table className="margin-300">
      <thead>
        <tr>
          <th>User Score</th>
          <th>Draw Score</th>
          <th>Computer Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{scores.user}</td>
          <td>{scores.draw}</td>
          <td>{scores.computer}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Score;
