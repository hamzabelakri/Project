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
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.brand}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardcar;