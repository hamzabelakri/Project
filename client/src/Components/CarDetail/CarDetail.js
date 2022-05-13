import React from "react";
import { Card, Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
function CarDetail({ product }) {
  const navigate=useNavigate();
  const handleNavigate=()=>{
   alert('hello')
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.brand}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={handleNavigate}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CarDetail;
