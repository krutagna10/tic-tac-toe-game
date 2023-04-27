import { ChoiceContext } from "../../context/GameContext";
import Button from "../UI/Button/Button";
import logo from "../../assets/logo.svg";
import { useState, useContext } from "react";
import "./Choice.css";

const choices = ["x", "o"];

function Choice({ onStartGame }) {
  const { onChoice } = useContext(ChoiceContext);

  const [userChoice, setUserChoice] = useState("x");

  function handleUserChoiceChange(event) {
    setUserChoice(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const computerChoice = userChoice === "x" ? "o" : "x";
    onChoice(userChoice, computerChoice);
    onStartGame();
  }

  return (
    <section className="choice-section">
      <div className="choice">
        <form className="choice__form" onSubmit={handleSubmit}>
          <div className="grid grid--items-center">
            <img className="choice__logo" src={logo} alt="Tic Tac Toe" />
          </div>
          <div className="choice__content flow">
            <h2 className="choice__text font-size-200">Pick Player 1's mark</h2>
            <div className="choice__radios flex">
              {choices.map((choice, index) => (
                <div className="choice__radio-wrapper" key={index}>
                  <input
                    className="choice__radio"
                    id={`choice__radio--${choice}`}
                    name="choice__radio"
                    type="radio"
                    onChange={handleUserChoiceChange}
                    value={choice}
                    checked={userChoice === choice}
                  />
                  <label
                    className={`choice__label choice__label--${choice}`}
                    htmlFor={`choice__radio--${choice}`}
                  />
                </div>
              ))}
            </div>
            <p className="choice__remainder-text font-size-100">
              Remember : X Goes first
            </p>
          </div>
          <Button className="choice__btn btn--yellow" type="submit">
            New Game (vs CPU)
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Choice;
