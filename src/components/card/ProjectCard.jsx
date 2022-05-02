import React from 'react';
import Button from '../button/Button';
import './ProjectCard.css';

function ProjectCard(props) {
  const { title, description, imageUrl } = props;
  const style = {
    background: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${imageUrl})`,
  };
  return (
    <div class='project-card' style={style}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Button textColor='white'>More</Button>
    </div>
  );
}

export default ProjectCard;
