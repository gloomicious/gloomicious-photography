import React from "react"
import { Link } from "gatsby"
import "./Navbar.scss"
import dataFromFile from "../../settings/navbar.yml"
import ThemeToggle from "./../theme-toggle/ThemeToggle"
import Icon from "../icon/Icon"

export default function Navbar({ theme, size, forceLight, content }) {
  let data = content ? content : dataFromFile,
    style = theme ? theme : { name: "light" }

  return (
    <nav
      className={`navbar ${forceLight ? "dark" : style.name}${
        size ? ` navbar--${size}` : ""
      }`}
    >
      <Link to="/" className="navbar__logo">
        <Icon name="logo gloomicious" className="navbar__logo__icon" />
        <span className="navbar__logo__text">gloomicious</span>
      </Link>
      {forceLight ? (
        ""
      ) : (
        <ThemeToggle theme={style} className="navbar__theme-toggle--mobile" />
      )}
      <div className="navbar__links">
        {data.links.map((item, index) => (
          <Link to={item.link} className="navbar__link" key={index}>
            {item.label}
          </Link>
        ))}
        {forceLight ? (
          ""
        ) : (
          <ThemeToggle
            theme={style}
            className="navbar__theme-toggle--desktop"
          />
        )}
      </div>
    </nav>
  )
}
