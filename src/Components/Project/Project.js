import React from 'react'
import PropTypes from 'prop-types'

function Project (props) {
  return (
    <div className="Project">
      <img
        className="About__ProfilePic"
        src='src/Images/Projects/antsp.png'
        alt="Avatar"
      />
    </div>
  )
}

Project.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string
}

export default Project
