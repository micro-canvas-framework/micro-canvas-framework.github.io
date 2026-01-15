# AGENTS (authoritative spec + memory)

This file is the single source of truth for contracts, workflow rules, and
project memory. If a contract is missing here, it is not authoritative.
CONTEXT.md is retained as a pointer only.

## Project Snapshot (authoritative)
- Repo: micro-canvas-framework.github.io
- Branch: mcf-22-cf-migration
- Deploy: Cloudflare Pages (main is production)
- Locales: EN active; ES deferred until EN is finished and reviewed
- Versions: 2.2 labeled "current", 2.1 labeled "legacy"
- Canon is frozen; Book is explanatory; no IMM/scoring/article
- Owner: Luis Santiago
- Timezone: Europe/Zurich

## Workflow Contract (Human <-> CODEX)
- Assistant outputs task instructions in a code block when requested.
- CODEX executes in the correct repo/cwd.
- Every task includes: scope, files, steps, acceptance criteria, build command, commit message.
- Commit message language: English.
- Push timeouts are verified via `git ls-remote --heads origin mcf-22-cf-migration`.
- Stop rules: repo mismatch, semantic drift in Canon, broken versioning, build failures.

## Information Architecture (current)
- `docs/canon/**` (normative)
- `docs/book/**` (explanatory; includes front-matter, phase-1..phase-5, conclusion)
- `docs/meta/**` (governance + references + changelog)
- Sidebar ordering (current): How to Read MCF 2.2 -> Canon -> Meta -> Book

## Contracts Library (LOCKED)

### A) Book Chapter Header Contract (6 cards, mandatory)
Use this for every Book chapter page immediately after front matter. Use the
Meta/Explanatory 4-card contract only for meta/explanatory pages.

Template (copy/paste):
```md
<div className="mcf-contract-grid mcf-contract-grid--chapter">
:::note What this chapter does
- ...
:::

:::warning What this chapter does not do
- ...
:::

:::tip When you should read this
- ...
:::

:::info Derived from Canon
This chapter is interpretive and explanatory. Its constraints and limits derive from the Canon pages below.
- [Canon - ...](/docs/canon/...)
:::

:::info Key terms (canonical)
- **Term:** short canonical meaning (link)
:::

:::note Minimal evidence expectations (non-prescriptive)
Evidence used in this chapter should allow you to:
- ...
:::
</div>
```

### B) Meta/Explanatory Page Contract (4 cards, required)
Use this for meta/explanatory pages only. Derived-from-Canon is required. The
3-card mode is deprecated and must not be used for new pages.

Template (copy/paste):
```md
<div className="mcf-contract-grid mcf-contract-grid--meta">
:::note Purpose
...
:::

:::info What this explains
- ...
:::

:::note Derived from Canon
- [Canon - ...](/docs/canon/...)
:::

:::tip How to use this page
...
:::
</div>
```

### C) Figures Contract (Mermaid-only)
Figures are Book-layer explanatory artifacts. Canon must not include figures.
Each figure must be inside an admonition and the admonition must close before
body text continues.

Template (copy/paste):
```md
:::note Figure X - Title (explanatory)
```mermaid
%%{init: {"theme":"base","flowchart":{"nodeSpacing":40,"rankSpacing":40},"themeVariables":{"fontSize":"28px"}} }%%
graph TD
  A[...]
```
Caption sentence(s) describing scope and limits.
:::
```

Rules:
- Mermaid-only figures; no external SVG/PNG diagrams.
- Default global style applies; per-figure init is allowed for readability.
- Target fontSize >= 28px when readability requires it.
- Figure numbering is global and monotonic across the Book.
- The List of Figures in `docs/meta/figures.mdx` is the single source of truth.
- Figures must be referenced explicitly in text (e.g., "see Figure 12.1").

### D) Canon Page Structural Contract (normative, no grids)
Canon pages are normative and must not include explanatory grids or figures.

