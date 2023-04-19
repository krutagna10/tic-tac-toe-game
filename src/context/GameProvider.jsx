import { ChoiceContext, GameContext } from "./GameContext";
import { useReducer, useState } from "react";

const INITIAL_CHOICES = { user: "x", computer: "o" };
const INITIAL_SCORES = { user: 0, draw: 0, computer: 0 };

function choicesReducer(choices, action) {
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

function scoresReducer(scores, action) {
  switch (action.type) {
    case "increment-user-score": {
      return { ...scores, user: scores.user + 1 };
    }
    case "increment-draw-score": {
      return { ...scores, draw: scores.draw + 1 };
    }
    case "increment-computer-score": {
      return { ...scores, computer: scores.computer + 1 };
    }
    case "reset-scores": {
      return { user: 0, draw: 0, computer: 0 };
    }
    default: {
      throw new Error("Invalid action: " + action.type);
    }
  }
}

function GameProvider({ children }) {
  const [choices, choicesDispatch] = useReducer(
    choicesReducer,
    INITIAL_CHOICES
  );
  const [result, setResult] = useState("");
  const [scores, scoresDispatch] = useReducer(scoresReducer, INITIAL_SCORES);

  function handleChoice(userChoice, computerChoice) {
    choicesDispatch({
      type: "set-choices",
      userChoice: userChoice,
      computerChoice: computerChoice,
    });
  }

  function handleSwapChoices() {
    choicesDispatch({ type: "swap-choices" });
  }

  function handleResultChange(result) {
    setResult(result);
    handleUpdateScore(result);
  }

  function handleUpdateScore(result) {
    if (result === "win") {
      scoresDispatch({ type: "increment-user-score" });
    } else if (result === "draw") {
      scoresDispatch({ type: "increment-draw-score" });
    } else {
      scoresDispatch({ type: "increment-computer-score" });
    }
  }

  console.log(result);

  function handleResetScores() {
    scoresDispatch({ type: "reset-scores" });
  }

  const choiceContextValue = {
    choices: { ...choices },
    onChoice: handleChoice,
    onSwapChoices: handleSwapChoices,
  };

  const gameContextValue = {
    result: result,
    scores: scores,
    onResultChange: handleResultChange,
    onResetScores: handleResetScores,
  };

  return (
    <ChoiceContext.Provider value={choiceContextValue}>
      <GameContext.Provider value={gameContextValue}>
        {children}
      </GameContext.Provider>
    </ChoiceContext.Provider>
  );
}

export default GameProvider;
