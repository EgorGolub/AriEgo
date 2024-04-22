import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo from '../assets/gogo 1.png';

export default function Header() {
  const [color, setColor] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 160) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeNavbarColor);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Navbar scrolling dark collapseOnSelect expand="md" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" width="135" height="85" />
          </Navbar.Brand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#description">
                <span class="special-letter">T</span>eenused
              </Nav.Link>
              <Nav.Link href="/#requirements">
                <span class="special-letter">E</span>ttevõtest
              </Nav.Link>
              <Nav.Link href="/#gallery">
                <span class="special-letter">G</span>alerii
              </Nav.Link>
              <Nav.Link href="/#contacts">
                <span class="special-letter">K</span>ontaktid
              </Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
}
