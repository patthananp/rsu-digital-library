import { useState, useId } from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Button, Col, Form, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Category() {
    const [formCategory, setFormCategory] = useState({
        name: '',
        description: '',
    })

    return (
        <div>
            <Container>
                <Form>
                <Form.Group controlId="name" 
                    value={formCategory.name}
                    // onChange={e => setFormData({...formData, title: e.target.value})}
                    >
                    <Form.Label>Category's Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Category's Name" />
                </Form.Group>

                <Form.Group controlId="name" 
                    value={formCategory.description}
                    // onChange={e => setFormData({...formData, title: e.target.value})}
                    >
                    <Form.Label>Category's Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Category's Description" />
                </Form.Group>

                <Button type="submit" className='w-100'><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></Button>

                </Form>
            </Container>
        </div>
    )
}

export default Category;