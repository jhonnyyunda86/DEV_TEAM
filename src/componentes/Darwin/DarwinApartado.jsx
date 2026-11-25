import React from 'react';
import DeveloperProfile from '../DeveloperProfile';

export const darwinData = {
  id: "darwin",
  iniciales: "DB",
  nombre: "Darwin Alexis Benitez Cortes",
  rol: "Frontend · React / UI",
  foto: "",
  bio: "[BIO CORTA: experiencia y en qué se especializa.]",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  perfil: {
    ubicacion: "Colombia",
    disponibilidad: "Disponible para proyectos",
    resumen:
      "[RESUMEN DEL PERFIL: Enfoque en interfaces modernas, experiencia de usuario y desarrollo frontend responsivo.]",
    sobreMi:
      "[ESPACIO PARA AMPLIAR BIO: Describe la experiencia de este integrante en React, diseño de interfaces, accesibilidad y cómo transforma requerimientos en pantallas claras y rápidas.]",
    habilidades: [
      "React",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Diseño Responsivo",
      "UI / UX",
      "Figma",
      "Consumo de APIs",
      "Git"
    ],
    enfoque: [
      "Construcción de interfaces claras, intuitivas y adaptadas a escritorio y móvil.",
      "Componentes reutilizables y estados predecibles para mantener el código limpio.",
      "Cuidado en la jerarquía visual, tipografía y fluidez de navegación."
    ],
    aportes: [
      {
        proyecto: "[NOMBRE DEL PROYECTO]",
        rolEnProyecto: "Desarrollo Frontend & UI",
        descripcion:
          "[Describe aquí su contribución principal en diseño de vistas, componentes o flujos de usuario.]"
      }
    ]
  }
};

const DarwinApartado = (props) => {
  return <DeveloperProfile miembro={darwinData} {...props} />;
};

export default DarwinApartado;
