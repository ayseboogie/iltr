import React, { Component } from "react";
import Header from "../components/header";
import RelativeLinks from "../components/relativeLinks";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Helmet from "react-helmet";
import Footer from "../components/footer"
import Layout from "../components/layout";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

function contact() {
  return (
    <Layout>
          <Header />
          <Form style={{backgroundColor: "black", color: "white", paddingLeft: "4%", paddingRight: "4%"}}v>
          <Form.Row>
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control placeholder="Enter First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control placeholder="Enter Last Name" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Email Address" />
    </Form.Group>

  <Form.Group controlId="formGridSubject">
    <Form.Label>Subject</Form.Label>
    <Form.Control placeholder="Enter Subject" />
  </Form.Group>
  <Form.Group controlId="formGridMessage">
    <Form.Label>Message</Form.Label>
    <Form.Control placeholder="Enter Message" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      <Footer />
      </Layout>
  )
  }
 
export default contact;