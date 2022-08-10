import {Table} from 'react-bootstrap';

import CategoryItem from "./CategoryItem"
import React, { useState } from 'react'

function CategoryList() {
    
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
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        return <CategoryItem {...item} key = {item.id}/>
                    })}
                </tbody>
            </Table>
            
        </div>
    )
}

export default CategoryList;
