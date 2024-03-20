import React from "react";
import styles from "./ButtonPrimary.module.css";

const ButtonPrimary = ({text, ...props}) => {
  return (
    <button className={styles.button} {...props}>
      <p className={styles.text}>{text}</p>
    </button>
  );
};

export default ButtonPrimary;
