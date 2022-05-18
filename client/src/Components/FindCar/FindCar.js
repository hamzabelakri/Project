import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/ProductAction.js";
import CardCar from "../CardCar/CardCar";
import { Form, FormControl, Button } from "react-bootstrap";

function FindCar() {
  const { products } = useSelector((state) => state.ProductReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div>
      <Form
        className="d-flex"
        style={{ width: "400px", margin: "30px auto", textAlign: "center" }}
      >
        <FormControl
          type="search"
          placeholder="Choose a Brand"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {products &&
          products.map((elt) => <CardCar key={elt._id} product={elt} />)}
      </div>
    </div>
  );
}

export default FindCar;
