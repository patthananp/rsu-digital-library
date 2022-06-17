import Footer from "../shared/Footer"
import Header from "../shared/Header"
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import Home from "../../Home";
import Search from "../../Pages/Search";
import { Container } from "react-bootstrap";
import Form from "../Form";
import PicSlide from "./Slide";


function MainLayout() {
  return (
      <div>
            <Header/>
            <Container>
            
                <PicSlide />
            
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/search" element={<Search/>} />
                    </Routes>
                </Router>
            </Container>
            <Footer/>
      </div>
 
  )
}

export default MainLayout