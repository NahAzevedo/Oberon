// src/components/Projects.js
import React from 'react';
import './../style.css/style.css'; // Certifique-se de que há um arquivo CSS importado
import logoboe from './../image/boe_logo.svg'
import projeto from './../image/project.svg'

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-header">
        <h1 className="projects-title">PROJETOS |</h1>
        <p className="projects-description">
        Veja como é feito o nosso trabalho e confira os projetos mais recentes desenvolvidos pelo nosso time.
        </p>
      </div>
      <div className="projects-content">
        <div className="project-card">
          <div className="project-info">
            <div className="project-logo">
              <img src={logoboe} alt="Logo do Projeto" className="logo-image" />
            </div>
            <p className="project-text">
            Sistema de Classificação de Imagens com Aprendizagem Profunda para o Pré-diagnóstico de Doenças Dermatológicas Bovinas.
            </p>
            <button className="project-button">Ler mais sobre</button>
          </div>
          <div className="project-image">
          <img src={projeto} alt="Logo do Projeto" className="image" />
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default Projects;
