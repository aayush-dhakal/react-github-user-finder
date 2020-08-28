import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Navbar.css";

const NavbarComponent = () => {
  return (
    <Navbar className="navbar blue-color" expand="lg" variant="dark">
      <i className="fab fa-github"></i>
      <Navbar.Brand href="#home">Github Finder</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/">
            <Nav.Link className="links">Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/about">
            <Nav.Link className="links">About</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
