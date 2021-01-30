import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import BackgroundImage from "../image-box/ImageBox"
import Image from "../image/Image"
import Lightbox from "../lightbox/Lightbox"

function GalleryItem({ item, size, imageLabels }) {
  const [lightboxOpened, setLightboxOpened] = useState(false)

  function formatDate(date) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    const dateComplete = new Date(date)
    const month = monthNames[dateComplete.getMonth()]
    const year = dateComplete.getFullYear()
    const day = dateComplete.getDate()
    const formattedDate = [day, month, year].join(" ")
    return formattedDate
  }

  function LinkToPage() {
    return (
      <Link
        to={`/${item.page}`}
        className={`gallery__item gallery__item--link${
          imageLabels.includes("below") ? " gallery__item--text" : ""
        }`}
      >
        {imageLabels && !imageLabels.includes("below") && (
          <div className={`gallery__caption gallery__caption--${imageLabels}`}>
            {item.title && <span className="gallery__title">{item.title}</span>}
          </div>
        )}
        {item.image && (
          <div className="gallery__image-wrapper">
            <BackgroundImage filename={item.image} className="gallery__image" />
          </div>
        )}
        {imageLabels && imageLabels.includes("below") && (
          <div className="gallery__description">
            {item.date && (
              <p className="gallery__description__date">
                {formatDate(item.date)}
              </p>
            )}
            {item.title && (
              <h3 className="gallery__description__title">{item.title}</h3>
            )}
          </div>
        )}
      </Link>
    )
  }

  function GalleryWithLightbox() {
    return (
      <div
        className="gallery__image-wrapper"
        onClick={() => setLightboxOpened(true)}
        role="presentation"
      >
        <Image filename={item.image} className="gallery__image" />
      </div>
    )
  }

  function StaticGallery() {
    return (
      <div className="gallery__item">
        {imageLabels && (
          <div className={`gallery__caption gallery__caption--${imageLabels}`}>
            {item.title && <span className="gallery__title">{item.title}</span>}
          </div>
        )}
        {item.image && (
          <div className="gallery__image-wrapper">
            <BackgroundImage filename={item.image} className="gallery__image" />
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      {lightboxOpened ? (
        <Lightbox
          open={lightboxOpened}
          setOpen={setLightboxOpened}
          item={item}
        />
      ) : null}
      {item.page
        ? LinkToPage()
        : size === "full-width"
        ? GalleryWithLightbox()
        : StaticGallery()}
    </>
  )
}

GalleryItem.propTypes = {
  item: PropTypes.object,
  size: PropTypes.string,
  imageLabels: PropTypes.string,
}

export default GalleryItem
