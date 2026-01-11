# MicroCanvas Framework (MCF) 2.2 - CONTEXT + BACKLOG (Authoritative)
Owner: Luis Santiago
Repo: micro-canvas-framework.github.io
Branch: mcf-22-cf-migration
Timezone: Europe/Zurich
EN is source-of-truth. ES is deferred until EN Book + website are locked.

## 1) What this file is
This file is the project's external memory:
- Current architecture + invariants
- How we work (CODEX workflow)
- Known issues/gotchas
- Backlog + completion status
It must be updated after every meaningful change.

## 2) Workflow contract (Human <-> CODEX)
- Assistant outputs CODEX task instructions in a code block
- CODEX executes in the correct repo/cwd
- Every task includes: scope, files, steps, acceptance criteria, build command, commit message
- Commit message language: English
- Push timeouts verified via: `git ls-remote --heads origin mcf-22-cf-migration`
- Stop rules: repo mismatch, semantic drift in Canon, broken versioning, build failures

## 3) Versioning model
- MCF framework versions are documentation snapshots, not git tags.
- Current: **2.2 (current)**
- Legacy: **2.1 (legacy)** under versioned_docs/version-2.1
- Canon changes require explicit decision + version bump.

## 4) Docs IA (current)
### 4.1 Canon (LOCKED)
Path: `docs/canon/`
- Canon is non-operational and academically defensible.
- Harvard citations are centralized in `docs/meta/references.mdx`.

### 4.2 Book (Explanatory Layer)
Path: `docs/book/`

Book substructure:
- `docs/book/_intro.mdx`
- `docs/book/front-matter/` (prefatory)
- `docs/book/phase-1/` (migrated chapters)
- `docs/book/phase-2/` (migrated chapters)

#### 4.2.1 Front matter canonical slugs (explicit)
- /docs/book/front-matter/foreword
- /docs/book/front-matter/preface
- /docs/book/front-matter/how-to-use
- /docs/book/front-matter/the-author

### 4.3 Meta
Path: `docs/meta/`
Includes: references, changelog (governance-level)

## 5) Book inventory (do not paste chapter bodies)
### 5.1 Phase 1 chapter files
- _category_.json
- _intro.mdx
- 01-IntroductionToIMM.md
- 02-IMA.md
- 03-BuildingAnIGF.md
- 04-CultureAndMindset.md
- 05-AgileProjects.md
- 06-OKRsAndKPIs.md
- 07-AgileAndLI.md
- 08-GovernanceInAction.md
- 09-Leadership.md
- 10-FinalizePhase1.md

### 5.2 Phase 2 chapter files
- _category_.json
- _intro.mdx
- 11-AnalyzingCustomers.md
- 12-ProblemsAndOKRs.md
- 13-AlternativeSolutions.md
- 14-TransformativePurpose.md
- 15-MarketingEngagementSales.md
- 16-UserStoriesRapidPrototyping.md
- 17-ExperimentationAndTesting.md
- 18-FeedbackLoops.md
- 19-ValidatingTheBM.md
- 20-UserValidation.md
- 21-RegulatoryReview.md
- 22-StrategicReview.md

### 5.3 Front matter files
- _category_.json
- _intro.mdx
- Foreword.md
- HowToUse.md
- Preface.md
- TheAuthor.md

## 6) EntityHeader contract (site-wide)
- EntityHeader is globally injected for docs.
- Current docs render: meta line + title (single H1) in header.
- Legacy docs render: meta line only (title comes from doc content).
- "Last updated" must always render (date or "-").
- Inline <EntityHeader .../> in MDX is forbidden.

Guardrail:
- `npm run check:no-inline-entityheader`

## 7) Heading hygiene contract
- Exactly one H1 for current docs (owned by EntityHeader title).
- Docs must not include in-body duplicate title headings.

Guardrails/scripts (names may evolve; keep updated):
- `npm run fix:demote-docs-h1`
- `npm run check:no-duplicate-title-headings`
- `npm run check:no-h1-in-sections`

## 8) Routing + redirects (Windows-safe)
Key constraints:
- Windows filesystem is case-insensitive -> redirect pages that differ only by case can collide.
- Redirect strategy uses lowercase legacy paths only.
- TitleCase legacy routes can be handled later at the edge (Cloudflare Redirect Rules) if needed.

Redirect mechanism:
- @docusaurus/plugin-client-redirects is enabled
- Redirect generation script resolves targets by:
  1) slug
  2) id
  3) filename
  Never "guesses" based on scan folder.

Script:
- `generate-client-redirects.mjs`
Command:
- `npm run gen:redirects`

## 9) Local run commands (correct usage)
- Dev server (interactive): `npm run start -- --port 3000`
- Production-like verification (redirects): `npm run serve -- --port 3000`
Note: `serve` does NOT take `--locale`.

## 10) Cleanup completed
- Demo blog posts removed
- Default markdown demo page removed
- Unused static images removed + audit script present

## 11) Key milestones / commits (append-only)
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
- bc657b7 chore(cleanup): remove demo blog posts
- dacaa29 chore(cleanup): remove default markdown page
- 9fc1767 chore(cleanup): remove unused static images

## 12) Backlog (live)
### 12.1 Locked / frozen
- P0 principles: FROZEN
- Canon pages: LOCKED
- Versioning + legacy: LOCKED
- EntityHeader contract: LOCKED

### 12.2 Pending (next)
- Book content refactor: add "chapter header contract" and begin refactoring starting with selected chapter (Phase 1 Ch1 or Phase 2 Ch12)
- ES translation: deferred until EN lock
- IMM mapping/scoring/tools/article: deferred

=====================================================================
I. BOOK LAYER — EDITORIAL CONTRACT (LOCKED)
=====================================================================

Book chapters follow a fixed structural header that:
- prevents semantic drift from Canon
- clarifies epistemic intent and limits
- standardizes reader orientation across chapters

Rules:
- Header appears immediately after front-matter
- Uses H3 headings only
- Identical section titles across all Book chapters
- Book content is explanatory and non-normative
- Canon remains the sole normative source

Canonical Header Sections:
1. What this chapter does
2. What this chapter does not do
3. When you should read this
4. Derived from Canon
5. Key terms (canonical)
6. Minimal evidence expectations (non-prescriptive)

Status: LOCKED

=====================================================================
J. BOOK CHAPTER INVENTORY & STATUS
=====================================================================

Phase 2 — Discovery & Validation

- Chapter 11: Uncovering Opportunities and Analyzing Customers
  - Header contract applied: YES
  - Content refactored: STRUCTURE ONLY
  - Canon alignment: DECLARED
  - Canon links resolved: YES
  - Status: COMPLETE (pilot)

All other Book chapters:
- Header contract: NOT YET APPLIED
- Status: PENDING
