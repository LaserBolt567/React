import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import SignUpButton from "./welcome/SignUpButton";
import SignInButton from "./welcome/SignInButton";
import ficus_club_logo from './ficus_club_logo.svg';

export default function AppNavbar() {
    console.log("Rendering Navbar...");
    return (
        <Navbar bg='dark' variant='dark' expand='md'>
            <Navbar.Brand href="/home">
                <img className="d-inline-block align-top" alt="Ficus Club Logo" src={ficus_club_logo} width="45" height="35" />{' '}
                <span>FicusClub</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="/signup"><SignUpButton /></Nav.Link>
                    <Nav.Link href="/signin"><SignInButton /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

}