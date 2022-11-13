import {Table, Button, Col, Form, Row} from 'react-bootstrap';
import CategoryItem from "./CategoryItem"
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import './Form.css'

function ResearchForm(props) {
    const location = useLocation()
    const navigate = useNavigate();
    const [formData, updateFormData] = useState(location.state || {})
    const isNew = formData.id == null

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.id]: e.target.value.trim()
        });
    };

    const handleChangeFile = (e) => {
        updateFormData({
            ...formData,
            [e.target.id]: e.target.files[0],
            [`${e.target.id}name`]: e.target.files[0].name
        });
    };

    const handleSubmit = (event) => { 
        console.log('handleSubmit')
        const data = new FormData()
        for (const [key, value] of Object.entries(formData)) {
            data.append(key, value);
        }

        if (isNew) {
            axios
            .post(`/api/researches`, data)
            .then((res) => {
                // alert("Create New Research Success");
            })
            .catch((err) => alert("Create New Research Error"));
        } else {
            axios
            .put(`/api/researches/${formData.id}`, data)
            .then((res) => {
                // alert("Update Research Success");
            })
            .catch((err) => alert("Update Research Error"));
        }
       
        navigate('/manage')
    }
      

    return (
        <div>
            <h4 className='mt-5'>{isNew ? "Create New Research" : "Update Research"}</h4>

            <Form onSubmit={handleSubmit}>
                <Row className="mt-3">
                    <Col sm={12}>
                        <Form.Group controlId="title" onChange={handleChange} >
                            <Form.Label>IS / Thesis Title</Form.Label>
                            <Form.Control defaultValue={formData.title} type="text" placeholder="Enter Title" />
                        </Form.Group>
                    </Col>
                {/* <Row className="mt-3">
                    <Col sm={8}>
                        <Form.Group controlId="author" onChange={handleChange} >
                            <Form.Label>Category : </Form.Label>
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
                </Row> */}
                    {/* <Col sm={8}>
                        <Form.Group controlId="supervisor" onChange={handleChange}>
                            <Form.Label>Superviser(s)</Form.Label>
                            <Form.Control type="text" placeholder="Superviser Name" />
                        </Form.Group>
                    </Col> */}
                    <Col sm={4}>
                        <Form.Group controlId="year" onChange={handleChange}>
                            <Form.Label>Year</Form.Label>
                            <Form.Control defaultValue={formData.year} type="number" placeholder="Year" />
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                        <Form.Group controlId="pages" onChange={handleChange}>
                            <Form.Label>Page(s)</Form.Label>
                            <Form.Control defaultValue={formData.pages} type="number" placeholder="Number" />
                        </Form.Group>
                    </Col>
                    {/* <Col className="mt-3" sm={4}>
                        <Form.Group controlId="keyword1" onChange={handleChange}>
                            <Form.Label>Keyword 1</Form.Label>
                            <Form.Control type="text" placeholder="Keyword 1" />
                        </Form.Group>
                    </Col>
                    <Col className="mt-3" sm={4}>
                        <Form.Group controlId="keyword2" onChange={handleChange}>
                            <Form.Label>Keyword 2</Form.Label>
                            <Form.Control type="text" placeholder="Keyword 2" />
                        </Form.Group>
                    </Col>
                    <Col className="mt-3" sm={4}>
                        <Form.Group controlId="keyword3" onChange={handleChange}>
                            <Form.Label>Keyword 3</Form.Label>
                            <Form.Control type="text" placeholder="Keyword 3" />
                        </Form.Group>
                    </Col> */}
                    <Col className="mt-3" sm={12}>
                        <Form.Group controlId="file" onChange={handleChangeFile}>
                            <Form.Label>Upload file</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>
                    <Col className="mt-3" sm={3}>
                        <Button type="submit" className="btn btn-dark btn-lg btn-block">Save</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default ResearchForm;