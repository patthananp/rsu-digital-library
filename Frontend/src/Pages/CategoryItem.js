import React from 'react';
import {Table, Button, Col, Form, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function CategoryItem(props) {
    let item = props

    const deleteCustomer = (customerId) => {
        // CALL DELETE FUNCTION WITH CUSTOMERID
        console.log(customerId);
      }
    
    return (
        <tr>
            <td>{item.title}</td>
            <td>{item.pages}</td>
            <td>{item.year}</td>
            <td>
                <Button type="submit" href="/Upload" onClick={() => deleteCustomer(this.customerId)}>
                    <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                </Button>
                
                <Button onClick={() => deleteCustomer(this.customerId)}>
                    <FontAwesomeIcon icon="fa-solid fa-trash" />
                </Button>
                {/* <Button type="submit" href="/Upload" className="btn btn-dark btn-lg btn-block">Upload New Research</Button> */}

            </td>
        </tr>
    )
}

export default CategoryItem;
