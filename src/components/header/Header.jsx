import React from "react";
import ButtonLogout from "../buttonLogout/Logout";
import styles from "../header/header.module.css";
import UserServices from "../../services/UserService";
import { useNavigate } from "react-router-dom";

const userService = new UserServices();

const Header = () => {
  const navigate = useNavigate();
  const Logout = async () => {
    await userService.logout();

    navigate("*");
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.titulo}>Cadastrados</h1>
      <ButtonLogout onClick={Logout} />
    </header>
  );
};

export default Header;
