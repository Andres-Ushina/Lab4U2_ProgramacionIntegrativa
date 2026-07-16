import React from 'react';
import styles from "./inicio.module.css";

export const InicioPage = () => {
  return (
    <main className={styles['inicio-page']}>
      <section className={styles['inicio-hero']}>
        <div className={styles['inicio-inner']}>
          <h1>Bienvenido a Rick & Morty Explorer</h1>
          <p>Explora personajes, episodios y más datos directamente desde la API pública.</p>
          <a className={styles['cta-button']} href="/personajes">
            Ver personajes
          </a>
        </div>
      </section>

      <section className={styles['inicio-features']}>
        <div className={styles['feature']}>
          <h3>Datos en tiempo real</h3>
          <p>Información consumida de la API oficial de Rick and Morty.</p>
        </div>
        <div className={styles['feature']}>
          <h3>Responsive</h3>
          <p>Diseño que se adapta a dispositivos móviles y de escritorio.</p>
        </div>
        <div className={styles['feature']}>
          <h3>Fácil navegación</h3>
          <p>Usa el menú para moverte entre secciones rápidamente.</p>
        </div>
      </section>
    </main>
  )
};


