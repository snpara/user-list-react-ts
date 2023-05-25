import { Fragment } from "react";
import Button from "./Button";
import Card from "./Card";
import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";

export type Error = {
  title: string;
  message: string;
};

interface ErrorModalProps {
  error: Error;
  onConfirm: () => void;
}

interface BackdropProps {
  onConfirm: () => void;
}

interface ModalOverlayProps {
  error: Error;
  onConfirm: () => void;
}

const Backdrop: React.FC<BackdropProps> = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay: React.FC<ModalOverlayProps> = (props) => {
  return (
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
  );
};

const ErrorModal: React.FC<ErrorModalProps> = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay error={props.error} onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </Fragment>
  );
};

export default ErrorModal;
