import React from 'react'
import './About.css'

function About () {
  return (
    <section id="about" className="About">
      <div className="About__Row">
        <div className="About__Col-9">
          <h2>About Me</h2>
          <p>Hello! I am a graduate from the University of Sheffield who has been working in London as a Software Engineer since 2019.
            I love building all things software, including web apps, extensions and games.</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact me by email:</h2>
              <p className="address">
                <span>josephceid@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="About__Col-3">
          <img
            className="About__ProfilePic"
            src='myAvatar.png'
            alt="Avatar"
          />
        </div>
      </div>
    </section>
  )
}

export default About
