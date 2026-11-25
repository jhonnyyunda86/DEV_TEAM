import React from 'react';
import DeveloperProfile from '../DeveloperProfile';
import jhonnyFoto from '../../img/jhonny_sin_fondo.png';

export const jhonnyData = {
  id: "jhonny",
  iniciales: "JY",
  nombre: "Jhonny Stiven Yunda Guzman",
  rol: "Backend · PHP / Laravel",
  foto: jhonnyFoto,
  bio: "[BIO CORTA: experiencia y en qué se especializa.]",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  perfil: {
    ubicacion: "Neiva / Bogotá, Colombia",
    disponibilidad: "Disponible para proyectos",
    resumen:
      "Especializado en arquitectura backend, APIs REST seguras y modelado de bases de datos relacionales para sistemas de gestión y plataformas web escalables.",
    sobreMi:
      "[ESPACIO PARA AMPLIAR BIO: Cuenta tu trayectoria, qué te apasiona del desarrollo backend, tu experiencia construyendo aplicaciones con PHP y Laravel, y cómo aportas al equipo.]",
    habilidades: [
      "PHP 8+",
      "Laravel",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "Arquitectura MVC",
      "Autenticación & Roles",
      "Git & GitHub"
    ],
    enfoque: [
      "Diseño de endpoints limpios, validados y documentados para integraciones confiables.",
      "Estructuración de bases de datos normalizadas con consultas optimizadas.",
      "Implementación de lógica de negocio modular, control de permisos y seguridad."
    ],
    aportes: [
      {
        proyecto: "Casa Hotel Mr Angel",
        rolEnProyecto: "Arquitectura Backend & Base de Datos",
        descripcion:
          "Desarrollo de la lógica de reservas, disponibilidad de habitaciones y panel administrativo en PHP y MySQL."
      },
      {
        proyecto: "Sistema de inventario",
        rolEnProyecto: "Desarrollo Laravel MVC",
        descripcion:
          "Implementación de módulos de inventario, control por roles y generación de reportes."
      }
    ]
  }
};

const JhonnyApartado = (props) => {
  return <DeveloperProfile miembro={jhonnyData} {...props} />;
};

export default JhonnyApartado;
