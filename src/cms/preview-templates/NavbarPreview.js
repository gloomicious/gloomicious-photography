import React from "react"
import PropTypes from "prop-types"
import Navbar from "../../components/navbar/Navbar"

const NavbarPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return <Navbar content={data} />
  } else {
    return <div>Loading...</div>
  }
}

NavbarPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default NavbarPreview
