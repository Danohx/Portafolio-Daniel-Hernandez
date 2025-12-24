import React, { useState } from "react"
import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"
import type { Project } from "../types/Project"

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="section">
      <h2>Proyectos Destacados</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  )
}

export default Projects