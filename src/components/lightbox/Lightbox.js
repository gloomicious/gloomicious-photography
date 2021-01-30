import React, { useState } from "react"
import PropTypes from "prop-types"
import "./Lightbox.scss"
import { ThemeContext } from "../../contexts/ThemeContext"
import Image from "../image/Image"
import Icon from "../icon/Icon"

function Lightbox({ open, setOpen, item }) {
  const theme = React.useContext(ThemeContext)
  const [parentVisible, setParentVisible] = useState(true)
  const [imageVisible, setImageVisible] = useState(false)
  const [textVisible, setTextVisible] = useState(false)

  function FadeOutLightbox() {
    setParentVisible(false)
    setTimeout(() => setOpen(!open), 1000)
  }

  if (parentVisible) {
    setTimeout(() => setImageVisible(true), 500)
    setTimeout(() => setTextVisible(true), 1200)
  }

  return (
    <div
      className={`lightbox ${
        parentVisible ? "lightbox--visible" : "lightbox--hidden"
      } ${theme.name ? theme.name : ""}`}
      onClick={() => FadeOutLightbox()}
      role="presentation"
    >
      <button
        className="lightbox__close-button"
        onClick={() => FadeOutLightbox()}
      >
        <Icon name="cross" />
      </button>
      <div className="lightbox__content">
        <Image
          filename={item.image}
          className={`lightbox__image ${
            item.title ? "lightbox__image--with-title" : ""
          }
          ${
            imageVisible
              ? "lightbox__image--visible"
              : "lightbox__image--hidden"
          }`}
        />
        {item.title && (
          <div
            className={`lightbox__title ${
              textVisible
                ? "lightbox__title--visible"
                : "lightbox__title--hidden"
            }`}
          >
            {item.title}
          </div>
        )}
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
