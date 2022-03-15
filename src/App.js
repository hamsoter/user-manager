import { useState } from "react";
import "./App.css";
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

  return (
    <div>
      <UserInput></UserInput>
      <hr></hr>
      <UserList items={users}></UserList>
    </div>
  );
}

export default App;
