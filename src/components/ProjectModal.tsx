import React, { useEffect, useRef, useState } from 'react'
import { FaTimes, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import type { Project } from '../types/Project'

interface Props {
  project: Project
  onClose: () => void
}

const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  const [zoomImage, setZoomImage] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const hasGallery = project.images && project.images.length > 0;
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.images) {
      setCurrentImgIndex((prev) => (prev === project.images!.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.images) {
      setCurrentImgIndex((prev) => (prev === 0 ? project.images!.length - 1 : prev - 1))
    }
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        role="dialog" // Semántica para modales
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Solución 1.1.1: Etiqueta descriptiva para botón de solo icono */}
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Cerrar detalles del proyecto"
        >
          <FaTimes aria-hidden="true" />
        </button>

        <div className="modal-media">
          {project.video ? (
            <video 
              ref={videoRef} 
              src={project.video} 
              autoPlay 
              controls 
              className="modal-video" 
              title={`Video demostrativo de ${project.title}`} // Título para accesibilidad
            />
          ) : hasGallery ? (
            <div className="gallery-container">
              <img 
                src={project.images![currentImgIndex]} 
                alt={`Captura de pantalla ${currentImgIndex + 1} de ${project.title}`} 
                className={'modal-image'}
                onClick={() => setZoomImage(project.images![currentImgIndex])}
                />
              
              {project.images!.length > 1 && (
                <>
                  {/* Solución 1.1.1: Etiquetas para navegación */}
                  <button 
                    className="gallery-btn prev" 
                    onClick={prevImage}
                    aria-label="Ver imagen anterior"
                  >
                    <FaChevronLeft aria-hidden="true" />
                  </button>
                  
                  <button 
                    className="gallery-btn next" 
                    onClick={nextImage}
                    aria-label="Ver siguiente imagen"
                  >
                    <FaChevronRight aria-hidden="true" />
                  </button>
                  
                  <div className="gallery-dots">
                    {project.images!.map((_, idx) => (
                      <span key={idx} className={`dot ${idx === currentImgIndex ? 'active' : ''}`} />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <img src={project.image} 
              alt={`Vista previa de ${project.title}`} 
              className={'modal-image'}
              onClick={() => project.image && setZoomImage(project.image)}
            />
          )}
        </div>

        <div className="modal-body">
           <h2 id="modal-title">{project.title}</h2>
           <div className="modal-tags">
            {project.tags?.map(tag => <span key={tag} className="tag">{tag}</span>)}
           </div>
           <p className="modal-description">{project.description}</p>
           
           <div className="modal-footer">
             {project.link && (
               /* Solución 2.4.4: Propósito del enlace claro en contexto */
               <a 
                 href={project.link} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="btn-primary"
                 aria-label={`Visitar sitio web de ${project.title} (se abre en una nueva pestaña)`}
               >
                 <FaExternalLinkAlt style={{ marginRight: '8px' }} aria-hidden="true"/> Visitar Sitio
               </a>
             )}
           </div>
        </div>
      </div>

      {zoomImage && (
        <div 
          className="image-zoom-overlay" 
          onClick={(e) => {
            e.stopPropagation()
            setZoomImage(null)
          }}
        >
          <div
            className="image-zoom-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Solución 1.1.1: Botón cerrar zoom accesible */}
            <button 
              className="zoom-close-btn"
              onClick={() => setZoomImage(null)}
              aria-label="Cerrar vista ampliada"
            >
              <FaTimes aria-hidden="true" />
            </button> 
            <img
              src={zoomImage}
              alt="Vista ampliada"
              className="image-zoomed"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectModal