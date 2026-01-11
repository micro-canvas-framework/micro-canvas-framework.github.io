# MicroCanvas Framework (MCF) 2.2 - CONTEXT + BACKLOG (Authoritative)

## Project Snapshot
- Repo: micro-canvas-framework.github.io
- Working branch: mcf-22-cf-migration
- Deploy: Cloudflare Pages (main is production)
- Locales: EN active; ES deferred until EN is finished and reviewed
- Versions: 2.2 labeled "current", 2.1 labeled "legacy"
- Canon is frozen; Book is explanatory; no IMM/scoring/article

Owner: Luis Santiago
Timezone: Europe/Zurich

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

## 4) Information Architecture (current)
- `docs/canon/**` (normative)
- `docs/book/**` (explanatory; includes front-matter, phase-1, phase-2)
- `docs/meta/**` (governance + references + changelog)

Sidebar ordering (current): Canon -> Book -> Meta

## 5) Docs IA detail
### 5.1 Canon (LOCKED)
Path: `docs/canon/`
- Canon is non-operational and academically defensible.
- Harvard citations are centralized in `docs/meta/references.mdx`.

### 5.2 Book (Explanatory Layer)
Path: `docs/book/`
Book substructure:
- `docs/book/_intro.mdx`
- `docs/book/front-matter/` (prefatory)
- `docs/book/phase-1/` (migrated chapters)
- `docs/book/phase-2/` (migrated chapters)

Front matter canonical slugs (explicit):
- /docs/book/front-matter/foreword
- /docs/book/front-matter/preface
- /docs/book/front-matter/how-to-use
- /docs/book/front-matter/the-author

### 5.3 Meta
Path: `docs/meta/`
Includes: references, changelog (governance-level)

## 6) Routing & Redirect Strategy (LOCKED)
- Docusaurus redirect_from alone was insufficient for hard-hit old URLs; client-redirects is required.
- @docusaurus/plugin-client-redirects is installed and redirects are generated.
- Redirect generation resolves targets by slug -> id -> filename, and does not guess beyond those rules.
- Windows case-insensitive collision caveat: avoid redirects that differ only by case.
- FrontMatter collision resolved by moving to /book/front-matter and using lowercase redirect sources.
- Serve does not accept `--locale`; use `start` for dev and `serve` for production-like checks.

Redirect script:
- `npm run gen:redirects`

## 7) Guardrails & Scripts Inventory (LOCKED)
Guardrails and what they prevent:
- `check:no-inline-entityheader` -> blocks inline EntityHeader in docs
- `fix:demote-docs-h1` -> demotes H1 to H2 across current docs
- `check:no-h1-in-sections` -> prevents H1 in FrontMatter/Part01/Part02 sections
- `fix:dedupe-title-headings` -> removes duplicate title headings (title repeated in body)
- `check:no-duplicate-title-headings` -> blocks duplicate title headings
- `gen:redirects` -> generates client redirect pages from redirect_from
- `fix:redirects-docs-prefix` -> adds /docs-prefixed redirect_from entries
- `check:unused-images` -> audits unused static images

Invariants:
- Exactly one H1 for current docs (EntityHeader title)
- Legacy docs use EntityHeader meta-only

## 8) Content Contracts (LOCKED)
EntityHeader Contract:
- Current: meta + title in EntityHeader (single H1)
- Legacy: meta-only EntityHeader; content provides title
- Opt-out supported via front matter `entityHeader: false`

Book Chapter Header Contract:
- Header appears immediately after front matter
- Uses H3 headings only
- Identical section titles across all Book chapters
- Sections:
  1) What this chapter does
  2) What this chapter does not do
  3) When you should read this
  4) Derived from Canon
  5) Key terms (canonical)
  6) Minimal evidence expectations (non-prescriptive)

=====================================================================
I. BOOK LAYER - EDITORIAL CONTRACT (LOCKED)
=====================================================================

Book chapters follow a fixed structural header that:
- prevents semantic drift from Canon
- clarifies epistemic intent and limits
- standardizes reader orientation across chapters

Rules:
- Header appears immediately after front matter
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

Front matter (prefatory)
- Foreword
  - Header contract applied: NO
  - Canon links resolved: NO
  - Status: PENDING
- Preface
  - Header contract applied: NO
  - Canon links resolved: NO
  - Status: PENDING
- How to Use This Book
  - Header contract applied: NO
  - Canon links resolved: NO
  - Status: PENDING
- The Author
  - Header contract applied: NO
  - Canon links resolved: NO
  - Status: PENDING

