import React from 'react'
import PropTypes from 'prop-types'

import './Project.css'

function Project (props) {
  const project = props.data
  return (
    <div key={project.title} className="Project">
      <div className="item-wrap">
        <a href={project.url} title={project.title} target='_blank' rel="noreferrer">
          <img alt={project.title} src={project.image} width="100%" height="200px"/>
          <div className="overlay">
            <div className="Project__Overlay-text">
              <h5>{project.title}</h5>
              <p>{project.description}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

Project.propTypes = {
  data: PropTypes.object
}

export default Project
