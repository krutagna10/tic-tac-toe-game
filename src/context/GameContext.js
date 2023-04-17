import { createContext } from "react";

const GameContext = createContext({
  choices: {},
  onChoice: (userChoice, computerChoice) => {},
  onSwapChoices: () => {},
});

export default GameContext;
