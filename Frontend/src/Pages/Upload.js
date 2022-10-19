import {Table, Button, Col, Form, Row} from 'react-bootstrap';
import CategoryItem from "./CategoryItem"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import './Form.css'

function Upload() {
    
    const [formData, updateFormData] = useState({})
    const [selectedFile, setSelectedFile] = useState()

    function listCategoryTypes() {
       fetch(`/category-types`,{
            'method':'GET',
            headers : {
                'Content-Type':'application/json'
            }
        }).then(response => {
            return response.json()
        })
    }

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.id]: e.target.value.trim()
        });
        console.log(formData)
    };

    const handleChangeFile = (e) => {
        updateFormData({
            ...formData,
            [e.target.id]: e.target.files[0]
        });
        console.log(formData)
    };

    const handleSubmit = (event) => { 
        const data = new FormData()
        for (const [key, value] of Object.entries(formData)) {
            data.append(key, value);
        }

        axios
        .post("/members/", data)
        .then((res) => {alert("File Upload success");})
        .catch((err) => alert("File Upload Error"));
    }
      

    return (
        <div>
            <h4 className='mt-5'>Upload New Research</h4>

            <Form onSubmit={handleSubmit}>
                <Row className="mt-3">
                    <Col sm={12}>
                        <Form.Group controlId="title" onChange={handleChange} >
                            <Form.Label>IS / Thesis Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col sm={8}>
                        <Form.Group controlId="author" onChange={handleChange} >
                            <Form.Label>Category : </Form.Label>
                            {/* <Form.Control type="text" placeholder="Author Name" /> */}

                            <select className='form-select form-select-md mb-3' id="Department">
                                <option value="">Information Technology</option>
                                <option value="">Science</option>
                                <option value="">Engineering</option>
                                <option value="">Architecture</option>
                                <option value="">Medical</option>
                                <option value="">Business</option>
                                <option value="">Liberal Arts</option>
                                <option value="">Other</option>
                            </select>
    
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                        {/* <Form.Group controlId="year"
                            value={formData.year}
                            onChange={e => setFormData({...formData, year: e.target.value})}> */}
                            <Form.Label>Year(s)</Form.Label>
                            <Form.Control type="number" placeholder="Year" />
                        {/* </Form.Group> */}
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col sm={8}>
                        {/* <Form.Group controlId="supervisor"
                            value={formData.supervisor}
                            onChange={e => setFormData({...formData, supervisor: e.target.value})}> */}
                            <Form.Label>Superviser(s)</Form.Label>
                            <Form.Control type="text" placeholder="Superviser Name" />
                        {/* </Form.Group> */}
                    </Col>
                    <Col sm={4}>
                        {/* <Form.Group controlId="page"
                            value={formData.page}
                            onChange={e => setFormData({...formData, page: e.target.value})}> */}
                            <Form.Label>Page(s)</Form.Label>
                            <Form.Control type="number" placeholder="Number" />
                        {/* </Form.Group> */}
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-3" sm={4}>
                        {/* <Form.Group controlId="keyword1"
                            value={formData.keyword1}
                            onChange={e => setFormData({...formData, keyword1: e.target.value})}> */}
                            <Form.Label>Keyword 1</Form.Label>
                            <Form.Control type="text" placeholder="Keyword 1" />
                        {/* </Form.Group> */}
                    </Col>
                    <Col className="mt-3" sm={4}>
                        {/* <Form.Group controlId="keyword2"
                            value={formData.keyword2}
                            onChange={e => setFormData({...formData, keyword2: e.target.value})}> */}
                            <Form.Label>Keyword 2</Form.Label>
                            <Form.Control type="text" placeholder="Keyword 2" />
                        {/* </Form.Group> */}
                    </Col>
                    <Col className="mt-3" sm={4}>
                        {/* <Form.Group controlId="keyword3"
                            value={formData.keyword3}
                            onChange={e => setFormData({...formData, keyword3: e.target.value})}> */}
                            <Form.Label>Keyword 3</Form.Label>
                            <Form.Control type="text" placeholder="Keyword 3" />
                        {/* </Form.Group> */}
                    </Col>
                <Row>
                    <Col className="mt-3" sm={12}>
                        <Form.Group controlId="file" onChange={handleChangeFile}>
                            <Form.Label>Upload file</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>
                </Row>
                </Row>
                <Row>
                    <Col className="mt-3" sm={3}>
                        <Button type="submit" href="/Upload" className="btn btn-dark btn-lg btn-block">Upload</Button>
                    </Col>
                </Row>
            </Form>
            
        </div>
    )
}

export default Upload;
