import React from "react";
import Image from "../components/image"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import { FaSpotify } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

function footer() {
return (
    <div style={{backgroundColor: "black", width: "100%", height: "100%"}}>
   <Navbar className="justify-content-between">
   <a style={{color: "white"}}> © 2019 by It's Like That Records </a>
  <Form inline style={{color: "white"}}>
   <FaSpotify />
   <FontAwesomeIcon icon="coffee" />
   <FaFacebook />
  </Form>
</Navbar>
    </div>
)
}

export default footer