import GameContext from "./GameContext";
import { useReducer, useState } from "react";

const INITIAL_CHOICES = { user: "x", computer: "o" };

function reducer(choicesState, action) {
  switch (action.type) {
    case "set-choices": {
      return { user: action.userChoice, computer: action.computerChoice };
    }
    default: {
      throw new Error("Invalid action: " + action.type);
    }
  }
}

function GameProvider({ children }) {
  const [choices, dispatch] = useReducer(reducer, INITIAL_CHOICES);

  const contextValue = {
    choices: { ...choices },
    onChoice: handleChoice,
  };

  function handleChoice(userChoice, computerChoice) {
    dispatch({
      type: "set-choices",
      userChoice: userChoice,
      computerChoice: computerChoice,
    });
  }

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
}

export default GameProvider;
