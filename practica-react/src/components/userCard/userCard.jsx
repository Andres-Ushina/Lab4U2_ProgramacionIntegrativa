import React, { useState } from 'react'
import "./userCard.css"
import PropTypes from 'prop-types'

export const UserCard = ({nombre, activo=true}) => {
  const [estadoActivo, setEstadoActivo] = useState(activo);

  return (
    <>
      <h2>{nombre}</h2>
      <p>{estadoActivo ? 'Estado activo': 'Estado inactivo'}</p>
      <button onClick={() => setEstadoActivo(!estadoActivo)}>
        {estadoActivo ? 'Desactivar' : 'Activar'}
      </button>
    </>
  );
};

UserCard.propTypes = {
    nombre: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    edad: PropTypes.number,
    activo: PropTypes.bool
};

