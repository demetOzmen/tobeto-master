import { Row, Col, Container, Button } from "react-bootstrap";
import Menu from '../Menu/Menu';
import React from 'react';

export default function Certificate() {
  return (
    <Container className='bordered'>
    <Row>
    <Col className='bordered' md={3}  sm={12}><Menu/></Col>
    <Col className='bordered' md={9}  sm={12}>Certificate</Col>
    </Row>
  </Container>
  );
};
