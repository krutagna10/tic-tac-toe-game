import { ChoiceContext } from "../../context/GameContext";
import { useState } from "react";
import { useContext } from "react";

function Choice({ onStartGame }) {
  const [choices, setChoices] = useState({ user: "x", computer: "o" });
  const { onChoice } = useContext(ChoiceContext);

  function handleRadioChange(event) {
    // Storing user choice in user choice variable
    const userChoice = event.target.value;

    // Setting computer choice the opposite of user choice
    const computerChoice = userChoice === "x" ? "o" : "x";

    // Setting choices
    setChoices({ user: userChoice, computer: computerChoice });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onChoice(choices.user, choices.computer);
    onStartGame();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Pick your choice</h2>
      <h4 className="text--center">(X Goes First)</h4>
      <table>
        <thead>
          <tr>
            <th>X Choice Button</th>
            <th>O Choice Button</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label>
                X :{" "}
                <input
                  type="radio"
                  onChange={handleRadioChange}
                  name="input__radio"
                  value="x"
                  checked={choices.user === "x"}
                />
              </label>
            </td>
            <td>
              <label>
                O :{" "}
                <input
                  type="radio"
                  onChange={handleRadioChange}
                  name="input__radio"
                  value="o"
                />
              </label>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button type="submit">Start Game</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default Choice;
