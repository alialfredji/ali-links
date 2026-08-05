# Prefixed Locale Routing

**Status**: accepted  
**Date**: 2026-08-05  
**Decision Makers**: project owner

## Y-Statement

In the context of **a bilingual English and Swedish site**,  
facing **clear indexing and predictable expansion**,  
we decided **to prefix every localized page with its language**,  
to achieve **symmetrical URLs and explicit language ownership**,  
accepting **a small browser-side gateway at the root on static hosts**.

## Options Considered

| Option                            | Pros                     | Cons                           |
| --------------------------------- | ------------------------ | ------------------------------ |
| `/en/` and `/sv/`                 | Symmetrical and explicit | Root needs a gateway           |
| English at `/`, Swedish at `/sv/` | Short default URL        | Asymmetrical content structure |
| Request-time language redirect    | Transparent first visit  | Requires edge/server runtime   |

## Decision

Keep complete localized pages at `/en/` and `/sv/`. The root respects a saved choice, then browser language, then English. Every localized page keeps a visible selector.

## Consequences

- New locales require explicit routes and content.
- New pages need reciprocal language mappings.
- Static hosting remains sufficient.
