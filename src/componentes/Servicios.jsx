import React from 'react';
import { MonitorIcon, DatabaseIcon, CodeBracketsIcon, DocumentIcon } from './Icons';
import './css/Servicios.css';

const renderIcon = (iconName) => {
  switch (iconName) {
    case 'monitor':
      return <MonitorIcon size={26} color="#00e5ff" />;
    case 'database':
      return <DatabaseIcon size={26} color="#00e5ff" />;
    case 'code':
      return <CodeBracketsIcon size={26} color="#00e5ff" />;
    case 'document':
      return <DocumentIcon size={26} color="#00e5ff" />;
    default:
      return <MonitorIcon size={26} color="#00e5ff" />;
  }
};

const Servicios = ({ servicios }) => {
  return (
    <section id="servicios" className="servicios-section">
      <div className="container">
        <span className="section-tag">
          <span>01 / servicios</span>
          <span className="tech-stripes">{"///"}</span>
        </span>
        <h2 className="section-title">Qué hacemos</h2>

        <div className="servicios-grid">
          {servicios && servicios.map((servicio) => (
            <article key={servicio.id} className="servicio-card">
              <div className="servicio-icon-wrapper">
                {renderIcon(servicio.icon)}
              </div>
              <h3 className="servicio-titulo">{servicio.titulo}</h3>
              <p className="servicio-descripcion">{servicio.descripcion}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
