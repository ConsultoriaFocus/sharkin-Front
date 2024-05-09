import React from "react";
import styles from "./Display.module.css";

const Display = ({mensagem}) => {
return(
    <div className={styles.display}>{mensagem}</div>
)
};

export default Display;