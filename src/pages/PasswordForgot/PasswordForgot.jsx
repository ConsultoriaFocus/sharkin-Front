import React from "react";
import Card from "../../components/form/card/Card";
import Title from "../../components/title/Title";
import Input from "../../components/form/Input/Input";
import ButtonPrimary from "../../components/buttonPrimary/ButtonPrimary";
import styles from "../PasswordForgot/Password.module.css";

export default function PasswordForgot() {
  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <Card>
          <div className={styles.container}>
            <div className={styles.title}>
              <Title title="Troca senha" />
            </div>

            <div className={styles.labels}>
              <Input label="Email" id="nome" type="text" />
              <Input label="Nova senha" id="email" type="email" />
              <Input label="Nova senha" id="password" type="text" />
            </div>
            <div className={styles.button}>
              <ButtonPrimary text="Salvar" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