Front matter template (canonical):
```md
---
title: "Title Case"
version: MCF 2.2
status: canonical
hide_title: true
last_updated: YYYY-MM-DD
---
```

Allowed:
- Normative definitions and constraints
- Formal rules, invariants, and thresholds
- Canon-internal references (other canon pages)
- External citations already in `docs/meta/references.mdx`

Forbidden:
- Contract grids or admonition templates
- Mermaid diagrams, figures, or embedded visuals
- Templates, checklists, operational workflows, maturity scoring, guarantees
- "Derived from Canon" language

Headings (mandatory order; use headings, not admonitions):
- ## Purpose (Normative)
- ## What this defines
- ## Sources & grounding
- ## How to apply

=====================================================================
CANON PAGE CONTRACT (LOCKED)
=====================================================================

Scope:
This contract governs **all pages under `docs/canon/**`**.
Canon pages are **normative**, **non-operational**, and **authoritative**.
No Book, Meta, or derivative content may override Canon semantics.

Non-Negotiable Principles:
- Canon defines **rules, constraints, and semantics**.
- Canon does **not** provide workflows, templates, scoring, or guidance.
- Canon content must be academically defensible and citation-backed where applicable.
- If any conflict exists between Canon and Book, **Canon always wins**.

Structural Rules (MUST):
1. Canon pages MUST NOT contain:
   - Mermaid diagrams
   - Images, charts, or figures
   - Contract grids or card layouts
   - “How to use”, “Purpose”, or explanatory admonitions
   - Examples, templates, or prescriptive language

2. Canon pages MUST use:
   - Exactly one H1 (provided by EntityHeader only)
   - H2/H3 headings in **Title Case**
   - Plain prose paragraphs and bullet lists only

3. Canon pages MUST NOT include:
   - Body-level H1 headings
   - Admonitions of any kind
   - Tables used for instruction or comparison
   - Inline UI elements or visual metaphors

Front-Matter Contract (MUST):
Every Canon page MUST include the following front matter:

---
title: "<Title Case>"
version: MCF 2.2
status: canonical
hide_title: true
last_updated: 2026-01-09
---

EntityHeader Rules:
- Canon pages ALWAYS use EntityHeader.
- EntityHeader provides the only H1.
- Canon pages MUST NOT opt out of EntityHeader.

Semantic Rules:
- Language MUST be declarative, not instructional.
- Use “defines”, “constrains”, “requires”, “prohibits”.
- MUST / SHALL / MAY terminology is allowed where appropriate.
- Avoid examples unless strictly necessary to define a boundary.

Citations:
- Canon references MUST point to:
  - `docs/meta/references.mdx`
  - External academic or standards sources where applicable
- Inline citation style must be consistent across Canon.

Versioning Rules:
- Any semantic change to Canon content REQUIRES:
  - Explicit decision
  - Version bump
  - Changelog entry
- Editorial changes (grammar, casing) do NOT constitute semantic change.

Enforcement:
- Canon pages are validated by `npm run check:canon`.
- Build MUST fail if Canon contract is violated.
- No Canon exception is permitted without explicit governance approval.

Status: LOCKED

### E) Routing/Redirect Contract
- Use `redirect_from` in front matter when canonical slugs change.
- Docusaurus redirect_from alone is insufficient for hard-hit old URLs; client-redirects is required.
- Generate redirects via `npm run gen:redirects` whenever docs are added, moved, or slugs change.
- Verify via `npm run serve -- --port 4400`, in an incognito window with a hard refresh.
- Windows case-insensitive collision caveat: avoid redirects that differ only by case.

## Project Memory (authoritative)

### Versioning Model
- MCF framework versions are documentation snapshots, not git tags.
- Current: 2.2 (current); Legacy: 2.1 (legacy) under `versioned_docs/version-2.1`.
- Canon changes require explicit decision and version bump.

### Canon Enforcement (LOCKED)
- Running `npm run check:canon` is mandatory after any Canon edits or before release.
- Canon must never include contract grids, figures, Mermaid, or Book/meta constructs.

