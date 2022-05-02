import React from 'react';
import './Projects.css';
import { projects } from '../../helper/projects';
import ProjectCard from '../card/ProjectCard';

function Projects() {
  return (
    <div className='projects' id='projects'>
      <div className='container-fluid margin-inline-auto'>
        <div className='project-container-header'>
          <h2>Projects and Portfolio</h2>
          <em>Sharing my endeavors and passions...</em>
        </div>
        <div className='projects-display-container'>
          {projects.map((project) => {
            return (
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
