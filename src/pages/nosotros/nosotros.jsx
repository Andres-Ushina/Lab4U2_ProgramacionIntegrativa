import React from 'react';
import styles from "./nosotros.module.css";

export const NosotrosPage = () => {
  return (
    <main className={styles['nosotros-page']}>
      <header className={styles['nosotros-header']}>
        <h1>Nosotros</h1>
        <p>Somos un pequeño equipo apasionado por construir experiencias web con React.</p>
      </header>

      <section className={styles['team-grid']}>
        <article className={styles['team-card']}>
          <img src="https://media.istockphoto.com/id/1364917563/es/foto/hombre-de-negocios-sonriendo-con-los-brazos-cruzados-sobre-fondo-blanco.jpg?s=2048x2048&w=is&k=20&c=J7ShIMemKLZmR8E26mDzhMXuwZqwIaaOt6dF5N-UOW8=" alt="Miembro 1" />
          <h3>Andrés</h3>
          <p>Frontend Developer</p>
        </article>

        <article className={styles['team-card']}>
          <img src="https://media.istockphoto.com/id/2093526842/es/foto/mujer-de-negocios-feliz-trabajando-en-una-tableta-digital-en-la-oficina-y-mirando-a-la-c%C3%A1mara.jpg?s=612x612&w=0&k=20&c=6_dMlnlTA3Rg8ROHmtVmOLRxlc-dKaD7dCVJBMSskJM=" alt="Miembro 2" />
          <h3>María</h3>
          <p>Diseñadora UX/UI</p>
        </article>

        <article className={styles['team-card']}>
          <img src="https://media.istockphoto.com/id/1911521695/es/foto/hombre-de-negocios-exitoso-en-la-oficina-moderna-que-trabaja-en-la-computadora-port%C3%A1til.jpg?s=612x612&w=0&k=20&c=b3vOBZ8bZjBsg-rx8UhYTQCEU94Aol4LaQexZVkCAvU=" alt="Miembro 3" />
          <h3>Carlos</h3>
          <p>QA / DevOps</p>
        </article>
      </section>
    </main>
  )
};