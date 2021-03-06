import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import ImageBox from "../image-box/ImageBox"
import Image from "../image/Image"
import Lightbox from "../lightbox/Lightbox"
import "./Gallery.scss"

function Gallery({ items, type, filters }) {
  const [currentFilter, setCurrentFilter] = useState("all"),
    [currentLightbox, setCurrentLightbox] = useState(""),
    [lightboxOpened, setLightboxOpened] = useState(false)
  let filterAllLabel = ["all"],
    allFilters
  if (filters) allFilters = filterAllLabel.concat(filters)

  function FormatDate(date) {
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

  function RenderFilters() {
    return (
      <div className="gallery__filters">
        {allFilters.map(
          (filter, index) =>
            filter !== null && (
              <span
                key={index}
                onClick={() => setCurrentFilter(filter)}
                className={`gallery__filters__filter${
                  currentFilter === filter
                    ? " gallery__filters__filter--active"
                    : ""
                }`}
                role="presentation"
              >
                {filter}
              </span>
            )
        )}
      </div>
    )
  }

  function RenderItemWithLink(item) {
    return (
      <Link to={`/${item.page}`} className="gallery__item">
        <ImageBox filename={item.image} className="gallery__item__image">
          {type === "label" ? (
            <>
              {item.title && (
                <span className="gallery__item__label">{item.title}</span>
              )}
            </>
          ) : null}
        </ImageBox>
        {item.date && (
          <div className="gallery__item__caption">
            {item.date && (
              <p className="gallery__item__caption__date">
                {FormatDate(item.date)}
              </p>
            )}
            {item.title && (
              <h3 className="gallery__item__caption__title">{item.title}</h3>
            )}
          </div>
        )}
      </Link>
    )
  }

  function RenderItemWithLightbox(item) {
    return (
      <div
        className="gallery__item"
        onClick={() => RenderLightbox(item)}
        role="presentation"
      >
        <Image filename={item.image} className="gallery__item__image" />
      </div>
    )
  }

  function RenderGallery() {
    return (
      <>
        {items?.map((item, index) => (
          <React.Fragment key={index}>
            {!filters
              ? item.page
                ? RenderItemWithLink(item)
                : RenderItemWithLightbox(item)
              : item.category === currentFilter || currentFilter === "all"
              ? RenderItemWithLink(item)
              : null}
          </React.Fragment>
        ))}
      </>
    )
  }

  function RenderLightbox(item) {
    if (item) {
      setLightboxOpened(true)
      setCurrentLightbox(<Lightbox setOpen={setLightboxOpened} item={item} />)
    }
  }

  return (
    <>
      {lightboxOpened && currentLightbox}
      <div className={`gallery gallery--${type}`}>
        {filters && filters.length > 1 && RenderFilters()}
        {RenderGallery()}
      </div>
    </>
  )
}

Gallery.propTypes = {
  items: PropTypes.array,
  type: PropTypes.string,
  filters: PropTypes.array,
}

export default Gallery
