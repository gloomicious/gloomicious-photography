import React from "react"
import Icon from "./../icon/Icon"
import "./ThemeToggle.scss"

const ThemeToggle = ({ theme, className }) => {
  return (
    <div
      className={`theme-toggle ${className ? className : ""} ${theme.name} `}
      onClick={() =>
        theme.updateTheme(theme.name === "light" ? "dark" : "light")
      }
      role="presentation"
    >
      {theme.name === "light" ? <Icon name="Moon" /> : <Icon name="Sun" />}
    </div>
  )
}

export default ThemeToggle
