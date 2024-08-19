// Projects.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import robotImage from '../assets/Robot.png'; // Corrected path

const initialProjects = [

  // ... other initial projects
];

const Projects = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectDescription, setNewProjectDescription] = useState('');

  const addProject = () => {
    const newProject = {
      name: newProjectName || 'Untitled Project',
      description: newProjectDescription || 'No Description Provided',
      image: robotImage,
    };
    setProjects([...projects, newProject]);
    setNewProjectName(''); // Clear the input field
    setNewProjectDescription(''); // Clear the input field
  };

  return (
    <div className="projects-container">
      <h2>HopeKCC Projects</h2>
      <div className="add-project-form">
        <input
          type="text"
          placeholder="Project Name"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Project Description"
          value={newProjectDescription}
          onChange={(e) => setNewProjectDescription(e.target.value)}
        />
        <button onClick={addProject}>Add Project</button>
      </div>
      <h2>            </h2>
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <img src={project.image} alt={`${project.name} image`} className="project-image" />
            <Link to={`/projects/${project.name}`}>
              <h3>{project.name}</h3>
            </Link>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
