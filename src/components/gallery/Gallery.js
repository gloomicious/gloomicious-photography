import React, { useState } from "react"
import "./Gallery.scss"
import GalleryItem from "./GalleryItem"

export default function Gallery({ items, type, filters, imageLabels }) {
  const [currentFilter, setCurrentFilter] = useState("all"),
    [animate, setAnimate] = useState(false)
  let filterAllLabel = ["all"],
    allFilters
  if (filters) allFilters = filterAllLabel.concat(filters)

  function changeItems(filter) {
    setAnimate(true)
    setTimeout(() => {
      setCurrentFilter(filter)
    }, 400);
    setTimeout(() => {
      setAnimate(false)
    }, 800);
  }

  function Filters() {
    return (
      <ul className="gallery__filters">
        {allFilters.map((filter, index) => (
          <li
            key={index}
            onClick={() => changeItems(filter)}
            className={`gallery__filters__item${
              currentFilter === filter ? " gallery__filters__item--active" : ""
            }`}
            role="presentation"
          >
            {filter}
          </li>
        ))}
      </ul>
    )
  }

  function FilteredGallery() {
    return (
      <div className={`gallery gallery--${type}`}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item.category === currentFilter || currentFilter === "all" ? (
              <GalleryItem
                item={item}
                size={type}
                imageLabels={imageLabels}
                key={item.title + index}
              />
            ) : null}
          </React.Fragment>
        ))}
      </div>
    )
  }

  function FullWidthGallery() {
    return (
      <div className={`gallery gallery--${type}`}>
        {items.map((item, index) => (
          <GalleryItem
            item={item}
            size={type}
            imageLabels={imageLabels}
            key={item.title + index}
          />
        ))}
      </div>
    )
  }

  function StaticGallery() {
    return (
      <div className={`gallery gallery--${type}`}>
        {items.map((item, index) => (
          <GalleryItem
            item={item}
            size={type}
            imageLabels={imageLabels}
            key={item.title + index}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="gallery__wrapper">
      {filters && filters.length > 1 && Filters()}
      <div
        className={`gallery__content${
          animate ? " gallery__content--animated" : ""
        }`}
      >
        {type === "full-width"
          ? FullWidthGallery()
          : filters
          ? FilteredGallery()
          : StaticGallery()}
      </div>
    </div>
  )
}
