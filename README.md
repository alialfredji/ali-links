# Astro Brand Starter

A minimal, bilingual Astro foundation for a business, product, or public source of truth. It ships static HTML, a token-driven design system, strong image defaults, and current SEO/AEO fundamentals without a client framework.

## Requirements

- Node.js 24 LTS
- pnpm 10

## Start

```sh
pnpm install
pnpm dev
```

Run the complete local quality gate before pushing:

```sh
pnpm validate
```

## Make it yours

1. Replace the identity, email, and optional social image in `src/config/site.ts`.
2. Replace English and Swedish copy in `src/i18n/translations.ts`.
3. Change colors, type, spacing, and shape in `src/styles/tokens.css`.
4. Change page composition in `src/components/HomePage.astro`.
5. Replace `public/favicon.svg` and add a 1200×630 social image before launch.
6. Set the production `SITE_URL` and, for project-based GitHub Pages, `BASE_PATH`.

Search the repository for `example.com`, `Your Brand`, and `hello@example.com` before launch.

## Languages

The home page exists at `/en/` and `/sv/`. The root page uses a previously selected language, then the browser language, and finally English. The visible language selector always wins and stores the next preference locally.

Every translated page must have:

- a real translation rather than silent English fallback content;
- a self-referencing canonical URL;
- reciprocal `hreflang` links;
- localized titles, descriptions, image text, and structured data.

## Images

Keep transformable images under `src/assets/` and render them with `ResponsiveImage.astro`. It generates AVIF and WebP sources, responsive widths, lazy loading, and required alt-text validation. Use `priority` only for the single likely LCP image.

Keep files under `public/` only when they must be copied without processing, such as favicons. Remote images must be explicitly allowlisted in `astro.config.mjs` and given trusted dimensions before use.

See [docs/images.md](docs/images.md) for the complete image contract.

## SEO and AI discovery

- Static, textual HTML is the default.
- `SeoHead.astro` owns canonical, alternate, Open Graph, Twitter, and JSON-LD metadata.
- `robots.txt` allows all crawlers and advertises the sitemap.
- `llms.txt` is generated from the same configuration and copy as the site.
- Structured data must match visible page content; add schema types only when the page genuinely represents them.

## Deployment

### Cloudflare Pages

- Build command: `pnpm build`
- Output directory: `dist`
- Node version: `24`
- Environment: `SITE_URL=https://your-domain.example`, `BASE_PATH=/`

### GitHub Pages

The included Pages workflow publishes `dist/` after changes land on `main` and builds canonical URLs for `https://alfredji.com`.

One-time repository and DNS setup:

1. In **Settings → Pages**, choose **GitHub Actions** as the source and set the custom domain to `alfredji.com`.
2. At the DNS provider, point the apex domain to GitHub Pages with `A` records for `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`.
3. Add a `www` `CNAME` record pointing to `alialfredji.github.io` so GitHub can redirect `www.alfredji.com` to the apex domain.
4. After DNS propagation, enable **Enforce HTTPS** in the repository's Pages settings.

## Project commands

| Command         | Purpose                         |
| --------------- | ------------------------------- |
| `pnpm dev`      | Start local development         |
| `pnpm check`    | Type-check Astro and TypeScript |
| `pnpm test`     | Run unit tests                  |
| `pnpm build`    | Build production output         |
| `pnpm format`   | Format supported files          |
| `pnpm validate` | Run all required local checks   |
