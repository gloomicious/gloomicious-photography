import React from "react"
import PropTypes from "prop-types"
import { GeneralPageTemplate } from "../../templates/general-page"

function GeneralPagePreview({ entry }) {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return <GeneralPageTemplate sections={data.section} />
  } else {
    return <div>Loading...</div>
  }
}

GeneralPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default GeneralPagePreview
