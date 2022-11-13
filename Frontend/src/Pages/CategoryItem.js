import React from 'react';
import { Link } from 'react-router-dom';
import {Table, Button, Col, Form, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

function CategoryItem(props) {
    let item = props
    console.log(item)

    const deleteResearch = (researchId) => {
        // CALL DELETE FUNCTION WITH CUSTOMERID
        axios
        .delete(`/api/researches/${researchId}`)
        .then((res) => {
            // alert("Delete Research Success");
        })
        .catch((err) => alert("Delete Research Error"));
    }
    
    return (
        <tr>
            <td>{item.title}</td> 
            <td>{item.pages}</td>
            <td>{item.year}</td>
            <td>
                <Link to="/Upload" state={item}>
                    <Button>
                        <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                    </Button>
                </Link>          
                <Button onClick={() => deleteResearch(item.id)}>
                    <FontAwesomeIcon icon="fa-solid fa-trash" />
                </Button>
            </td>
        </tr>
    )
}

export default CategoryItem;
