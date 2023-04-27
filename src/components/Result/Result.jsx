import { ChoiceContext, GameContext } from "../../context/GameContext";
import { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import Backdrop from "../UI/Backdrop/Backdrop";
import Button from "../UI/Button/Button";
import xIcon from "../../assets/icon-x.svg";
import oIcon from "../../assets/icon-o.svg";
import "./Result.css";

const icons = {
  x: xIcon,
  o: oIcon,
};

const textColor = {
  x: "var(--light-blue)",
  o: "var(--yellow)",
};

function Result({ onPlayAgain, onQuit }) {
  const { choices } = useContext(ChoiceContext);
  const { result, onResetScores } = useContext(GameContext);

  const winnerChoice = result === "win" ? choices.user : choices.computer;

  function handleQuit() {
    onQuit();
    onResetScores();
  }

  return (
    <Modal>
      <div className="result flow">
        {result === "tie" ? (
          <h2 className="font-size-500">Round Tied</h2>
        ) : (
          <>
            <p>{result === "win" ? "You Won !" : "Oh no, you lost..."}</p>
            <div className="flex flex--gap flex--align-center">
              <img
                className="result__icon"
                src={icons[winnerChoice]}
                alt="Winner Choice"
              />
              <h2
                className="font-size-500"
                style={{
                  color: textColor[winnerChoice],
                }}
              >
                Takes the round
              </h2>
            </div>
          </>
        )}
        <div className="result__btns flex flex--justify-center flex--gap">
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
