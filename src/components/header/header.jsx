import React, { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles["site-header"]}>
      <div className={styles["header-inner"]}>
        <span className={styles["site-title"]}>Programación integrativa de componentes web - Laboratorio U2_Andres Ushiña</span>

        <button className={styles["menu-toggle"]} onClick={toggleMenu}> ☰ Menú</button>

        <nav className={`${styles["site-nav"]} ${menuOpen ? styles.open : ""}`}>
          <Link className={styles["nav-link"]} to="/" onClick={closeMenu}>Inicio</Link>

          <Link
            className={styles["nav-link"]}
            to="/nosotros"
            onClick={closeMenu}
          >
            Nosotros
          </Link>

          <Link
            className={styles["nav-link"]}
            to="/contactos"
            onClick={closeMenu}
          >
            Contactos
          </Link>

          <Link
            className={styles["nav-link"]}
            to="/productos"
            onClick={closeMenu}
          >
            Productos
          </Link>

          <Link
            className={styles["nav-link"]}
            to="/personajes"
            onClick={closeMenu}
          >
            Personajes
          </Link>
        </nav>
      </div>
    </header>
  );
};