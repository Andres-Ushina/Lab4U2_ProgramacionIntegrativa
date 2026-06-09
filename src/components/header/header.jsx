import React from 'react';
import styles from "./header.module.css";
import { Link } from 'react-router-dom';

export const Header = () =>  {
  return (
    <header className={styles['site-header']}>
      <div className={styles['header-inner']}>
        <span className={styles['site-title']}>Programación integrativa de componentes web</span>
        <nav className={styles['site-nav']}>
          <Link className={styles['nav-link']} to="/">Inicio</Link>
          <Link className={styles['nav-link']} to="/nosotros">Nosotros</Link>
          <Link className={styles['nav-link']} to="/contactos">Contactos</Link>
          <Link className={styles['nav-link']} to="/productos">Productos</Link>
          <Link className={styles['nav-link']} to="/personajes">Personajes</Link>
        </nav>
      </div>
    </header>
  )
};

