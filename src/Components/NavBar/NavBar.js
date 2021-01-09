import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar fixed="top" className="Navbar" expand="lg">
      <Navbar.Toggle className="Navbar__Toggler" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" className="Navbar__Link">Home</Nav.Link>
          <Nav.Link href="#about" className="Navbar__Link">About Me</Nav.Link>
          <Nav.Link href="#projects" className="Navbar__Link">Projects</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="https://github.com/JosephEid" className="Navbar__Link">
            <i className="fa fa-github" style={{ paddingRight: '5px' }} />
            Github
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
