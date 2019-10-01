import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import RelativeLinks from "../components/relativeLinks";
import InternationalLinks from "../components/internationalLinks";
import Header from "../components/header";
import "./index.css";
import GatsbyConfig from "../../gatsby-config"
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GoodCompany from "../components/goodCompany";
import { Link } from "gatsby"
import Footer from "../components/footer"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <div><Header /></div>
    <div style={{backgroundColor: "black", color: "white"}} className="container">
     <Helmet><title>It's Like That Records</title></Helmet>
    </div>
    <br/>
    <Carousel />
    <div style={{paddingBottom: "2px"}}>
      <br/>
      <h2 style={{textAlign: "center", color: "white"}}>Good Company is available on all DSPs now!</h2>
      <br/> 
      <h2 style={{textAlign: "center", color: "white"}}>(Click The Cover Below)</h2>
      <br/>
      <div style={{alignContent: "center", textAlign: "center"}}>
      <a style={{textDecoration: "none", color: "black"}} href="http://hyperurl.co/goodcompany" target="_blank" rel="noopener noreferrer">
        <GoodCompany />
       </a>
        </div>
  </div>
  <Footer />
  </Layout>
);

export default IndexPage;
