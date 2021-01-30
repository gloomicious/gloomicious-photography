import React from "react"
import PropTypes from "prop-types"
import Footer from "../../components/footer/Footer"

function FooterPreview({ entry }) {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return <Footer content={data} />
  } else {
    return <div>Loading...</div>
  }
}

FooterPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default FooterPreview
