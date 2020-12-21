import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown } from 'react-bootstrap'
import { useEffect } from 'react'
import styles from './NavBar.module.css'
import LanguageSwitcher from '../language_switcher/LanguageSwitcher'


export default function NavBar() {
  return (
    <div className="" >
      <Navbar expand="lg" className={styles.nav} >
        <Navbar.Brand href="/">Kware-Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/galary">Galary</Nav.Link>
            <NavDropdown title="Channels" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Libarary Search Key</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Artificial Intelligence</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Digital Repository And Archive</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Publish Books</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Digital Libarary</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Translate</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>

          <LanguageSwitcher />

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
