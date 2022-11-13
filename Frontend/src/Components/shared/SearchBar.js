import React, { useState } from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';

function SearchBar () {

    const [selectedFile, setSelectedFile] = useState()

    const handleSubmit = (event) => { 
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("hello", 'hello');

        axios
        .post("/members/", formData)
        .then((res) => {alert("File Upload success");})
        .catch((err) => alert("File Upload Error"));
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
        
                <Col className='mt-2'sm={7}>
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label>Keyword</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Col>
                <Col className='mt-2'sm={4}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Year (s)</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Col>
                <Col className='mt-4' sm={1}>
                    <Button type="submit" className='w-100'><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></Button>
                </Col>
            </Row>
        </Form>

    )
}

export default SearchBar;
