import React from "react";
import Card from "../../components/form/card/Card";
import Input from "../../components/form/Input/Input";
import ButtonPrimary from "../../components/buttonPrimary/ButtonPrimary";
import ButtonSecondary from "../../components/buttonSecondary/ButtonSecondary";
import styles from "../Check/Check.module.css";

export default function Check() {
  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <Card>
          <div className={styles.container}>
            <Input />
            <div className={styles.label}>
              <Input />
              <Input />
            </div>
            <div className={styles.button}>
              <ButtonPrimary text="Shark-in" />
              <ButtonSecondary text="Shark-out" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
