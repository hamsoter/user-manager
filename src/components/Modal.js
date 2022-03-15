import React from "react";
import Card from "./UI/Card";
import styles from "./Modal.module.css";

const Modal = (props) => {
  // 기대하는 값

  return (
    <div id={styles.modal}>
      <h2 className={styles.type}>{props.errorData.type}</h2>
      <p className={styles.message}>{props.errorData.message}</p>
    </div>
  );
};

export default Modal;
