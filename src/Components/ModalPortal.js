import React from "react";
import ReactDOM from "react-dom";
import "./ModalPortal.css";

const ModalPortal = ({ children, isOpen, onRequestClose }) => {
  // Si el modal no está abierto, no renderizamos nada
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="underlay" onClick={onRequestClose}></div>
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById("modal-root") // Asegúrate de tener un div con este id en tu index.html
  );
};

export default ModalPortal;
