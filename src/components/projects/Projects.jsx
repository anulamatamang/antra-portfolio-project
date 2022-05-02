import React from 'react';
import './Projects.css';
import { projects } from '../../helper/projects';
import ProjectCard from '../card/ProjectCard';

function Projects() {
  return (
    <div class='projects' id='projects'>
      <div class='container-fluid margin-inline-auto'>
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
