import React from "react"
import IconGloomiciousTaglineTravelGuides from "../../icons/icon-gloomicious-tagline-travel-guides.svg"
import IconGloomiciousTaglinePhotography from "../../icons/icon-gloomicious-tagline-photography.svg"
import IconGloomicious from "../../icons/icon-gloomicious.svg"
import Icon500px from "../../icons/icon-500px.svg"
import IconArrowLeft from "../../icons/icon-arrow-left.svg"
import IconArrowRight from "../../icons/icon-arrow-right.svg"
import IconBehance from "../../icons/icon-behance.svg"
import IconChrevronLeft from "../../icons/icon-chevron-left.svg"
import IconChrevronRight from "../../icons/icon-chevron-right.svg"
import IconCross from "../../icons/icon-cross.svg"
import IconInstagram from "../../icons/icon-instagram.svg"
import IconMail from "../../icons/icon-mail.svg"
import IconMoon from "../../icons/icon-moon.svg"
import IconPinterest from "../../icons/icon-pinterest.svg"
import IconSun from "../../icons/icon-sun.svg"
import IconYoutube from "../../icons/icon-youtube.svg"

export default function Icon({ name, className }) {
  const components = {
    "Logo Gloomicious": IconGloomicious,
    "Logo Gloomicious Tagline Photography": IconGloomiciousTaglinePhotography,
    "Logo Gloomicious Tagline Travel Guides": IconGloomiciousTaglineTravelGuides,
    "500px": Icon500px,
    "Arrow Left": IconArrowLeft,
    "Arrow Right": IconArrowRight,
    "Chevron Left": IconChrevronLeft,
    "Chevron Right": IconChrevronRight,
    Behance: IconBehance,
    Cross: IconCross,
    Instagram: IconInstagram,
    Mail: IconMail,
    Moon: IconMoon,
    Pinterest: IconPinterest,
    Sun: IconSun,
    YouTube: IconYoutube,
  }
  const TagName = components[name]
  return <>{TagName ? <TagName className={className} /> : null}</>
}
