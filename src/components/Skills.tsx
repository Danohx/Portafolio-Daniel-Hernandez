import React from 'react'
import { FaReact, FaNodeJs, FaJava, FaHtml5} from 'react-icons/fa'
import { SiTypescript, SiMysql } from 'react-icons/si' 

const Skills: React.FC = () => {
  const skills = [
    { 
      name: "React", 
      category: "Frontend Web", 
      percent: 75, 
      icon: <FaReact color="#61DAFB"/> 
    },
    { 
      name: "TypeScript", 
      category: "Lenguaje", 
      percent: 80, 
      icon: <SiTypescript color="#3178C6"/> 
    },
    { 
      name: "Node.js", 
      category: "Backend", 
      percent: 65, 
      icon: <FaNodeJs color="#339933"/> 
    },
    { 
      name: "MySQL", 
      category: "Base de Datos", 
      percent: 80, 
      icon: <SiMysql color="#00758F"/> 
    },
    { 
      name: "Java", 
      category: "Backend / POO", 
      percent: 45, 
      icon: <FaJava color="#007396"/> 
    },
    { 
      name: "HTML5 & CSS3", 
      category: "Maquetación", 
      percent: 65, 
      icon: <FaHtml5 color="#E34F26"/> 
    }
  ]

  return (
    <section id="skills" className="section skills-section">
      <h2>Habilidades y Tecnologías</h2>
      
      <div className="skills-grid-v2">
        {skills.map((skill, index) => (
          <div className="skill-card-v2" key={index}>
            {/* Icono en caja */}
            <div className="skill-icon-box">
              {skill.icon}
            </div>
            
            {/* Texto */}
            <div className="skill-info">
              <h3>{skill.name}</h3>
              <p>{skill.category}</p>
            </div>

            {/* Barra de Progreso */}
            <div className="skill-progress-container">
              <div className="skill-progress-bar">
                <div 
                  className="skill-progress-fill" 
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills