import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' }) 
        alert('¡Mensaje enviado con éxito!')
      } else {
        setStatus('error')
        alert('Hubo un error al enviar el mensaje.')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section 
      id="contact" 
      className="section contact-section-v2" 
      aria-labelledby="contact-heading"
    >
      {/* Agregamos ID para el aria-labelledby */}
      <h2 id="contact-heading">¡Trabajemos juntos!</h2>
      
      <div className="contact-wrapper">
        
        <div className="contact-info">
          <p className="contact-desc">
            Estoy disponible para proyectos freelance, colaboraciones o cualquier consulta.
            No dudes en contactarme y hagamos realidad tu próximo proyecto.
          </p>

          {/* Solución 1.3.1: Usar semántica de lista para elementos agrupados */}
          {/* style={{ listStyle: 'none', padding: 0 }} asegura que no salgan viñetas/bullets */}
          <ul className="info-cards" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            
            {/* Tarjeta Email */}
            <li className="info-card">
              <div className="icon-box">
                <FaEnvelope aria-hidden="true" />
              </div>
              <div className="info-text">
                {/* Solución 2.4.6: Corregir jerarquía de H2 a H3 (no saltar a H4) */}
                <h3>Email</h3>
                <a href="mailto:contacto@danohx.dev">contacto@danohx.dev</a>
              </div>
            </li>

            {/* Tarjeta Ubicación */}
            <li className="info-card">
              <div className="icon-box">
                <FaMapMarkerAlt aria-hidden="true" />
              </div>
              <div className="info-text">
                <h3>Ubicación</h3>
                <p>Hidalgo, México</p>
              </div>
            </li>

             {/* Tarjeta WhatsApp */}
             <li className="info-card">
              <div className="icon-box">
                <FaWhatsapp aria-hidden="true" />
              </div>
              <div className="info-text">
                <h3>WhatsApp</h3>
                <a 
                  href="https://wa.me/5217717084651" 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="Enviar mensaje por WhatsApp"
                >
                  Enviar mensaje
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* COLUMNA DERECHA: Formulario */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Tu nombre completo" 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="tu@email.com" 
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Asunto</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              placeholder="¿En qué puedo ayudarte?" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Cuéntame sobre tu proyecto..." 
              rows={5} 
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-primary full-width">
            Enviar Mensaje
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact