import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../All.css';
import logo from "../imgs/moose.png";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className=" navbar sticky-top overflow-hidden">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="logoNavbar" alt='' style={{ maxHeight: '70px', margin: '-10px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav navbar-toggler" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className=" fw-bold">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#flights">Flights</Nav.Link>
            <Nav.Link href="#hotels">Hotels</Nav.Link>
            <Nav.Link href="#places">Places</Nav.Link>
            <Nav.Link eventKey={2} href="#footer">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>)
}

export default NavBar;
