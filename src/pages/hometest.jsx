import React, { useState, useEffect } from 'react';
import moment from 'moment';
import useCurrentTime from '../hooks/useCurrentTime';
import Dropdown from '../components/select/Dropdown';

export default function Hometest() {
    const currentTime = useCurrentTime();
    const name = localStorage.getItem('name');
    const data = moment().format('DD/MM/YY');


    const [selected, setSelected] = useState("");

    return (
    <div>
      <p>{name}</p>
      <p>{data}</p>
      <p>{currentTime}</p>
      <br />
      <Dropdown selected={selected} setSelected={setSelected}/>
    </div>
  )
}
