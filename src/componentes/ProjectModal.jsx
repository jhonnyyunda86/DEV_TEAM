import React, { useEffect } from 'react';
import { CloseIcon } from './Icons';
import './css/ProjectModal.css';

const ProjectModal = ({ proyecto, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!proyecto) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
          <CloseIcon size={18} />
        </button>

        <span className="modal-tag">{"// caso de estudio"}</span>
        <h2 className="modal-title">{proyecto.titulo}</h2>
        <p className="modal-desc">{proyecto.descripcion}</p>

        {proyecto.detalles && (
          <>
            <h4 className="modal-section-title">01. Reto o Necesidad</h4>
            <div className="modal-text">{proyecto.detalles.problema}</div>

            <h4 className="modal-section-title">02. Solución Implementada</h4>
            <div className="modal-text">{proyecto.detalles.solucion}</div>

            <h4 className="modal-section-title">03. Tecnologías y Herramientas</h4>
            <div className="modal-tags">
              {proyecto.detalles.stackCompleto?.map((tech, idx) => (
                <span key={idx} className="modal-pill">{tech}</span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
