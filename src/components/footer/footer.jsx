import React from 'react';
import styles from "./footer.module.css";

export const Footer = () => {
  const anioActual = new Date().getFullYear();

  return (
      <footer className={styles.module}>
          <p className={styles.texto}>Todos los derechos reservados @ ESPE {anioActual}</p>
      </footer>
  )
} 

