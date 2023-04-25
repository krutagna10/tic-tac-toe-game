import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import "./Restart.css";

function Restart({ onRestart, onCancelRestart }) {
  return (
    <Modal>
      <div className="restart flow">
        <h1 className="font-size-500">Restart Game ?</h1>
        <div className="restart__btns flex flex--center flex--gap">
          <Button className="btn--silver" onClick={onCancelRestart}>
            Cancel
          </Button>
          <Button className="btn--yellow" onClick={onRestart}>
            Restart
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default Restart;
