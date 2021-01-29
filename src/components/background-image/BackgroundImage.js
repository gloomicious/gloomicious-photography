import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "./BackgroundImage.scss"

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
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      return (
        <div
          className={`background-image ${
            props.className ? props.className : ""
          } ${props.size ? `background-image--${props.size}` : ""}`}
        >
          <div className="background-image__overlay"></div>
          <BackgroundImage
            className="background-image__photo"
            alt={props.alt}
            fluid={image.node.childImageSharp.fluid}
            preserveStackingContext={true}
            backgroundColor={`#262626`}
          >
            <div className="background-image__content">{props.children}</div>
          </BackgroundImage>
        </div>
      )
    }}
  />
)

export default Image
