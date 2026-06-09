import PropTypes from "prop-types";
import styles from "./card.module.css";
import { useState } from "react";

export const Card = ({ nombre = "Andres", edad }) => {
    const [mostraredad, setMostrarEdad] = useState(false);

    return (
      <div className={styles.container}>
         <h1 className={styles.titulo}>{nombre} y es {edad >= 18 ? 'Es mayor de edad' : 'Es menor de edad'}</h1>
         <h2>{mostraredad ? edad : 'Edad Oculta'}</h2>
         <button onClick={() => setMostrarEdad(!mostraredad)}>
           {mostraredad ? 'Ocultar edad' : 'Mostrar edad'}
         </button>
      </div>
    );
};

Card.propTypes = {
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired
};
