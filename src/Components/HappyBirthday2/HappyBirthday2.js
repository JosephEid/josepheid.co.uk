import React from 'react'
import { Col, Row } from 'react-bootstrap'

import './HappyBirthday2.css'

const HappyBirthday2 = () => {
  return (
    <div className='happy-birthday'>
      <Row style={{ height: '200px' }}>
        <Col style={{ backgroundColor: '#FFFFFF' }}>
          <h1>
            Happy Birthday Hannah!
          </h1>
          <img
            className="hs"
            src='hands.png'
            alt="Avatar"
            style={{ padding: '10px' }}
          />
        </Col>

      </Row>
      <Row style={{ height: '200px' }}>
        <Col style={{ backgroundColor: '#DC143C' }}>
        <div className="content">
          <h1 style={{ textAlign: 'centre' }}>
            We&apos;re going to Krakow!!!
          </h1>
          </div>
        </Col>
      </Row>
      <Row style={{ height: '200px', backgroundColor: '#FFFFFF' }}>
          <img
            className="itinerary"
            src='flights.png'
            alt="Avatar"
            style={{ height: '200px', width: 'auto' }}
          />
      </Row>
      <Row style={{ height: '200px', backgroundColor: '#FFFFFF' }}>
          <img
            className="itinerary"
            src='hotel.png'
            alt="Avatar"
            style={{ height: '200px', width: 'auto' }}
          />
      </Row>
      <Row style={{ height: '200px' }}>
          <img
            className="itinerary"
            src='krakow.png'
            alt="Avatar"
            style={{ height: '200px', maxWidth: '100%' }}
          />
      </Row>
    </div>

  )
}

export default HappyBirthday2
