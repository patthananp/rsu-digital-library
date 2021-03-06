import React, { Component } from "react";
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import Home from "../Home";


function Login() {
    
        return (
        
            <form>
                <Col sm={4}></Col>

                <Col sm={4}>

                <h3>Log in</h3>

                {/* <div className="form-group"> */}
                <div className="mt-3">
                
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                {/* <div className="form-group"> */}
                <div className="mt-3">

                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                {/* <div className="form-group"> */}
                <div className="mt-3">

                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <Button type="submit" href="/" className="btn btn-dark btn-lg btn-block">Sign in</Button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                </Col>
                {/* <Col className='mt-3'sm={4}></Col> */}
            </form>
        )
}
export default Login;