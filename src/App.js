import React, { useState, useEffect, useCallback } from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './componentes/Navbar';
import Hero from './componentes/Hero';
import Servicios from './componentes/Servicios';
import Proyectos from './componentes/Proyectos';
import Equipo from './componentes/Equipo';
import Proceso from './componentes/Proceso';
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';
import JhonnyApartado from './componentes/Jhonny/JhonnyApartado';
import DarwinApartado from './componentes/Darwin/DarwinApartado';
import CristianApartado from './componentes/Cristian/CristianApartado';
import EmanuelApartado from './componentes/Emanuel/EmanuelApartado';
import './componentes/css/App.css';

const APARTADOS_POR_ID = {
  jhonny: JhonnyApartado,
  darwin: DarwinApartado,
  cristian: CristianApartado,
  enmanuel: EmanuelApartado
};

const getDevIdFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('dev');
};

function App() {
  const {
    general,
    servicios,
    categoriasProyectos,
    proyectos,
    equipoDescripcion,
    miembros,
    proceso,
    contacto
  } = portfolioData;

  const [selectedDevId, setSelectedDevId] = useState(getDevIdFromUrl);

  useEffect(() => {
    const handlePopState = () => {
      setSelectedDevId(getDevIdFromUrl());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const activeDeveloper = miembros.find((m) => m.id === selectedDevId) || null;
  const ActiveApartado = activeDeveloper
    ? APARTADOS_POR_ID[activeDeveloper.id]
    : null;

  const handleSelectDeveloper = useCallback((devId) => {
    const url = new URL(window.location.href);
    url.searchParams.set('dev', devId);
    url.hash = '';
    window.history.pushState({}, '', url.toString());
    setSelectedDevId(devId);
  }, []);

  const handleNavigateHome = useCallback((hash = '#equipo') => {
    const url = new URL(window.location.href);
    url.searchParams.delete('dev');
    url.hash = hash;
    window.history.pushState({}, '', url.toString());
    setSelectedDevId(null);

    if (hash) {
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    }
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar
        nombreEquipo={general.nombreEquipo}
        onNavigateSection={ActiveApartado ? handleNavigateHome : undefined}
      />

      <main>
        {ActiveApartado ? (
          <ActiveApartado
            miembros={miembros}
            onSelectDeveloper={handleSelectDeveloper}
            onBack={handleNavigateHome}
            onNavigateContact={() => handleNavigateHome('#contacto')}
          />
        ) : (
          <>
            <Hero general={general} />
            <Servicios servicios={servicios} />
            <Proyectos proyectos={proyectos} categorias={categoriasProyectos} />
            <Equipo
              miembros={miembros}
              descripcion={equipoDescripcion}
              onSelectDeveloper={handleSelectDeveloper}
            />
            <Proceso pasos={proceso} />
            <Contacto contactoInfo={contacto} />
          </>
        )}
      </main>

      <Footer
        nombreEquipo={general.nombreEquipo}
        year={general.year}
        footerCopy={general.footerCopy}
      />
    </div>
  );
}

export default App;
