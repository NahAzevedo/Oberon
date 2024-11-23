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
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#team">Nosso Time</a></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
