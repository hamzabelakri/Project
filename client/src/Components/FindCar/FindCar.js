import React from 'react'
import { Form, Button, FormControl } from "react-bootstrap";


function FindCar() {
  return (
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Choose the brand"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
  )
}

export default FindCar