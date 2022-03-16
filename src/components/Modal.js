import React from "react";
import styles from "./Modal.module.css";
import Button from "./UI/Button";

const Modal = (props) => {
  // 기대하는 값

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

export default Modal;
