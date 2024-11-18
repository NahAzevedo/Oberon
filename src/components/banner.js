// src/components/Banner.js
import React from 'react';
import './../style.css/style.css'; // Certifique-se de que há um arquivo CSS importado

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-text">
        <h1>INOVAÇÃO</h1>
        <h1>EM ÓRBITA</h1>
        <p>Atividades simples são uma</p>
        <p>oportunidade de melhora e eficiência.</p>
        <button className="banner-button">Navegue</button>
      </div>
    </section>
  );
};

export default Banner;
