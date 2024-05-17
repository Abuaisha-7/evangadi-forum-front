import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/evangadi-logo.png";

const Header = () => {
   
	const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <Navbar
        bg="light"
        expand="lg"
        className="py-3 shadow-lg position-sticky w-100 "
        style={{
          zIndex: "99",
          top: "0",
        }}
      >
        <Container style={{maxWidth:'70%',    marginRight:'auto',
      marginLeft:'auto'}}>
          <Navbar.Brand href="/login">
            <img src={logo} alt="" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-lg`}
          ></Navbar.Toggle>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 ">
                
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="#">How it works</Nav.Link>
                
              </Nav>
                <Nav.Link href="/login">
                  
                  <Button className="px-5" variant="primary">
                    LogOut
                  </Button>
                 
                </Nav.Link>
             
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
