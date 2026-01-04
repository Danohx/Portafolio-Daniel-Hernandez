import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Efecto para el Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Detectar sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100 // Offset para activar antes

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Ejecutar al cargar
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú con la tecla ESCAPE
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (menuOpen && e.key === 'Escape') {
        setMenuOpen(false)
      }
    }
    
    if (menuOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        
        <a href="#home" className="logo-link" onClick={closeMenu}>
          <img 
            src="/images/logo_portafolio.png" 
            alt="Daniel Hernandez - Logo" 
            className="logo-img"
          />
        </a>

        <nav className="desktop-nav">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Inicio</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>Sobre mí</a>
          <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experiencia</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Habilidades</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Proyectos</a>
          <a href="#contact" className={`nav-btn-contact ${activeSection === 'contact' ? 'active' : ''}`}>Contacto</a>
        </nav>

        <button 
          className="hamburger-btn" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        <div 
          id="mobile-menu"
          className={`mobile-nav-overlay ${menuOpen ? 'active' : ''}`}
          aria-hidden={!menuOpen}
        >
          <nav className="mobile-nav-content">
            <a href="#home" onClick={closeMenu} className={activeSection === 'home' ? 'active' : ''}>Inicio</a>
            <a href="#about" onClick={closeMenu} className={activeSection === 'about' ? 'active' : ''}>Sobre mí</a>
            <a href="#experience" onClick={closeMenu} className={activeSection === 'experience' ? 'active' : ''}>Experiencia</a>
            <a href="#skills" onClick={closeMenu} className={activeSection === 'skills' ? 'active' : ''}>Habilidades</a>
            <a href="#projects" onClick={closeMenu} className={activeSection === 'projects' ? 'active' : ''}>Proyectos</a>
            <a href="#contact" className={`mobile-btn-contact ${activeSection === 'contact' ? 'active' : ''}`} onClick={closeMenu}>Contacto</a>
          </nav>
        </div>

      </div>
    </header>
  )
}

export default Header