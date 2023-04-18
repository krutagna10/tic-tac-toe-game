import { ChoiceContext, GameContext } from "../../context/GameContext";
import { useContext } from "react";

function Result({ onPlayAgain, onQuit }) {
  const { choices, onSwapChoices } = useContext(ChoiceContext);
  const { onResetScores } = useContext(GameContext);
  const { result } = useContext(GameContext);

  function handlePlayAgain() {
    onPlayAgain();
    onSwapChoices();
  }

  function handleQuit() {
    onQuit();
    onResetScores();
  }

  return (
    <table>
      <thead>
        <tr>
          <th>User Choice</th>
          <th>Computer Choice</th>
          <th>Result</th>
          <th>Play Again Button</th>
          <th>Quit Button</th>
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
          <td>
            <button onClick={handleQuit}>Quit</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Result;
