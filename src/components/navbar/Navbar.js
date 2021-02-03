import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./Navbar.scss"
import dataFromFile from "../../settings/navbar.yml"
import ThemeToggle from "./../theme-toggle/ThemeToggle"
import Icon from "../icon/Icon"

function Navbar({ theme, content }) {
  let data = content ? content : dataFromFile,
    currentTheme = theme ? theme : { name: "light" }

  return (
    <nav className={`navbar ${currentTheme.name}`} id="navbar">
      <Link to="/" className="navbar__logo">
        <Icon name="logo gloomicious" className="navbar__logo__icon" />
        <span className="navbar__logo__text">gloomicious</span>
      </Link>
      <ThemeToggle
        theme={currentTheme}
        className="navbar__theme-toggle navbar__theme-toggle--mobile"
      />
      <div className="navbar__links">
        {data.links.map((item, index) => (
          <Link to={item.link} className="navbar__link" key={index}>
            {item.label}
          </Link>
        ))}
        <ThemeToggle
          theme={currentTheme}
          className="navbar__theme-toggle navbar__theme-toggle--desktop"
        />
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  theme: PropTypes.object,
  content: PropTypes.object,
}

export default Navbar
