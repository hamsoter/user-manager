import React from "react";
import Card from "./UI/Card";

const Modal = (props) => {
  const errorName = "에러이름";
  const message = "message";
  return (
    <Card>
      <h2>{errorName}</h2>
      <p>{message}</p>
    </Card>
  );
};

export default Modal;
