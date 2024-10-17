import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './About.css'

const About = () => {
  return (
        <section id='about' className='About'>
            <Container>
                <Row>
                    <Col>
                        <h2>About Me</h2>
                        <p>
                            Hello! I am a graduate from the University of
                            Sheffield who has been working in London as a
                            Software Engineer since 2019.
                        </p>
                    </Col>
                    <Col>
                        <img
                            className='About__ProfilePic'
                            src='myAvatar.png'
                            alt='Avatar'
                        />
                        <h3>Contact me by email:</h3>
                        <p>josephceid@gmail.com</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Things I love to build:</h3>
                        <ul>
                            <li>Cloud Based Web Applications</li>
                            <li>Automated Test Suites</li>
                            <li>Extensions</li>
                            <li>Games</li>
                        </ul>
                    </Col>
                    <Col>
                        <h3>Topics I&aposm interested in:</h3>
                        <ul>
                            <li>All things in the javascript ecosystem</li>
                            <li>Cloud Technologies</li>
                        </ul>
                    </Col>
                    <Col>
                        <h3>Technologies I tend to use:</h3>
                        <ul>
                            <li>Go</li>
                            <li>Node.js</li>
                            <li>React</li>
                            <li>AWS</li>
                            <li>Next.js</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
    </section>
  )
}

export default About
