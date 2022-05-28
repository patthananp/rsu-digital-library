import {Button, Col, Form, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SearchBar () {
    return (
        <Form>
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
