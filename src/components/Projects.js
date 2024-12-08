import React from 'react';

function Projects() {
  const projects = [
    { title: 'Skills 1', description: 'JS', link: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
    { title: 'Skills 2', description: 'HTML', link: 'https://developer.mozilla.org/es/docs/Web/HTML' },
    { title: 'Skills 3', description: 'CSS', link: 'https://developer.mozilla.org/es/docs/Web/CSS' },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container ">
        <h1 style={{ textShadow: "1px 1px 8px white" }}  className="text-center text-primary">Proyectos</h1>
        <br></br>
        <div className="row mt-4">
          {projects.map((project, index) => (
            <div className=" border-primary col-md-4 mb-4" key={index}>
              <div className="card card border-primary">
                <div className="card-body card border-primary">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a style={{ textShadow: "1px 1px 5px white" }} href={project.link} className="btn btn-primary">Ver más</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
