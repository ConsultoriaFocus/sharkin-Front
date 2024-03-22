import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef(({ id, label, ...props }, ref) => {
  return (
     <div className={styles.container}>
       <label htmlFor={id} className={styles.label}>
         {label}
       </label>
       <input id={id} name={id} className={styles.input} ref={ref} {...props}></input>
     </div>
  );
 });
 
 Input.displayName = "Input";
 
 export default Input;