Phase 1 - Foundations
- Chapter 1: Introduction to Innovation Maturity
- Chapter 1: Introduction to Innovation Maturity
  - Header contract applied: NO
  - Canon links resolved: NO
  - Status: PENDING
- Chapter 2: Innovation Maturity Assessment
- Chapter 2: Innovation Maturity Assessment
  - Header contract applied: NO
  - Canon links resolved: NO
  - Status: PENDING
- Chapter 3: Building an Innovation Governance Framework
- Chapter 3: Building an Innovation Governance Framework
  - Header contract applied: NO
  - Canon links resolved: NO
  - Status: PENDING
- Chapter 4: Transforming Culture and Mindset
- Chapter 4: Transforming Culture and Mindset
  - Header contract applied: NO
  - Canon links resolved: NO
  - Status: PENDING
- Chapter 5: Implementing an Agile Project Execution Framework
- Chapter 5: Implementing an Agile Project Execution Framework
  - Header contract applied: NO
  - Canon links resolved: NO
  - Status: PENDING
- Chapter 6: Defining Clear Objectives and Key Results (OKRs) to Drive Innovation
- Chapter 6: Defining Clear Objectives and Key Results (OKRs) to Drive Innovation
  - Header contract applied: NO
  - Canon links resolved: NO
  - Status: PENDING
- Chapter 7: Training in Agile and Lean Innovation
- Chapter 7: Training in Agile and Lean Innovation
  - Header contract applied: NO
  - Canon links resolved: NO
  - Status: PENDING
- Chapter 8: Putting Governance into Action: Pilots and Iterations
- Chapter 8: Putting Governance into Action: Pilots and Iterations
  - Header contract applied: NO
  - Canon links resolved: NO
  - Status: PENDING
- Chapter 9: Leadership Alignment and Expansion
- Chapter 9: Leadership Alignment and Expansion
  - Header contract applied: NO
  - Canon links resolved: NO
  - Status: PENDING
- Chapter 10: Review, Adjust, and Finalize Phase 1
- Chapter 10: Review, Adjust, and Finalize Phase 1
  - Header contract applied: NO
  - Canon links resolved: NO
  - Status: PENDING

Phase 2 - Discovery & Validation
- Chapter 11: Uncovering Opportunities and Analyzing Customers
- Chapter 11: Uncovering Opportunities and Analyzing Customers
  - Header contract applied: YES
  - Canon links resolved: YES
  - Status: COMPLETE (pilot)
- Chapter 12: Defining the Problem and Setting Strategic Objectives
  - Header customized per chapter: YES
  - Header contract applied: YES
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 13: Exploring Alternative Solutions, Unique Advantages and Product Features
  - Header customized per chapter: YES
  - Header contract applied: YES
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 14: Transformative Purpose
  - Header customized per chapter: YES
  - Header contract applied: YES
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 15: Marketing, Engagement and Sales
  - Header contract applied: YES
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 16: User Stories and Rapid Prototyping
  - Header contract applied: YES
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 17: Experimentation and Testing
  - Header contract applied: YES
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 18: Feedback Loops and Iterative Refinement
  - Header contract applied: YES
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 19: Validating the Business Model
  - Header contract applied: YES
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 20: User Validation and Expanded Pilot Testing
  - Header contract applied: YES
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 21: Regulatory Review and Strategic Scalability Planning
  - Header contract applied: YES
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 22: Strategic Review and Next Steps for Validation
  - Header contract applied: YES
  - Canon links resolved: YES
  - Status: COMPLETE

## 9) Local run commands (correct usage)
- Dev server (interactive): `npm run start -- --port 3000`
- Production-like verification (redirects): `npm run serve -- --port 3000`

## 10) Cleanup completed
- Demo blog posts removed
- Default markdown demo page removed
- Unused static images removed + audit script present

## 11) Milestones / commit log (append-only)
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

## 12) Backlog (live)
DONE:
- Canon published + frozen
- Book IA created
- EntityHeader site-wide, title de-dup, legacy behavior
- Phase docs moved under Book
- client-redirects in place
- demo blog posts removed
- demo markdown page removed
- unused images cleaned
- phase landing pages + ordering normalized
- FrontMatter moved under Book with collisions resolved
- Chapter 11 header contract applied + canon links resolved

PENDING:
- Apply Book header contract to remaining chapters (Phase 2 then Phase 1)
- Convert "Derived from Canon" to real links for each chapter (after applying header)
- Book content modernization (later; not in this task)
- ES translation (deferred)
- Docusaurus update decision (3.7 -> 3.9) deferred until stability checkpoint

DEFERRED:
- IMM mapping/scoring
- academic article
- templates/case studies
