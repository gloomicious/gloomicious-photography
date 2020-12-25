import React from "react"
import PropTypes from "prop-types"
import { FollowupPageTemplate } from "../../templates/followup-page"

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS(),
    section = [
      {
        type: "title-text",
        alignment: "center",
        buttonLabel: data.buttonLabel,
        buttonLink: data.buttonLink,
        title: data.text,
      },
    ]

  if (data) {
    return <FollowupPageTemplate section={section} />
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default IndexPagePreview
