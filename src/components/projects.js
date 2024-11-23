import React from 'react';
import './../style.css/style.css'; // Certifique-se de que há um arquivo CSS importado
import logoboe from './../image/boe_logo.svg';
import projeto from './../image/project.svg';

const Projects = () => {
  return (
    <section className="projects" id='projects'>
      <div className="projects-header">
        <h1 className="projects-title">PROJETOS |</h1>
        <p className="projects-description">
          Veja como é feito o nosso trabalho e confira os projetos mais recentes desenvolvidos pelo nosso time.
        </p>
      </div>
      <div className="projects-content">
        {/* Card Principal */}
        <div className="project-card main-project">
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

        {/* Trabalhos Futuros */}
        <div className="future-projects">
          <div className="future-project-card">
            <h3>Nosso Artigo Científico</h3>
            <p>Descubra mais sobre a nossa pesquisa e como ela contribui para o campo da inovação. Clique abaixo para acessar o artigo completo.</p>
            <a href="https://www.overleaf.com/project/6605e18f1c2fcb5fbd77b399/detached" target="_blank" className="future-project-link">Leia o artigo</a>
          </div>
          <div className="future-project-card">
          <h3>Nosso Pitch</h3>
            <p>Quer entender mais sobre o nosso projeto ? Acesse o nosso pitch para um resumo completo. Clique no link abaixo!</p>
            <a href="https://www.youtube.com/watch?v=6EtYKbrFjdU" target="_blank" className="future-project-link">Assista ao pitch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
