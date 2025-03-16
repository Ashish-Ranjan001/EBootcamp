import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { getDatafromtoken } from '../services/AuthService';

const Navb = () => {
    let [userData,setUserData]=useState({});
    const navigate=useNavigate();
    useEffect(()=>{
       let data=getDatafromtoken();
       setUserData(data);
    },[])
    const logout=()=>{
       if(window.confirm("Do u want to logout ?")){
           localStorage.removeItem("_token");
           navigate("/")
       }
    }
    return (
      <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand as ={Link} to="/">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as ={Link} to="">Home</Nav.Link>
            <Nav.Link as ={Link} to="addproduct">Add Products</Nav.Link>
            <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Welcome : {userData?.email}</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={logout}>
                Logout
              </NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
export default Navb
