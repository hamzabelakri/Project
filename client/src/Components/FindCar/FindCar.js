import React,{useState, useEffect} from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import {useDispatch} from "react-redux";
import {getAllProducts} from "../../Redux/Actions/ProductAction.js";

function FindCar({onSearch}) {

  const dispatch = useDispatch()
  useEffect (() =>{
  dispatch(getAllProducts())

  }, [dispatch])

  const [caracter, setCaracter] = useState("");
  const handleChange = (event) => {
    setCaracter(event.target.value);
  };
  
const   onSubmit=(event)=>{
  event.preventDefault()
  onSearch(caracter)
}
  return (
    <div>
    <Form style={{ width: "40%", margin: "auto" }} className="d-flex" onSubmit={onSubmit}>
        <FormControl
          type="search"
          placeholder="Choose the brand"
          className="me-2"
          aria-label="Search"
          onChange={handleChange}
        />
        <Button type="submit" variant="outline-success">Search</Button>
      </Form>
      
    
    </div>
  )
}

export default FindCar