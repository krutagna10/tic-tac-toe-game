import GameContext from "./GameContext";
import { useReducer, useState } from "react";

const INITIAL_CHOICES = { user: "x", computer: "o" };

function reducer(choices, action) {
  switch (action.type) {
    case "set-choices": {
      return { user: action.userChoice, computer: action.computerChoice };
    }
    case "swap-choices": {
      return { user: choices.computer, computer: choices.user };
    }
    default: {
      throw new Error("Invalid action: " + action.type);
    }
  }
}

function GameProvider({ children }) {
  const [choices, dispatch] = useReducer(reducer, INITIAL_CHOICES);

  function handleChoice(userChoice, computerChoice) {
    dispatch({
      type: "set-choices",
      userChoice: userChoice,
      computerChoice: computerChoice,
    });
  }

  function handleSwapChoices() {
    dispatch({ type: "swap-choices" });
  }

  const value = {
    choices: { ...choices },
    onChoice: handleChoice,
    onSwapChoices: handleSwapChoices,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export default GameProvider;
