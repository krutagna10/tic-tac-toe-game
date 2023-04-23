import Backdrop from "../Backdrop/Backdrop";
import ReactDOM from "react-dom";
import "./Modal.css";

const element = document.getElementById("modal");

function Modal({ children }) {
  const modalElement = (
    <section className="modal grid grid--items-center">
      <Backdrop />
      {children}
    </section>
  );

  return ReactDOM.createPortal(modalElement, element);
}

export default Modal;
