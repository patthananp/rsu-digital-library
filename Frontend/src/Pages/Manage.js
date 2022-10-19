import {Table, Button, Col, Form, Row} from 'react-bootstrap';
import CategoryItem from "./CategoryItem"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Navbar, Nav, Container} from 'react-bootstrap';
import Upload from './Upload';


function CategoryList() {
    
    const [items, setItems] = useState([])

    // function listCategoryTypes() {
    //    fetch(`/category-types`,{
    //         'method':'GET',
    //         headers : {
    //             'Content-Type':'application/json'
    //         }
    //     }).then(response => {
    //         return response.json()
    //     }).then(data => {
    //         if (data.meta?.response_code == 1000) {
    //             setItems(data.data)
    //         }
    //     })
    // }

    console.log('before')
    // listCategoryTypes()
    console.log('after')

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
