import { useState } from "react";
import ReactDOM from "react-dom/client";
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Button, Col, Form, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Search() {

return (
    <div>
        <h1>Advanced Search</h1>
        <Form>
            <Row className="mt-3">
                <Col sm={10}>
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label>IS / Thesis Title</Form.Label>
                        <Form.Control type="email" placeholder="Enter Title" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={7}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Author(s)</Form.Label>
                        <Form.Control type="text" placeholder="Author Name" />
                    </Form.Group>
                </Col>
                <Col sm={3}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Year(s)</Form.Label>
                        <Form.Control type="number" placeholder="Year" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={7}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Superviser(s)</Form.Label>
                        <Form.Control type="text" placeholder="Superviser Name" />
                    </Form.Group>
                </Col>
                <Col sm={3}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Page(s)</Form.Label>
                        <Form.Control type="number" placeholder="Number" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col className="mt-3" sm={3}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Keyword 1</Form.Label>
                        <Form.Control type="text" placeholder="Keyword 1" />
                    </Form.Group>
                </Col>
                <Col className="mt-3" sm={3}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Keyword 2</Form.Label>
                        <Form.Control type="text" placeholder="Keyword 2" />
                    </Form.Group>
                </Col>
                <Col className="mt-3" sm={3}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Keyword 3</Form.Label>
                        <Form.Control type="text" placeholder="Keyword 3" />
                    </Form.Group>
                </Col>
                <Col className="mt-5" sm={1}>
                    <Button type="submit" className='w-100'><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></Button>
                </Col>
            </Row>
        </Form>
    </div>
            
    
    )
}

export default Search;