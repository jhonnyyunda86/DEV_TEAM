import React, { useState } from 'react';
import { TechNodesLogo, MenuIcon, CloseIcon } from './Icons';
import './css/Navbar.css';

const Navbar = ({ nombreEquipo = "[NOMBRE DEL EQUIPO]", onNavigateSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = (e, hash) => {
    closeMenu();
    if (onNavigateSection) {
      e.preventDefault();
      onNavigateSection(hash);
    }
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a
          href="#inicio"
          className="navbar-brand"
          onClick={(e) => handleLinkClick(e, '#inicio')}
        >
          <span className="brand-icon">
            <TechNodesLogo size={24} color="#00e5ff" />
          </span>
          <span className="brand-text">DevTeam</span>
        </a>

        <nav>
          <ul className="navbar-links">
            <li>
              <a href="#inicio" className="nav-link" onClick={(e) => handleLinkClick(e, '#inicio')}>Inicio</a>
            </li>
            <li>
              <a href="#servicios" className="nav-link" onClick={(e) => handleLinkClick(e, '#servicios')}>Servicios</a>
            </li>
            <li>
              <a href="#proyectos" className="nav-link" onClick={(e) => handleLinkClick(e, '#proyectos')}>Proyectos</a>
            </li>
            <li>
              <a href="#equipo" className="nav-link" onClick={(e) => handleLinkClick(e, '#equipo')}>Equipo</a>
            </li>
            <li>
              <a href="#proceso" className="nav-link" onClick={(e) => handleLinkClick(e, '#proceso')}>Proceso</a>
            </li>
            <li>
              <a href="#contacto" className="nav-link" onClick={(e) => handleLinkClick(e, '#contacto')}>Contacto</a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="#contacto" className="btn-talk" onClick={(e) => handleLinkClick(e, '#contacto')}>
            Hablemos
          </a>
          <button
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Abrir menú de navegación"
          >
            {menuOpen ? <CloseIcon size={24} color="#00e5ff" /> : <MenuIcon size={24} color="#00e5ff" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-nav-menu">
          <a href="#inicio" className="mobile-nav-link" onClick={(e) => handleLinkClick(e, '#inicio')}>
            Inicio
          </a>
          <a href="#servicios" className="mobile-nav-link" onClick={(e) => handleLinkClick(e, '#servicios')}>
            Servicios
          </a>
          <a href="#proyectos" className="mobile-nav-link" onClick={(e) => handleLinkClick(e, '#proyectos')}>
            Proyectos
          </a>
          <a href="#equipo" className="mobile-nav-link" onClick={(e) => handleLinkClick(e, '#equipo')}>
            Equipo
          </a>
          <a href="#proceso" className="mobile-nav-link" onClick={(e) => handleLinkClick(e, '#proceso')}>
            Proceso
          </a>
          <a href="#contacto" className="mobile-nav-link" onClick={(e) => handleLinkClick(e, '#contacto')}>
            Contacto
          </a>
          <a href="#contacto" className="mobile-btn-talk" onClick={(e) => handleLinkClick(e, '#contacto')}>
            Hablemos
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
