import { createContext } from "react";

const GameContext = createContext({
  choices: {},
  onChoice: (userChoice, computerChoice) => {},
});

export default GameContext;
