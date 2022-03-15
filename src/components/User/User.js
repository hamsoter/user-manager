import React from "react";

const User = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <span>({props.age}세)</span>
    </li>
  );
};

export default User;
