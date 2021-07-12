import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
// import BlogPostPreview from "./preview-templates/BlogPostPreview";
// import IndexPagePreview from "./preview-templates/IndexPagePreview";
// import IndexNewPreview from "./preview-templates/IndexNewPreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

// CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
// CMS.registerPreviewTemplate("blog", BlogPostPreview);
// CMS.registerPreviewTemplate("New landing", IndexNewPreview);
