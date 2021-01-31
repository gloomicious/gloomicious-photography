import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Gallery from "../gallery/Gallery"

function PageList({ pageType }) {
  let type = pageType ? pageType : "none"

  return (
    <StaticQuery
      query={graphql`
        query PageListQuery {
          collection: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/photo-collection/" } }
          ) {
            edges {
              node {
                id
                frontmatter {
                  path
                  seoTitle
                  category
                  pageImage
                }
              }
            }
          }
          blog: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/blog/" } }
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                id
                frontmatter {
                  path
                  seoTitle
                  category
                  pageImage
                  date
                }
              }
            }
          }
        }
      `}
      render={data => {
        const collection = data.collection.edges
        const blog = data.blog.edges

        switch (type) {
          case "photo-collections":
            var collectionItems = [],
              collectionFilters = []

            collection.forEach(page => {
              var pageCategory = page.node.frontmatter.category,
                pagePath = page.node.frontmatter.path.replace("/", "")

              !collectionFilters.includes(pageCategory) &&
                collectionFilters.push(pageCategory)

              collectionItems.push({
                title: page.node.frontmatter.seoTitle,
                page: pagePath,
                category: pageCategory,
                image: page.node.frontmatter.pageImage,
              })
            })
            return (
              <Gallery
                items={collectionItems}
                type="label"
                filters={collectionFilters}
              />
            )

          case "blog-pages":
            var blogItems = [],
              blogFilters = []

            blog.forEach(page => {
              var pageCategory = page.node.frontmatter.category,
                pagePath = page.node.frontmatter.path.replace("/", "")

              !blogFilters.includes(pageCategory) &&
                blogFilters.push(pageCategory)

              blogItems.push({
                title: page.node.frontmatter.seoTitle,
                page: pagePath,
                category: pageCategory,
                image: page.node.frontmatter.pageImage,
                date: page.node.frontmatter.date,
              })
            })
            return (
              <Gallery
                items={blogItems}
                type="caption"
                filters={blogFilters}
              />
            )
          default:
            return null
        }
      }}
    />
  )
}

PageList.propTypes = {
  pageType: PropTypes.string,
}

export default PageList
