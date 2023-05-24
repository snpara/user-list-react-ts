import Button from "./Button";
import Card from "./Card";

import styles from "./ErrorModal.module.css";

interface ErrorModalProps {
  title: string;
  message: string;
}

const ErrorModal: React.FC<ErrorModalProps> = (props) => {
  return (
    <div>
      <div className={styles.backdrop} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button">Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
