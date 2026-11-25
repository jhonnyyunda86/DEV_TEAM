import React from 'react';
import DeveloperProfile from '../DeveloperProfile';

export const enmanuelData = {
  id: "enmanuel",
  iniciales: "EC",
  nombre: "Enmanuel Cabrera Martinez",
  rol: "QA & DevOps / Cloud",
  foto: "",
  bio: "[BIO CORTA: experiencia y en qué se especializa.]",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  perfil: {
    ubicacion: "Colombia",
    disponibilidad: "Disponible para proyectos",
    resumen:
      "[RESUMEN DEL PERFIL: Aseguramiento de calidad, pruebas funcionales, despliegues confiables y soporte en producción.]",
    sobreMi:
      "[ESPACIO PARA AMPLIAR BIO: Explica su rol garantizando la estabilidad del software, pruebas de integración, automatización, despliegue en servidores y acompañamiento post-entrega.]",
    habilidades: [
      "Testing & QA",
      "Pruebas Funcionales",
      "Linux & Servidores",
      "Docker",
      "CI / CD",
      "Despliegue Cloud",
      "Monitoreo",
      "Seguridad Básica"
    ],
    enfoque: [
      "Validación rigurosa de cada flujo antes de pasar a producción.",
      "Automatización y estandarización de entornos de desarrollo y despliegue.",
      "Acompañamiento técnico, respaldos y estabilidad operativa."
    ],
    aportes: [
      {
        proyecto: "[NOMBRE DEL PROYECTO]",
        rolEnProyecto: "QA & Despliegue",
        descripcion:
          "[Describe aquí las pruebas realizadas, configuración de entorno o puesta en marcha en producción.]"
      }
    ]
  }
};

const EmanuelApartado = (props) => {
  return <DeveloperProfile miembro={enmanuelData} {...props} />;
};

export default EmanuelApartado;
