import React from "react";
import { Card, Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {getOneProduct} from "../../Redux/Actions/ProductAction"
import {useDispatch} from "react-redux";



function Cardcar({ product }) {
    const dispatch= useDispatch;
  const navigate=useNavigate();
  const handleClick=()=>{
    /* dispatch (getOneProduct(product._id, navigate)) */
   alert (product._id)
  }
  return (
    <Card style={{ width: "18rem"}}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.brand}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary" onClick={handleClick}>More Info</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardcar;