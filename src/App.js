import "./App.css";
import UserInput from "./components/User/UserInput";
import UserList from "./components/User/UserList";

function App() {
  return (
    <div>
      <UserInput></UserInput>
      <hr></hr>
      <UserList></UserList>
    </div>
  );
}

export default App;
