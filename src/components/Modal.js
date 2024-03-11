import React from "react";
import "../assets/styles/modal.css";

function Modal({ children, className }) {
  return (
    <div className="modal-overlay">
      <div className={`modal-container ${className}`}>{children}</div>
    </div>
  );
}

export default Modal;
