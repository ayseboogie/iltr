import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import MainContent from "../components/mainContent";
import RelativeLinks from "../components/relativeLinks";
import InternationalLinks from "../components/internationalLinks";
import Header from "../components/header";
import "./index.css";
import GatsbyConfig from "../../gatsby-config"
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const IndexPage = () => (
  <Layout>
    <div><Header /></div>
    <div style={{backgroundColor: "black", color: "white"}} className="container">
     <Helmet><title>It's Like That Records</title></Helmet>
     <Carousel />
     <br/>
      <h2 style={{textAlign: "center"}}>Good Company is available on all DSPs now!</h2>
    </div>
    <Carousel />
  </Layout>
);

export default IndexPage;
