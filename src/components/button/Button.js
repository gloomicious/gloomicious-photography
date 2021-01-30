import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { ThemeContext } from "../../contexts/ThemeContext"
import "./Button.scss"
import Icon from "../icon/Icon"

function Button({
  size,
  style,
  icon,
  label,
  link,
  onClick,
  target,
  rel,
  className,
}) {
  const theme = React.useContext(ThemeContext)

  function InternalLink() {
    return (
      <>
        <Link
          to={link}
          className={`button${size ? ` button--${size} ` : " "}${
            style ? ` button--${style} ` : " "
          }${theme.name} `}
        >
          {ButtonContent()}
        </Link>
      </>
    )
  }

  function ExternalLink() {
    return (
      <a
        href={link}
        className={`button${size ? ` button--${size} ` : " "}${
          style ? ` button--${style} ` : " "
        }${theme.name} `}
        target={target && target}
        rel={rel && rel}
      >
        {ButtonContent()}
      </a>
    )
  }

  function ActionButton() {
    return (
      <button
        className={`button${size ? ` button--${size}` : ""}${
          style ? ` button--${style}` : ""
        } ${theme.name}`}
        onClick={onClick}
      >
        {ButtonContent()}
      </button>
    )
  }

  function ButtonContent() {
    return (
      <>
        {label && <span className="button__label">{label}</span>}
        {icon && (
          <span className="button__icon">
            <Icon name={icon} />
          </span>
        )}
      </>
    )
  }

  return (
    <div className={`button__wrapper ${className ? className : ""}`}>
      {onClick
        ? ActionButton()
        : (rel && target) || link.includes("mailto") || link.includes("#")
        ? ExternalLink()
        : InternalLink()}
    </div>
  )
}

Button.propTypes = {
  size: PropTypes.string,
  style: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  rel: PropTypes.string,
  className: PropTypes.string,
}

export default Button
