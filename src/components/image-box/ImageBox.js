import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "./ImageBox.scss"

function ImageBox({ filename, size, alt, className, children }) {
  const [navbar, setNavbar] = React.useState("")
  const [fullpageButton, setFullpageButton] = React.useState("")
  const forceLightTheme = React.useCallback(() => {
    if (navbar && navbar.classList.contains("light")) {
      navbar.classList.remove("light")
      navbar.classList.add("dark")
    }
    if (fullpageButton && fullpageButton.classList.contains("light")) {
      fullpageButton.classList.remove("light")
      fullpageButton.classList.add("dark")
    }
  }, [navbar, fullpageButton])
  let navbarObserver = new MutationObserver(forceLightTheme),
    fullpageButtonObserver = new MutationObserver(forceLightTheme)

  React.useEffect(() => {
    setNavbar(document.querySelector("nav"))
    setFullpageButton(document.querySelector(".section--full-page .button"))
    if (navbar && (size === "full-page" || size === "page-head")) {
      forceLightTheme()
      navbarObserver.observe(navbar, {
        attributes: true,
        attributeFilter: ["class"],
      })
    }
    if (fullpageButton && (size === "full-page" || size === "page-head")) {
      forceLightTheme()
      fullpageButtonObserver.observe(fullpageButton, {
        attributes: true,
        attributeFilter: ["class"],
      })
    }
    return () => {
      navbarObserver.disconnect()
      fullpageButtonObserver.disconnect()
    }
  }, [
    navbar,
    fullpageButton,
    size,
    navbarObserver,
    fullpageButtonObserver,
    forceLightTheme,
  ])

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
            className={`image-box${size ? ` image-box--${size}` : ""} ${
              className ? ` ${className}` : ""
            } `}
          >
            <div className="image-box__overlay"></div>
            <BackgroundImage
              className="image-box__photo"
              alt={alt}
              fluid={image.node.childImageSharp.fluid}
              preserveStackingContext={true}
              backgroundColor={`#161a1b`}
            >
              <div
                className={`image-box__content${
                  size ? ` image-box__content--${size}` : ""
                }`}
              >
                {children}
              </div>
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
