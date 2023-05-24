import { ChangeEvent, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

interface AddUserProps {
  onAddUser: (userName: string, userAge: string) => void;
}

const AddUser: React.FC<AddUserProps> = (props) => {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      <ErrorModal title="An error occured!" message="Something went wrong!" />
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
