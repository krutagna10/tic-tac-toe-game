import GameContext from "../../context/GameContext";
import React, { useContext } from "react";
import xIcon from "../../assets/images/x-icon.png";
import oIcon from "../../assets/images/o-icon.png";
import "./GameBoard.css";

const icons = {
  x: `url(${xIcon})`,
  o: `url(${oIcon})`,
};

function GameBoard({ onUserChoice, userArray, computerArray }) {
  const { choices } = useContext(GameContext);
  console.log(choices);

  function isIndexPresent(index) {
    let set = new Set([...userArray, ...computerArray]);
    return set.has(index);
  }

  return (
    <div className="game__btns">
      {new Array(9).fill(0).map((element, index) => (
        <React.Fragment key={index}>
          {isIndexPresent(index) ? (
            <button
              className="game__btn clicked"
              style={{
                backgroundImage: userArray.includes(index)
                  ? icons[choices.user]
                  : icons[choices.computer],
              }}
            />
          ) : (
            <button
              className="game__btn"
              onClick={() => {
                onUserChoice(index);
              }}
              value={index}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default GameBoard;
