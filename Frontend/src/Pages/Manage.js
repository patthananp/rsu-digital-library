import {Table, Button, Col, Form, Row} from 'react-bootstrap';
import CategoryItem from "./CategoryItem"
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {Navbar, Nav, Container} from 'react-bootstrap';
import Upload from './Upload';
import axios from 'axios';


function CategoryList() {
    
    const [items, setItems] = useState([])

    useEffect(() => {
        listResearches()
    }, [])

    function listResearches() {
        axios
        .get("/api/researches")
        .then((res) => {
            // if (res.status != 200) {
            //     alert(res.status)
            // }
            let response_data = res.data
            // if (response_data['meta']['response_code'] != 1000) {
            //     alert(response_data['meta']['response_desc'])
            // }
            let data = response_data.data
            setItems(data)
        })
        .catch((err) => alert("Error"));
    }

    return (
        <div>
            <Row>
                <Col sm={4}>
                    <h4 className='mt-3'>My Research</h4>
                </Col>
                <Col sm={2}></Col>
                <Col sm={2}></Col>
                <Col className="mt-3" sm={4}>
                    <Button type="submit" href="/Upload" className="btn btn-dark btn-lg btn-block">Upload New Research</Button>
                </Col>
            </Row>
            {/* <h4 className='mt-5'>My Research</h4> */}
            <Table className='mt-3'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Keyword</th>
                        <th>Year</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        return <CategoryItem {...item} key = {item.id}/>
                    })}
                </tbody>
                
            </Table>
            <hr />

            {/* <Button onClick={this.deleteCustomer(this.customerId)}>
                <FontAwesomeIcon icon="fa-solid fa-trash" />
            </Button> */}

            {/* <Button type="submit" href="/Upload" className="btn btn-dark btn-lg btn-block">Upload New Research</Button> */}

        </div>
    )
}

export default CategoryList;