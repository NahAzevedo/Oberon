// src/components/Footer.js
import React from 'react';
import './../style.css/style.css'; // Certifique-se de que o arquivo CSS correto está importado
import logo from './../image/logo.svg'

const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="divider"></div> {/* Linha fina de separação */} 
      <div className="footer-content">
        <img
          src={logo} // Substitua pelo caminho correto da logo
          alt="Logo Oberon"
          className="footer-logo"
        />
        <p className="footer-text">
        Around the best
        </p>
      </div>
    </footer>
  );
};

export default Footer;
