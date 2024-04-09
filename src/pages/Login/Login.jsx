import React from "react";

import Card from "../../components/form/card/Card";
import LogoFocus from "../../assets/LogoFocus.svg";
import FormLogin from "../../components/form/formLogin/FormLogin";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.card}>
          <Card>
            <div className={styles.titulo}>
              <img
                src={LogoFocus}
                style={{ width: "90px", height: "95px" }}
              ></img>
              <h1 className={styles.h1}>Sharkin</h1>
            </div>

            <FormLogin />
            <Link to="/Add" className={styles.a}>Cadastrar</Link>
          </Card>
        </div>

        <div className={styles.textos}>
          {/* FIX: Isso provavelmente será puxado de uma api */}
          <p>Letícia Urbano Pessanha 18/03/2024 15:00</p>
          <p>Letícia Urbano Pessanha 18/03/2024 15:00</p>
          <p>Letícia Urbano Pessanha 18/03/2024 15:00</p>
          <p>Letícia Urbano Pessanha 18/03/2024 15:00</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
