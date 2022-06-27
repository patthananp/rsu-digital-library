import { useState, useId } from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Button, Col, Form, Row} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Register() {
    const [formRegister, setFormRegister] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    return (
        <div>
            <Container>
                <Form>
                <Form.Group controlId="title" 
                    value={formRegister.firstname}
                    // onChange={e => setFormData({...formData, title: e.target.value})}
                    >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" />
                </Form.Group>
                </Form>
            </Container>
        </div>
    )
}

export default Register;