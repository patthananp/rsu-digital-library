import {Table, Button, Col, Form, Row} from 'react-bootstrap';
import CategoryItem from "./CategoryItem"
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Navbar, Nav, Container} from 'react-bootstrap';
import Upload from './Upload';
import axios from 'axios';


function CategoryList() {
    
    const [items, setItems] = useState([])

    useEffect(() => {
        listResearches()
    })

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
            <h4 className='mt-5'>My Research</h4>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Keyword</th>
                        <th>Abstraction</th>
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

            <Button type="submit" href="/Upload" className="btn btn-dark btn-lg btn-block">Upload New Research</Button>

        </div>
    )
}

export default CategoryList;
