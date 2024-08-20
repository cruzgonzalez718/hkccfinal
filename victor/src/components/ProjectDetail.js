// ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './Projects.css';

const ProjectDetail = () => {
  const { projectName } = useParams();

  return (
    <div className="projects-container">
        <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>{projectName}</h2>
            <button>View Project</button>
            <h1>  </h1>
            <h1>  </h1>
            <h1>  </h1>
            <button>Upload Files</button>
        </div>
    </div>
  );
};

export default ProjectDetail;
