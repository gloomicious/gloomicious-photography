import React from "react"
import PropTypes from "prop-types"
import { FollowupPageTemplate } from "../../templates/followup-page"

function FollowupPagePreview({ entry }) {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return <FollowupPageTemplate sections={data.section} />
  } else {
    return <div>Loading...</div>
  }
}

FollowupPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default FollowupPagePreview
