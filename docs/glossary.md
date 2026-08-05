# Project Glossary

## Site identity

- **Site configuration** (`siteConfig`)
  The single typed source for the brand name, contact address, locale metadata, organization type, and optional social image.
  Constraints: replace every placeholder before launch; metadata and visible identity must agree.
  Related: `SeoHead`, `translations`.

- **Localized copy** (`translations`)
  Visible and metadata text keyed by a supported locale.
  Constraints: English and Swedish must retain the same data shape; translate intent rather than word order.
  Related: `Locale`, `HomeCopy`.

## Routing

- **Locale** (`Locale`)
  A supported language code that appears as the first URL segment.
  Constraints: currently `en` or `sv`; adding one requires configuration, copy, routes, alternates, and tests.
  Related: `supportedLocales`, `localePath`.

- **Language gateway** (`src/pages/index.astro`)
  The root route that selects a saved preference, then a supported browser language, then English.
  Constraints: it must retain crawlable language links and work when deployed below a GitHub repository base path.
  Related: `selectLocale`, `LanguageSwitcher`.

- **Base path** (`BASE_PATH`)
  The deployment prefix before application routes, usually `/` on Cloudflare and `/repository-name/` on GitHub project Pages.
  Constraints: internal URLs must be created with `withBase()` or `localePath()`.
  Related: `SITE_URL`, `import.meta.env.BASE_URL`.

## Design and media

- **Semantic token** (`src/styles/tokens.css`)
  A design value named for its role rather than a specific component.
  Constraints: rebrand through tokens first; component-local values should describe layout only.
  Related: `--color-*`, `--space-*`, `--text-*`.

- **Responsive image** (`ResponsiveImage.astro`)
  A local raster image transformed into multiple sizes and modern formats.
  Constraints: informative alt text is mandatory; decorative images use both `decorative` and `alt=""`.
  Related: `ImageMetadata`, `priority`.

- **Priority image** (`priority`)
  An image expected to determine Largest Contentful Paint.
  Constraints: normally only one per page; it loads eagerly with high fetch priority.
  Related: LCP, `ResponsiveImage`.

## Discovery

- **Canonical URL** (`rel="canonical"`)
  The preferred URL for the current language page.
  Constraints: self-reference the localized page and include the deployment base path.
  Related: `hreflang`, `SeoHead`.

- **Alternate language URL** (`hreflang`)
  A reciprocal link between equivalent localized pages.
  Constraints: each version lists itself, every equivalent locale, and the intentional `x-default` destination.
  Related: locale, canonical URL.

- **LLM discovery file** (`llms.txt`)
  A generated Markdown overview for tools that choose to support the informal proposal.
  Constraints: derive it from site sources; never treat it as a replacement for HTML, robots, or sitemaps.
  Related: `robots.txt`, sitemap.
