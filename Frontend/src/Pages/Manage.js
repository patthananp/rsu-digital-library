import {Table, Button, Col, Form, Row, InputGroup} from 'react-bootstrap';
import CategoryItem from "./CategoryItem"
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Navbar, Nav, Container} from 'react-bootstrap';
import Upload from './ResearchForm';
import axios from 'axios';
// import ResearchList from "./ResearchList";


function CategoryList() {
    
    const [items, setItems] = useState([])
    const [filterStr, setFilteStr] = useState('')
    const [filteredItems, setFilteredItems] = useState([])


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
            setFilteredItems(data)
        })
        .catch((err) => alert("Error"));
    }

    function handleFilter(event) {
        const filterValue = event.target.value.toLowerCase();
        console.log(filterValue)
        const filteredItems = items.filter((item) => {
            return (
                item.title.toLowerCase().includes(filterValue) ||
                item.keywords.toLowerCase().includes(filterValue) ||
                item.year.toString().includes(filterValue)
            );
          });
          console.log('zxczxczxc')
          console.log(filteredItems);
          setFilteredItems(filteredItems);
    }

    return (
        <div>
            <Row>
                <Col sm={4}>
                    <h2 className='mt-5'>My Research</h2>
                </Col>
                <Col sm={2}></Col>
                <Col sm={2}></Col>
                <Col className="mt-3" sm={4}>
                    <Button type="submit" href="/researchForm" className="btn btn-dark btn-lg btn-block mt-3">Upload New Research</Button>
                </Col>
            </Row>
            {/* <h4 className='mt-5'>My Research</h4> */}
            <input onChange={handleFilter}/>
            <Table className='mt-3'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Keyword</th>
                        <th>Year</th>
                        <th>Download</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredItems.map((item) => {
                        return <CategoryItem {...item} key = {item.id}/>
                    })}
                </tbody>
                
            </Table>
            <hr />
            {/* <ResearchList items={items}/> */}

            {/* <Button onClick={this.deleteCustomer(this.customerId)}>
                <FontAwesomeIcon icon="fa-solid fa-trash" />
            </Button> */}

            {/* <Button type="submit" href="/Upload" className="btn btn-dark btn-lg btn-block">Upload New Research</Button> */}

        </div>
    )
}

export default CategoryList;