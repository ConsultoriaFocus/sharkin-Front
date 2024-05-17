import React from "react";
import ButtonLogout from "../buttonLogout/Logout";
import styles from "../header/header.module.css"


const Header = () => {

    return(
        <header className={styles.header}>
        <h1 className={styles.titulo}>Cadastrados</h1>
        <ButtonLogout/>
      </header>
    );
}

export default Header;