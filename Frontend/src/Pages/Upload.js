import {Table, Button, Col, Form, Row} from 'react-bootstrap';
import CategoryItem from "./CategoryItem"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Upload() {
    
    const [items, setItems] = useState([])

    function listCategoryTypes() {
       fetch(`/category-types`,{
            'method':'GET',
            headers : {
                'Content-Type':'application/json'
            }
        }).then(response => {
            return response.json()
        }).then(data => {
            if (data.meta?.response_code == 1000) {
                setItems(data.data)
            }
        })
    }

    console.log('before')
    listCategoryTypes()
    console.log('after')

    return (
        <div>
            <h4>Upload New Research</h4>

            {/* <Form onSubmit={handleSubmit}> */}
            <Form>
                <Row className="mt-3">
                    <Col sm={10}>
                        {/* <Form.Group controlId="title" 
                            value={formData.title}
                            onChange={e => setFormData({...formData, title: e.target.value})}
                            > */}
                            <Form.Label>IS / Thesis Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" />
                        {/* </Form.Group> */}
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col sm={7}>
                        {/* <Form.Group controlId="author"
                            value={formData.author}
                            onChange={e => setFormData({...formData, author: e.target.value})}
                            > */}
                            <Form.Label>Category : </Form.Label>
                            {/* <Form.Control type="text" placeholder="Author Name" /> */}

                            <select id="Department">
                                <option value="" selected>Information Technology</option>
                                <option value="">Science</option>
                                <option value="">Engineering</option>
                                <option value="">Architecture</option>
                                <option value="">Medical</option>
                                <option value="">Business</option>
                                <option value="">Liberal Arts</option>
                                <option value="">Other</option>
                            </select>
    
                        {/* </Form.Group> */}
                    </Col>
                    <Col sm={3}>
                        {/* <Form.Group controlId="year"
                            value={formData.year}
                            onChange={e => setFormData({...formData, year: e.target.value})}> */}
                            <Form.Label>Year(s)</Form.Label>
                            <Form.Control type="number" placeholder="Year" />
                        {/* </Form.Group> */}
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col sm={7}>
                        {/* <Form.Group controlId="supervisor"
                            value={formData.supervisor}
                            onChange={e => setFormData({...formData, supervisor: e.target.value})}> */}
                            <Form.Label>Superviser(s)</Form.Label>
                            <Form.Control type="text" placeholder="Superviser Name" />
                        {/* </Form.Group> */}
                    </Col>
                    <Col sm={3}>
                        {/* <Form.Group controlId="page"
                            value={formData.page}
                            onChange={e => setFormData({...formData, page: e.target.value})}> */}
                            <Form.Label>Page(s)</Form.Label>
                            <Form.Control type="number" placeholder="Number" />
                        {/* </Form.Group> */}
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-3" sm={3}>
                        {/* <Form.Group controlId="keyword1"
                            value={formData.keyword1}
                            onChange={e => setFormData({...formData, keyword1: e.target.value})}> */}
                            <Form.Label>Keyword 1</Form.Label>
                            <Form.Control type="text" placeholder="Keyword 1" />
                        {/* </Form.Group> */}
                    </Col>
                    <Col className="mt-3" sm={3}>
                        {/* <Form.Group controlId="keyword2"
                            value={formData.keyword2}
                            onChange={e => setFormData({...formData, keyword2: e.target.value})}> */}
                            <Form.Label>Keyword 2</Form.Label>
                            <Form.Control type="text" placeholder="Keyword 2" />
                        {/* </Form.Group> */}
                    </Col>
                    <Col className="mt-3" sm={3}>
                        {/* <Form.Group controlId="keyword3"
                            value={formData.keyword3}
                            onChange={e => setFormData({...formData, keyword3: e.target.value})}> */}
                            <Form.Label>Keyword 3</Form.Label>
                            <Form.Control type="text" placeholder="Keyword 3" />
                        {/* </Form.Group> */}
                    </Col>
                    {/* <Col className="mt-5" sm={1}>
                        <Button type="submit" className='w-100'><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></Button>
                    </Col> */}

                    <div className="mt-3">
                    
                    <label>Upload file</label>
                    <input type="file" className="form-control"/>
                    </div>
            
                    <div className="mt-3">
                        <button>Upload</button>
                    </div>
                </Row>
            </Form>
            
        </div>
    )
}

export default Upload;
