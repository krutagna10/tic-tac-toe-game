import xIcon from "../../assets/icon-x.svg";
import oIcon from "../../assets/icon-o.svg";
import { ChoiceContext } from "../../context/GameContext";
import { useContext } from "react";
import "./GameBoard.css";

const icons = {
  x: `url(${xIcon})`,
  o: `url(${oIcon})`,
};

function GameBoard({ userArray, computerArray, onUserChoice }) {
  const { choices } = useContext(ChoiceContext);

  function isIndexPresent(index) {
    const set = new Set([...userArray, ...computerArray]);
    return set.has(index);
  }

  function handleClick() {
    console.log("Hello World");
  }

  console.log({ userArray, computerArray });

  return (
    <div className="game__btns grid">
      {[...new Array(9)].map((_, index) =>
        isIndexPresent(index) ? (
          <button
            className="game__btn clicked"
            style={{
              backgroundImage: userArray.includes(index)
                ? icons[choices.user]
                : icons[choices.computer],
            }}
            key={index}
          />
        ) : (
          <button
            className="game__btn"
            onClick={() => {
              onUserChoice(index);
            }}
            key={index}
          />
        )
      )}
    </div>
  );
}

export default GameBoard;
