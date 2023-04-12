import { useState } from "react";

function Choice() {
  const [choices, setChoices] = useState({ user: "x", computer: "o" });

  function handleRadioChange(event) {
    // Storing user choice in user choice variable
    const userChoice = event.target.dataset.choice;

    // Setting computer choice the opposite of user choice
    const computerChoice = userChoice === "x" ? "o" : "x";

    // Setting choices
    setChoices({ user: userChoice, computer: computerChoice });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Pick your choice</h2>
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
