import React from "react"
import { Link } from "gatsby"
import { ThemeContext } from "../../contexts/ThemeContext"
import "./Button.scss"
import Icon from "../icon/Icon"

export default function Button({
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
          {icon && (
            <span className="button__icon">
              <Icon name={icon} />
            </span>
          )}
          {label && <span className="button__label">{label}</span>}
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
        {label && <span className="button__label">{label}</span>}
        {icon && (
          <span className="button__icon">
            <Icon name={icon} />
          </span>
        )}
      </a>
    )
  }

  function Button() {
    return (
      <button
        className={`button${size ? ` button--${size}` : ""}${
          style ? ` button--${style}` : ""
        } ${theme.name}`}
        onClick={onClick}
      >
        {label && <span className="button__label">{label}</span>}
        {icon && (
          <span className="button__icon">
            <Icon name={icon} />
          </span>
        )}
      </button>
    )
  }

  return (
    <div className={`button__wrapper ${className ? className : ""}`}>
      {onClick
        ? Button()
        : (rel && target) || link.includes("mailto")
        ? ExternalLink()
        : InternalLink()}
    </div>
  )
}
