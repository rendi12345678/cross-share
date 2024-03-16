import React from "react";
import "../../assets/styles/modal.css";
import useContextHook from "../../hooks/useContextHook";

function Modal({ children, className }) {
  const { modalRef } = useContextHook();

  return (
    <div className="modal-overlay" ref={modalRef}>
      <div className={`modal-container ${className}`}>{children}</div>
    </div>
  );
}

export default Modal;
