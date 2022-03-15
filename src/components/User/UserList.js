import React from "react";
import Card from "../UI/Card";
import User from "./User";

const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.items.map((user) => {
          return <User key={user.id} name={user.name} age={user.age}></User>;
        })}
      </ul>
    </Card>
  );
};

export default UserList;
