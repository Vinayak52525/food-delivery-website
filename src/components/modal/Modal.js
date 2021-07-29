import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const BackDrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return <div className="modalOverlay">{props.children}</div>;
};

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay> {props.children} </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
