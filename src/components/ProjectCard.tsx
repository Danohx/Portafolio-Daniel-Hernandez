import React from "react"
import type { Project } from "../types/Project"

interface Props {
  project: Project
  onClick: () => void
}

const ProjectCard: React.FC<Props> = ({ project, onClick }) => {
  const coverImage = project.image || (project.images && project.images[0]);

  return (
    <div className="project-card">
      <div className="card-media-container" onClick={onClick}>
        {coverImage ? (
          <img 
            src={coverImage} 
            alt={project.title} 
            className="card-media" 
          />
        ) : (
          <div style={{ width: '100%', height: '100%', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
            Sin imagen
          </div>
        )}
      </div>

      <div className="project-info">
        <h3>{project.title}</h3>
        <p className="short-description">{project.description}</p>
        
        <button className="btn-details" onClick={onClick}>
          Ver más detalles
        </button>
      </div>
    </div>
  )
}

export default ProjectCard