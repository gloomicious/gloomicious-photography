import React, { useState } from "react"
import PropTypes from "prop-types"
import "./Lightbox.scss"
import { ThemeContext } from "../../contexts/ThemeContext"
import Image from "../image/Image"
import Icon from "../icon/Icon"

function Lightbox({ setOpen, item }) {
  const theme = React.useContext(ThemeContext)
  const [lightboxVisible, setLightboxVisible] = useState(true)

  function CloseLightbox() {
    setLightboxVisible(false)
    setOpen(false)
  }

  return (
    <div
      className={`lightbox${
        lightboxVisible ? " lightbox--visible" : " lightbox--hidden"
      } ${theme.name}`}
      onClick={() => CloseLightbox()}
      role="presentation"
    >
      <button
        className="lightbox__close-button"
        onClick={() => CloseLightbox()}
      >
        <Icon name="cross" />
      </button>
      <div className="lightbox__content">
        <Image
          filename={item.image}
          className={`lightbox__image ${
            item.title ? "lightbox__image--with-title" : ""
          }`}
        />
        {item.title && <div className="lightbox__title">{item.title}</div>}
      </div>
    </div>
  )
}

Lightbox.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  items: PropTypes.object,
}

export default Lightbox
