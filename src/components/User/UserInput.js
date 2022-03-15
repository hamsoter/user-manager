import React, { useState } from "react";
import Card from "../UI/Card";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newData = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    };

    props.onAddUser(newData);

    setEnteredAge("");
    setEnteredName("");
  };

  return (
    <form onSubmit={submitHandler}>
      <Card>
        <p>Username</p>
        <input
          type="text"
          onChange={nameChangeHandler}
          value={enteredName}
        ></input>

        <p>Age (Years)</p>
        <input
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
          step="1"
        ></input>
      </Card>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserInput;
