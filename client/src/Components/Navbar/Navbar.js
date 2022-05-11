import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom"
import { Button } from "react-bootstrap";
import {logOut} from "../../Redux/Actions/authAction";
import "./Navbar.css";

function CustomNavbar() {
  const navigate =useNavigate()
  const dispatch= useDispatch()
  const { isAuth } = useSelector((state) => state.authReducer);
  const { user } = useSelector((state) => state.authReducer);

 const handleDeconnect=()=>{
  dispatch(logOut(navigate))
 }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <h1>
          {" "}
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            DasAuto
          </Link>
        </h1>

        <Link to="/find-car"
            style={{ textDecoration: "none", color: "white"}}> 
            Find a car
        </Link>

        <Link to="/ContactUs" style={{ textDecoration: "none", color: "white" }}>
            ContactUs
          </Link>

        {isAuth ? (
          <div>
            <Button variant="danger" onClick={handleDeconnect}>Logout </Button>
            <p style={{color:"white"}}>{user && user.username}</p>
          </div>
        ) : (
          <Nav>
            <div className="a" >
            <Link
              to="/auth/sign-in"
              style={{ textDecoration: "none", color: "white",}}
            >
              MySpace
            </Link>
            </div>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
