import CMS from "netlify-cms-app"

import FollowupPagePreview from "./preview-templates/FollowupPagePreview"
import NavbarPreview from "./preview-templates/NavbarPreview"
import FooterPreview from "./preview-templates/FooterPreview"

CMS.registerPreviewTemplate("index", FollowupPagePreview)
CMS.registerPreviewTemplate("explore", FollowupPagePreview)
CMS.registerPreviewTemplate("collections", FollowupPagePreview)
CMS.registerPreviewTemplate("journal", FollowupPagePreview)
CMS.registerPreviewTemplate("about", FollowupPagePreview)
CMS.registerPreviewTemplate("contact", FollowupPagePreview)
CMS.registerPreviewTemplate("imprint", FollowupPagePreview)
CMS.registerPreviewTemplate("privacy-policy", FollowupPagePreview)
CMS.registerPreviewTemplate("photo-collection", FollowupPagePreview)
CMS.registerPreviewTemplate("blog", FollowupPagePreview)
CMS.registerPreviewTemplate("navbar", NavbarPreview)
CMS.registerPreviewTemplate("footer", FooterPreview)
