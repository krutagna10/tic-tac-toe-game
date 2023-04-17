import GameContext from "../../context/GameContext";
import { useContext } from "react";

function Result({ result, onPlayAgain }) {
  const { choices, onSwapChoices } = useContext(GameContext);

  function handlePlayAgain() {
    onPlayAgain();
    onSwapChoices();
  }

  return (
    <table>
      <thead>
        <tr>
          <th>User Choice</th>
          <th>Computer Choice</th>
          <th>Result</th>
          <th>Play Again Button</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{choices.user}</td>
          <td>{choices.computer}</td>
          <td>{result}</td>
          <td>
            <button onClick={handlePlayAgain}>Play Again</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Result;
