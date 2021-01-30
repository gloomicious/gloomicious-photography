import React from "react"
import PropTypes from "prop-types"
import showdown from "showdown"

function MarkdownContent({ content, className }) {
  const converter = new showdown.Converter()

  return (
    <div
      className={className ? className : "markdown-content"}
      dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}
    />
  )
}

MarkdownContent.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
}

export default MarkdownContent
