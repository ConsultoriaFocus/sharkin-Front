import React from "react";
import styles from "./FormInput.module.css";

const FormInput = (props) => {
  return (
    <div className={styles.container}>
        <label className={styles.label}>{props.title}</label>  
        <input className={styles.input} type="text"></input>  
    </div>
  );
};

export default FormInput;
