import React from "react";
import { Link } from "gatsby"
import CardDeck from "react-bootstrap/CardDeck"
import Card from "react-bootstrap/Card"
import Header from "../components/header"
import Layout from "../components/layout";
import Footer from "../components/footer"
import styles from "./artist.module.css";

function artists() {
return (
  <Layout>
    <div style={{backgroundColor: "black"}}>
        <Header />
    <CardDeck style={{paddingLeft: "30px", paddingRight: "30px"}}>
  <Card >
    <a className={styles.flippy} style={{textDecoration: "none", color: "black"}} href="https://open.spotify.com/artist/7uA4eVq3m2ziWRlQxIKt3I" target="_blank" rel="noopener noreferrer">
      <Card.Img variant="top" src={require('./jahfridahead.png')} />
    </a>
    <Card.Body>
      <Card.Title>JAH FRIDA</Card.Title>
      <Card.Text style={{fontSize: "12px"}}>
      Jah Frida is a contemporary artist based out of Nashville. His infectious melodies and colorful production provide a truly remarkable listening experience.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><a style={{textDecoration: "none", color: "black"}} href="https://www.instagram.com/jah.frida/" target="_blank" rel="noopener noreferrer">
      @JAH.FRIDA
    </a></small>
    </Card.Footer>
  </Card>
  <Card>
      <a style={{textDecoration: "none", color: "black"}} href="https://soundcloud.com/carmineprophets" target="_blank" rel="noopener noreferrer">
      <Card.Img variant="top" src={require('./carmineprophetshead.png')} />
    </a>     
    <Card.Body>
      <Card.Title>CARMINE PROPHETS</Card.Title>
      <Card.Text>
        About me maybe?
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><a style={{textDecoration: "none", color: "black"}} href="https://www.instagram.com/carmineprophets/" target="_blank" rel="noopener noreferrer">
      @CARMINEPROPHETS
    </a></small>
    </Card.Footer>
  </Card>
  <Card>
      <a style={{textDecoration: "none", color: "black"}} href="https://soundcloud.com/onlyoneleven" target="_blank" rel="noopener noreferrer">
      <Card.Img variant="top" src={require('./11head.png')} />
    </a> 
         <Card.Body>
      <Card.Title>11</Card.Title>
      <Card.Text>
        About me maybe?
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><a style={{textDecoration: "none", color: "black"}} href="http://instagram.com/onlyoneleven" target="_blank" rel="noopener noreferrer">
      @ONLYONELEVEN
    </a></small>
    </Card.Footer>
  </Card>
  <Card>
      <a style={{textDecoration: "none", color: "black"}} href="https://soundcloud.com/endreonpurpose" target="_blank" rel="noopener noreferrer">
      <Card.Img variant="top" src={require('./endrehead.png')} />
    </a> 
         <Card.Body>
      <Card.Title>ENDRE ON PURPOSE</Card.Title>
      <Card.Text>
        About me maybe?
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><a style={{textDecoration: "none", color: "black"}} href="https://www.instagram.com/hehimself/" target="_blank" rel="noopener noreferrer">
      @HEHIMSELF
    </a></small>
    </Card.Footer>
  </Card>
</CardDeck>
    </div>
    <Footer />
    </Layout>
)
}

export default artists