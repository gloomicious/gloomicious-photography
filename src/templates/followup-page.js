import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/Seo"
import Section from "../components/section/Section"

export const FollowupPageTemplate = ({ section }) => (
  <Layout location="Followup">
    {section.map((section, index) => (
      <Section
        title={section.title}
        subtitle={section.subtitle}
        alignment={section.alignment}
        type={section.type}
        size={section.size}
        buttonLabel={section.buttonLabel}
        buttonLink={section.buttonLink}
        text={section.text}
        image={section.image}
        gallery={section.gallery}
        pageList={section.pageList}
        key={index}
      />
    ))}
  </Layout>
)

FollowupPageTemplate.propTypes = {
  section: PropTypes.array,
  image: PropTypes.object,
}

const FollowupPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <>
      <SEO
        title={frontmatter.seoTitle}
        description={frontmatter.seoDescription}
      />
      <FollowupPageTemplate section={frontmatter.section} />
    </>
  )
}

FollowupPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FollowupPage

export const pageQuery = graphql`
  query FollowupPageTemplate($path: String!) {
    markdownRemark(
      frontmatter: { path: { eq: $path }, templateKey: { eq: "followup-page" } }
    ) {
      frontmatter {
        path
        seoTitle
        seoDescription
        section {
          title
          subtitle
          alignment
          type
          size
          pageList
          buttonLabel
          buttonLink
          text
          image {
            file
            size
          }
          gallery {
            type
            imageLabels
            photos {
              title
              page
              image
            }
          }
        }
      }
    }
  }
`
