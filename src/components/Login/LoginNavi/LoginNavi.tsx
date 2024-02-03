import React from 'react';
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import './LoginNavi.css';
import { Link } from 'react-router-dom';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LoginNavi() {
  return (
    <>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="ik-banner">
            <div className="container">
              <div className="ik-banner-top">
                <div>
                  <span className="ik-logo-platform"></span>
                </div>
                <div className="mobile-none">
                  <span className="text-ik fw-bold">
                    Aradığın <span style={{ color: 'rgb(0, 176, 120)' }}>"</span>İş<span style={{ color: 'rgb(0, 176, 120)' }}>"</span> Burada!
                  </span>
                </div>
                <div>
                  <button className="ik-btn">Başvur</button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={8} sm={4}>
          <Navbar expand="sm" className="bg-dark">
            <Container>
              <Image
                src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=256&q=75"
                width="100px"
                className="m-3"
                fluid
              />
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Link to="/about" className="nav-link p-4 text-white">
                    Biz Kimiz
                  </Link>
                  <Link to="/login" className="nav-link p-4 text-white">
                    Neler Sunuyoruz?
                  </Link>
                  <Link to="/catalog" className="nav-link p-4 text-white">
                    Katalog
                  </Link>
                  <Link to="/codecademy" className="nav-link p-4 text-white">
                    Codecademy
                  </Link>
                  <Link to="/tobetoThis" className="nav-link p-4 text-white">
                    Tobeto'da Bu Ay
                  </Link>

                  <Link to="/platform" className="nav-link p-4 text-white">
                    tobeto
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </>
  );
}