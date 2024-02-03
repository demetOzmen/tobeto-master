import React from 'react'
import { Col, Row } from 'react-bootstrap'

type Props = {}

export const Welcome = (props: Props) => {
  return (
    <>
    <Row className="welcome-row">
          <Col xs={12} className="text-center">
            <h1 className="welcome-header">
              TOBETO
              <span>
                'ya hoş geldin <br></br> FirstName
              </span>
            </h1>
            <p className="welcome-subtext">
              Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin
              yanında!
            </p>
          </Col>
          <Col xs={12} className="text-right dotted-image-container">
            <img
              src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg"
              alt="Purple Dots"
              className="img-fluid"
            />
          </Col>
        </Row>
        </>
  )
}
