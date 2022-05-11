import React,{useState} from "react";
import { Form, Button, FormControl } from "react-bootstrap";

function FindCar({onSearch}) {

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