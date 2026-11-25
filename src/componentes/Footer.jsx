import React from 'react';
import './css/Footer.css';

const Footer = ({ nombreEquipo = "[NOMBRE DEL EQUIPO]", year = "2026", footerCopy = "hecho con café y código en Bogotá" }) => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <span className="footer-copy">
          © {year} <span>{nombreEquipo}</span> · Todos los derechos reservados.
        </span>
        <span className="footer-tagline">
          {"// "}{footerCopy}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
