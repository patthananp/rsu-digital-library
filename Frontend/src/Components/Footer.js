import React from 'react';
import {BrowserRouter as Router,Routes, Route, Link, NavLink} from "react-router-dom";
import {Col, Container, Nav, Navbar, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube, faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";
import './Social.css'

function Footer() {
    return (
        <div className="mt-5 p-4 bg-dark text-white text-center">
            <Container>
                <Row>
                    <Col sm={4}>
                        <dl>
                            <dt><Nav.Link href="/">Home</Nav.Link></dt>
                            <dt><Nav.Link href="#2">Privacy Policy</Nav.Link></dt>
                            <dt><Nav.Link href="#3">Terms of Service</Nav.Link></dt>
                            <dt><Nav.Link href="#3">Question</Nav.Link></dt>

                        </dl>
                    </Col>
                    <Col sm={8}>
                    <div class="social-container">
                        <h3>Social Follow</h3>
                        <a href="https://www.youtube.com/"
                            className="youtube social">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        <a href="https://www.facebook.com/grad.rsu/"
                            className="facebook social">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://www.twitter.com/" className="twitter social">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <p>Copyright &copy; 2022</p>
                </Row>
            </Container>
        </div>
        // <div className="mt-5 p-4 bg-dark text-white text-center">
        //     <div className="container mt-3">
        //         <ul class="nav nav-pills nav-justified bg-dark navbar-dark">
        //             <li className="nav-item">
        //                 <NavLink className="nav-link " to="/" color="white">Home</NavLink>
        //             </li>
        //             <li className="nav-item">
        //                 <NavLink className="nav-link" to="/search">Advance Search</NavLink>
        //             </li>
        //             <li className="nav-item">
        //                 <NavLink className="nav-link" to="/about">About</NavLink>
        //             </li>
        //             <li className="nav-item">
        //                 <NavLink className="nav-link" to="/contact">Contact us</NavLink>
        //             </li>
        //         </ul>
        //     </div>
                
        // </div>

    )
}
export default Footer;


