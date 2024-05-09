import {React, useState} from "react";
import Card from "../../components/form/card/Card";
import Input from "../../components/form/Input/Input";
import ButtonPrimary from "../../components/buttonPrimary/ButtonPrimary";
import ButtonSecondary from "../../components/buttonSecondary/ButtonSecondary";
import styles from "../Check/Check.module.css";
import Dropdown from "../../components/select/Dropdown";
import Display from "../../components/display/Display";
import useCurrentTime from "../../hooks/useCurrentTime";
import moment from 'moment';



export default function Check() {
  const [selected, setSelected] = useState("");
  const data = moment().format('DD/MM/YY');
  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <Card>
          <div className={styles.container}>
            <Display mensagem='teste' />
            <Dropdown selected={selected} setSelected={setSelected} />
            <div className={styles.label}>
              <Display mensagem={useCurrentTime()}/>
              <Display mensagem={data}/>
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
