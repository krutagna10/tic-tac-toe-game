import Modal from "../UI/Modal/Modal";

function Restart({ onRestart, onCancelRestart }) {
  return (
    <Modal>
      <table>
        <thead>
          <tr>
            <th>Cancel Button</th>
            <th>Restart Button</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button onClick={onCancelRestart}>Cancel</button>
            </td>
            <td>
              <button onClick={onRestart}>Restart</button>
            </td>
          </tr>
        </tbody>
      </table>
    </Modal>
  );
}

export default Restart;
