import { FC, ReactNode } from "react";
import styles from "./Container.module.css";

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Container;
