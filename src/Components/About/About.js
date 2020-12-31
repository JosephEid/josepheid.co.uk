import React from 'react'
import './About.css'

function About () {
  return (
    <section id="about" className="About">
      <div className="About__Row">
        <div className="About__Col-75">
          <div className="About__Col-content">
            <h2>About Me</h2>
            <p>Hello! I am a graduate from the University of Sheffield who has been working in London as a Software Engineer since 2019.</p>
            <h2>Skills</h2>
            <div className="About__Skills">
              <div className="About__Col-33">
                <h3>Things I love to build:</h3>
                <ul>
                  <li>
                    Web Apps
                  </li>
                  <li>
                    Automated Test Suites
                  </li>
                  <li>
                    Extensions
                  </li>
                  <li>
                    Games
                  </li>
                </ul>
              </div>
              <div className="About__Col-33">
                <h3>Topics I&apos;m interested in:</h3>
                <ul>
                  <li>
                    Cyber Security
                  </li>
                  <li>
                    Cloud Technologies
                  </li>
                  <li>
                    Game Development
                  </li>
                  <li>
                    Latest Software Development Tools
                  </li>
                </ul>
              </div>
              <div className="About__Col-33">
                <h3>Technologies I tend to use:</h3>
                <ul>
                  <li>
                    C#
                  </li>
                  <li>
                    JavaScript
                  </li>
                  <li>
                    Python
                  </li>
                  <li>
                    AWS
                  </li>
                  <li>
                    Docker
                  </li>
                  <li>
                    React
                  </li>
                  <li>
                    Godot
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="About__Col-25">
          <img
            className="About__ProfilePic"
            src='myAvatar.png'
            alt="Avatar"
          />
          <div>
            <div>
              <h2>Contact me by email:</h2>
              <span>josephceid@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
