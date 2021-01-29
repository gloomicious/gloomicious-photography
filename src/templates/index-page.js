import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/Seo"
import BackgroundImage from "../components/background-image/BackgroundImage"
import Button from "../components/button/Button"

export const IndexPageTemplate = ({ image, text, buttonLabel, buttonLink }) => (
  <>
    {image && (
      <BackgroundImage filename={image} size="full-page">
        {text && <h1>{text}</h1>}
        {buttonLabel && buttonLink && (
          <Button
            label={buttonLabel}
            link={buttonLink}
            className="section__button"
          />
        )}
      </BackgroundImage>
    )}
  </>
)

IndexPageTemplate.propTypes = {
  imageSlider: PropTypes.shape({
    sliderItems: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout location="Home">
      <SEO
        title={frontmatter.seoTitle}
        description={frontmatter.seoDescription}
      />
      <IndexPageTemplate
        image={frontmatter.image}
        text={frontmatter.text}
        buttonLabel={frontmatter.buttonLabel}
        buttonLink={frontmatter.buttonLink}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate($path: String!) {
    markdownRemark(
      frontmatter: { path: { eq: $path }, templateKey: { eq: "index-page" } }
    ) {
      frontmatter {
        path
        seoTitle
        seoDescription
        image
        text
        buttonLabel
        buttonLink
      }
    }
  }
`
