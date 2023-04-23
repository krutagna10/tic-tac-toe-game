import React from "react";
import ReactDOM from "react-dom";
import "./Backdrop.css";

const element = document.getElementById("backdrop");

function Backdrop() {
  return ReactDOM.createPortal(<div className="backdrop" />, element);
}

export default Backdrop;
