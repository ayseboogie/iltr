import React from "react";
import Image from "../components/image"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

function header() {
return (
       <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "black"}} variant="dark">
  <Navbar.Brand href="#home" style={{textAlign: "center", alignContent: "center", paddingLeft: "3%"}}><Link to="/"><Image /></Link></Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
        &nbsp;
    </Nav>
    <Nav >
    <Nav.Link><Link style={{color: "white", fontSize: "22px", marginRight: "14px"}}  to="/music/">MUSIC</Link></Nav.Link> 
      <Nav.Link><Link style={{color: "white", fontSize: "22px", marginRight: "14px"}} to="/artists/">ARTISTS</Link></Nav.Link>
      <Nav.Link><Link style={{color: "white", fontSize: "22px", marginRight: "14px"}} to="/videos/">VIDEOS</Link></Nav.Link>
      <Nav.Link><Link style={{color: "white", fontSize: "22px", marginRight: "14px"}} to="/contact/">CONTACT</Link></Nav.Link> 
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}

export default header