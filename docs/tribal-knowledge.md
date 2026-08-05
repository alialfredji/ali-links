# Tribal Knowledge

## Routing, discovery, and media

### Quick Commands

- `pnpm dev` — inspect language selection and layout locally.
- `SITE_URL=https://example.com BASE_PATH=/project/ pnpm build` — simulate GitHub project Pages.
- `pnpm validate` — run the complete handoff gate.

### Key Files

- `src/config/site.ts` — placeholders and entity identity used across metadata.
- `src/lib/i18n.ts` — the only place that should normalize locale and base-path URLs.
- `src/components/SeoHead.astro` — canonical, alternate, social, and structured metadata.
- `src/components/ResponsiveImage.astro` — required local raster-image behavior.
- `astro.config.mjs` — static output, locale routing, sitemap, site origin, and deployment base.

### Non-Obvious Patterns

- **Don't**: hard-code root-relative links such as `/sv/` — they fail on GitHub project Pages.
- **Do**: build internal URLs with `localePath()` or `withBase()` and test a non-root base.
- **Don't**: translate the visible heading while leaving title, description, alt text, or JSON-LD in English.
- **Do**: treat each localized route as a complete, independently understandable page.
- **Don't**: put normal photographs in `public/` — Astro cannot optimize them there.
- **Do**: import local assets and use the responsive image component with truthful `sizes`.
- **Don't**: use `priority` to make every above-the-fold image eager.
- **Do**: reserve it for the likely LCP candidate and keep all other media lazy.
- The root route needs JavaScript for automatic browser-language selection on static hosts, but it retains normal language links as its fallback.
- The sitemap lists routes; reciprocal language annotations live in page heads because future localized slugs may differ.

### See Also

- Related: `docs/images.md`, `docs/decisions/002-prefixed-locale-routing.md`
- Depends on: Astro `site` and `base` build configuration
