import React from "react"
import PropTypes from "prop-types"
import Icon from "./../icon/Icon"
import "./ThemeToggle.scss"

function ThemeToggle({ theme, className }) {
  return (
    <div
      className={`theme-toggle${className ? ` ${className}` : ""} ${
        theme.name
      } `}
      onClick={() =>
        theme.updateTheme &&
        theme.updateTheme(theme.name === "light" ? "dark" : "light")
      }
      role="presentation"
    >
      {theme.name === "light" ? <Icon name="moon" /> : <Icon name="sun" />}
    </div>
  )
}

ThemeToggle.propTypes = {
  theme: PropTypes.object,
  className: PropTypes.string,
}

export default ThemeToggle
