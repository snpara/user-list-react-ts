import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { User } from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState<User[]>([]);

  const addUserHandler = (userName: string, userAge: string) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
