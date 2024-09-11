import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projectList = [
    { name: 'Trendy-Treasures', description: 'E-commerce site built with React', link: 'https://github.com/udhaykaitha27/trendy-treasures' , output : "https://udhays-trendy-treasures.netlify.app/"},
    { name: 'Todos-website', description: 'Thise is a project without using react', link: 'https://github.com/udhaykaitha27/Todos-website', output : "https://udhay-todo-list.netlify.app/" },
    { name: 'Eccomerce-website', description: 'Thise is a static eccomerce page done using html css bootstrap', link: 'https://github.com/udhaykaitha27/ecommerce-website', output : "https://udhay-ecommerce-website.netlify.app/" },
    { name: 'API-calls', description: 'Thise is just a ui to perform the api calls (post,put,delete,get)', link: 'https://github.com/udhaykaitha27/Api-calls', output: 'https://udhay-api-calls-js.netlify.app/'},
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a style={{marginRight : 50}} href={project.link} target="_blank" rel="noopener noreferrer">Git hub</a>
            <a href={project.output} target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
