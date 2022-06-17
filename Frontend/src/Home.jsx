import SearchBar from './Components/shared/SearchBar';
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";

import {Container, Row, Col, Nav} from 'react-bootstrap';
import Search from './Pages/Search';


function Home() {
  return (
    <Container>
        <SearchBar />
        <Container className='mt-5'>
            <Row>
                <Col sm={2}>
                  
                    <Row>
                        Saved Items
                        <Nav>
                            <Nav.Link href='#'>test1</Nav.Link>
                            <Nav.Link href='#'>test2</Nav.Link>
                            <Nav.Link href='#'>test3</Nav.Link>
                        </Nav>
                    </Row>
                    <Row>
                        Recent Open
                        <Nav>
                            <Nav.Link href='#'>test1</Nav.Link>
                            <Nav.Link href='#'>test2</Nav.Link>
                            <Nav.Link href='#'>test3</Nav.Link>
                        </Nav>
                    </Row>
                    <Row>
                        Latest Studies
                        <Nav>
                            <Nav.Link href='#'>test1</Nav.Link>
                            <Nav.Link href='#'>test2</Nav.Link>
                            <Nav.Link href='#'>test3</Nav.Link>
                        </Nav>
                    </Row>
                    
                </Col>
                <Col sm={10}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit beatae culpa dignissimos impedit accusantium, reprehenderit ipsam blanditiis exercitationem consequatur repellendus at expedita harum cum libero hic unde praesentium? Accusamus suscipit laudantium ducimus reiciendis totam voluptates veniam deleniti, vitae blanditiis non labore quidem modi consequuntur itaque! Fugit vitae, aperiam aliquid hic odio quo molestiae optio alias reprehenderit neque accusantium laudantium nobis beatae ratione voluptas nemo ducimus deleniti ea officia eos dolore possimus quos soluta consequatur! Repellendus quidem quod fuga culpa deleniti perferendis esse commodi corrupti consequuntur maiores maxime voluptas id rem, odio officia voluptatum! Ea in veritatis quae enim eos, rem blanditiis qui mollitia corrupti aspernatur perferendis explicabo ipsam aut dolore, at facilis error laborum molestiae asperiores? Reiciendis deleniti nostrum excepturi, inventore blanditiis pariatur quo delectus doloribus ratione quis ipsam expedita rem, sit debitis, distinctio repellendus ad laborum vel eos. Similique hic quos ex eum tempora perferendis accusamus ut totam recusandae. Ut quisquam architecto libero. Ad, quasi? Et vel sequi ab aut excepturi quia quibusdam soluta, odit quas nam quae? Maxime cupiditate sed inventore molestias unde repellendus libero. Odio eaque, pariatur inventore sint voluptates officiis aliquam modi unde deleniti ullam numquam labore aut laudantium accusamus dolorem, maiores nihil, veritatis obcaecati eos.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit beatae culpa dignissimos impedit accusantium, reprehenderit ipsam blanditiis exercitationem consequatur repellendus at expedita harum cum libero hic unde praesentium? Accusamus suscipit laudantium ducimus reiciendis totam voluptates veniam deleniti, vitae blanditiis non labore quidem modi consequuntur itaque! Fugit vitae, aperiam aliquid hic odio quo molestiae optio alias reprehenderit neque accusantium laudantium nobis beatae ratione voluptas nemo ducimus deleniti ea officia eos dolore possimus quos soluta consequatur! Repellendus quidem quod fuga culpa deleniti perferendis esse commodi corrupti consequuntur maiores maxime voluptas id rem, odio officia voluptatum! Ea in veritatis quae enim eos, rem blanditiis qui mollitia corrupti aspernatur perferendis explicabo ipsam aut dolore, at facilis error laborum molestiae asperiores? Reiciendis deleniti nostrum excepturi, inventore blanditiis pariatur quo delectus doloribus ratione quis ipsam expedita rem, sit debitis, distinctio repellendus ad laborum vel eos. Similique hic quos ex eum tempora perferendis accusamus ut totam recusandae. Ut quisquam architecto libero. Ad, quasi? Et vel sequi ab aut excepturi quia quibusdam soluta, odit quas nam quae? Maxime cupiditate sed inventore molestias unde repellendus libero. Odio eaque, pariatur inventore sint voluptates officiis aliquam modi unde deleniti ullam numquam labore aut laudantium accusamus dolorem, maiores nihil, veritatis obcaecati eos.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit beatae culpa dignissimos impedit accusantium, reprehenderit ipsam blanditiis exercitationem consequatur repellendus at expedita harum cum libero hic unde praesentium? Accusamus suscipit laudantium ducimus reiciendis totam voluptates veniam deleniti, vitae blanditiis non labore quidem modi consequuntur itaque! Fugit vitae, aperiam aliquid hic odio quo molestiae optio alias reprehenderit neque accusantium laudantium nobis beatae ratione voluptas nemo ducimus deleniti ea officia eos dolore possimus quos soluta consequatur! Repellendus quidem quod fuga culpa deleniti perferendis esse commodi corrupti consequuntur maiores maxime voluptas id rem, odio officia voluptatum! Ea in veritatis quae enim eos, rem blanditiis qui mollitia corrupti aspernatur perferendis explicabo ipsam aut dolore, at facilis error laborum molestiae asperiores? Reiciendis deleniti nostrum excepturi, inventore blanditiis pariatur quo delectus doloribus ratione quis ipsam expedita rem, sit debitis, distinctio repellendus ad laborum vel eos. Similique hic quos ex eum tempora perferendis accusamus ut totam recusandae. Ut quisquam architecto libero. Ad, quasi? Et vel sequi ab aut excepturi quia quibusdam soluta, odit quas nam quae? Maxime cupiditate sed inventore molestias unde repellendus libero. Odio eaque, pariatur inventore sint voluptates officiis aliquam modi unde deleniti ullam numquam labore aut laudantium accusamus dolorem, maiores nihil, veritatis obcaecati eos.</p>
                </Col>
            </Row>
        </Container> 
    </Container>
  )
}

export default Home;