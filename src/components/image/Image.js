import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./Image.scss"

function Image({ filename, size, alt, style, className }) {
  return (
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
          return n.node.relativePath.includes(filename)
        })
        if (!image) {
          return null
        }

        return (
          <Img
            alt={alt}
            fluid={image.node.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            className={`image ${size ? `image--${size}` : ""}${
              className ? ` ${className}` : ""
            }`}
            style={style}
          />
        )
      }}
    />
  )
}

Image.propTypes = {
  filename: PropTypes.string,
  size: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.string,
  className: PropTypes.string,
}

export default Image
