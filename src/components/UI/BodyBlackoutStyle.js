import styles from "./BodyBlackoutStyle.module.css";

const BodyBlackoutStyle = (props) => {
  return (
    <div
      className={styles["body-blackout-style"]}
      onClick={() => props.onInvalid(true)}
    ></div>
  );
};

export default BodyBlackoutStyle;
