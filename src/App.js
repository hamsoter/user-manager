import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import BodyBlackoutStyle from "./components/UI/BodyBlackoutStyle";
import UserInput from "./components/User/UserInput";
import UserList from "./components/User/UserList";

function App() {
  const userArr = [
    {
      id: "e1",
      name: "냐옹이",
      age: 8,
    },
    {
      id: "e2",
      name: "멍멍이",
      age: 4,
    },
    {
      id: "e3",
      name: "햄스터",
      age: 1,
    },
  ];

  const [users, setUsers] = useState(userArr);

  // 서브밋 유효성
  const [invalid, setInvalid] = useState(true);

  // 서브밋 에러명
  const [error, setError] = useState("");

  // 유저 추가
  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <UserInput
        onAddUser={addUserHandler}
        onInvalid={setInvalid}
        onError={setError}
      />
      <UserList items={users}></UserList>
      {!invalid && (
        <BodyBlackoutStyle onInvalid={setInvalid}></BodyBlackoutStyle>
      )}
      {!invalid && <Modal errorData={error} onInvalid={setInvalid} />}
    </div>
  );
}

export default App;
