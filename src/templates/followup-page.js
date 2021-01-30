import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/Seo"
import ImageBox from "../components/image-box/ImageBox"
import Section from "../components/section/Section"

export const FollowupPageTemplate = ({
  pageImage,
  showPageImage,
  sections,
}) => (
  <Layout>
    {pageImage && showPageImage ? (
      <>
        <ImageBox filename={pageImage} size={showPageImage} />
        <Section
          title={sections[0].title}
          subtitle={sections[0].subtitle}
          alignment={sections[0].alignment}
          type={sections[0].type}
          size={showPageImage}
          buttonLabel={sections[0].buttonLabel}
          buttonLink={sections[0].buttonLink}
          text={sections[0].text}
        />
        {sections.slice(1).map((item, index) => (
          <Section
            title={item.title}
            subtitle={item.subtitle}
            alignment={item.alignment}
            type={item.type}
            size={item.size}
            buttonLabel={item.buttonLabel}
            buttonLink={item.buttonLink}
            text={item.text}
            image={item.image}
            gallery={item.gallery}
            pageListType={item.pageList}
            key={index}
          />
        ))}
      </>
    ) : (
      sections.map((item, index) => (
        <Section
          title={item.title}
          subtitle={item.subtitle}
          alignment={item.alignment}
          type={item.type}
          size={item.size}
          buttonLabel={item.buttonLabel}
          buttonLink={item.buttonLink}
          text={item.text}
          image={item.image}
          gallery={item.gallery}
          pageListType={item.pageList}
          key={index}
        />
      ))
    )}
  </Layout>
)

FollowupPageTemplate.propTypes = {
  pageImage: PropTypes.string,
  showPageImage: PropTypes.string,
  sections: PropTypes.array,
}

function FollowupPage({ data }) {
  const { frontmatter } = data.markdownRemark
  return (
    <>
      <SEO
        title={frontmatter.seoTitle}
        description={frontmatter.seoDescription}
      />
      <FollowupPageTemplate
        pageImage={frontmatter.pageImage}
        showPageImage={frontmatter.showPageImage}
        sections={frontmatter.section}
      />
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
