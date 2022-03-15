import React from "react";
import Card from "./UI/Card";

const Modal = (props) => {
  // 기대하는 값

  return (
    <Card>
      <h2>{props.errorData.type}</h2>
      <p>{props.errorData.message}</p>
    </Card>
  );
};

export default Modal;
