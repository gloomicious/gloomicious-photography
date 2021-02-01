import CMS from "netlify-cms-app"

import GeneralPagePreview from "./preview-templates/GeneralPagePreview"
import BlogPageTemplate from "./preview-templates/BlogPagePreview"
import NavbarPreview from "./preview-templates/NavbarPreview"
import FooterPreview from "./preview-templates/FooterPreview"

CMS.registerPreviewTemplate("index", GeneralPagePreview)
CMS.registerPreviewTemplate("explore", GeneralPagePreview)
CMS.registerPreviewTemplate("collections", GeneralPagePreview)
CMS.registerPreviewTemplate("journal", GeneralPagePreview)
CMS.registerPreviewTemplate("about", GeneralPagePreview)
CMS.registerPreviewTemplate("contact", GeneralPagePreview)
CMS.registerPreviewTemplate("imprint", GeneralPagePreview)
CMS.registerPreviewTemplate("privacy-policy", GeneralPagePreview)
CMS.registerPreviewTemplate("photo-collection", GeneralPagePreview)
CMS.registerPreviewTemplate("blog", BlogPageTemplate)
CMS.registerPreviewTemplate("navbar", NavbarPreview)
CMS.registerPreviewTemplate("footer", FooterPreview)
