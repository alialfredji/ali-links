# Static-First Astro

**Status**: accepted  
**Date**: 2026-08-05  
**Decision Makers**: project owner

## Y-Statement

In the context of **a reusable public landing page**,  
facing **performance, portability, and discovery requirements**,  
we decided **to prerender complete HTML with Astro and add no UI framework**,  
to achieve **fast deployment on Cloudflare or GitHub Pages**,  
accepting **that runtime features require a later explicit architecture change**.

## Options Considered

| Option                  | Pros                                      | Cons                                        |
| ----------------------- | ----------------------------------------- | ------------------------------------------- |
| Static Astro            | Minimal JavaScript, portable, inexpensive | No request-time personalization             |
| Server-rendered adapter | Runtime behavior and dynamic data         | Hosting and operational complexity          |
| Client SPA              | Familiar app model                        | Poor fit for a small public source of truth |

## Decision

Use Astro static output. Browser JavaScript is allowed only for behavior that cannot exist at build time, currently language preference detection.

## Consequences

- Both target hosts can serve the same `dist/` output.
- Content and metadata are crawlable without client rendering.
- Forms, live CMS data, or authentication require a new decision record.
