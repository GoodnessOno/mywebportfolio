import React from 'react'
import './projectsshowcase.css'
import { Link } from 'react-router-dom'


const projects = [
  {
      id: 1,
      title: 'Project 1',
      shortDescription: 'This is a short description of Project 1.',
      imageUrl: './assets/project1.jpg',
  },
  {
      id: 2,
      title: 'Project 2',
      shortDescription: 'This is a short description of Project 2.',
      imageUrl: './assets/project2.jpg',
  },
  // Add more projects as needed
]

const Projectsshowcase = () => {
    return (
        <div className="home-page">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-preview">
                        <img src={project.imageUrl} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.shortDescription}</p>
                        <Link to={`/projects/${project.id}`}>Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projectsshowcase
