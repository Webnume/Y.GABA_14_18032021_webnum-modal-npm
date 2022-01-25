import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import closeModal from "./close_modal.png";

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  if (!props.show) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <img
            className="close-modal"
            src={closeModal}
            alt="close-modal"
            onClick={props.onClose}
          />
        </div>
        <div className="modal-body">{props.children}</div>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default Modal;
