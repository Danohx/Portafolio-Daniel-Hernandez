import React from 'react'
import { FaGraduationCap, FaLaptopCode, FaTools, FaCodeBranch } from 'react-icons/fa'

const Experience: React.FC = () => {
  const timeline = [
    {
      id: 1,
      role: "Ingeniería en Desarrollo y Gestión de Software",
      place: "Universidad Tecnológica de la Huasteca Hidalguense",
      date: "2025 - Actualidad",
      // Actualicé la descripción para que coincida con el nivel de Ingeniería
      description: "Formación avanzada en arquitectura de software, gestión de proyectos de TI, calidad de software y desarrollo de aplicaciones escalables multiplataforma.",
      icon: <FaCodeBranch />, // Icono diferente para diferenciarlo
      type: "education"
    },
    {
      id: 2,
      role: "TSU en Desarrollo de Software Multiplataforma",
      place: "Universidad Tecnológica de la Huasteca Hidalguense",
      date: "2023 - 2025",
      description: "Especialización en desarrollo backend y frontend, manejo de bases de datos SQL y fundamentos de programación orientada a objetos.",
      icon: <FaLaptopCode />,
      type: "education"
    },
    {
      id: 3,
      role: "Técnico en Soporte y Mantenimiento",
      place: "CECyTE Plantel Atlapexco",
      date: "2020 - 2023",
      description: "Diagnóstico de hardware, mantenimiento preventivo/correctivo de equipos de cómputo e instalación de sistemas operativos y redes locales.",
      icon: <FaTools />,
      type: "education"
    }
  ]

  return (
    <section id="experience" className="section">
      <h2>Mi Trayectoria</h2>
      
      <div className="timeline-start-marker"></div>
      <div className="timeline-container">
        {timeline.map((item) => (
          <div key={item.id} className="timeline-item">
            {/* Icono de la línea de tiempo */}
            <div className="timeline-icon">
              {item.icon}
            </div>
            
            {/* Contenido de la tarjeta */}
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h3>{item.role}</h3>
              <h4 className="timeline-place">
                <FaGraduationCap className="place-icon" aria-hidden="true"/> {item.place}
              </h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="timeline-end-marker"></div>
    </section>
  )
}

export default Experience