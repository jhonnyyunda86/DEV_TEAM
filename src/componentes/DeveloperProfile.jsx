import React, { useEffect } from 'react';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  GithubIcon,
  LinkedinIcon,
  CodeBracketsIcon,
  DocumentIcon
} from './Icons';
import './css/DeveloperProfile.css';

const DeveloperProfile = ({
  miembro,
  miembros = [],
  onSelectDeveloper,
  onBack,
  onNavigateContact,
  children
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [miembro?.id]);

  useEffect(() => {
    const previousTitle = document.title;
    if (miembro?.nombre) {
      document.title = `${miembro.nombre} | DevTeam`;
    }
    return () => {
      document.title = previousTitle;
    };
  }, [miembro?.nombre]);

  if (!miembro) return null;

  const perfil = miembro.perfil || {};
  const hasPortraitShowcase = Boolean(miembro.foto);
  const currentIndex = miembros.findIndex((item) => item.id === miembro.id);
  const prevMember = currentIndex > 0 ? miembros[currentIndex - 1] : null;
  const nextMember =
    currentIndex >= 0 && currentIndex < miembros.length - 1
      ? miembros[currentIndex + 1]
      : null;

  const handleBackClick = (e) => {
    e.preventDefault();
    onBack('#equipo');
  };

  const handleSelectClick = (e, id) => {
    e.preventDefault();
    onSelectDeveloper(id);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    onNavigateContact();
  };

  const skillsList =
    perfil.habilidades && perfil.habilidades.length > 0
      ? perfil.habilidades
      : [miembro.rol];

  return (
    <section className="dev-profile-page">
      <div className="dev-glow-cyan" aria-hidden="true"></div>
      <div className="dev-glow-amber" aria-hidden="true"></div>

      <div className="container">
        <div className="dev-topbar">
          <a
            href="./#equipo"
            className="dev-back-btn"
            onClick={handleBackClick}
          >
            <ArrowLeftIcon size={16} />
            <span>Volver al equipo</span>
          </a>

          {miembros.length > 1 && (
            <nav className="dev-switcher" aria-label="Cambiar de desarrollador">
              {miembros.map((item) => (
                <a
                  key={item.id}
                  href={`?dev=${encodeURIComponent(item.id)}`}
                  onClick={(e) => handleSelectClick(e, item.id)}
                  className={`dev-switcher-tab ${item.id === miembro.id ? 'active' : ''}`}
                >
                  <span className="dev-switcher-initials">{item.iniciales}</span>
                  <span className="dev-switcher-name">{item.nombre}</span>
                </a>
              ))}
            </nav>
          )}
        </div>

        {hasPortraitShowcase ? (
          <header className="dev-showcase-layout">
            <div className="dev-portrait-frame">
              <div className="dev-portrait-backdrop" aria-hidden="true">
                <div className="dev-portrait-grid"></div>
                <div className="dev-portrait-light-left"></div>
                <div className="dev-portrait-light-right"></div>
              </div>
              <img
                src={miembro.foto}
                alt={miembro.nombre}
                className="dev-portrait-cutout"
              />
              <div className="dev-portrait-fade" aria-hidden="true"></div>
            </div>

            <div className="dev-showcase-info">
              <span className="section-tag">
                <span>perfil · desarrollador</span>
                <span className="tech-stripes">{"///"}</span>
              </span>

              <h1 className="dev-showcase-title">Sobre {miembro.nombre}</h1>
              <div className="dev-showcase-underline" aria-hidden="true"></div>

              <p className="dev-showcase-bio">{perfil.resumen || miembro.bio}</p>
              {perfil.sobreMi && (
                <p className="dev-showcase-bio">{perfil.sobreMi}</p>
              )}

              <div className="dev-tech-terminal">
                <span className="dev-tech-terminal-label">
                  {"// Tecnologías principales"}
                </span>
                <p className="dev-tech-terminal-list">
                  {skillsList.join('  |  ')}
                </p>
              </div>

              <div className="dev-showcase-divider" aria-hidden="true"></div>

              <dl className="dev-showcase-meta">
                <div className="dev-meta-row">
                  <dt>Nombre:</dt>
                  <dd>{miembro.nombre}</dd>
                </div>
                {perfil.ubicacion && (
                  <div className="dev-meta-row">
                    <dt>Ciudad:</dt>
                    <dd>{perfil.ubicacion}</dd>
                  </div>
                )}
                <div className="dev-meta-row">
                  <dt>Rol:</dt>
                  <dd>{miembro.rol}</dd>
                </div>
                {perfil.disponibilidad && (
                  <div className="dev-meta-row">
                    <dt>Estado:</dt>
                    <dd className="dev-meta-status-text">{perfil.disponibilidad}</dd>
                  </div>
                )}
              </dl>

              <div className="dev-showcase-actions">
                <a
                  href="./#contacto"
                  onClick={handleContactClick}
                  className="dev-showcase-btn-outline"
                >
                  <span>Trabajar juntos</span>
                  <ArrowRightIcon size={16} />
                </a>
                <a
                  href={miembro.github || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dev-social-btn"
                >
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href={miembro.linkedin || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dev-social-btn"
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </header>
        ) : (
          <header className="dev-hero-card tech-frame-corners">
            <div className="dev-hero-main">
              <div className="dev-avatar-lg">{miembro.iniciales}</div>

              <div className="dev-hero-info">
                <span className="section-tag">
                  <span>perfil · desarrollador</span>
                  <span className="tech-stripes">{"///"}</span>
                </span>

                <h1 className="dev-name">{miembro.nombre}</h1>
                <p className="dev-role">{miembro.rol}</p>

                <p className="dev-summary">
                  {perfil.resumen || miembro.bio}
                </p>

                <div className="dev-meta-chips">
                  {perfil.ubicacion && (
                    <span className="dev-meta-chip">{perfil.ubicacion}</span>
                  )}
                  {perfil.disponibilidad && (
                    <span className="dev-meta-chip dev-meta-status">
                      <span className="status-dot"></span>
                      {perfil.disponibilidad}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="dev-hero-actions">
              <a
                href={miembro.github || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="dev-social-btn"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={miembro.linkedin || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="dev-social-btn"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="./#contacto"
                onClick={handleContactClick}
                className="dev-cta-btn"
              >
                <span>Trabajar juntos</span>
                <ArrowRightIcon size={16} />
              </a>
            </div>
          </header>
        )}

        <div className="dev-content-grid">
          {!hasPortraitShowcase && (
            <>
              <article className="dev-panel dev-panel-wide">
                <div className="dev-panel-header">
                  <DocumentIcon size={20} color="#00e5ff" />
                  <h2 className="dev-panel-title">01 / Sobre mí</h2>
                </div>
                <p className="dev-panel-text">
                  {perfil.sobreMi || miembro.bio}
                </p>
              </article>

              <article className="dev-panel">
                <div className="dev-panel-header">
                  <CodeBracketsIcon size={20} color="#00e5ff" />
                  <h2 className="dev-panel-title">02 / Stack y habilidades</h2>
                </div>
                <div className="dev-skills-list">
                  {skillsList.map((skill, idx) => (
                    <span key={idx} className="dev-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </>
          )}

          <article className={`dev-panel ${hasPortraitShowcase ? 'dev-panel-wide' : ''}`}>
            <div className="dev-panel-header">
              <span className="dev-panel-accent">{"//"}</span>
              <h2 className="dev-panel-title">
                {hasPortraitShowcase ? '01 / Cómo aporto al equipo' : '03 / Cómo aporto al equipo'}
              </h2>
            </div>
            <ul className="dev-focus-list">
              {(perfil.enfoque || []).map((item, idx) => (
                <li key={idx} className="dev-focus-item">
                  <span className="dev-focus-check">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {perfil.aportes && perfil.aportes.length > 0 && (
            <article className="dev-panel dev-panel-wide">
              <div className="dev-panel-header">
                <span className="dev-panel-accent">{"//"}</span>
                <h2 className="dev-panel-title">
                  {hasPortraitShowcase ? '02 / Proyectos y participación' : '04 / Proyectos y participación'}
                </h2>
              </div>
              <div className="dev-aportes-grid">
                {perfil.aportes.map((aporte, idx) => (
                  <div key={idx} className="dev-aporte-card">
                    <span className="dev-aporte-rol">{aporte.rolEnProyecto}</span>
                    <h3 className="dev-aporte-titulo">{aporte.proyecto}</h3>
                    <p className="dev-aporte-desc">{aporte.descripcion}</p>
                  </div>
                ))}
              </div>
            </article>
          )}

          {children}
        </div>

        <footer className="dev-bottom-nav">
          <div>
            {prevMember && (
              <a
                href={`?dev=${encodeURIComponent(prevMember.id)}`}
                onClick={(e) => handleSelectClick(e, prevMember.id)}
                className="dev-nav-card"
              >
                <span className="dev-nav-label">
                  <ArrowLeftIcon size={14} /> Anterior integrante
                </span>
                <span className="dev-nav-name">{prevMember.nombre}</span>
              </a>
            )}
          </div>

          <div>
            {nextMember && (
              <a
                href={`?dev=${encodeURIComponent(nextMember.id)}`}
                onClick={(e) => handleSelectClick(e, nextMember.id)}
                className="dev-nav-card dev-nav-card-next"
              >
                <span className="dev-nav-label">
                  Siguiente integrante <ArrowRightIcon size={14} />
                </span>
                <span className="dev-nav-name">{nextMember.nombre}</span>
              </a>
            )}
          </div>
        </footer>
      </div>
    </section>
  );
};

export default DeveloperProfile;
