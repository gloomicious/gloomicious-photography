import React from "react"
import PropTypes from "prop-types"
import "./Section.scss"
import MarkdownContent from "../markdown-content/MarkdownContent"
import Image from "../image/Image"
import ImageBox from "../image-box/ImageBox"
import Gallery from "../gallery/Gallery"
import Button from "../button/Button"
import PageList from "../page-list/PageList"

function Section({
  title,
  subtitle,
  type,
  size,
  alignment,
  pageListType,
  buttonLabel,
  buttonLink,
  text,
  image,
  gallery,
}) {
  function chooseContent() {
    switch (true) {
      case size === "page-head":
        return RenderTitle()
      case type === "title":
      case size === "full-page":
        return (
          <>
            {RenderTitle()}
            {RenderButton()}
          </>
        )
      case type === "text":
        return (
          <>
            {RenderText()}
            {RenderButton()}
          </>
        )
      case type === "title-text":
        return (
          <>
            {RenderTitle()}
            {RenderText()}
            {RenderButton()}
          </>
        )
      case type === "title-subtitle-text":
        return (
          <>
            {RenderTitle()}
            {RenderSubtitle()}
            {RenderText()}
            {RenderButton()}
          </>
        )
      case type === "subtitle-title-text":
        return (
          <>
            {RenderSubtitle()}
            {RenderTitle()}
            {RenderText()}
            {RenderButton()}
          </>
        )
      case type === "title-text-image":
        return (
          <div className="section__row">
            <div className="section__col section__col--50 section--left">
              {RenderTitle()}
              {RenderText()}
              {RenderButton()}
            </div>
            <div className="section__col section__col--50 section--right">
              {RenderImage()}
            </div>
          </div>
        )
      case type === "title-image-text":
        return (
          <div className="section__row">
            <div className="section__col section__col--50 section--left">
              {RenderImage()}
            </div>
            <div className="section__col section__col--50 section--right">
              {RenderTitle()}
              {RenderText()}
              {RenderButton()}
            </div>
          </div>
        )
      case type === "image":
        return RenderImage()
      case type === "gallery":
        return (
          <>
            {gallery && <Gallery items={gallery.photos} type={gallery.type} />}
          </>
        )
      case type === "page-list":
        return <>{pageListType && <PageList pageType={pageListType} />}</>
      default:
        return
    }
  }

  function RenderTitle() {
    return (
      <>
        {title && (
          <>
            <h1 className="section__title">{title}</h1>
          </>
        )}
      </>
    )
  }

  function RenderSubtitle() {
    return <>{subtitle && <h5 className="section__subtitle">{subtitle}</h5>}</>
  }

  function RenderText() {
    return <>{text && <MarkdownContent content={text} />}</>
  }

  function RenderButton() {
    return (
      <>
        {buttonLabel && buttonLink && (
          <Button
            label={buttonLabel}
            link={buttonLink}
            className="section__button"
          />
        )}
      </>
    )
  }

  function RenderImage() {
    return (
      <>
        {image && image.size === "auto" ? (
          <Image filename={image.file} size={image.size} />
        ) : (
          <ImageBox filename={image.file} size={image.size} />
        )}
      </>
    )
  }

  return (
    <>
      {title && (
        <span
          id={title.toLowerCase().replaceAll(" ", "-")}
          className="section__anchor"
        ></span>
      )}
      <section
        className={`section${alignment ? ` section--${alignment}` : ""}${
          size
            ? type === "title-text-image"
              ? ` section--wide`
              : ` section--${size}`
            : ""
        }${type === "empty" ? " section--empty" : ""}`}
      >
        {type && chooseContent()}
      </section>
    </>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  alignment: PropTypes.string,
  pageList: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonLink: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.object,
  gallery: PropTypes.object,
}

export default Section
