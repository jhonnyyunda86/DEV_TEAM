import { jhonnyData } from '../componentes/Jhonny/JhonnyApartado';
import { darwinData } from '../componentes/Darwin/DarwinApartado';
import { cristianData } from '../componentes/Cristian/CristianApartado';
import { enmanuelData } from '../componentes/Emanuel/EmanuelApartado';

export const portfolioData = {
  general: {
    nombreEquipo: "[NOMBRE DEL EQUIPO]",
    ubicacion: "Bogotá, Colombia",
    heroTag: "// equipo de desarrollo de software · Neiva - Huila, Colombia",
    heroTitle: "Construimos software que tu negocio sí va a usar.",
    heroSubtitle:
      "Aplicaciones web, sistemas de gestión y APIs a la medida. Desde el análisis de requisitos hasta el despliegue, con documentación clara en cada paso.",
    terminalStack: [
      "PHP · Laravel · Python · Django",
      "MySQL · PostgreSQL · REST APIs",
      "UML · SRS · historias de usuario"
    ],
    footerCopy: "hecho con café y código en Bogotá",
    year: "2026"
  },

  servicios: [
    {
      id: "web",
      icon: "monitor",
      titulo: "Aplicaciones web",
      descripcion:
        "Sitios y plataformas responsivas: reservas, catálogos, portales internos."
    },
    {
      id: "gestion",
      icon: "database",
      titulo: "Sistemas de gestión",
      descripcion:
        "Inventarios, gestión documental y CRUDs con roles y reportes."
    },
    {
      id: "backend",
      icon: "code",
      titulo: "APIs y backend",
      descripcion:
        "Servicios REST seguros para conectar tus apps y tus datos."
    },
    {
      id: "analisis",
      icon: "document",
      titulo: "Análisis y diseño",
      descripcion:
        "Requisitos (SRS), diagramas UML, wireframes y modelado de bases de datos."
    }
  ],

  categoriasProyectos: [
    { id: "todos", label: "Todos" },
    { id: "web", label: "Web" },
    { id: "gestion", label: "Gestión" },
    { id: "apis", label: "APIs" }
  ],

  proyectos: [
    {
      id: "hotel-mr-angel",
      titulo: "Casa Hotel Mr Angel",
      categoria: "web",
      imagen: "/assets/hotel_mr_angel.jpg",
      descripcion:
        "Aplicación web de reservas: disponibilidad de habitaciones, registro de huéspedes y panel administrativo.",
      tags: ["PHP", "MySQL", "Responsive"],
      detalles: {
        problema:
          "El hotel gestionaba sus reservaciones en planillas físicas, generando duplicidad en asignaciones de habitaciones y falta de reportes financieros.",
        solucion:
          "Desarrollo de una plataforma web integral con calendario interactivo, pasarela para solicitud de reservas, control de Check-in/Check-out y panel de métricas para la administración.",
        stackCompleto: ["PHP 8.2", "MySQL", "Bootstrap", "JavaScript", "HTML5/CSS3"]
      }
    },
    {
      id: "sistema-inventario",
      titulo: "Sistema de inventario",
      categoria: "gestion",
      imagen: "/assets/sistema_inventario.jpg",
      descripcion:
        "Control de productos, entradas y salidas con arquitectura MVC y gestión por roles.",
      tags: ["Laravel", "MVC", "MySQL"],
      detalles: {
        problema:
          "Dificultad para rastrear existencias en tiempo real entre bodegas, pérdidas no contabilizadas y falta de control de usuarios.",
        solucion:
          "Sistema modular bajo Laravel con roles (Administrador, Bodeguero, Vendedor), generación de alertas de stock mínimo, escaneo de código de barras y exportación de reportes en PDF y Excel.",
        stackCompleto: ["Laravel 10", "MySQL", "Blade", "TailwindCSS / CSS Modular", "Chart.js"]
      }
    },
    {
      id: "sisgedi",
      titulo: "SISGEDI",
      categoria: "gestion",
      subcategoria: "apis",
      imagen: "/assets/sisgedi.jpg",
      descripcion:
        "Gestión documental: especificación de requisitos, historias de usuario y modelo de datos.",
      tags: ["SRS", "UML", "Base de datos"],
      detalles: {
        problema:
          "Procesos corporativos con miles de actas y radicados en papel sin trazabilidad de aprobaciones ni firmas electrónicas.",
        solucion:
          "Fase exhaustiva de ingeniería de requisitos con estándar IEEE 830 (SRS), diagramación UML completa (casos de uso, secuencia, clases) y arquitectura de base de datos normalizada para indexación veloz.",
        stackCompleto: ["IEEE 830 (SRS)", "UML 2.5", "PostgreSQL", "Enterprise Architect", "Figma"]
      }
    }
  ],

  equipoDescripcion:
    "[DESCRIPCIÓN CORTA DEL EQUIPO: formación, cómo trabajan juntos y qué los diferencia.]",

  miembros: [
    jhonnyData,
    darwinData,
    cristianData,
    enmanuelData
  ],

  proceso: [
    {
      paso: "Paso 1",
      titulo: "Escuchamos",
      descripcion: "Reunión inicial y levantamiento de requisitos."
    },
    {
      paso: "Paso 2",
      titulo: "Diseñamos",
      descripcion: "Wireframes, diagramas y modelo de datos para tu aprobación."
    },
    {
      paso: "Paso 3",
      titulo: "Desarrollamos",
      descripcion: "Entregas por etapas para que veas avances reales."
    },
    {
      paso: "Paso 4",
      titulo: "Entregamos",
      descripcion: "Despliegue, manual de usuario y soporte inicial."
    }
  ],

  contacto: {
    titulo: "¿Tienes una idea?",
    subtitulo: "Cuéntanos.",
    tiempoRespuesta: "Respondemos en menos de 48 horas con una propuesta inicial.",
    email: "[CORREO DEL EQUIPO]",
    whatsapp: "[WHATSAPP]",
    github: "github.com/[USUARIO]"
  }
};
