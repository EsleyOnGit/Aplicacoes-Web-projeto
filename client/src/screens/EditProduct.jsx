import axios from "axios";
import e from "express";
import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const  history = useHistory()

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getDataById = async () => {
      const { data } = await axios.get("/api/products/${id}");
      setTitle(data.title);
      setPrice(data.price);
      setDescription(data.description);
    };
    getDataById();
  }, [id]);

  const upadateHandler = async (e) => {

    e.preventDefault()

    //update by put request

    const data = {
      title: title,
      price: price,
      description: description,
      published: true,
    };
    await axios.put("/api/products/${id}", data);
    history.push('/products')
  };

  return (
    <>
      <Container className="mt-5 p-2">
        <h1>Add Product</h1>
        <hr />

        <Form onSubmit={upadateHandler}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price ($)</Form.Label>
            <Form.Control
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              as="textarea"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update Product
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default EditProduct;
