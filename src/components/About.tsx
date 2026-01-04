import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="section about-section">
      <div className="about-container-v2">
        
        <div className="about-content">
          <h2>Sobre Mí</h2>
          <p className="about-bio">
            Soy un desarrollador apasionado por crear sistemas que funcionen tan bien como se ven. 
            Me enfoco en transformar ideas complejas en código limpio y eficiente, siempre buscando 
            aprender nuevas tecnologías para mejorar la experiencia del usuario.
            Actualmente estoy profundizando en la <strong>Ingeniería en Desarrollo y Gestión de Software</strong>.
          </p>

          <div className="personal-details">
            <div className="detail-item">
              <span>Residencia:</span>
              <strong>Hidalgo, México</strong>
            </div>
            
            <div className="detail-item">
              <span>Edad:</span>
              <strong>20 Años</strong>
            </div>
            
            <div className="detail-item">
              <span>Ocupación:</span>
              <strong>Estudiante</strong>
            </div>
            
            <div className="detail-item">
              <span>Idiomas:</span>
              <strong>Español (Nativo), Inglés (A2+)</strong>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About