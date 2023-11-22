import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const addProduct = ({ history}) =>{
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const addProductHandler = async() =>{
        e.preventDefault()
        const data = {
            title: title,
            price: price,
            description: description,
            publeshed: true
        }
        await axios.post('/api/products/addProduct', data)
    }
    return(
        <>
            <Container className="mt-5 p-2">
                <h1>Add Product</h1>
                <hr />

                <Form onSubmit={addProduct}>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Price ($)</Form.Label>
                        <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} type="number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} as="textarea" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add Product
                    </Button>
            
                </Form>
            </Container>
            
        </>
    )
}


export default addProduct