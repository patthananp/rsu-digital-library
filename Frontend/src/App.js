import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from './Home';
import Home2 from './Home2'
import Search from "./Pages/Search";
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Register from "./Pages/register";
import Category from "./Pages/category";
import CategoryList from "./Pages/Manage";
import Login from "./Pages/login";
import Upload from './Pages/ResearchForm';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Header2 from './Components/Header2';

library.add(fas)

// function setLoggedInAs(loggedInAs) {
//   sessionStorage.setItem('loggedInAs', loggedInAs);
// }

// function getLoggedInAs() {
//   loggedInAs = sessionStorage.getItem('loggedInAs');
//   return loggedInAs
// }

function App() {
  const [loggedInAs, setLoggedInAs] = useState()

  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home2/>} />
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/search" element={<Search/>} />
          <Route path="/manage" element={<CategoryList/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/researchForm" element={<Upload/>} />
        </Routes>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
