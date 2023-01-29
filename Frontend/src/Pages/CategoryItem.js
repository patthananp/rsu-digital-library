import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Table, Button, Col, Form, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import Swal from 'sweetalert2';
import './Form.css'


function CategoryItem(props) {
    // const navigate = useNavigate()

    let item = props
    console.log(item)

    const deleteResearch = (researchId) => {
        // CALL DELETE FUNCTION WITH CUSTOMERID
        axios
        .delete(`/api/researches/${researchId}`)
        .then((res) => {
            window.location.reload()
            // alert("Delete Research Success");
        })
        .catch((err) => alert("Delete Research Error"));
    }

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
        .catch((err) => alert("Delete Research Error"));
    }

    function confirmDelete(researchId) {
        Swal.fire({
          title: 'Are you sure?',
          text: 'You will not be able to recover this imaginary file!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it'
        }).then((result) => {
            
          if (result.value) {
            deleteResearch(researchId)
            // user clicked "OK"
            // perform the desired action
          } else {
            // user clicked "Cancel"
            // do nothing or perform some other action
          }
        });
    }
      
    
    return (
        <tr>
            <td>{item.title}</td> 
            <td>{item.pages}</td>
            <td>{item.year}</td>
            <td>
                <Button className='blackbutton' onClick={() => downloadResearch(item.id)}>
                    <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-down" />
                </Button></td>
            <td>
                <Link to="/researchForm" state={item}>
                    <Button className='blackbutton'>
                        <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                    </Button>
                </Link>          
                <Button className='blackbutton' onClick={() => confirmDelete(item.id)}>
                    <FontAwesomeIcon icon="fa-solid fa-trash" />
                </Button>
                
            </td>
        </tr>
    )
}

export default CategoryItem;
