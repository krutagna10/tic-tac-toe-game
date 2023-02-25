import Grid from "../../layouts/Grid/Grid.js";
import Flex from "../../layouts/Flex/Flex";
import Button from "../UI/Button/Button";
import xIcon from "../../assets/icon-x.svg";
import oIcon from "../../assets/icon-o.svg";
import "./Result.css";

const icons = {
  x: xIcon,
  o: oIcon,
};

const roundTextColor = {
  x: "text-blue",
  o: "text-yellow",
};

const resultText = {
  win: "You won",
  lose: "You lose",
};

const Result = ({ result, onNextRound, onQuit, user, computer }) => {
  let winnerChoice;
  if (result === "win") {
    winnerChoice = user.choice;
  }

  if (result === "lose") {
    winnerChoice = computer.choice;
  }

  return (
    <section className="result-section">
      <Grid className="result background-semi-dark grid--items-center">
        {result !== "draw" && (
          <p className="result__text font-size-200 text-silver">
            {resultText[result]}
          </p>
        )}

        <Flex className="result__label flex--gap flex--align-center">
          {result !== "draw" && (
            <img
              className="result__icon"
              src={icons[winnerChoice]}
              alt={`Icon representing ${winnerChoice}`}
            />
          )}
          <h2
            className={`result__heading font-size-500 ${
              result === "draw" ? "text-silver" : roundTextColor[winnerChoice]
            }`}
          >
            {result === "draw" ? "Round Tied" : "Takes the round"}
          </h2>
        </Flex>

        <Flex className="result__buttons flex--gap">
          <Button className="btn--silver" onClick={onQuit}>
            Quit
          </Button>
          <Button className="btn--yellow" onClick={onNextRound}>
            Next Round
          </Button>
        </Flex>
      </Grid>
    </section>
  );
};

export default Result;
