import React from 'react'
import Project from '../Project/Project'

import './Projects.css'

function Projects () {
  const data = require('../../data.json')
  const listProjects = data.projects.map((project) => <Project key={project.name} data={project} />)
  return (
    <section id="projects" className="Projects">
      <div className="Projects__Row">
        <h2>Projects I&apos;ve Worked On</h2>
        <div className="Projects__List">
          {listProjects}
        </div>
      </div>
    </section>
  )
}

export default Projects
