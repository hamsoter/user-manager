import React, { useState } from "react";
import Card from "../UI/Card";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
    props.onInvalid(true);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
    props.onInvalid(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newData = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    };

    // 유효성필터1:  input이 비어있을 때
    if (newData.name === "" || newData.age === "") {
      console.log("이름과 나이를 입력해주세요.");
      props.onInvalid(false);
      return;
    }

    // 유효성필터2: age < 0
    if (newData.age < 0) {
      console.log("나이는 음수일 수 없습니다.");
      props.onInvalid(false);
      return;
    }

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
