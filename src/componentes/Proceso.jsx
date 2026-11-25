import React from 'react';
import './css/Proceso.css';

const Proceso = ({ pasos }) => {
  return (
    <section id="proceso" className="proceso-section">
      <div className="container">
        <span className="section-tag">
          <span>04 / proceso</span>
          <span className="tech-stripes">{"///"}</span>
        </span>
        <h2 className="section-title">Cómo trabajamos</h2>

        <div className="proceso-timeline">
          {pasos?.map((item, index) => (
            <div key={index} className="proceso-step">
              <span className="proceso-step-num">{item.paso}</span>
              <h3 className="proceso-step-title">{item.titulo}</h3>
              <p className="proceso-step-desc">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proceso;
