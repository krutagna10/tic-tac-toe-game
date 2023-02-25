import Grid from "../../../layouts/Grid/Grid";
import "./BoardBody.css";

import xIcon from "../../../assets/icon-x.svg";
import oIcon from "../../../assets/icon-o.svg";

const icons = {
  x: `url(${xIcon})`,
  o: `url(${oIcon})`,
};

const BoardBody = ({
  user,
  computer,
  userArray,
  computerArray,
  onUserChoice,
}) => {
  const indexExists = (index) => {
    // Searching for index (Used set for faster performance)
    const indices = new Set([...userArray, ...computerArray]);
    return indices.has(index);
  };

  return (
    <Grid className="game__board-body grid--3-columns grid--gap">
      {[...new Array(9)].map((_, index) =>
        indexExists(index) ? (
          <button
            key={index}
            className="game__btn clicked"
            style={{
              backgroundImage: userArray.includes(index)
                ? icons[user.choice]
                : icons[computer.choice],
            }}
          />
        ) : (
          <button
            key={index}
            className="game__btn"
            onClick={() => {
              onUserChoice(index);
            }}
          />
        )
      )}
    </Grid>
  );
};

export default BoardBody;
