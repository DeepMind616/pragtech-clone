import { ButtonHTMLAttributes, FC } from "react";
import styles from "./Dots.module.css";

interface IDots extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

const Dots: FC<IDots> = ({ active, ...rest }) => {
  return (
    <button className={styles.root} {...rest}>
      <span
        className={`
            ${active ? "bg-primary-500" : "bg-gray-400"}
            ${styles.dot}
          `}
      ></span>
    </button>
  );
};

export default Dots;
