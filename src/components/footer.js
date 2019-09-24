import React from "react";
import Image from "../components/image"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import { FaSpotify, FaFacebook, FaTwitter, FaInstagram, FaSoundcloud, FaYoutube } from 'react-icons/fa';
import Container from "react-bootstrap/Container"

function footer() {
return (
    <div style={{backgroundColor: "black", width: "100%", height: "100%"}}>
   <footer>
   <div style={{color: "white", textAlign: "center", fontSize: "32px"}}>
   <a href="https://open.spotify.com/artist/4IzPMZN56tw1UWshb1wqWh" target="_blank" style={{paddingRight: "10px", color: "white"}}> <FaSpotify /> </a>
   <a href="https://www.facebook.com/itslikethatrecords/" target="_blank" style={{paddingRight: "10px", color: "white"}}><FaFacebook /> </a>
   <a href="https://twitter.com/ILTRecords" target="_blank" style={{paddingRight: "10px", color: "white"}}><FaTwitter /></a>
   <a href="https://www.instagram.com/itslikethatrecords/" target="_blank" style={{paddingRight: "10px", color: "white"}}><FaInstagram /></a>
   <a href="https://soundcloud.com/itslikethatrecords" target="_blank" style={{paddingRight: "10px", color: "white"}}> <FaSoundcloud /></a>
   <a href="https://www.youtube.com/channel/UC4htDIDsYRu2nrPAnm-xXAA" target="_blank" style={{color: "white"}}><FaYoutube /></a>
   </div>
</footer>
  <br/>
  <a style={{color: "white", textAlign: "left"}}> © 2019 by It's Like That Records </a>

</div>
)
}

export default footer