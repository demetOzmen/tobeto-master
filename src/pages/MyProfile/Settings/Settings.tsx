import React from 'react'
import { Row, Col, Container, Button } from "react-bootstrap";
import Menu from '../Menu/Menu';

export default function Settings() {
  return (
    <Container className='bordered'>
      <Row>
      <Col className='bordered' md={3} sm={12}><Menu/></Col>
      <Col className='bordered' md={9} sm={12}>Settings</Col>
      </Row>
    </Container>
  )
}
