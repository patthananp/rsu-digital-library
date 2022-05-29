import { useState } from "react";
import ReactDOM from "react-dom/client";
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Button, Col, Form, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SearchResult from "../Components/shared/SearchResult";

function Search() {
    
    let items = [
        {id : 1, title : "Computer Network", year : 2019, Author : "Jenny", Supervisor : "Billy", Page : 10},
        {id : 2, title : "Apple Fruit", year : 2021, Author : "Renny", Supervisor : "Billy", Page : 5},
        {id : 3, title : "Social", year : 2020, Author : "Aenny", Supervisor : "Tilly", Page : 100},
        {id : 4, title : "Computer AI", year : 2019, Author : "Jenny", Supervisor : "Billy", Page : 10},
        {id : 5, title : "Network", year : 2019, Author : "Jenny", Supervisor : "Tilly", Page : 15}
    ]
    // let items = []

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
            <hr />
            <SearchResult items={items}/>
        </div>
                
        
    )
}

export default Search;