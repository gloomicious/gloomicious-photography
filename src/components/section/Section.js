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
  content,
  image,
  gallery,
}) {
  function chooseContent() {
    switch (true) {
      case type === "2-columns" && image != null:
        return (
          <div className="section__row">
            <div className="section__col section__col--50 section--left">
              {subtitle && <h5 className="section__subtitle">{subtitle}</h5>}
              {title && <h1 className="section__title">{title}</h1>}
              {content && <MarkdownContent content={content} />}
              {buttonLabel && buttonLink && (
                <Button
                  label={buttonLabel}
                  link={buttonLink}
                  className="section__button"
                />
              )}
            </div>
            <div className="section__col section__col--50 section--right">
              {image &&
                (image.size === "auto" ? (
                  <Image filename={image.file} size={image.size} />
                ) : (
                  <ImageBox filename={image.file} size={image.size} />
                ))}
            </div>
          </div>
        )
      case gallery != null:
        return <Gallery items={gallery.photos} type={gallery.type} />
      case pageListType != null:
        return <PageList pageType={pageListType} />
      default:
        return (
          <>
            {subtitle && <h5 className="section__subtitle">{subtitle}</h5>}
            {title && <h1 className="section__title">{title}</h1>}
            {content && <MarkdownContent content={content} />}
            {image &&
              (image.size === "auto" ? (
                <Image filename={image.file} size={image.size} />
              ) : (
                <ImageBox filename={image.file} size={image.size} />
              ))}
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
          size !== "narrow"
            ? type === "2-columns"
              ? ` section--wide`
              : ` section--${size}`
            : ""
        }${type === "empty" ? " section--empty" : ""}`}
      >
        {chooseContent()}
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
  pageListType: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonLink: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.object,
  gallery: PropTypes.object,
}

export default Section
