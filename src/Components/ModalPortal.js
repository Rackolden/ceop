import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const ModalPortal = ({ children, isOpen, onRequestClose }) => {
  // Si el modal no está abierto, no renderizamos nada
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={onRequestClose}>Cerrar</button>
      </div>
    </div>,
    document.getElementById("modal-root") // Asegúrate de tener un div con este id en tu index.html
  );
};

export default ModalPortal;
