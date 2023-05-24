import { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={styles.button} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
