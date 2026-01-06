# MicroCanvas Framework (MCF) — Innovation Maturity Framework and Documentation System

The MicroCanvas Framework (MCF) is a structured innovation framework designed to
enable **repeatable, evidence-based decision-making across the full innovation
lifecycle**, using innovation maturity as its primary organizing and governance
principle. This repository hosts the canonical documentation site for MCF, implemented
with Docusaurus and deployed via Cloudflare Pages.
## What is the MicroCanvas Framework?

MCF is a phase-based methodology for organizations that need consistent, evidence-backed
innovation outcomes. It targets startups, corporate innovation teams, and public-sector
programs that struggle with unstructured ideation and low repeatability.

MCF provides:
- Structured phases with clear entry/exit criteria.
- Decision artifacts that encode assumptions and evidence.
- An evidence-driven progression model aligned to innovation maturity.

This repository is the documentation and reference implementation for the framework. It
is not a SaaS product and not a collection of ad hoc templates.

## Conceptual Architecture

MCF is organized around a phased progression from early discovery to sustained
improvement, with maturity gates that raise the standard of evidence and decision rigor.
Unlike Lean Startup, Design Thinking, or Agile, MCF is not a substitute for delivery
methods; it is a decision architecture that governs how innovation work is structured,
validated, and advanced across phases.

Innovation maturity is the organizing principle: work advances only when evidence and
decision artifacts meet phase-appropriate criteria.

## Repository Structure

- `docs` — Canonical framework documentation.
- `blog` — Essays, updates, and interpretive content.
- `src` — Docusaurus React components.
- `static` — Shared assets (images, icons).
- `build` — Generated output (not committed).

Localization uses Docusaurus i18n with `en` as the default locale and `es` as an
additional locale. Locale content is stored in the standard Docusaurus structure under
`i18n/` when used.

## Development and Build

Node 18+ recommended.

Install dependencies:
```bash
npm ci
```

Local development:
```bash
npm run start
```

Production build:
```bash
npm run build
```

Local preview of the production build:
```bash
npm run serve
```

Build outputs are intentionally excluded from git. Deployment is handled by Cloudflare
Pages from the master branch source tree. GitHub Pages deployment is intentionally
disabled. Local preview uses `npm run serve`.

### Cloudflare Pages
Build command: `npm run build`  
Output directory: `build`  
Production branch: `master`  
Node version: 22.x (Cloudflare Pages runtime)

### Acceptance Criteria (before pushing to origin/master)
- Working tree clean (`git status`).
- `npm ci` succeeds (allow ~5 minutes).
- `npm run build` succeeds for `en` and `es`.
- `npm run serve -- --host 127.0.0.1 --port 3100` starts on a free port.
- Manual smoke test (Luis):
  - `/`
  - `/docs/introduction`
  - `/es/`
  - any `/es/docs/...` route
  - language switcher works
  - no console errors
- Cloudflare build log confirms:
  - correct commit SHA
  - `npm ci` succeeds
  - `npm run build` succeeds for both locales
  - “Success: Your site was deployed!”

## Versioning and Roadmap Alignment

Current version: 2.1.x  
Active work toward: 2.2.0

Version meaning:
- 2.1 — Current stable framework.
- 2.2 — Methodological refinements (roles, evidence quality, and rigor).

## License and Governance

MCF documentation is licensed under Creative Commons BY-ND.CC 4.0.

Permitted:
- Redistribution with attribution.

Not permitted:
- Derivative works for commercial redistribution or forked variants.

**Authorship:** Luis A. Santiago Arias.
**Stewardship:** Maintained through this repository with contributions reviewed and curated by the author.
