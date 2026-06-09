import styles from "./personaje.module.css";
import React from 'react'
import PropTypes from "prop-types";
import { Card } from "../card/card";

export const PersonajeCard = ({nombre, especie, imagen}) => {
  return (
    <div className={styles['personaje-card']}>
      <img className={styles['personaje-img']} src={imagen} alt={nombre} />
      <h3 className={styles['personaje-titulo']}>{nombre}</h3>
      <p>{especie}</p>
    </div>
  )
}


PersonajeCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  especie: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
}
