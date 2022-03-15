import React from "react";
import Card from "../UI/Card";

const UserInput = () => {
  return (
    <form>
      <Card>
        <p>Username</p>
        <input type="text"></input>
        <p>Age (Years)</p>
        <input type="number"></input>
      </Card>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserInput;
