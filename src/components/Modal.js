import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  // 기대하는 값

  return (
    <div id={styles.modal}>
      <h2 className={styles.type}>{props.errorData.type}</h2>
      <p className={styles.message}>{props.errorData.message}</p>
      <button
        className={styles.button}
        onClick={() => {
          props.onInvalid(true);
        }}
      >
        알갯슴...
      </button>
    </div>
  );
};

export default Modal;
