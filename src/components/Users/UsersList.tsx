import Card from "../UI/Card";

import styles from "./UsersList.module.css";

export type User = {
  name: string;
  age: string;
  id: string;
};

interface UserListProps {
  users: User[];
}

const UsersList: React.FC<UserListProps> = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
