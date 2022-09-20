import PropTypes from 'prop-types';

import {Button, Col, Form, Row} from 'react-bootstrap';
import './Search.css'

let SearchResultItem =(props) => {
    // let {title, year, author, supervisor, page} = props
    let item = props
    return (
        <div className='databox'>
            <Row>
                <Col sm={3}>
                    O IS/ THESIS
                </Col>
            </Row>
            <Row>
                <Col className='title' sm={12}>
                    {item.title}
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    Category:
                </Col>
                <Col sm={9}>
                    {/* {item.category} */}
                    xxxx
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    Author:
                </Col>
                <Col sm={9}>
                    {item.author_id}
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    Year:
                </Col>
                <Col sm={9}>
                    {item.year}
                </Col>
            </Row>
        </div>
    )
} 

export default SearchResultItem