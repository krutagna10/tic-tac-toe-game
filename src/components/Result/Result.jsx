import { ChoiceContext, GameContext } from "../../context/GameContext";
import { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import Backdrop from "../UI/Backdrop/Backdrop";
import "./Result.css";
import Button from "../UI/Button/Button";

function Result({ onPlayAgain, onQuit }) {
  const { choices } = useContext(ChoiceContext);
  const { result, onResetScores } = useContext(GameContext);

  function handleQuit() {
    onQuit();
    onResetScores();
  }

  return (
    <Modal>
      <div className="result flow">
        <h2 className="result__text font-size-500">{result}</h2>
        <div className="result__btns flex flex--gap">
          <Button className="btn--silver" onClick={handleQuit}>
            Quit
          </Button>
          <Button className="btn--yellow" onClick={onPlayAgain}>
            Next Round
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default Result;
