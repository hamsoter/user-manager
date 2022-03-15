import React from "react";
import styles from "./User.module.css";

const User = (props) => {
  return (
    <li className={styles.li}>
      <span>{props.name}</span>
      <span className={styles.age}>{props.age}세</span>
    </li>
  );
};

export default User;
