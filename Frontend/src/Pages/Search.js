import { useState, useId } from "react";
import ReactDOM from "react-dom/client";
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Button, Col, Form, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SearchResult from "../Components/shared/SearchResult";

function Search() {

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        year: '',
        supervisor: '',
        page: '',
        keyword1: '',
        keyword2: '',
        keyword3: ''
    })
    const [items, setItems] = useState([])

    // let items = [
    //     {id : 1, title : "Computer Network", year : 2019, Author : "Jenny", Supervisor : "Billy", Page : 10},
    //     {id : 2, title : "Apple Fruit", year : 2021, Author : "Renny", Supervisor : "Billy", Page : 5},
    //     {id : 3, title : "Social", year : 2020, Author : "Aenny", Supervisor : "Tilly", Page : 100},
    //     {id : 4, title : "Compute `r AI", year : 2019, Author : "Jenny", Supervisor : "Billy", Page : 10},
    //     {id : 5, title : "Network", year : 2019, Author : "Jenny", Supervisor : "Tilly", Page : 15}
    // ]
    // let items = []

    let retrieveThesis = () => {
        console.log()
        return fetch(`/books`,{
            'method':'GET',
            headers : {
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }

    let listBooks = () => {
        console.log()
        return fetch(`/books`,{
            'method':'GET',
            headers : {
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }

    const handleSubmit = (event) => { 
        event.preventDefault()
        // let thesisId = formData.year
        // console.log(thesisId)
        // let data = await retrieveThesis(thesisId)
        // console.log(data)
        // setItems(await listBooks())
        listBooks().then((data, err) => {
            setItems(data)
        })
    //   insertArticle()
    //   setTitle('')
    //   setBody('')
    }

    return (
        <div>
            <h1>Advanced Search</h1>
            <Form onSubmit={handleSubmit}>
                <Row className="mt-3">
                    <Col sm={10}>
                        <Form.Group controlId="title" 
                            value={formData.title}
                            onChange={e => setFormData({...formData, title: e.target.value})}
                            >
                            <Form.Label>IS / Thesis Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col sm={7}>
                        <Form.Group controlId="author"
                            value={formData.author}
                            onChange={e => setFormData({...formData, author: e.target.value})}
                            >
                            <Form.Label>Author(s)</Form.Label>
                            <Form.Control type="text" placeholder="Author Name" />
                        </Form.Group>
                    </Col>
                    <Col sm={3}>
                        <Form.Group controlId="year"
                            value={formData.year}
                            onChange={e => setFormData({...formData, year: e.target.value})}>
                            <Form.Label>Year(s)</Form.Label>
                            <Form.Control type="number" placeholder="Year" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col sm={7}>
                        <Form.Group controlId="supervisor"
                            value={formData.supervisor}
                            onChange={e => setFormData({...formData, supervisor: e.target.value})}>
                            <Form.Label>Superviser(s)</Form.Label>
                            <Form.Control type="text" placeholder="Superviser Name" />
                        </Form.Group>
                    </Col>
                    <Col sm={3}>
                        <Form.Group controlId="page"
                            value={formData.page}
                            onChange={e => setFormData({...formData, page: e.target.value})}>
                            <Form.Label>Page(s)</Form.Label>
                            <Form.Control type="number" placeholder="Number" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-3" sm={3}>
                        <Form.Group controlId="keyword1"
                            value={formData.keyword1}
                            onChange={e => setFormData({...formData, keyword1: e.target.value})}>
                            <Form.Label>Keyword 1</Form.Label>
                            <Form.Control type="text" placeholder="Keyword 1" />
                        </Form.Group>
                    </Col>
                    <Col className="mt-3" sm={3}>
                        <Form.Group controlId="keyword2"
                            value={formData.keyword2}
                            onChange={e => setFormData({...formData, keyword2: e.target.value})}>
                            <Form.Label>Keyword 2</Form.Label>
                            <Form.Control type="text" placeholder="Keyword 2" />
                        </Form.Group>
                    </Col>
                    <Col className="mt-3" sm={3}>
                        <Form.Group controlId="keyword3"
                            value={formData.keyword3}
                            onChange={e => setFormData({...formData, keyword3: e.target.value})}>
                            <Form.Label>Keyword 3</Form.Label>
                            <Form.Control type="text" placeholder="Keyword 3" />
                        </Form.Group>
                    </Col>
                    <Col className="mt-5" sm={1}>
                        <Button type="submit" className='w-100'><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></Button>
                    </Col>
                </Row>
            </Form>
            <hr />
            <SearchResult items={items}/>
        </div>
                
        
    )
}

export default Search;