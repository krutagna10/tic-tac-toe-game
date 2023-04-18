import { createContext } from "react";

const ChoiceContext = createContext({
  choices: {},
  onChoice: (userChoice, computerChoice) => {},
  onSwapChoices: () => {},
});

const GameContext = createContext({
  result: "",
  scores: {},
  onResultChange: (result) => {},
});

export { ChoiceContext, GameContext };
