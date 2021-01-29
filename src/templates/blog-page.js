import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/Seo"
import BackgroundImage from "../components/background-image/BackgroundImage"
import Section from "../components/section/Section"

export const BlogPageTemplate = ({ pageImage, showPageImage, section }) => (
  <Layout>
    {pageImage && showPageImage ? (
      <>
        <BackgroundImage filename={pageImage} size={showPageImage} />
        <Section
          title={section[0].title}
          subtitle={section[0].subtitle}
          alignment={section[0].alignment}
          type={section[0].type}
          size={showPageImage}
          buttonLabel={section[0].buttonLabel}
          buttonLink={section[0].buttonLink}
          text={section[0].text}
        />
        {section.slice(1).map((section, index) => (
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
      </>
    ) : (
      section.map((section, index) => (
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
      ))
    )}
  </Layout>
)

BlogPageTemplate.propTypes = {
  section: PropTypes.array,
}

const BlogPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <>
      <SEO
        title={frontmatter.seoTitle}
        description={frontmatter.seoDescription}
      />
      <BlogPageTemplate
        pageImage={frontmatter.pageImage}
        showPageImage={frontmatter.showPageImage}
        section={frontmatter.section}
      />
    </>
  )
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default BlogPage

export const pageQuery = graphql`
  query BlogPageTemplate($path: String!) {
    markdownRemark(
      frontmatter: { path: { eq: $path }, templateKey: { eq: "blog-page" } }
    ) {
      frontmatter {
        path
        seoTitle
        seoDescription
        pageImage
        showPageImage
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
