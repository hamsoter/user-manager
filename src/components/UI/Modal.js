import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import Button from "./Button";
import BodyBlackoutStyle from "./BodyBlackoutStyle";

const ModalOverlay = (props) => {
  return (
    <div id={styles.modal}>
      <h2 className={styles.type}>{props.errorData.type}</h2>
      <p className={styles.message}>{props.errorData.message}</p>
      <Button
        className={styles.button}
        onClick={() => {
          props.onInvalid(true);
        }}
      >
        알갯슴...
      </Button>
    </div>
  );
};

// 포탈 연결
const Modal = (props) => {
  return (
    <React.Fragment>
      {/* <BodyBlackoutStyle onClick={props.onInvalid} /> */}

      {ReactDOM.createPortal(
        <BodyBlackoutStyle onClick={props.onInvalid} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          errorData={props.errorData}
          onInvalid={props.onInvalid}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
