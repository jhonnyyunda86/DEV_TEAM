import React from 'react';
import DeveloperProfile from '../DeveloperProfile';
import cristianFoto from '../../img/cristian_sin_fondo.png';

export const cristianData = {
  id: "cristian",
  iniciales: "CT",
  nombre: "Cristian Camilo Trujillo Llanos",
  rol: "Análisis · Bases de datos",
  foto: cristianFoto,
  bio: "[BIO CORTA: experiencia y en qué se especializa.]",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  perfil: {
    ubicacion: "Neiva, Huila (CO)",
    disponibilidad: "Disponible para proyectos",
    resumen:
      "[RESUMEN DEL PERFIL: Ingeniería de requisitos, modelado UML y diseño de bases de datos estructuradas.]",
    sobreMi:
      "[ESPACIO PARA AMPLIAR BIO: Cuenta cómo realiza el levantamiento de información con los clientes, especificación SRS, diagramación y diseño de datos para asegurar que cada sistema resuelva la necesidad real.]",
    habilidades: [
      "Estándar IEEE 830 (SRS)",
      "UML 2.5",
      "Historias de Usuario",
      "PostgreSQL",
      "MySQL",
      "Modelado ER",
      "Documentación Técnica",
      "Análisis de Procesos"
    ],
    enfoque: [
      "Traducción de necesidades del negocio en requisitos claros, medibles y trazables.",
      "Modelado de entidades y relaciones sólidas antes de escribir la primera línea de código.",
      "Documentación funcional y técnica comprensible para clientes y desarrolladores."
    ],
    aportes: [
      {
        proyecto: "SISGEDI",
        rolEnProyecto: "Análisis de Requisitos & Modelo de Datos",
        descripcion:
          "Especificación bajo estándar IEEE 830, diagramas UML completos y normalización de base de datos."
      }
    ]
  }
};

const CristianApartado = (props) => {
  return <DeveloperProfile miembro={cristianData} {...props} />;
};

export default CristianApartado;
