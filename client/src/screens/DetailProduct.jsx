import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory, Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getSingleProductData = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      console.log(data);

      setTitle(data.title);
      setPrice(data.Price);
      setDescription(data.description);
    };
    getSingleProductData();
  }, [id]);

  //handling delete

  const handleDelete = async (id) => {
    await axios.delete(`/api/products/${id}`);
    history.push("/products");
  };

  return (
    <>
      <h1>Detail Product Page</h1>
      <Card className="shadown-lg m-2 p-3 rounded" style={{ wiodth: "18rem" }}>
        <Card.Body>
          <Card.Title>Title: {title}</Card.Title>
          <Card.Title>price: {price}</Card.Title>
          <Card.Text>Description: {description}</Card.Text>
          <Link to={`product/edit/${id}`}>
            <Button>Edit</Button>
          </Link>

          <Button onClick={() => handleDelete(id)}>Delete</Button>
        </Card.Body>
      </Card>
    </>
  );
};
