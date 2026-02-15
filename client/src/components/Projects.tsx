import React from 'react';
import type { Project } from '../types/index';
import '../styles/Projects.css';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="projects-section">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card floating-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-number">0{project.id}</span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="project-tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <button className="project-link-btn">
                  <span>View Project</span>
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
