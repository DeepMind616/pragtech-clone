import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "./ToggleButton.module.css";

interface ParamType {
  texts: string[];
  active: 1 | 2 | number; //the index of the active button (1 is the one on the left, 2 is the right one)
  setActive: Dispatch<SetStateAction<number>>;
}

const ToggleButton: FC<ParamType> = ({ texts, active, setActive }) => {
  const handleChange = (index: number) => {
    setActive(index);
  };

  return (
    <div className={styles.root}>
      {texts.map((text, index) => {
        return (
          <button
            key={index}
            className={`${index + 1 === active && styles.active} ${styles.button}`}
            onClick={() => handleChange(index + 1)}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
};

export default ToggleButton;
