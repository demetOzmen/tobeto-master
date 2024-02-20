import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Image, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "../Navbar/Navi.css";

export default function Navi() {
  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Link to="/Platform">
        <Image
          src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
          className="mx-5"
          width={"179px"}
        />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto sm">
          <NavLink to="/platform" className="nav-link p-4">
            Anasayfa
          </NavLink>
          <NavLink to="/my-profile" className="nav-link p-4">
            Profilim
          </NavLink>
          <NavLink to="/ComingSoon" className="nav-link p-4">
            Değerlendirmeler
          </NavLink>
          <NavLink to="/catalog" className="nav-link p-4">
            Katalog
          </NavLink>
          <NavLink to="/dates" className="nav-link p-4">
            Takvim
          </NavLink>
          <NavLink to="/ComingSoon" className="nav-link p-4">
            İstanbul Kodluyor
          </NavLink>
        </Nav>

        <Nav className="d-flex align-items-center me-5">
          <Nav.Link className="text-dark ">
            <FontAwesomeIcon icon={faSave} style={{ color: "purple" }} />
          </Nav.Link>
          <NavDropdown title="İsim Soyisim" id="profile-dropdown">
            <NavDropdown.Item>Profil Bilgileri</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Oturumu Kapat</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
