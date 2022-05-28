import Footer from "../shared/Footer"
import Header from "../shared/Header"
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import Home from "../../Home";
import Search from "../../Pages/Search";
import SearchBar from "../shared/SearchBar";

import {Container, Row, Col} from 'react-bootstrap';


function MainLayout() {
  return (
      <div>
            <Header/>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/search" element={<Search/>} />
                </Routes>
            </Router>
            <Footer/>
      </div>
 
  )
}

export default MainLayout