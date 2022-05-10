import React from "react";
import { Card, Button } from "react-bootstrap";
import {getOneUser} from "../Redux/Actions/UserActions"
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
function CardUser({ user }) {
    const disptch=useDispatch()
    const navigate=useNavigate()
  const handleClick = () => {
    disptch(getOneUser(user._id,navigate))
  };
  return (
    <Card >
      <Card.Header> brand:{brand}</Card.Header>
      <Card.Body>
        <Card.Title>image:{image}</Card.Title>

        <Button variant="primary" onClick={handleClick}>
          view Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardUser;