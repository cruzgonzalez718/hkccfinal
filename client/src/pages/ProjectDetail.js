import React from 'react';
import { useParams } from 'react-router-dom';
import './Projects.css';

const ProjectDetail = () => {
  const { projectName } = useParams();

  return (
    <div className="projects-container">
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>{projectName}</h2>
        <button className="project-button">View Project</button>
        <h2>           </h2>
        <button className="project-button">Upload Files</button>
      </div>
    </div>
  );
};

export default ProjectDetail;
