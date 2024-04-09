import React from "react";
import Card from "../../components/form/card/Card";
import Title from "../../components/title/Title";
import Input from "../../components/form/Input/Input";
import ButtonPrimary from "../../components/buttonPrimary/ButtonPrimary";
import styles from "../AddUser/index.module.css";

function AddUser() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Card>
          <div className={styles.title}>
            <Title title="Adicionar" />
          </div>
          <div className={styles.labels}>
            <Input label="Nome" id="nome" type="text" />
            <Input label="Email" id="email" type="email" />
            <Input label="Senha" id="senha" type="password" />
          </div>
          <div className={styles.button}>
            <ButtonPrimary text="Cadastrar" />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AddUser;
