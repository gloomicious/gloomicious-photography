import React from "react"
import { Link } from "gatsby"
import { ThemeContext } from "../../contexts/ThemeContext"
import "./Footer.scss"
import dataFromFile from "../../settings/footer.yml"
import Icon from "./../icon/Icon"

export default function Footer({ size, forceLight, content }) {
  const theme = React.useContext(ThemeContext)
  let data = content ? content : dataFromFile

  return (
    <footer
      className={`footer ${forceLight ? "dark" : theme.name}${
        size ? ` footer--${size}` : ""
      }`}
    >
      <div className="footer__copyright">
        © {new Date().getFullYear()} {data.copyright}
      </div>
      <div className="footer__page-links">
        {data.links && (
          <div className="footer__page-links__container">
            {data.links.map((item, index) => (
              <Link
                to={item.link}
                className="footer__page-links__link"
                key={index}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
        {data.social && (
          <div className="footer__page-links__container">
            {data.social.map((item, index) => (
              <a
                href={item.link}
                className="footer__page-links__link"
                key={index}
              >
                <Icon name={item.icon} />
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  )
}
