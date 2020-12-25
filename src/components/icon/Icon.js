import React from "react"
import IconGloomiciousTaglineTravelGuides from "../../icons/icon-gloomicious-tagline-travel-guides.svg"
import IconGloomiciousTagline from "../../icons/icon-gloomicious-tagline.svg"
import IconGloomicious from "../../icons/icon-gloomicious.svg"
import IconEurope from "../../icons/icon-europe.svg"
import IconAsia from "../../icons/icon-asia.svg"
import IconNorthAmerica from "../../icons/icon-north-america.svg"
import IconSouthAmerica from "../../icons/icon-south-america.svg"
import IconAfrica from "../../icons/icon-africa.svg"
import IconAustralia from "../../icons/icon-australia.svg"
import IconBigIsland from "../../icons/icon-big-island.svg"
import IconGermany from "../../icons/icon-germany.svg"
import IconJapan from "../../icons/icon-japan.svg"
import IconKauai from "../../icons/icon-kauai.svg"
import IconMaui from "../../icons/icon-maui.svg"
import IconNorway from "../../icons/icon-norway.svg"
import IconOahu from "../../icons/icon-oahu.svg"
import IconSwitzerland from "../../icons/icon-switzerland.svg"
import Icon500px from "../../icons/icon-500px.svg"
import IconArrowLeft from "../../icons/icon-arrow-left.svg"
import IconArrowRight from "../../icons/icon-arrow-right.svg"
import IconBehance from "../../icons/icon-behance.svg"
import IconBolt from "../../icons/icon-bolt.svg"
import IconBook1 from "../../icons/icon-book-1.svg"
import IconBook2 from "../../icons/icon-book-2.svg"
import IconBrush from "../../icons/icon-brush.svg"
import IconBulb1 from "../../icons/icon-bulb-1.svg"
import IconBulb2 from "../../icons/icon-bulb-2.svg"
import IconCamera from "../../icons/icon-camera.svg"
import IconCar1 from "../../icons/icon-car-1.svg"
import IconCar2 from "../../icons/icon-car-2.svg"
import IconChrevronLeft from "../../icons/icon-chevron-left.svg"
import IconChrevronRight from "../../icons/icon-chevron-right.svg"
import IconCity from "../../icons/icon-city.svg"
import IconCompass1 from "../../icons/icon-compass-1.svg"
import IconCompass2 from "../../icons/icon-compass-2.svg"
import IconCross from "../../icons/icon-cross.svg"
import IconDirection1 from "../../icons/icon-direction-1.svg"
import IconDirection2 from "../../icons/icon-direction-2.svg"
import IconDrone from "../../icons/icon-drone.svg"
import IconDuck1 from "../../icons/icon-duck-1.svg"
import IconDuck2 from "../../icons/icon-duck-2.svg"
import IconGlobe from "../../icons/icon-globe.svg"
import IconInstagram from "../../icons/icon-instagram.svg"
import IconIsland from "../../icons/icon-island.svg"
import IconList from "../../icons/icon-list.svg"
import IconLocationMarker1 from "../../icons/icon-location-marker-1.svg"
import IconLocationMarker2 from "../../icons/icon-location-marker-2.svg"
import IconLocationMarker3 from "../../icons/icon-location-marker-3.svg"
import IconMail from "../../icons/icon-mail.svg"
import IconMap1 from "../../icons/icon-map-1.svg"
import IconMap2 from "../../icons/icon-map-2.svg"
import IconMoon from "../../icons/icon-moon.svg"
import IconMountains1 from "../../icons/icon-mountains-1.svg"
import IconMountains2 from "../../icons/icon-mountains-2.svg"
import IconPalmTree from "../../icons/icon-palm-tree.svg"
import IconPen from "../../icons/icon-pen.svg"
import IconPinterest from "../../icons/icon-pinterest.svg"
import IconPlane from "../../icons/icon-plane.svg"
import IconSeaStars from "../../icons/icon-sea-stars.svg"
import IconSun from "../../icons/icon-sun.svg"
import IconSunset1 from "../../icons/icon-sunset-1.svg"
import IconSunset2 from "../../icons/icon-sunset-2.svg"
import IconTrees1 from "../../icons/icon-trees-1.svg"
import IconTrees2 from "../../icons/icon-trees-2.svg"
import IconWave from "../../icons/icon-wave.svg"
import IconYoutube from "../../icons/icon-youtube.svg"

export default function Icon({ name, className }) {
  const components = {
    "Logo Gloomicious": IconGloomicious,
    "Logo Gloomicious Tagline": IconGloomiciousTagline,
    "Logo Gloomicious Tagline Travel Guides": IconGloomiciousTaglineTravelGuides,
    Europe: IconEurope,
    Asia: IconAsia,
    "North America": IconNorthAmerica,
    "South America": IconSouthAmerica,
    Africa: IconAfrica,
    Australia: IconAustralia,
    "Big Island": IconBigIsland,
    Germany: IconGermany,
    Japan: IconJapan,
    Kauai: IconKauai,
    Maui: IconMaui,
    Norway: IconNorway,
    Oahu: IconOahu,
    Switzerland: IconSwitzerland,
    "500px": Icon500px,
    "Arrow Left": IconArrowLeft,
    "Arrow Right": IconArrowRight,
    "Chevron Left": IconChrevronLeft,
    "Chevron Right": IconChrevronRight,
    Behance: IconBehance,
    Bolt: IconBolt,
    "Book 1": IconBook1,
    "Book 2": IconBook2,
    Brush: IconBrush,
    "Bulb 1": IconBulb1,
    "Bulb 2": IconBulb2,
    Camera: IconCamera,
    "Car 1": IconCar1,
    "Car 2": IconCar2,
    City: IconCity,
    "Compass 1": IconCompass1,
    "Compass 2": IconCompass2,
    Cross: IconCross,
    "Direction 1": IconDirection1,
    "Direction 2": IconDirection2,
    Drone: IconDrone,
    "Duck 1": IconDuck1,
    "Duck 2": IconDuck2,
    Globe: IconGlobe,
    Instagram: IconInstagram,
    Island: IconIsland,
    List: IconList,
    "Location Marker 1": IconLocationMarker1,
    "Location Marker 2": IconLocationMarker2,
    "Location Marker 3": IconLocationMarker3,
    Mail: IconMail,
    "Map 1": IconMap1,
    "Map 2": IconMap2,
    Moon: IconMoon,
    "Mountains 1": IconMountains1,
    "Mountains 2": IconMountains2,
    "Palm Tree": IconPalmTree,
    Pen: IconPen,
    Pinterest: IconPinterest,
    Plane: IconPlane,
    "Sea Stars": IconSeaStars,
    Sun: IconSun,
    "Sunset 1": IconSunset1,
    "Sunset 2": IconSunset2,
    "Trees 1": IconTrees1,
    "Trees 2": IconTrees2,
    Wave: IconWave,
    YouTube: IconYoutube,
  }
  const TagName = components[name]
  return <>{TagName ? <TagName className={className} /> : null}</>
}
