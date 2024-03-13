import React from "react";
import Card from "../../components/form/card/Card";
import Title from "../../components/title/Title";
import LogoFocus from "../../assets/LogoFocus.svg";
import FormInput from "../../components/form/formInput/FormInput";
import ButtonPrimary from "../../components/buttonPrimary/ButtonPrimary";
import ButtonSecondary from "../../components/buttonSecondary/ButtonSecondary";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Card>
          <div className={styles.titulo}>
            <img
              src={LogoFocus}
              style={{ width: "90px", height: "95px" }}
            ></img>
            <Title title="Sharkin" />
          </div>

          <FormInput title="Email" />
          <FormInput title="Senha" />

          <div className={styles.button}>
            <ButtonPrimary text="Entrar" />
            <ButtonSecondary text="Trocar Senha" />
          </div>
        </Card>

        <div className={styles.textos}> {/* FIX: Isso provavelmente será puxado de uma api */}
          <p>Letícia Urbano Pessanha 18/03/2024 15:00</p>
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
