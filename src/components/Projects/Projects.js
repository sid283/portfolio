import { forwardRef } from 'react';
import './Projects.scss';

const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      title: "Project 1",
      description: "Description",
      // Add more project details like technologies, links, etc.
    }
    // Add more projects
  ];

  return (
    <section ref={ref} className="projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Projects; 