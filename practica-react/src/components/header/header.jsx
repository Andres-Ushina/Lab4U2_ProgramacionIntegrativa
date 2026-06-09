import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';

export const Header = () =>  {
  return (
    <>
      <header> Programación integrativa de componentes web</header>

      <nav>
        <Link className='Items-menu' to="/">Inicio </Link>
        <Link className='Items-menu' to="/nosotros">Nosotros </Link>
        <Link className='Items-menu' to="/contactos">Contactos </Link>

      </nav>
    
    </>
  )
};

