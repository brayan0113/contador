import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import ImageLogo from './img/logo.png'
import { useState } from 'react';

function App() {
  //Funciones
  const [contar, setContar] = useState(0);

  const manejarClick = () => {
    console.log("click");
    setContar(contar + 1);
  };

  const rebootContador = () => {
    console.log("reboot");
    setContar(0)
  };

  //Vista
  return (
    <div className="App">
      <div className="ias-logo-container">
        <img className="ias-logo" src={ImageLogo} alt="" />
      </div>
      <div className="container-main">
        <Contador contar={contar} />
        <Boton name="Click" BtnClick={true} manejoClick={manejarClick} />
        <Boton name="Reiniciar" BtnClick={false} manejoClick={rebootContador} />
      </div>
    </div>
  );
}

export default App;
