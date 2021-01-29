import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "./BackgroundImage.scss"

const Image = ({ filename, size, alt, className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 6000) {
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
        <div
          className={`background-image ${className ? className : ""} ${
            size ? `background-image--${size}` : ""
          }`}
        >
          <div className="background-image__overlay"></div>
          <BackgroundImage
            className="background-image__photo"
            alt={alt}
            fluid={image.node.childImageSharp.fluid}
            preserveStackingContext={true}
            backgroundColor={`#161a1b`}
          >
            <div className="background-image__content">{children}</div>
          </BackgroundImage>
        </div>
      )
    }}
  />
)

export default Image
