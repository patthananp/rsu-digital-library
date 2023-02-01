import React from 'react';
import {BrowserRouter as Router,Routes, Route, Link, NavLink} from "react-router-dom";
import {Col, Container, Nav, Navbar, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube, faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";

import './Social.css'
import './Footer.css'

function Footer() {
    return (
        <footer className="Footer p-4 bg-dark text-white">
            <Container>
                <Row>
                    <Col sm={8}>Copyrights &copy; 2023 | All rights reserved.</Col>
                    <Col sm={4}>
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
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;


