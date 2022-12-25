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
    
            <form onSubmit={handleSubmit}>
                <Col sm={4}></Col>

                <Col sm={4}>

                <h3>Login</h3>

                {/* <div className="group mt-5">
                    <input required="" type="text" className="input" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Email</label>
                </div>

                <div className="group mt-5">
                    <input required="" type="text" className="input" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Password</label>
                </div> */}
            
                <div className="mt-3">
                    <label>Email</label>
                    <input name="email" type="email" className="form-control" placeholder="Enter email" />
                </div>

                
                <div className="mt-3">

                    <label>Password</label>
                    <input name="password" type="password" className="form-control" placeholder="Enter password" />
                </div>

                
                <div className="mt-3">

                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1"> Remember me</label>
                    </div>
                </div>

                <Button type="submit" 
                    // href="/"
                    className="btn btn-dark btn-lg btn-block mt-3">Sign in</Button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                </Col>
                

                <Nav>
                    <Button type="submit" href="/register" className="button">Create an account</Button>
                </Nav>

            </form>
        </div>
    )
}
export default Login;