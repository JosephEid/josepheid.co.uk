import React from 'react'
import Project from '../Project/Project'
import { CardDeck } from 'react-bootstrap'

import './Projects.css'

const Projects = () => {
  const data = require('../../data.json')
  const projects = [...data.projects]
  const projectRows = []
  while (projects.length) {
    projectRows.push(projects.splice(0, 3))
  }
  const listProjects = projectRows.map((row, i) =>
    <div className='Projects__Row' key={`${i}`}>
      <CardDeck>
        {row.map((project) => <Project key={project.name} data={project} />)}
      </CardDeck>
    </div>
  )
  return (
    <section id="projects" className="Projects">
      <h2>Projects I&apos;ve Worked On</h2>
      {listProjects}
    </section>
  )
}

export default Projects
