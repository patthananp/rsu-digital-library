import React from 'react';
import {BrowserRouter as Router,Routes, Route, Link, NavLink, useNavigate} from "react-router-dom";

import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import './Search.css'



function Header() {
    const navigate = useNavigate();

    const loggedInAs = localStorage.getItem('loggedInAs');

    const handleLogoutClick = () => {
        localStorage.removeItem('loggedInAs');
        window.location.reload();
    }

    const handleLoginClick = () => {
        navigate('/login');
        window.location.reload();
    }

    let button
    if (loggedInAs) {
        button = <Button onClick={handleLogoutClick}>Logout</Button>
    } else {
        button = <Button className='mainbutton' onClick={handleLoginClick}>Login</Button>
    }

    return (
        <Navbar sticky="top" className='header'>
            <Container>
                <Navbar.Brand href="/">
                <img
                    src="rsulogo.png"
                    width="50"
                    height="60"
                    className="d-inline-block align-bottom"
                />
                    RSU Digital Library
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/search">Advance Search</Nav.Link>
                        {/* <Nav.Link href="/about">About</Nav.Link> */}
                        <Nav.Link href="/manage">Management</Nav.Link>
                    </Nav>

                    <Navbar.Text>
                        {/* Signed in as: <a href="#login">Patthanan</a> */}
                        Signed in as: <a href="#login">{loggedInAs ? JSON.parse(loggedInAs).firstname : 'Guest'}</a>
                    </Navbar.Text>
                    
                    {button}    
                    {/* <Nav>
                        <Nav.Link href="/login">Log out</Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}
export default Header;
