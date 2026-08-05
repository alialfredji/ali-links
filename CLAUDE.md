@AGENTS.md
@docs/glossary.md
@docs/tribal-knowledge.md

# Claude Code

Use `AGENTS.md` as the canonical project contract. Read the relevant decision record before changing routing, rendering, or image behavior.

## Working style

- State assumptions before changing architecture or adding dependencies.
- Prefer the smallest static Astro implementation that satisfies the request.
- Do not add React, Vue, Tailwind, a CMS, or an adapter without an explicit requirement.
- Keep changes within the requested feature; report unrelated issues separately.
- Reuse the typed locale and URL helpers rather than duplicating route strings.

## Verification

- Run the narrowest useful check while iterating.
- Run `pnpm validate` before declaring implementation complete.
- Inspect generated HTML when changing metadata, structured data, locale links, or base paths.
- Verify informative images have localized alt text and only the LCP candidate uses `priority`.

## Git

- Do not commit unless asked.
- Do not rewrite history or discard user changes.
- Summarize files changed and checks run in the final handoff.
