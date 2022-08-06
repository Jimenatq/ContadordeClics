import './App.css';
import logoReact from './img/logo192.png';
import Boton from './components/boton';
import Contador from './components/contador';
import { useState } from 'react';

function App() {

  const [numClics, setnumClics] = useState(0);


  const manejarClic = () =>{
    setnumClics(numClics + 1);
  }

  const reiniciarContador = () =>{
    setnumClics(0);
  }

  return (
    <div className="App">
      <h1>Contador de Clicks en React</h1>
      <div className='react-logo-contenedor'>
        <img
          className='react-logo'
          src={logoReact}
          alt='Logo de React' />
      </div>
      <div className='contenedor-contador'>
        <Contador
          numClics={numClics} />
        <Boton
          texto='Click'
          esBotondeClic= {true}
          manejarClic= {manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotondeClic={false}
          manejarClic= {reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
