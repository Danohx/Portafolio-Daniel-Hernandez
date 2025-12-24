// src/components/About.tsx
import React from 'react'

const About: React.FC = () => {
  const skills = [
    "React", "TypeScript", "MySQL", "HTML", "CSS", "Java", "Node.js"
  ]

  return (
    <section id="about" className="section about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>Sobre mí</h2>
          <p>
            Soy un desarrollador apasionado por crear sistemas que funcionen tan bien como se ven. 
            Actualmente estoy profundizando en la <strong>Ingeniería en Desarrollo y Gestión de Software</strong>.
          </p>
          <p>
            Me encanta resolver problemas complejos, desde integrales de cálculo hasta la arquitectura de una base de datos para un punto de venta real.
          </p>
        </div>

        <div className="about-skills">
          <h3>Mis Herramientas</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About