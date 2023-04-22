import { ChoiceContext, GameContext } from "../../context/GameContext";
import { useContext } from "react";
import Backdrop from "../UI/Backdrop/Backdrop";
import "./Result.css";

function Result({ onPlayAgain }) {
  const { choices } = useContext(ChoiceContext);
  const { result } = useContext(GameContext);

  return (
    <>
      <Backdrop />
      <section className="result-section">
        <table className="result">
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
                <button onClick={onPlayAgain}>Play Again</button>
              </td>
              <td>
                <button>Quit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Result;