### Book<->Canon Traceability (LOCKED)
- Applies ONLY to pages using the META/EXPLANATORY 4-card contract.
- Any meta-contract Book page MUST include at least one `Canon ->` link in the
  Derived-from-Canon card.
- Book chapters and front-matter use the separate 6-card chapter contract and
  are excluded from this gate.
- Chapter pages that use the 6-card header contract MUST include at least two
  `Canon ->` links inside the Derived-from-Canon section.
- Traceability artifacts (Meta maps, governance indexes) MUST use absolute
  `/docs/canon/...` routes.
- In-page Book chapter links MAY use relative links when necessary, but absolute
  `/docs/canon/...` is preferred for governance artifacts.
- Lint gates SHALL accept `../canon/...`, `../../canon/...`, and `/docs/canon/...`.

### EntityHeader Contract
- Current docs: meta + title in EntityHeader (single H1).
- Legacy docs: meta-only EntityHeader; content provides title.
- Opt-out supported via front matter `entityHeader: false`.

### Build/Serve Discipline
- Dev: `npm run start -- --port <free-port>`
- Prod-like: `npm run build -- --locale en` then `npm run serve -- --port 4400`
- If ChunkLoadError or ENOTEMPTY: stop node and delete `build/`, `.docusaurus/`,
  and `node_modules/.cache`, then rebuild and serve again.

### Scripts Inventory
- `check:no-inline-entityheader` -> blocks inline EntityHeader in docs
- `fix:demote-docs-h1` -> demotes H1 to H2 across current docs
- `check:no-h1-in-sections` -> prevents H1 in FrontMatter/Part01/Part02 sections
- `fix:dedupe-title-headings` -> removes duplicate title headings
- `check:no-duplicate-title-headings` -> blocks duplicate title headings
- `check:canon` -> enforces Canon front matter and structural prohibitions
- `check:traceability` -> enforces Canon links in meta-contract Book pages only (accepts /docs/canon)
- `check:traceability:chapters` -> enforces Canon links in chapter header contracts (accepts /docs/canon)
- `verify` -> runs check:canon + check:traceability + check:traceability:chapters + typecheck + build (EN); required before push
- `build:cf` -> alias to verify; Cloudflare Pages must use this command
- `gen:redirects` -> generates client redirect pages from redirect_from
- `fix:redirects-docs-prefix` -> adds /docs-prefixed redirect_from entries
- `check:unused-images` -> audits unused static images

### Windows-Specific Gotchas
- ENOTEMPTY on build cleanup: stop node, remove `build/`, `.docusaurus/`,
  `node_modules/.cache`, then rerun build.
- Case-insensitive collisions: avoid redirect_from entries that differ only by case.
- CRLF/LF: git may normalize; avoid mixed line endings.

### Cloudflare Pages Deployment
- Build command: `npm run build:cf`
- Build output directory: `build`
- Node version: >=18
- **Cloudflare build settings are manual-only (not versioned in repo)**:  
  Build command: `npm run build:cf`  
  Output directory: `build`  
  Node version: `>=18`

### Mermaid Policy
- Mermaid is enabled globally via themeConfig and `theme-mermaid`.
- Book figures may use per-figure init for readability; Canon forbids diagrams.

### References and Citations
- Harvard citations live in `docs/meta/references.mdx`.
- Canon pages may cite only sources already in references, or update references
  as a separate, explicit task.

### Governance Artifacts (Meta)
- `docs/meta/changelog.mdx`
- `docs/meta/references.mdx`
- `docs/meta/figures.mdx`
- `docs/meta/book-canon-traceability.mdx`

### Figures Index
- Single source of truth: `docs/meta/figures.mdx`.
- Figure numbering is global and monotonic; Figure 1 reserved for system map.

