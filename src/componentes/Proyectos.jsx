import React, { useState } from 'react';
import { ArrowRightIcon } from './Icons';
import ProjectModal from './ProjectModal';
import './css/Proyectos.css';

const Proyectos = ({ proyectos, categorias }) => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProyectos = proyectos?.filter((item) => {
    if (activeFilter === 'todos') return true;
    return item.categoria === activeFilter || item.subcategoria === activeFilter;
  });

  return (
    <section id="proyectos" className="proyectos-section">
      <div className="container">
        <div className="proyectos-header">
          <div className="proyectos-header-left">
            <span className="section-tag">
              <span>02 / proyectos</span>
              <span className="tech-stripes">{"///"}</span>
            </span>
            <h2 className="section-title">Trabajo reciente</h2>
          </div>

          <div className="proyectos-filters">
            {categorias?.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="proyectos-grid">
          {filteredProyectos?.map((proyecto) => (
            <article key={proyecto.id} className="proyecto-card">
              <div className="proyecto-preview">
                {proyecto.imagen ? (
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="proyecto-img"
                  />
                ) : (
                  <div className="preview-badge">[CAPTURA DEL PROYECTO]</div>
                )}
                <span className="preview-overlay-badge">{proyecto.categoria}</span>
              </div>

              <div className="proyecto-info">
                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                <p className="proyecto-descripcion">{proyecto.descripcion}</p>

                <div className="proyecto-tags">
                  {proyecto.tags?.map((tag, idx) => (
                    <span key={idx} className="proyecto-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  className="proyecto-btn-ver"
                  onClick={() => setSelectedProject(proyecto)}
                >
                  <span>Ver caso de estudio</span>
                  <ArrowRightIcon size={16} color="#00e5ff" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          proyecto={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Proyectos;
