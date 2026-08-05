# Image Contract

Images are content and performance dependencies. Every image must have an owner, purpose, and deliberate loading strategy.

## Storage

- Put local photographs and illustrations in `src/assets/images/` so Astro can inspect and transform them.
- Put favicons, verification files, and intentionally unprocessed downloads in `public/`.
- Do not commit an original merely because it might be useful later.
- Keep licensing or attribution next to the content that uses the asset.

## Rendering

Use `src/components/ResponsiveImage.astro` for local raster images. It requires:

- imported `ImageMetadata` rather than a string path;
- localized `alt` text for informative images;
- `alt=""` plus `decorative` for decorative images;
- a truthful `sizes` value based on layout;
- `priority` only for the one image most likely to determine LCP.

The default widths are 480, 768, 1024, and 1440 pixels. Change them when the layout has materially different breakpoints rather than generating unused variants.

## Art direction and remote media

Use Astro's `Picture` component directly when mobile and desktop require different crops. Remote images need an explicit host or URL-pattern allowlist in `astro.config.mjs`; provide known dimensions or enable dimension inference only for a trusted source.

Never use CSS background images for meaningful content. They lack alternative text, responsive source selection, and clear loading priority.

## Social images

Provide a 1200×630 raster image and set `socialImage` in `src/config/site.ts`. The image must remain legible when cropped and should not rely on text smaller than typical mobile preview sizes.

## Launch checks

- No informative image has empty or duplicated alt text.
- Decorative images are ignored by assistive technology.
- Width and height prevent layout shift.
- Only the LCP candidate is eager and high priority.
- Generated output contains AVIF/WebP alternatives and useful fallback formats.
- Captions, credits, and structured-data image references match the visible asset.
