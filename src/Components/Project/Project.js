import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import './Project.css'

const Project = (props) => {
  const project = props.data
  return (
    <Card className="Project">
      <a href={project.url} title={project.title} target='_blank' rel="noreferrer">
        <Card.Img variant="top" src={project.image} className="Project__Image"/>
      </a>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          {project.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

Project.propTypes = {
  data: PropTypes.object
}

export default Project
