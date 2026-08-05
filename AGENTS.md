# Astro Brand Starter

## Overview

A reusable bilingual Astro landing page for a business, product, or public source of truth. Keep it static, accessible, easy to rebrand, and understandable to crawlers without client-side rendering.

## Tech Stack

- Astro 7 with strict TypeScript and static output
- Node.js 24 LTS and pnpm 10
- Plain Astro components and layered CSS; no UI framework
- Vitest for pure helpers; Astro Check for templates and types
- Cloudflare Pages or GitHub Pages deployment

## Commands

| Command             | Purpose                       |
| ------------------- | ----------------------------- |
| `pnpm dev`          | Start the local site          |
| `pnpm check`        | Validate Astro and TypeScript |
| `pnpm test`         | Run unit tests once           |
| `pnpm build`        | Generate `dist/`              |
| `pnpm format:check` | Check formatting              |
| `pnpm validate`     | Run every required local gate |

## Project Structure

- `src/config/site.ts` — project identity and cross-language settings
- `src/i18n/` — typed visible copy
- `src/pages/` — root language gateway and explicit locale routes
- `src/components/` — page composition, SEO, locale, and image primitives
- `src/styles/tokens.css` — primary rebranding surface
- `docs/decisions/` — reasons behind constraints that are not obvious from code

## Code Conventions

- Keep pages server-rendered to static HTML. Add client JavaScript only for browser-only behavior.
- Change semantic tokens before editing component color or spacing values.
- Keep English and Swedish entries structurally identical and translated by meaning.
- Use `localePath()` and `withBase()` for internal URLs so GitHub project pages keep working.
- Use `ResponsiveImage.astro` for local raster content; do not move images to `public/` to bypass optimization.
- Structured data must describe visible content and must not be added for speculative rich results.

## Key Terms

- **locale** (`Locale`): a supported language route; currently `en` or `sv`.
- **language gateway** (`src/pages/index.astro`): chooses a saved or browser locale, then falls back to English.
- **site identity** (`siteConfig`): name, contact, locale metadata, and social-image configuration.
- **semantic token** (`--color-*`, `--space-*`): intent-based design values shared by components.
- **source line** (`.source-line`): the hero's single visual signature; removable without changing content.
- **priority image** (`priority`): the one likely LCP image; all other images remain lazy.

## Architecture

The root gateway is the only browser-dependent route. Localized pages render complete HTML from typed dictionaries. `BaseLayout` owns the document shell, `SeoHead` owns discovery metadata, and `HomePage` owns composition. Static endpoints derive robots and LLM discovery files from the same configuration. Hosting-specific base paths must enter through Astro configuration, never hard-coded URLs.

## Things That Will Bite You

- Local Node 25 is unsupported; use the pinned Node 24 runtime.
- GitHub project Pages requires `BASE_PATH=/repository-name/`; direct `/en/` strings will break there.
- Updating visible copy without its metadata or JSON-LD creates contradictory search signals.
- The language selector currently maps equivalent home pages; new routes need explicit reciprocal mappings.
- `public/` images are not transformed or given responsive variants by Astro.
- `llms.txt` is a convenience proposal, not an SEO ranking mechanism.

## Testing

Run `pnpm validate` before handing off. Any route or locale change must include tests for base-path URLs, a production build, and inspection of generated canonicals and alternates. Image changes must satisfy `docs/images.md`.

## Git Workflow

Keep commits scoped and do not commit generated `dist/`, `.astro/`, or dependency directories. CI must pass before GitHub Pages deploys from `main`.
