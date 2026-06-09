import React from 'react';
import styles from './contactos.module.css';

export const ContactosPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular envío: en una app real enviarías a un endpoint
    alert('Mensaje enviado (simulado)');
  };

  return (
    <main className={styles['contactos-page']}>
      <h1>Contáctanos</h1>
      <p className={styles.lead}>¿Tienes dudas o sugerencias? Escríbenos y te responderemos pronto.</p>

      <div className={styles['contactos-grid']}>
        <form className={styles['contact-form']} onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre" />

          <label>Email</label>
          <input type="email" placeholder="tu@correo.com" />

          <label>Mensaje</label>
          <textarea rows="6" placeholder="Escribe tu mensaje aquí"></textarea>

          <button type="submit" className={styles['btn-submit']}>Enviar mensaje</button>
        </form>

        <aside className={styles['contact-info']}>
          <div className={styles['info-card']}>
            <h3>Oficina Central</h3>
            <p>Calle Falsa 123, Ciudad</p>
            <p>Tel: +57 300 0000000</p>
          </div>

          <div className={styles['info-card']}>
            <h3>Soporte</h3>
            <p>support@example.com</p>
            <p>Horario: Lun-Vie 9:00 - 18:00</p>
          </div>
        </aside>
      </div>
    </main>
  )
}