## Backlog (deduped)
DONE:
- Meta/explanatory 2x2 contract applied to all Book pages
- Derived-from-Canon integrated into contract grid
- Figures 1-5 validated and rendering
- Book core pages modernized with explanatory text + admonitions
- Governance, Failure Modes, Boundaries, Versioning completed
- Applied meta contract + expanded How to Read MCF 2.2
- Enforced serve/dev port discipline (serve on 4400)
- Canon published + frozen
- Book IA created; phase landing pages ordered
- EntityHeader site-wide, title de-dup, legacy behavior
- Book chapter header contract uses admonitions
- client-redirects in place
- Mermaid rendering enabled globally
- Standardized contract admonition types
- Contract grid (2x2 scaling) fixed: stretch + equal-height cards
- Figures governance: index in sidebar, numbering monotonic, Mermaid-only
- demo blog posts removed
- unused images cleaned
- FrontMatter moved under Book with collisions resolved
- Chapter 11 header contract applied + canon links resolved
- CONTEXT contract prose expansion (DONE)
- Canon structural contract pass across docs/canon/** (DONE)
- Canon front matter normalization audit completed (DONE)
- Add verify gate script (canon + typecheck + build en)
- Set Cloudflare build command to npm run build:cf
- DONE: Cloudflare Pages build command set to `npm run build:cf` and output dir `build`.
- Manual verification required in Cloudflare UI.
- Book<->Canon Traceability Map added (meta)
- Traceability gate scoped to meta-contract pages (check:traceability)
- Chapter-level traceability gate added (check:traceability:chapters)
- Normalize traceability artifacts to absolute /docs/canon routes
- Phase 3 chapters 23-25 first-pass content drafted
- Phase 4 chapters 26-29 first-pass content drafted
- Phase 5 chapters 30-33 first-pass content drafted
- Conclusion and Appendices first-pass content drafted
- Phase 3 chapters 23-25 second-pass depth and examples completed
- Phase 4 chapters 26-29 second-pass depth and examples completed
- Phase 5 chapters 30-33 second-pass depth and examples completed
- Phase 3 chapters 23-25 editorial polish completed
- Phase 4 chapters 26-29 editorial polish completed
- Phase 5 chapters 30-33 editorial polish completed
- Chapter 1 refactored to Phase 3-5 structure
- Figure 6 added and indexed
- SVG canonical figure removed and replaced with Mermaid
- Chapter 1 Cultural Readiness sub-elements restored and refined (innovation mindset, data-driven decision-making, agile execution, leadership/governance)
- Chapter 1 pass 2 conceptual depth + misuse clarity completed
- Figure 6 canon-safety refinement completed (non-linear, explanatory caption)
- Chapter 2 pass 1 completed (assessment reframed as evidence-first sense-making)
- Chapter 2 pass 2 completed (thresholds, reversibility, misuse signals)
- Chapter 3 pass 1 completed (IGF boundaries and evidence framing)
- Chapter 3 pass 2 completed (decision thresholds, reversibility, example, misuse signals)
- Chapter 4 pass 1 completed (culture as decision behavior)
- Chapter 4 pass 2 completed (thresholds, reversibility, misuse clarity)
- Chapter 5 pass 1 completed (agile as evidence-first execution context)
- Chapter 5 pass 2 completed (thresholds, reversibility, misuse clarity)
- Chapter 6 pass 1 completed (OKRs as decision alignment)
- Chapter 6 pass 2 completed (thresholds, KPI hygiene, misuse clarity)
- Chapter 7 pass 1 completed (training as evidence-first capability enabling)
- Chapter 8 pass 1 completed (governance pilots as evidence discipline)

IN-PROGRESS:
- None

NEXT:
- **NEXT**: Apply Canon Page Contract (non-visual) to all `docs/canon/**` pages:
  - Enforce front-matter invariants via `check:canon`
  - Confirm no Book/meta contracts leak into Canon
  - Confirm zero Mermaid, grids, admonition contracts in Canon
  - Outcome: validation-only pass, no content edits expected

PENDING:
- Review Phase 3-5 and conclusion draft content
- Resolve unmapped META-contract Book pages: add Derived-from-Canon links or justify unmapped
- Resolve chapter-level Canon links where missing (Derived-from-Canon card)
- ES translation (deferred)
- Docusaurus update decision (3.7 -> 3.9) deferred until stability checkpoint
- IMM mapping/scoring (deferred)
- academic article (deferred)
- templates/case studies (deferred)

## Milestones / commit log (append-only)
- fa8b989 docs(repo): add CONTEXT project memory and backlog
- 7e84745 docs(book): add explanatory layer and label versions
- a56a4d0 feat(ui): add site-wide entityheader meta bar for docs
- 2177196 fix(ui): render entityheader title only for current via metadata.version
- 2d808fc refactor(docs): move phase chapters under book and add redirects
- f5afcea fix(route): prefix docs base in redirect_from for migrated chapters
- 6392535 fix(route): add client redirect pages for migrated phase URLs
- 841a2eb fix(route): generate redirects to canonical doc permalinks
- bb16b65 docs(book): add phase landing pages and normalize book categories
- b9c4556 chore(book): normalize phase chapter ordering and metadata
- 9cad374 fix(route): resolve frontmatter redirect collisions on windows
- b1aecc3 docs(book): apply header contract to chapter 11 and update CONTEXT memory
- a686c52 docs(book): link chapter 11 header to canon sources
- 8fa651d docs(repo): update CONTEXT milestones for chapter 11 links
- bc657b7 chore(cleanup): remove demo blog posts
- dacaa29 chore(cleanup): remove default markdown page
- 9fc1767 chore(cleanup): remove unused static images
- 4c3b44a docs(book): customize phase 1 headers and finish canon links
- cd39447 docs(book): add phase 3-5 drafts, conclusion content, and 404 overrides
- c9a147e docs(book): align evidence-first thinking with canon and add citations
- feaa366 docs(book): align epistemic stages with canon and add diagram placeholder
- dcced63 docs(book): align decision logic with canon and add diagram placeholder
- 6b66ac4 docs(book): add figure 1 system map and figures index
- 185c9f9 feat(book): convert figures to mermaid and render contract headers as cards
- 4641214 fix(book): enable mermaid rendering and standardize contract admonition types
- d644038 fix(ui): correct contract card grid sizing and standardize mermaid styling
- e85ca28 fix(figures): increase figure 1 mermaid font and spacing for readability
- d3cea2b fix(figures): restyle figure 1 and model tools as acceleration layer
- eb1aefe fix(figures): render line breaks and add subgraph spacing in figure 1
- fd38d07 fix(figures): enforce figure 1 label clearance and improve node label formatting
- f723905 fix(figures): close figure admonition and compact system map layout
- 5d831b8 docs(book): chapter 8 pass 1 — governance pilots as evidence discipline
- 5c94684 docs(book): add figures index to sidebar and lock figure governance
- 928d888 docs(book): add governance figure and index entry
- c3eb473 fix(book): render figure 4 and align failure modes page
- 3f70002 docs(book): add decision thresholds figure and align decision logic page
- afa3852 docs(book): add decision thresholds figure and align decision logic page
- 1d9d9a7 fix(book): fix figure 5 mermaid and meta 3-card grid layout
- 1bff865 fix(figures): remove stray tokens causing figure 5 mermaid parse error
- 1820a8e feat(book): add derived-from-canon card to meta explanatory contract
- Book explanatory layer consistency pass completed
- 0501120 docs(book): normalize book headers, add phase 3-5 skeletons, update nav
- 76a2204 docs(repo): log milestone updates in CONTEXT
- 66cc4dd docs(repo): formalize canon + book content contracts in context
- a3b86f0 docs(canon): enforce canon page structural contract
- bda1994 chore(canon): complete structural audit and normalize headings (no canon content changes)
- 3e29927 docs(canon): normalize canon front matter to contract
- 4b99cd6 docs(repo): log canon front matter normalization
- 9ea680f docs(repo): log canon audit milestone
- a137a8f docs(repo): consolidate contracts library and project memory
- 4815e55 feat(repo): enforce canon contract via lints
- aebc201 chore(repo): add verify gate and cloudflare build command
- f3fc75f docs(repo): note cloudflare build settings are manual
- c88d3f0 docs(repo): add canon page contract to agents
- 1a77b19 chore(canon): validate canon pages against contract (no changes)
- f9bf16e docs(repo): log canon contract validation pass
- 8eb6ee4 docs(repo): mark cloudflare build command configured
- 36f9da7 docs(meta): add book-to-canon traceability map
- 66d102c fix(repo): scope book-canon traceability gate to meta contract pages
- d1caa32 feat(repo): add chapter-level book-canon traceability gate
- d9d3ff4 fix(meta): normalize traceability links and accept /docs/canon routes
- f3bd4c4 docs(repo): document canonical traceability link policy
- 2e8795e docs(book): draft phase 3 chapters 23-25 first-pass content
- ebdfcec docs(repo): log traceability link policy milestone
- 87a579c docs(repo): log phase 3 authoring milestone

- eee880d docs(book): draft phase 4 chapters 26-29 first-pass content
- 76ef6b2 docs(repo): log phase 4 authoring milestone
- 5710ef4 docs(repo): fix phase 4 milestone log

- 504bcca docs(book): draft phase 5 chapters 30-33 first-pass content
- a6c9693 docs(repo): log phase 5 authoring milestone
- 4b4b8fd docs(repo): fix phase 5 milestone log

- a41f3a5 docs(book): author conclusion and appendices chapters
- 2211c4b docs(repo): log conclusion and appendices authoring milestone
- a80cb41 docs(book): phase 3 second-pass depth and examples
- 3137d90 docs(book): phase 4 second-pass depth and examples
- 3345d1c docs(book): phase 5 second-pass depth and examples
- 441374c docs(book): editorial polish phase 3 chapters 23-25
- 5025308 docs(book): editorial polish phase 4 chapters 26-29
- 2b9cd73 docs(book): editorial polish phase 5 chapters 30-33
- 1b7206a docs(book): refactor chapter 1 structure and add figure 6
- f501b2b docs(meta): index figure 6 in figures list
- ffc83ca fix(book): repair figure 6 mermaid block
- 3633a4a docs(book): align chapter 1 key elements with IMM maturity pillars
- 7d81d86 docs(book): expand cultural readiness sub-elements in chapter 1
- 6ee1739 docs(book): refine chapter 1 cultural readiness sub-elements
- 857b4c8 docs(book): chapter 1 pass 2 conceptual depth and misuse clarity
- 041250c docs(book): harden figure 6 against linear interpretation
- 009b0bc docs(book): chapter 2 pass 1 — assessment as evidence-first sense-making
- 97997c6 docs(book): chapter 2 pass 2 — thresholds, reversibility, and misuse signals
- d5c8eb3 docs(book): chapter 3 pass 1 — IGF boundaries and evidence framing
- df70e85 docs(book): chapter 3 pass 2 — thresholds, reversibility, and misuse clarity
- fc4bbb6 docs(book): chapter 4 pass 1 — culture as decision behavior
- f722d74 docs(book): chapter 4 pass 2 — thresholds, reversibility, and misuse clarity
- bc16cec docs(book): chapter 5 pass 1 — agile as evidence-first execution context
- 2aa91cc docs(book): chapter 5 pass 2 — thresholds, reversibility, and misuse clarity
- f5b43e8 docs(book): chapter 6 pass 1 — okrs as decision alignment
- 35c0c49 docs(book): chapter 6 pass 2 — thresholds, KPI hygiene, and misuse clarity
- 6d89552 docs(book): chapter 7 pass 1 — training as evidence-first capability enabling
