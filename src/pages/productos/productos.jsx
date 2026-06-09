import React from 'react';
import styles from './productos.module.css';

export const ProductosPage = () => {
  return (
    <section className={styles['productos-page']}>
      <div className={styles['productos-hero']}>
        <h1>Productos</h1>
        <p>
          Explora nuestra selección de productos con un diseño moderno,
          elegante y adaptable a cualquier dispositivo.
        </p>
      </div>

      <div className={styles['productos-content']}>
        <article className={styles['producto-card']}>
          <h2>Opción práctica</h2>
          <p>
            Una alternativa equilibrada, ideal para quienes buscan
            funcionalidad en un estilo sencillo.
          </p>
          <button>Ver más</button>
        </article>

        <article className={styles['producto-card']}>
          <h2>Opción recomendada</h2>
          <p>
            Un producto pensado para ofrecer comodidad y una apariencia
            limpia en su uso diario.
          </p>
          <button>Comprar</button>
        </article>
      </div>
    </section>
  );
};