import React from 'react';
import "./footer.css";

export const Footer = () => {
  const anioActual = new Date().getFullYear();

  return (
    <>
        <footer>
            <p>Todos los derechos reservados @ ESPE {anioActual}</p>
        </footer>
    
    </>
  )
}

