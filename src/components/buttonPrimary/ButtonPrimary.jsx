import React from "react";
import styles from "./ButtonPrimary.module.css";

const ButtonPrimary = (props) => {
  return (
    <button className={styles.button}>
      <p className={styles.text}>{props.text}</p>
    </button>
  );
};

export default ButtonPrimary;
