import React from "react";
import ReactDOM from "react-dom";
import "./Backdrop.css";

const element = document.getElementById("backdrop");

function Backdrop() {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<div className="backdrop" />, element)}
    </React.Fragment>
  );
}

export default Backdrop;
