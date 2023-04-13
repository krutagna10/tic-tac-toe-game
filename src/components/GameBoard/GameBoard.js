import "./GameBoard.css";

function GameBoard() {
  return (
    <div className="game__btns">
      {new Array(9).fill(0).map((element, index) => (
        <button className="game__btn" key={index} value={index} />
      ))}
    </div>
  );
}

export default GameBoard;