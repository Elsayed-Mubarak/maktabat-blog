import React from 'react'
import { useEffect, useState } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import styles from './NavBar.module.css'
import LanguageSwitcher from '../language_switcher/LanguageSwitcher'
import Image from 'next/image'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  render() {
    return (
      <div style={{ 'color': '#2f2e8b' }} >
        <Navbar expand="lg" className={styles.nav} >
          <Navbar.Brand href="/"><Image src="/images/logo.png" alt="Picture of the author" width={250} height={120} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/galary">Galary</Nav.Link>
              <Dropdown className="d-inline-block"
                onMouseOver={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}>
                <DropdownToggle caret>Dropdown</DropdownToggle>
                <DropdownMenu style={{ width: '500px' }}>
                  <DropdownItem divider />
                  <DropdownItem >Libarary Search Key</DropdownItem>
                  <DropdownItem >Artificial Intelligence</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Publish Books</DropdownItem>
                  <DropdownItem>Digital Libarary</DropdownItem>
                  <DropdownItem>Digital Repository And Archive</DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </Dropdown>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
            <div>
              <LanguageSwitcher />
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div >
    );
  }
}