import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "./ImageBox.scss"

function ImageBox({ filename, size, alt, className, children }) {
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
            className={`image-box ${className ? className : ""} ${
              size ? `image-box--${size}` : ""
            }`}
          >
            <div className="image-box__overlay"></div>
            <BackgroundImage
              className="image-box__photo"
              alt={alt}
              fluid={image.node.childImageSharp.fluid}
              preserveStackingContext={true}
              backgroundColor={`#161a1b`}
            >
              <div className="image-box__content">{children}</div>
            </BackgroundImage>
          </div>
        )
      }}
    />
  )
}

ImageBox.propTypes = {
  filename: PropTypes.string,
  size: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default ImageBox
