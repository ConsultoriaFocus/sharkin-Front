import React, { useState, useEffect } from 'react';
import moment from 'moment';
import useCurrentTime from '../hooks/useCurrentTime';
import Dropdown from '../components/select/Dropdown';
import styles from '../pages/hometest.module.css'
import Display from '../components/display/Display';
import ButtonLogout from '../components/buttonLogout/Logout';

export default function Hometest() {
    const currentTime = useCurrentTime();
    const name = localStorage.getItem('name');
    const data = moment().format('DD/MM/YY');

    return (
    <div>
      <p>{name}</p>
      <p>{data}</p>
      <p>{currentTime}</p>
      <br />
      <div className={styles.display}>Isabelle Pires Vimercati</div>
      <Display mensagem = "Meu nome" />

      <button className={styles.button}>
        <p className={styles.btn_text}>Logout</p>
      </button>

      <ButtonLogout />
    </div>
  )
}
