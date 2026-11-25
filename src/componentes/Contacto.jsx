import React, { useState } from 'react';
import { MailIcon, PhoneIcon, GithubIcon } from './Icons';
import './css/Contacto.css';

const Contacto = ({ contactoInfo }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    tipoProyecto: 'Aplicación web',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => {
      setFormData({
        nombre: '',
        correo: '',
        tipoProyecto: 'Aplicación web',
        mensaje: ''
      });
    }, 2000);
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="container">
        <span className="section-tag">
          <span>05 / contacto</span>
          <span className="tech-stripes">{"///"}</span>
        </span>

        <div className="contacto-layout">
          <div className="contacto-left">
            <h2 className="contacto-title">
              ¿Tienes una idea?<br />
              <span className="gradient-text">Cuéntanos.</span>
            </h2>
            <p className="contacto-subtitle">
              {contactoInfo?.tiempoRespuesta || "Respondemos en menos de 48 horas con una propuesta inicial."}
            </p>

            <div className="contacto-links">
              <a href={`mailto:${contactoInfo?.email || 'contacto@ejemplo.com'}`} className="contacto-link-item">
                <MailIcon size={18} color="#00e5ff" />
                <span>{contactoInfo?.email || "[CORREO DEL EQUIPO]"}</span>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="contacto-link-item">
                <PhoneIcon size={18} color="#00e5ff" />
                <span>{contactoInfo?.whatsapp || "[WHATSAPP]"}</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contacto-link-item">
                <GithubIcon size={18} color="#00e5ff" />
                <span>{contactoInfo?.github || "github.com/[USUARIO]"}</span>
              </a>
            </div>
          </div>

          <div className="contacto-right">
            <div className="contacto-form-card">
              {enviado && (
                <div className="form-success-alert">
                  ✓ ¡Gracias por escribirnos! Tu mensaje ha sido enviado exitosamente.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre" className="form-label">
                    NOMBRE COMPLETO
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    placeholder="Tu nombre o empresa"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="correo" className="form-label">
                    CORREO ELECTRÓNICO
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    required
                    placeholder="tucorreo@ejemplo.com"
                    value={formData.correo}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="tipoProyecto" className="form-label">
                    TIPO DE PROYECTO
                  </label>
                  <select
                    id="tipoProyecto"
                    name="tipoProyecto"
                    value={formData.tipoProyecto}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Aplicación web">Aplicación web a medida</option>
                    <option value="Sistema de gestión">Sistema de gestión (Inventarios / CRM)</option>
                    <option value="APIs y backend">APIs y Arquitectura Backend</option>
                    <option value="Análisis y diseño">Análisis de Requisitos y Diseño UML</option>
                    <option value="Otro">Otro requerimiento técnico</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje" className="form-label">
                    DETALLES DEL PROYECTO
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="4"
                    required
                    placeholder="Cuéntanos brevemente qué necesitas construir..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  Enviar mensaje ahora
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
