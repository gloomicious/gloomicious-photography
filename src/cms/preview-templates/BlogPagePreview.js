import React from "react"
import PropTypes from "prop-types"
import { BlogPageTemplate } from "../../templates/blog-page"

function BlogPagePreview({ entry }) {
  const data = entry.getIn(["data"]).toJS()
  
  if (data) {
    return (
      <BlogPageTemplate
        pageTitle={data.seoTitle}
        pageImage={data.pageImage}
        showPageImage={data.showPageImage}
        creationDate={data.date}
        content={data.body}
        preview="true"
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

BlogPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default BlogPagePreview
