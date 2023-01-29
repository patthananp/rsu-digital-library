import React, { useState } from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import './Search.css'



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
            {/* <Row> */}
        
                {/* <Col className='mt-2'sm={7}>
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label>Keyword</Form.Label>
                        <Form.Control className='searchBox' type="text" placeholder="Enter Keyword" />
                    </Form.Group>
                </Col> */}

                {/* <Col className='mt-2'sm={7}> */}
                    {/* <label>Keyword</label> */}
                {/* </Col> */}
                {/* <Col> */}
               
                    <div class="searchBox">
                        <input className='searchInput' type="text" placeholder="Enter Keyword" />
                        {/* <Button type="submit"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass"/></Button> */}
                        <button className='searchButton' type="submit"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button>
                    </div>
              

                {/* </Col> */}
                        

                {/* <Col className='mt-2'sm={4}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Year (s)</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Col> */}
                {/* <Col className='mt-4' sm={1}> */}
                    {/* <Button type="submit"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></Button> */}
                {/* </Col> */}

            {/* </Row> */}
        </Form>

    )
}

export default SearchBar;
