import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/Seo"
import ImageBox from "../components/image-box/ImageBox"
import Section from "../components/section/Section"

export function GeneralPageTemplate({
  pageTitle,
  pageImage,
  showPageImage,
  sections,
}) {
  return (
    <Layout>
      {pageImage && showPageImage === "full-page" ? (
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
        <>
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
          {sections.map((item, index) => (
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
      )}
    </Layout>
  )
}

GeneralPageTemplate.propTypes = {
  pageImage: PropTypes.string,
  showPageImage: PropTypes.string,
  sections: PropTypes.array,
}

function GeneralPage({ data }) {
  const { frontmatter } = data.markdownRemark
  return (
    <>
      <SEO
        title={frontmatter.seoTitle}
        description={frontmatter.seoDescription}
      />
      <GeneralPageTemplate
        pageTitle={frontmatter.seoTitle}
        pageImage={frontmatter.pageImage}
        showPageImage={frontmatter.showPageImage}
        sections={frontmatter.section}
      />
    </>
  )
}

GeneralPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default GeneralPage

export const pageQuery = graphql`
  query GeneralPageTemplate($path: String!) {
    markdownRemark(
      frontmatter: { path: { eq: $path }, templateKey: { eq: "general-page" } }
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
