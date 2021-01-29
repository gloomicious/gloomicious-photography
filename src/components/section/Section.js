import React from "react"
import "./Section.scss"
import MarkdownContent from "./../markdown-content/MarkdownContent"
import BackgroundImage from "./../background-image/BackgroundImage"
import Gallery from "./../gallery/Gallery"
import Button from "./../button/Button"
import PageList from "../page-list/PageList"

export default function Section({
  title,
  subtitle,
  type,
  size,
  alignment,
  pageList,
  buttonLabel,
  buttonLink,
  text,
  image,
  gallery,
}) {
  function chooseContent(type) {
    switch (type) {
      case "title":
        return Title()
      case "text":
        return Text()
      case "title-text":
        return TitleText()
      case "title-subtitle-text":
        return TitleSubtitleText()
      case "title-text-image":
        return TitleTextImage()
      case "image":
        return Image()
      case "gallery":
        return ImageGallery()
      case "page-list":
        return PageListGallery()
      default:
        return Text()
    }
  }

  function Title() {
    return (
      <>
        {title && <h1 className="section__title">{title}</h1>}
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

  function Text() {
    return (
      <>
        {text && <MarkdownContent content={text} />}
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

  function TitleText() {
    return (
      <>
        {title && <h1 className="section__title">{title}</h1>}
        {text && <MarkdownContent content={text} />}
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

  function TitleSubtitleText() {
    return (
      <>
        {subtitle && <h5 className="section__subtitle">{subtitle}</h5>}
        {title && <h1 className="section__title">{title}</h1>}
        {text && <MarkdownContent content={text} />}
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

  function TitleTextImage() {
    return (
      <div className="section__row">
        <div className="section__col section__col--50">
          {title && <h1 className="section__title">{title}</h1>}
          {text && <MarkdownContent content={text} />}
          {buttonLabel && buttonLink && (
            <Button
              label={buttonLabel}
              link={buttonLink}
              className="section__button"
            />
          )}
        </div>
        <div className="section__col section__col--50 section--right">
          {image && <BackgroundImage filename={image.file} size={image.size} />}
        </div>
      </div>
    )
  }

  function Image() {
    return (
      <>
        {image && <BackgroundImage filename={image.file} size={image.size} />}
      </>
    )
  }

  function ImageGallery() {
    return (
      <Gallery
        items={gallery.photos}
        type={gallery.type}
        imageLabels={gallery.imageLabels}
      />
    )
  }

  function PageListGallery() {
    return <PageList pageType={pageList} />
  }

  return (
    <>
      {title && (
        <span
          id={title?.toString().toLowerCase().replaceAll(" ", "-")}
          className="section__anchor"
        ></span>
      )}
      <section
        className={`section${alignment ? ` section--${alignment}` : ""}${
          size ? ` section--${size}` : ""
        }`}
      >
        {size === "page-head" ? Title() : chooseContent(type)}
      </section>
    </>
  )
}
