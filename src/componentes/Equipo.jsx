import React from 'react';
import { GithubIcon, LinkedinIcon, ArrowRightIcon } from './Icons';
import './css/Equipo.css';

const getDeveloperUrl = (id) => `?dev=${encodeURIComponent(id)}`;

const Equipo = ({ miembros, descripcion, onSelectDeveloper }) => {
  const openDeveloper = (id) => {
    if (onSelectDeveloper) {
      onSelectDeveloper(id);
    } else {
      window.location.assign(getDeveloperUrl(id));
    }
  };

  const handleCardClick = (e, id) => {
    if (e.target.closest('a, button')) return;
    openDeveloper(id);
  };

  const handleProfileLinkClick = (e, id) => {
    e.preventDefault();
    openDeveloper(id);
  };

  return (
    <section id="equipo" className="equipo-section">
      <div className="container">
        <span className="section-tag">
          <span>03 / equipo</span>
          <span className="tech-stripes">{"///"}</span>
        </span>
        <h2 className="section-title">Quiénes somos</h2>

        {descripcion && (
          <p className="equipo-subtitle">{descripcion}</p>
        )}

        <div className="equipo-grid">
          {miembros?.map((miembro) => (
            <article
              key={miembro.id}
              className="miembro-card miembro-card-interactive"
              onClick={(e) => handleCardClick(e, miembro.id)}
            >
              <div className={`miembro-avatar ${miembro.foto ? 'has-photo' : ''}`}>
                {miembro.foto ? (
                  <img
                    src={miembro.foto}
                    alt={miembro.nombre}
                    className="miembro-foto-img"
                  />
                ) : (
                  miembro.iniciales
                )}
              </div>

              <h3 className="miembro-nombre">{miembro.nombre}</h3>
              <span className="miembro-rol">{miembro.rol}</span>
              <p className="miembro-bio">{miembro.bio}</p>

              <div className="miembro-footer">
                <div className="miembro-socials">
                  <a
                    href={miembro.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label={`GitHub de ${miembro.nombre}`}
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href={miembro.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label={`LinkedIn de ${miembro.nombre}`}
                  >
                    <LinkedinIcon size={18} />
                  </a>
                </div>

                <a
                  href={getDeveloperUrl(miembro.id)}
                  onClick={(e) => handleProfileLinkClick(e, miembro.id)}
                  className="miembro-perfil-link"
                  aria-label={`Ver apartado de ${miembro.nombre}`}
                >
                  <span>Ver perfil</span>
                  <ArrowRightIcon size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipo;
