import React from 'react';
import { Rotate360Icon, ExpandIcon } from './Icons';
import equipoImg from '../img/equipo_sin_fondo.png';
import './css/Hero.css';

const Hero = ({ general }) => {
  const {
    heroTag = "// DEV STUDIO · NEIVA - HUILA, COLOMBIA",
    heroTitle = "Construimos software que tu negocio sí va a usar.",
    heroSubtitle = "Aplicaciones web, sistemas de gestión y APIs a la medida. Desde el análisis de requisitos hasta el despliegue con documentación clara.",
    terminalStack = [
      "PHP · Laravel · Python · Django",
      "MySQL · PostgreSQL · REST APIs",
      "UML · SRS · historias de usuario"
    ]
  } = general || {};

  return (
    <section id="inicio" className="hero-section">
      {/* Luces ambientales en degradado (Cyan & Amber) */}
      <div className="hero-glow-cyan"></div>
      <div className="hero-glow-amber"></div>

      <div className="container hero-grid-layout">
        {/* Columna Izquierda: Mensaje y CTA */}
        <div className="hero-content">
          <div className="hero-header-tag">
            <span className="hero-tag-text">{heroTag}</span>
            <span className="hero-stripes-accent">{"//////"}</span>
          </div>

          <h1 className="hero-main-title">
            <span className="gradient-text">{heroTitle}</span>
          </h1>

          <div className="hero-subtitle-tag">Arquitectura & Ingeniería de Software</div>
          <p className="hero-description">{heroSubtitle}</p>

          {/* Feature chips inspirados en el diseño de referencia */}
          <div className="hero-feature-chips">
            <div className="feature-chip-card">
              <div className="chip-header">
                <Rotate360Icon size={18} color="#00e5ff" />
                <span>360° Full-Stack</span>
              </div>
              <p className="chip-text">
                Soluciones de punta a punta: interfaces dinámicas, backend robusto y base de datos relacional.
              </p>
            </div>

            <div className="feature-chip-card">
              <div className="chip-header">
                <ExpandIcon size={18} color="#ff8c38" />
                <span style={{ color: '#ff8c38' }}>Escalabilidad</span>
              </div>
              <p className="chip-text">
                APIs seguras, arquitecturas MVC limpias y documentación técnica lista para crecer.
              </p>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="hero-actions">
            <a href="#proyectos" className="btn-hero-primary">
              Ver proyectos
            </a>
            <a href="#contacto" className="btn-hero-secondary">
              Cotizar un proyecto
            </a>
          </div>

          {/* Decoración tech de cruces */}
          <div className="hero-deco-crosses">
            <span>+ + +</span>
            <span>+ + +</span>
          </div>
        </div>

        {/* Columna Derecha: Escaparate Visual Tech con doble tono */}
        <div className="hero-visual-wrapper">
          <div className="hero-visual-inner">
            <div className="hero-image-frame tech-frame-corners">
              <img
                src={equipoImg}
                alt="Equipo de desarrollo de software"
                className="hero-visual-img"
              />

              <div className="hero-badge-top">
                <span className="badge-dot"></span>
                <span>STATUS: OPERACIONAL</span>
              </div>

              <div className="hero-badge-bottom">
                <span className="badge-amber-tag">{"// STACK PRINCIPAL"}</span>
                <span>PHP · Laravel · React · Python</span>
              </div>
            </div>

            {/* Terminal interactiva de consola */}
            <div className="hero-terminal-box">
              <div className="terminal-header">
                <span className="terminal-prompt">$</span> equipo --stack
              </div>
              <div className="terminal-lines">
                {terminalStack.map((tech, idx) => (
                  <div key={idx} className="terminal-line">
                    <span className="term-check">✓</span>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
