// src/components/Header.js
import React from 'react';
import './../style.css/style.css'; // Certifique-se de que há um arquivo CSS importado
import logo from './../image/logo.svg'

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo da Equipe" className="logo" />
      <nav>
        <ul>
          <li><a href="#about">Quem Somos</a></li>
          <li><a href="#services">Projetos</a></li>
          <li><a href="#contact">Nosso Time</a></li>
          <li><a href="#contact">Serviços</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
