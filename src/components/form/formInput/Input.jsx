import React from "react";
import styles from "./Input.module.css";

const Input = ({ id, label, setValue, ...props }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input id={id} name={id} className={styles.input} {...props}></input>
    </div>
  );
};

export default Input;
