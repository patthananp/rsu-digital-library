import React, { useState, useId } from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Button, Col, Form, Row} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Register(){
    const navigate = useNavigate()
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
    
    const handleSubmit = async (event) => { 
        event.preventDefault()
        console.log(formData)
        const data = await createUser()
        console.log(data)

        navigate('/login')

    }

    let createUser = () => {
        console.log()
        return fetch(`/api/users/register`,{
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
        <div className="container">
            <div style=
            {{  
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <form className="col-6"  onSubmit={handleSubmit}>
                    <h3>Create new account</h3>

                    <div className="mt-3"> 
                        <label for="Name Title">Choose a Name Title : </label>
                        <select className='form-select form-select-md mb-3' id="Name Title" 
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

                    <Button type="submit" className="btn btn-dark btn-lg btn-block mt-3 w-100">Create new account</Button>
                </form>
            </div>
        </div>
    )

}
export default Register;