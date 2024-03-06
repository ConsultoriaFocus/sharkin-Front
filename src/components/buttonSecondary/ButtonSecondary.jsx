import React from "react";
import styles from "./ButtonSecondary.module.css";

const ButtonSecondary = (props) => {
  return (
    <button className={styles.button}>
      <p className={styles.text}>{props.text}</p>
    </button>
  );
};

export default ButtonSecondary;
