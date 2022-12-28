import React from 'react';
import '../style/Boton.css';

function Boton({ name, BtnClick, manejoClick }) {
  return (
    <button className={BtnClick ? 'Btn-click' : 'Btn-reboot'} onClick={manejoClick}>
      <span>{name}</span>
    </button>
  )
}

export default Boton;