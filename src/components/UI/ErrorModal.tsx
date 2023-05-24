import Button from "./Button";
import Card from "./Card";

import styles from "./ErrorModal.module.css";

export type Error = {
  title: string;
  message: string;
};

interface ErrorModalProps {
  error: Error;
  onConfirm: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.error.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.error.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={props.onConfirm}>
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
