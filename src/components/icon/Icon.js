import React from "react"
import "./Icon.scss"
import GloomiciousCard from "../../icons/icon-gloomicious-card.svg"
import Gloomicious from "../../icons/icon-gloomicious.svg"
import Icon500px from "../../icons/icon-500px.svg"
import ArrowLeft from "../../icons/icon-arrow-left.svg"
import ArrowRight from "../../icons/icon-arrow-right.svg"
import Behance from "../../icons/icon-behance.svg"
import ChrevronLeft from "../../icons/icon-chevron-left.svg"
import ChrevronRight from "../../icons/icon-chevron-right.svg"
import Cross from "../../icons/icon-cross.svg"
import Instagram from "../../icons/icon-instagram.svg"
import Mail from "../../icons/icon-mail.svg"
import Moon from "../../icons/icon-moon.svg"
import Pinterest from "../../icons/icon-pinterest.svg"
import Sun from "../../icons/icon-sun.svg"
import Youtube from "../../icons/icon-youtube.svg"

export default function Icon({ name, className }) {
  const components = {
    "logo gloomicious": Gloomicious,
    "logo gloomicious card": GloomiciousCard,
    "500px": Icon500px,
    "arrow left": ArrowLeft,
    "arrow right": ArrowRight,
    "chevron left": ChrevronLeft,
    "chevron right": ChrevronRight,
    behance: Behance,
    cross: Cross,
    instagram: Instagram,
    mail: Mail,
    moon: Moon,
    pinterest: Pinterest,
    sun: Sun,
    youtube: Youtube,
  }
  const TagName = components[name]
  return (
    <div
      className={`icon${name.includes("circle") ? " icon--circle" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {TagName ? <TagName /> : null}
    </div>
  )
}
