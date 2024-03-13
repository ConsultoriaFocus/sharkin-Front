import React from "react";
import Card from "./card/Card";
import Title from "../title/Title";
import LogoFocus from "../../assets/LogoFocus.svg";
import FormInput from "../../components/form/formInput/FormInput";
import ButtonPrimary from "../../components/buttonPrimary/ButtonPrimary";
import ButtonSecondary from "../../components/buttonSecondary/ButtonSecondary";
import styles from "../form/Trem.module.css";

const Trem = () => {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <Card>

            {/* Aqui dá pra fragmentar */}
          <div className={styles.titulo}>
            <img
              src={LogoFocus}
              style={{ width: "90px", height: "95px" }}
            ></img>
            <Title title="Sharkin" />
          </div>

          <FormInput title="Email" />
          <FormInput title="Senha" />

          <div className={styles.buton}>
            <ButtonPrimary text="Entrar" />
            <ButtonSecondary text="Trocar Senha" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Trem;
