import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Votre Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Accueil</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <NavDropdown title="Projets" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/projets/projet1">Projet 1</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/projets/projet2">Projet 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/projets/tous">Tous les projets</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
        {/* Ajoutez ici des éléments pour la droite de la navbar */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
