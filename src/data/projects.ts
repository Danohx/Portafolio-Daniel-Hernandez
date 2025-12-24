// src/data/projects.ts
import type { Project } from "../types/Project"

export const projects: Project[] = [
  {
    title: "Moda Sarita — Plataforma E-commerce (En desarrollo)",
    description:
      "Proyecto transversal de larga duración enfocado en la construcción de una plataforma de e-commerce y gestión administrativa. Actualmente en desarrollo como parte de un proceso académico de 16 meses, con despliegue en dominio propio.",
    images: ["/images/prototipo1-moda-sarita.png", "/images/prototipo2-moda-sarita.png"],
    link: "https://moda-sarita.com",
    tags: ["React", "Vite", "NodeJS", "MySQL", "Full Stack"],
  },
  {
    title: `Aplicación "Sabalitos La Vecina"`,
    description:
      "Aplicación desarrollada para digitalizar el control de ventas y productos de un negocio familiar. Permite registrar ventas, calcular totales diarios y mejorar la organización del flujo de caja.",
    image: "/images/sabalitos-logo.png",
    video: "/videos/loop-sabalitos-lavecina.mp4",
    tags: ["React", "Lógica de Negocio", "UX/UI", "Solución Real"],
  },
  {
    title: `Landing Page para "Zenda"`,
    description:
      "Desarrollo de landing page enfocada en impacto visual y marketing digital, integrando video, animaciones y una estructura optimizada para presentación de producto. Enfocado en un proyecto innovador",
    image: "/images/zenda-prototipo.png",
    link: "https://zenda-gules.vercel.app",
    tags: ["Frontend", "Diseño Visual", "Integración Multimedia"],
  },
  {
    title: "BBVA — Clon de Interfaz Web (NO FUNCIONAL)",
    description:
      "Replicación de la interfaz web de BBVA con enfoque en precisión visual y adaptación responsive para equipos de computo (SIN FUNCIONALIDAD).",
    image: "/images/bbva-responsive.png",
    link: "https://bbva-html.vercel.app/",
    tags: ["CSS", "UI", "Diseño Responsivo"],
  },
  {
    title: "Portal de Calificaciones enfocado en la UTHH (PODAI)",
    description:
      "Rediseño de una interfaz académica priorizando una experiencia clara y funcional en dispositivos móviles. Enfocado solo en el rediseño, sus unicas funciones son navegación entre algunas páginas.",
    image: "/images/podai-responsive.png",
    link: "https://podai-responsive-77l8.vercel.app/Bienvenida.html",
    tags: ["Mobile First", "Diseño Adaptable", "HTML/CSS"],
  },
]
