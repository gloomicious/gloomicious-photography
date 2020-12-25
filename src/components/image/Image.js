import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./Image.scss"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 3000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      return (
        <Img
          alt={props.alt}
          fluid={image.node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className={`image ${props.size ? `image--${props.size}` : ""}${
            props.className ? ` ${props.className}` : ""
          }`}
          style={props.style}
        />
      )
    }}
  />
)

export default Image
