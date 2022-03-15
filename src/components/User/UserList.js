import React from "react";
import Card from "../UI/Card";
import User from "./User";

const UserList = (props) => {
  return (
    <Card>
      <h3>총 {props.items.length}명의 유저가 있어요!</h3>
      <ul>
        {props.items.map((user) => {
          return <User key={user.id} name={user.name} age={user.age}></User>;
        })}
      </ul>
    </Card>
  );
};

export default UserList;
