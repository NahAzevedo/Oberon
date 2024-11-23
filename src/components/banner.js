// src/components/Banner.js
import React from 'react';
import './../style.css/style.css'; // Certifique-se de que há um arquivo CSS importado
import on from './../image/on.svg'

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <img src={on} alt="Logo da Oberon" className="banner-logo" />
          <div className="banner-text">
            <h1>INOVAÇÃO</h1>
            <h1>EM ÓRBITA</h1>
            <p>Atividades simples são uma</p>
            <p>oportunidade de melhora e eficiência.</p>
            <button className="banner-button">Navegue</button>
          </div>
      </div>
    </section>
  );
};

export default Banner;
