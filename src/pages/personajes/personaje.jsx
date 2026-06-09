import { useEffect, useState } from 'react'

import { PersonajeCard } from '../../components';
import { obtenerPersonajes } from '../../services/rick-and-morty-service';
import style from "./personaje.module.css";

export const PersonajePage = () => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPersonajes = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await obtenerPersonajes();
      setPersonajes(data);
    } catch (err) {
      setError(err.message || 'No se pudo cargar la información');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPersonajes();
  }, []);

  if (loading) {
    return <p>Cargando personajes...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h1 className={style.titulo}>Personajes de Rick and Morty</h1>
      <div className={style['contenedor-personajes']}>
        {personajes.map((personaje) => (
          <PersonajeCard
            key={personaje.id}
            nombre={personaje.name}
            especie={personaje.species}
            imagen={personaje.image}
          />
        ))}
      </div>
    </>
  )
}


