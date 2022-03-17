import styles from "./BodyBlackoutStyle.module.css";

const BodyBlackoutStyle = (props) => {
  return (
    <div
      className={styles["body-blackout-style"]}
      onClick={props.onClick}
    ></div>
  );
};

export default BodyBlackoutStyle;
