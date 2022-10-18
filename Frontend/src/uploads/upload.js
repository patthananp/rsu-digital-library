import React, {useState} from "react";

function Upload() {

    // const [, setFormData] = useState({})

    return(
        <form>
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

       
            <div>
                <button>Upload</button>
            </div>
        </form>

    )

}
