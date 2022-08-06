import React from 'react';
import '../styles/boton.css';

function Boton ({texto, esBotondeClic, manejarClic}){
    return(
        <button
          className={esBotondeClic ? 'botonclic' : 'botonreinicio'}
          onClick={manejarClic} >
            {texto}
        </button>
    );
}

export default Boton;