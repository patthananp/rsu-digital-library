import React from "react";
import {Button, Col, Container, Form, Row, Nav} from 'react-bootstrap';
import Home from "../Home";
import Register from "./register";
import { useNavigate} from "react-router-dom";
import './Form.css'
import axios from "axios";

function Login({setLoggedInAs}) {

    const navigate = useNavigate();
        
    const handleSubmit  = async (event) => {
        //Prevent page reload
        event.preventDefault()

        const email = event.target.email.value 
        const password = event.target.password.value
        
        const response = await axios.post('/api/users/login', {'email':email, 'password':password})
        if (response.status == 200 && response.data.meta.response_code == 1000) {
            console.log(response.data.data)
            // setLoggedInAs(response.data.data.firstname)
            localStorage.setItem('loggedInAs', JSON.stringify(response.data.data))
            navigate("/");
            window.location.reload();
        } else {
            alert(response.data.meta.response_desc)
        }
    }

    return (
        <div className="container">
            <div style=
            {{  
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <form className="mt-5 col-6" onSubmit={handleSubmit}>
                    <h3>Sign In</h3>
                    <div>
                        New user? <a href="/register">Create an account</a>
                    </div>
                    <div className="mt-3">
                        <label>Email</label>
                        <input name="email" type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="mt-3">

                        <label>Password</label>
                        <input name="password" type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="mt-3">
                        <p className="forgot-password text-right">
                            <a href="#">Forgot your password?</a>
                        </p>
                        <Button type="submit" 
                        // href="/"
                        className="btn btn-dark btn-lg btn-block mt-3 w-100">Sign In</Button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}
export default Login;