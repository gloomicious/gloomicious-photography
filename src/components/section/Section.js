import React from "react"
import PropTypes from "prop-types"
import "./Section.scss"
import MarkdownContent from "./../markdown-content/MarkdownContent"
import BackgroundImage from "../image-box/ImageBox"
import Gallery from "./../gallery/Gallery"
import Button from "./../button/Button"
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
        return Title()
      case type === "title":
      case size === "full-page":
        return (
          <>
            {Title()}
            {RenderButton()}
          </>
        )
      case type === "text":
        return (
          <>
            {Text()}
            {RenderButton()}
          </>
        )
      case type === "title-text":
        return (
          <>
            {Title()}
            {Text()}
            {RenderButton()}
          </>
        )
      case type === "title-subtitle-text":
        return (
          <>
            {Title()}
            {Subtitle()}
            {Text()}
            {RenderButton()}
          </>
        )
      case type === "subtitle-title-text":
        return (
          <>
            {Subtitle()}
            {Title()}
            {Text()}
            {RenderButton()}
          </>
        )
      case type === "title-text-image":
        return (
          <div className="section__row">
            <div className="section__col section__col--50 section--left">
              {Title()}
              {Text()}
              {RenderButton()}
            </div>
            <div className="section__col section__col--50 section--right">
              {Image()}
            </div>
          </div>
        )
      case type === "title-image-text":
        return (
          <div className="section__row">
            <div className="section__col section__col--50 section--left">
              {Image()}
            </div>
            <div className="section__col section__col--50 section--right">
              {Title()}
              {Text()}
              {RenderButton()}
            </div>
          </div>
        )
      case type === "image":
        return Image()
      case type === "gallery":
        return (
          <>
            {gallery && (
              <Gallery
                items={gallery.photos}
                type={gallery.type}
                imageLabels={gallery.imageLabels}
              />
            )}
          </>
        )
      case type === "page-list":
        return <>{pageListType && <PageList pageType={pageListType} />}</>
      default:
        return Text()
    }
  }

  function Title() {
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

  function Subtitle() {
    return <>{subtitle && <h5 className="section__subtitle">{subtitle}</h5>}</>
  }

  function Text() {
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

  function Image() {
    return (
      <>
        {image && <BackgroundImage filename={image.file} size={image.size} />}
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
          size ? ` section--${size}` : ""
        }`}
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
