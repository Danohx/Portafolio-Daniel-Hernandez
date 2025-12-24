// src/components/Contact.tsx
import React from 'react'
import { FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa' // Asegúrate de importar los iconos

const Contact: React.FC = () => {
  const phoneNumber = "5217717084651" 
  const message = encodeURIComponent("Hola, vi tu portafolio y me gustaría contactarte.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-content">
        <h2>¿Tienes un proyecto en mente?</h2>
        <p>
          Estoy disponible para colaboraciones o nuevas oportunidades laborales.
          Si quieres hablar de código, soluciones web o simplemente saludar, ¡mándame un correo o envíame un mensaje!
        </p>

        <div className="contact-actions">
          <a href="mailto:dt094250@ejemplo.com" className="btn-primary btn-large">
          <FaEnvelope /> Enviar Correo
        </a>

        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-whatsapp btn-large">
            <FaWhatsapp /> WhatsApp
        </a>
        </div>
        <div className="social-links">
          {/* Aquí podrías poner iconos de GitHub/LinkedIn luego */}
          <a href="https://github.com/Danohx" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact