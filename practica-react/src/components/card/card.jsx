import "./card.css";
import PropTypes from "prop-types";
import { useState } from "react";

export const Card = ({ nombre = "Andres", edad }) => {
    const [mostraredad, setMostrarEdad] = useState(false);




    return <div>
         <h1> {nombre} y es {edad>=18 ? 'Es mayor de edad' : 'Es menor de edad'}</h1>
         <h2>{mostraredad ? edad : 'Edad Oculta'}</h2>
        
         <button onClick={()=>{setMostrarEdad(!mostraredad)}}> {mostraredad ? 'Mostrar edad' : 'Ocultar edad'}</button>    
    
    </div>
    
    
    return (
        <h1>Mi nombre es {nombre} y tengo {edad} años</h1>
    );
    

    return <h1> {edad>=18 ? 'Es mayor de edad' : 'Es menor de edad'}</h1>

};

Card.propTypes = {
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired
};
