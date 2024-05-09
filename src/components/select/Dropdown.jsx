import React, { useState } from "react";
import styles from "./Dropdown.module.css";

function Dropdown({ selected, setSelected }) {
  const [isActive, setActive] = useState(false);
  const options = ["Sim", "Não"];

    console.log(selected);

  return (
    <div className={styles.dropdown}>
      <div className={styles.btn} onClick={(e) => setActive(!isActive)}>
        {selected ? selected : "Cobrindo plantão?"}
      </div>
      {isActive && (
        <div className={styles.content}>
            {options.map(option => (<div className={styles.item} onClick={(e) => {setSelected(option); setActive(false)}}>{option}</div>))}
          
        </div>
      )}
    </div>
  );
}

export default Dropdown;
