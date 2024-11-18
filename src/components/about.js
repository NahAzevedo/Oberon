// src/components/About.js
import React from 'react';
import './../style.css/style.css'; // Certifique-se de que há um arquivo CSS importado


const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h1 className="about-title">QUEM<br />SOMOS</h1>

        <p className="about-text">
        A Oberon existe porque precisamos de ideias tecnológicas revolucionarias para as pessoas e o meio ambiente. Somos uma equipe comprometida com a inovação para melhorar a qualidade de vida do ser humano e do próprio planeta.
        </p>
      </div>
      <div className="about-values">
        <h2 className="values-title">Nossos Valores</h2>
        <div className="values-container">
          <div className="values-column">
            <h3>Excelência</h3>
            <p>Paixão ao compromisso de desenvolver os melhores produtos e serviços.</p>
          </div>
          <div className="values-column">
            <h3>Mudança</h3>
            <p>Visões para o futuro,  direcionando soluções que gerem ipacto .</p>
          </div>
          <div className="values-column">
            <h3>Integridade</h3>
            <p>Guiados por uma bússola moral com respeito por todas as partes interessadas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
