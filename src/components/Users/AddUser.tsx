import { ChangeEvent, Fragment, useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import { Error } from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

interface AddUserProps {
  onAddUser: (userName: string, userAge: string) => void;
}

const AddUser: React.FC<AddUserProps> = (props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<Error | null>();

  const addUserHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredName = nameInputRef.current!.value;
    const enteredAge = ageInputRef.current!.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current!.value = "";
    ageInputRef.current!.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && <ErrorModal error={error} onConfirm={errorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
