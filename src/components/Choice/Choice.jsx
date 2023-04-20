import Button from "../UI/Button/Button";
import logo from "../../assets/logo.svg";
import "./Choice.css";
import { useState } from "react";

function Choice() {
  const [userChoice, setUserChoice] = useState("");

  function handleUserChoiceChange(event) {
    console.log(event.target.value);
  }

  return (
    <div className="choice grid grid--items-center">
      <img className="choice__logo" src={logo} alt="Tic Tac Toe" />

      <form className="choice__form flow">
        <div className="choice__radio-wrapper">
          <p className="choice__radio-text">Pick Player 1's mark</p>
          <div className="division">
            <div className="inner-division">
              <input
                className="choice__radio"
                id="choice__radio-x"
                onChange={handleUserChoiceChange}
                type="radio"
                name="choice__radio"
                value="x"
              />
              <label className="choice__label" htmlFor="choice__radio-x" />
            </div>
            <div className="inner-division">
              <input
                className="choice__radio"
                id="choice__radio-o"
                onChange={handleUserChoiceChange}
                type="radio"
                name="choice__radio"
                value="o"
              />
              <label className="choice__label" htmlFor="choice__radio-o" />
            </div>
          </div>
        </div>
        <Button className="choice__btn btn--yellow" type="submit">
          New Game (vs CPU)
        </Button>
        <Button className="choice__btn btn--silver" type="submit">
          New Game (vs CPU)
        </Button>
      </form>
    </div>
  );
}

export default Choice;
