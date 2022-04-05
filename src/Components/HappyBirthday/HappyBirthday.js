import React from 'react'
import { Col, Row } from 'react-bootstrap'

import './HappyBirthday.css'

const HappyBirthday = () => {
  return (
    <div className='happy-birthday'>
      <Row>
        <Col style={{ backgroundColor: '#009246', width: '30%' }}>
          <h1>
            Happy Birthday Georgia!
          </h1>
        </Col>
        <Col style={{ backgroundColor: '#ffffff', width: '30%' }}>
          <img
            className="gb"
            src='gb.png'
            alt="Avatar"
          />
        </Col>
        <Col style={{ backgroundColor: '#ce2b37', width: '30%' }}>
          <h1>
            We&apos;re going to Rome!!!
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            className="itinerary"
            src='itinerary.png'
            alt="Avatar"
          />
        </Col>
      </Row>
    </div>

  )
}

export default HappyBirthday
