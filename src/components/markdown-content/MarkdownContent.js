import React from "react"
import showdown from "showdown"

export default function MarkdownContent({ content, className }) {
  const converter = new showdown.Converter()

  return (
    <div
      className={className ? className : "markdown-content"}
      dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}
    />
  )
}
