import React from 'react';
import Footer from "../shared/Footer"
import Header from "../shared/Header"
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import Home from "../../Home";
import Search from "../../Pages/Search";
import { Container } from "react-bootstrap";
import Form from "../Form";
import PicSlide from "./Slide";

import Register from "../../Pages/register";
import Category from "../../Pages/category";
import CategoryList from "../../Pages/CategoryList";
import Login from "../../Pages/login";


function MainLayout() {
  return (
      <div>
            <Header/>
            <Container>
            
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/search" element={<Search/>} />
                        <Route path="/manage" element={<CategoryList/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/register" element={<Register/>} />
                    </Routes>
                </Router>

            </Container>
            <Footer/>
      </div>
 
  )
}

export default MainLayout