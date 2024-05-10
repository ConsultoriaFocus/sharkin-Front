import React from "react";
import styles from "./Logout.module.css";

const ButtonLogout = (props) => {
  return (
    <button className={styles.button} {...props}>
      <p className={styles.text}>Logout</p>
    </button>
  );
};

export default ButtonLogout;
