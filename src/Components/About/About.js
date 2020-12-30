import React from 'react'

function About () {
  return (
    <section id="about" className="About">
      <div className="About__Row">
        <div className="three columns">
          <img
            className="About__ProfilePic"
            src='myAvatar.png'
            alt="Avatar"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>Hello! I am a graduate from the University of Sheffield who has been working in London as a Software Engineer since 2019. I love building all things software, mostly web apps and games.</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact me by email:</h2>
              <p className="address">
                <span>josephceid@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
