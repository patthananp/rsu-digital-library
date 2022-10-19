import React, { useState, useId } from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Button, Col, Form, Row} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Register(){

    const [formData, setFormData] = useState({
        prefix: '',
        firstname: '',
        lastname: '',
        email: '@rsu.ac.th',
        password: '',
    })


    const handleChange = (e) => {
        setFormData({...formData, lastname: e.target.value})
        console.log(formData);
    };
    
    const handleSubmit = (event) => { 
        event.preventDefault()
        console.log(formData)
        createUser().then((data, err) => {
            console.log(data)
        })

    }

    let createUser = () => {
        console.log()
        return fetch(`/users/register`,{
            'method':'POST',
            headers : {
                'Content-Type':'application/json'
            },
            'body': JSON.stringify(formData)
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }

    return (
        <form onSubmit={handleSubmit}>
            <Col sm={4}></Col>

            <Col sm={4}>

            <h3>Register Form</h3>

            <div className="mt-3"> 
                <label for="Name Title">Choose a Name Title : </label>
                <select id="Name Title" 
                    value={formData.prefix} 
                    onChange={e => setFormData({...formData, prefix: e.target.value})}
                >
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Miss">Miss</option>
                    <option value="Professor">Professor</option>
                    <option value="Assistant Professor">Assistant Professor</option>
                    <option value="Associate Professor">Associate Professor</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="mt-3">
            
                <label>First Name</label>
                <input type="text" className="form-control" placeholder="Enter First Name" 
                    value={formData.firstname}
                    onChange={e => setFormData({...formData, firstname: e.target.value})} />
            </div>

            <div className="mt-3">
                <label>Last Name</label>
                <input type="text" className="form-control" placeholder="Enter Last Name" 
                value={formData.lastname}
                onChange={e => setFormData({...formData, lastname: e.target.value})} />
            </div>

            {/* <div className="mt-3">
                <label for="Department">Department : </label>
                <select id="Department">
                    <option value="" selected>วิทยาศาสตร์</option>
                    <option value="">ศิลปศาสตร์</option>
                    <option value="Miss">แพทย์ศาสตร์</option>
                    <option value="Professor">บริหารธุรกิจ</option>
                    <option value="Assistant Professor">นานาชาติ</option>
                    <option value="Associate Professor">สถาบันการบิน</option>
                    <option value="Associate Professor">สถาปัตยกรรมศาสตร์</option>
                    <option value="Associate Professor">วิศวกรรม</option>
                    <option value="Associate Professor">นิเทศศาสตร์</option>

                </select>
            </div> */}

            <div className="mt-3">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="@rsu.ac.th" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>

            <div className="mt-3">

                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" 
                    value={formData.password}
                    onChange={e => setFormData({...formData, password: e.target.value})} />
            </div>

            <Button type="submit" className="btn btn-dark btn-lg btn-block">Submit</Button>
         
            </Col>

        </form>
    )

}
export default Register;







// function Register() {
//     const [formRegister, setFormRegister] = useState({
//         firstname: '',
//         lastname: '',
//         email: '',
//         password: '',
//         confirm_password: ''
//     })

//     return (
//         <div>
//             <Container>
//                 <Form>
//                 <Form.Group controlId="title" 
//                     value={formRegister.firstname}
//                     // onChange={e => setFormData({...formData, title: e.target.value})}
//                     >
//                     <Form.Label>First Name</Form.Label>
//                     <Form.Control type="text" placeholder="Enter First Name" />
//                 </Form.Group>
//                 </Form>
//             </Container>
//         </div>
//     )
// }

// export default Register;