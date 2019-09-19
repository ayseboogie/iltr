import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image1 = () => {
  const data1 = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "goodcompany.png" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data1.placeholderImage.childImageSharp.fixed} />
}

export default Image1