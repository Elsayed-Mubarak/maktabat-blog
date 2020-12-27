import React from 'react'
import { useEffect, useState } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import styles from './NavBar.module.css'
import LanguageSwitcher from '../language_switcher/LanguageSwitcher'
import Image from 'next/image'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import MenuCard from '../menucard/MenuCard'

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
      <div style={{ 'width': '100%' }} >
        <Navbar expand="lg" className={styles.nav} >
          <Navbar.Brand href="/" className={styles.logo}><Image src="/images/logo.jpg" alt="Picture of the author" width={150} height={145}/>
          </Navbar.Brand>
          <Nav.Link className={styles.kwareict} href="/" >Kwareict</Nav.Link>
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
                <DropdownToggle className={styles.dropdowntoggle} caret>channels</DropdownToggle>
                <DropdownMenu className={styles.dropdownmenu} >
                  <Row >
                    <Col xs="6" >
                      <DropdownItem divider />
                      <DropdownItem style={{ color: '#2f2e8b', fontWeight: 700 }}>PROUDUCT</DropdownItem>
                      <DropdownItem divider />

                      <DropdownItem style={{ color: '#2f2e8b', fontSize: '17px' }}>Libarary Search Key</DropdownItem>
                      <DropdownItem style={{ color: '#2f2e8b', fontSize: '17px' }}>Artificial Intelligence</DropdownItem>
                      <DropdownItem style={{ color: '#2f2e8b', fontSize: '17px' }}>Publish Books</DropdownItem>
                      <DropdownItem style={{ color: '#2f2e8b', fontSize: '17px' }}>Digital Libarary</DropdownItem>
                      <DropdownItem style={{ color: '#2f2e8b', fontSize: '17px' }}>Digital Repository And Archive</DropdownItem>
                      <DropdownItem divider />
                    </Col>
                    <Col xs="6" style={{ float: 'right', display: 'flex' }}>
                      <MenuCard />
                    </Col>
                  </Row>
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