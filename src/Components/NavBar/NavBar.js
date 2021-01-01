import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './NavBar.css'

function NavBar () {
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
    // <nav className="navbar">
    //   <ul>
    //     <li className="left-buttons">
    //       <a href="#home">Home</a>
    //     </li>
    //     <li className="left-buttons">
    //       <a href="#about">About Me</a>
    //     </li>
    //     <li className="left-buttons">
    //       <a href="#projects">Projects</a>
    //     </li>
    //     <li className="right-buttons">
    //       <a className="github-button" href="https://github.com/JosephEid" target='_blank' rel="noreferrer">
    //         <i className="fa fa-github" style={{ paddingRight: '5px' }} />
    //         Github
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
  )
}

export default NavBar
