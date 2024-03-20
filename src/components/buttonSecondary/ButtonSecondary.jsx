import React from "react";
import styles from "./ButtonSecondary.module.css";

const ButtonSecondary = ({text, ...props}) => {
  return (
    <button className={styles.button} {...props}>
      <p className={styles.text}>{text}</p>
    </button>
  );
};

export default ButtonSecondary;
