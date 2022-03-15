import React from "react";
import Card from "../UI/Card";
import User from "./User";

const UserList = (props) => {
  return (
    <Card>
      <ul>
        <User></User>
        <User></User>
        <User></User>
        <User></User>
        <User></User>
        <User></User>
      </ul>
    </Card>
  );
};

export default UserList;
