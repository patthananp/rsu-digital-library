import React, { useContext } from "react";
import PropTypes from 'prop-types';

import {Button, Col, Form, Row} from 'react-bootstrap';
import './Search.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const downloadResearch = (researchId) => {
    // TODO
    axios
    .get(`/api/researches/${researchId}/download`, { responseType: 'blob' })
    .then((response) => {
        console.log(response)
        const file_name = response.headers["content-disposition"].split('=')[1];
        const href = URL.createObjectURL(response.data);

        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('download', file_name); //or any other extension
        document.body.appendChild(link);
        link.click();

        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    })
    .catch((err) => alert("Download Research Error"));
}

let SearchResultItem =(props) => {
    // let {title, year, author, supervisor, page} = props
    let item = props
    return (
        <div className='databox'>
            <Row>
                <Col className="research-type" sm={3}>
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
                    Thesis
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    Author:
                </Col>
                <Col sm={9}>
                    {/* {item.author_id} */}
                    Patthanan Prajaksuvithee
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    Year:
                </Col>
                <Col sm={6}>
                    {item.year}
                </Col>
                <Col sm={3}>
                    <Button className='blackbutton' onClick={() => downloadResearch(item.id)}>
                        <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-down" />
                    </Button>
                </Col>
            </Row>
        </div>
    )
} 

export default SearchResultItem