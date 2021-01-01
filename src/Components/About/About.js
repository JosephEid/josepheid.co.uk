import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './About.css'

function About () {
  return (
    <section id="about" className="About">
      <Container>
        <Row>
          <Col>
            <h2>About Me</h2>
            <p>Hello! I am a graduate from the University of Sheffield who has been working in London as a Software Engineer since 2019.</p>
          </Col>
          <Col>
            <img
              className="About__ProfilePic"
              src='myAvatar.png'
              alt="Avatar"
            />
            <h3>Contact me by email:</h3>
            <p>josephceid@gmail.com</p>
          </Col>
        </Row>
        <Row>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
          <Col>
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
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
