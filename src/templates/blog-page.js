import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/Seo"
import ImageBox from "../components/image-box/ImageBox"
import Section from "../components/section/Section"

function FormatDate(date) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const dateComplete = new Date(date)
  const month = monthNames[dateComplete.getMonth()]
  const year = dateComplete.getFullYear()
  const day = dateComplete.getDate()
  const formattedDate = [day, month, year].join(" ")
  return formattedDate
}

export const BlogPageTemplate = ({
  pageTitle,
  pageImage,
  showPageImage,
  creationDate,
  text,
}) => (
  <Layout>
    {pageImage && showPageImage ? (
      <>
        {showPageImage === "page-head" && (
          <>
            <ImageBox filename={pageImage} size={showPageImage}>
              <h1>{pageTitle}</h1>
            </ImageBox>
            <Section type="empty" />
          </>
        )}
        {showPageImage === "page-start" && (
          <ImageBox filename={pageImage} size={showPageImage} />
        )}
      </>
    ) : null}
    {text && (
      <Section
        type="subtitle-title-text"
        title={pageTitle}
        subtitle={FormatDate(creationDate)}
        text={text}
      />
    )}
  </Layout>
)

BlogPageTemplate.propTypes = {
  pageTitle: PropTypes.string,
  pageImage: PropTypes.string,
  showPageImage: PropTypes.string,
  creationDate: PropTypes.string,
  text: PropTypes.string,
}

function BlogPage({ data }) {
  const { frontmatter } = data.markdownRemark
  return (
    <>
      <SEO
        title={frontmatter.seoTitle}
        description={frontmatter.seoDescription}
      />
      <BlogPageTemplate
        pageTitle={frontmatter.seoTitle}
        pageImage={frontmatter.pageImage}
        showPageImage={frontmatter.showPageImage}
        creationDate={frontmatter.date}
        text={frontmatter.text}
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
        date
        category
        text
      }
    }
  }
`
