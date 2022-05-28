import {BrowserRouter as Router,Routes, Route, Link, NavLink} from "react-router-dom";

import {Navbar, Nav, Container} from 'react-bootstrap';


function Header() {
  return (
        <Navbar sticky="top" bg="light">
            <Container>
                <Navbar.Brand href="/">
                <img
                    src="rsulogo.png"
                    width="50"
                    height="60"
                    className="d-inline-block align-bottom"
                />
                    Digital Library
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/search">Search</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}
export default Header;
