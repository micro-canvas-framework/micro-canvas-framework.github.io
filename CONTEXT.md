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
Contracts and content rules live here. If a contract is missing here, it is not authoritative.

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
- `docs/book/**` (explanatory; includes front-matter, phase-1..phase-5, conclusion)
- `docs/meta/**` (governance + references + changelog)

Sidebar ordering (current): How to Read MCF 2.2 -> Canon -> Meta -> Book

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
- `docs/book/phase-3/` (skeletons)
- `docs/book/phase-4/` (skeletons)
- `docs/book/phase-5/` (skeletons)
- `docs/book/conclusion/` (skeletons)

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

Redirect runbook (authoritative):
- Run `npm run gen:redirects` whenever new docs are added, moved, or slugs change.
- Verify redirects via `npm run serve -- --port 4400`.
- Use an incognito window and hard refresh to avoid cached 404s.
- Confirm that old URLs resolve to the intended canonical permalinks.
- On Windows, watch for case-only differences that collide at runtime.

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

CONTENT CONTRACTS - CANONICAL TEMPLATES (LOCKED)

Book Chapter Header Contract (6-card, admonitions)
This header is mandatory and SHALL appear immediately after front matter on
every Book chapter page. The six cards, titles, and admonition types MUST be
identical across the Book. Book content remains explanatory and non-normative.
Canon remains the sole normative source; Book text may interpret but never
override Canon.

Template (copy/paste):
```md
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
```

Meta / Explanatory Page Contract (4-card grid, admonitions)
Meta/Explanatory pages MUST use the 4-card contract in the exact order:
Purpose -> What this explains -> Derived from Canon -> How to use this page.
These cards render as a 2x2 grid. "Derived from Canon" is mandatory and MUST be
a link list (relative links like "../canon/..." preferred). If an exception ever
requires only 3 cards, the 3rd card ("How to use this page") MUST span full
width and the order MUST still be preserved. These pages are explanatory-only
and MUST NOT introduce new norms or rules.

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

Canon Page Contract (NEW - LOCKED, normative, NO admonitions)
Canon pages are normative. They define rules, semantics, and invariants. Canon
pages MUST be concise, defensible, and free of explanatory or speculative
language. Canon is not derived from Book or Meta. Canon MUST never include
templates, checklists, operational workflows, maturity scoring, or guarantees.
Canon MUST NOT include diagrams, Mermaid, or admonition grids. Canon MUST use
stable definitions and constraints, and MUST cite sources via
`docs/meta/references.mdx` when external grounding is required.

Structural rules (mandatory order; use headings, not admonitions):
- ## Purpose (Normative)
- ## What this defines
- ## Sources & grounding
- ## How to apply

What Canon pages may contain:
- Normative definitions and constraints
- Formal rules, invariants, and thresholds
- Canon-internal references (other canon pages)
- External citations that already exist in `docs/meta/references.mdx`

What Canon pages must never contain:
- Explanatory-only framing, anecdotes, or guidance for implementation
- Mermaid diagrams, figures, or embedded visuals
- Templates, checklists, operational workflows, maturity scoring, or guarantees
- "Derived from Canon" language (Canon is not derived from itself)

Relationship to Book and Meta:
- Book interprets Canon; Book cannot override Canon.
- Meta governs references, changelog, and governance artifacts.
- If any conflict appears, Canon prevails.

Change rules (versioning + termination):
- Canon changes require explicit decision and version increment.
- Conflicting derivative content must be revised or removed.
- If a Canon page violates contract, it must be reverted to the last compliant
  version before any further edits.
Canon changes MUST preserve backward interpretability; if termination is
required, it must be explicit and versioned.

Diagrams & Figures Contract (LOCKED, authoritative)
Diagrams are explanatory artifacts in the Book layer and MUST never contradict
Canon. Canon remains normative; diagrams only illustrate relationships and
must not introduce new rules. All figures MUST be Mermaid diagrams inside
Docusaurus admonitions. Mermaid is enabled via `theme-mermaid`, and the global
style is enforced by `themeConfig` (baseline font size 18; per-diagram init may
raise to 28px for readability).

Rules:
- Mermaid-only figures; no external SVG/PNG diagrams.
- Each figure MUST be inside a Docusaurus admonition and MUST close before body text.
- Figure numbering is global and monotonic across the Book.
- The List of Figures in `docs/meta/figures.mdx` is the single source of truth.
- Figures MUST be referenced explicitly in text (e.g., "see Figure 12.1").
- Canon pages MUST NOT include diagrams or figures.

Change Control & Enforcement (LOCKED)
If any page violates a contract, work MUST stop on that page and the last
compliant version MUST be restored before further edits. A corrective task MUST
be logged in the CONTEXT backlog. Canon conflicts require explicit Owner
decision and version increment. Book/Meta conflicts MUST be revised to align
with Canon, not vice versa. Rewrites that introduce new concepts or norms are
not allowed during contract enforcement; revert first, then scope changes.

Build/Serve Discipline (LOCKED)
- Dev: `npm run start -- --port <free-port>`
- Prod-like: `npm run build -- --locale en` then `npm run serve -- --port 4400`
- If ChunkLoadError occurs: stop node, delete `build/`, `.docusaurus/`,
  and `node_modules/.cache`, then rebuild and serve again.

=====================================================================
I. BOOK LAYER - EDITORIAL CONTRACT (LOCKED)
=====================================================================

Book chapters follow a fixed structural header that:
- prevents semantic drift from Canon
- clarifies epistemic intent and limits
- standardizes reader orientation across chapters

Rules:
- Header appears immediately after front matter
- Uses admonitions for header sections (no H3 headings)
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
- Front matter intro
  - Header contract applied: YES
  - Canon links resolved: YES
  - Status: COMPLETE
- Foreword
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Diagram status: NO DIAGRAMS (N/A)
  - Status: COMPLETE
- Preface
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Diagram status: NO DIAGRAMS (N/A)
  - Status: COMPLETE
- How to Use This Book
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Diagram status: Figure 1 embedded (YES)
  - Status: COMPLETE
- The Author
  - Header contract applied: YES (admonitions)
  - Canon links resolved: NO
  - Status: PENDING

Book core pages (explanatory)
- How to Read MCF 2.2
  - Status: COMPLETE
- Governance and Roles
  - Figure added: YES
  - Mermaid: YES
  - Status: COMPLETE (structure)
- Failure Modes
  - Status: COMPLETE
- Decision Logic
  - Figure added: YES
  - Mermaid: YES
  - Status: COMPLETE

Phase 1 - Foundations
- Chapter 1: Introduction to Innovation Maturity
- Chapter 1: Introduction to Innovation Maturity
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 2: Innovation Maturity Assessment
- Chapter 2: Innovation Maturity Assessment
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 3: Building an Innovation Governance Framework
- Chapter 3: Building an Innovation Governance Framework
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 4: Transforming Culture and Mindset
- Chapter 4: Transforming Culture and Mindset
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 5: Implementing an Agile Project Execution Framework
- Chapter 5: Implementing an Agile Project Execution Framework
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 6: Defining Clear Objectives and Key Results (OKRs) to Drive Innovation
- Chapter 6: Defining Clear Objectives and Key Results (OKRs) to Drive Innovation
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 7: Training in Agile and Lean Innovation
- Chapter 7: Training in Agile and Lean Innovation
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 8: Putting Governance into Action: Pilots and Iterations
- Chapter 8: Putting Governance into Action: Pilots and Iterations
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 9: Leadership Alignment and Expansion
- Chapter 9: Leadership Alignment and Expansion
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 10: Review, Adjust, and Finalize Phase 1
- Chapter 10: Review, Adjust, and Finalize Phase 1
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE

Phase 2 - Discovery & Validation
- Chapter 11: Uncovering Opportunities and Analyzing Customers
- Chapter 11: Uncovering Opportunities and Analyzing Customers
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE (pilot)
- Chapter 12: Defining the Problem and Setting Strategic Objectives
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 13: Exploring Alternative Solutions, Unique Advantages and Product Features
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 14: Transformative Purpose
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 15: Marketing, Engagement and Sales
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 16: User Stories and Rapid Prototyping
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 17: Experimentation and Testing
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 18: Feedback Loops and Iterative Refinement
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 19: Validating the Business Model
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 20: User Validation and Expanded Pilot Testing
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 21: Regulatory Review and Strategic Scalability Planning
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE
- Chapter 22: Strategic Review and Next Steps for Validation
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: COMPLETE

Phase 3 - Efficiency - Process Optimization and Operations
- Chapter 23: Designing and Streamlining Operational Processes
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: PENDING
- Chapter 24: Automation and Data-Driven Decision Making
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: PENDING
- Chapter 25: Quality Control and Risk Management
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: PENDING

Phase 4 - Scaling - Accelerating Growth and Expansion
- Chapter 26: Developing a Scaling Strategy
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: PENDING
- Chapter 27: Optimizing Infrastructure and Organizational Alignment
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: PENDING
- Chapter 28: Building Strategic Partnerships and Ecosystem Integration
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: PENDING
- Chapter 29: Monitoring Growth Metrics and Continuous Adjustment
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: PENDING

Phase 5 - Continuous Improvement - Adaptation and Future Readiness
- Chapter 30: Establishing a Culture of Continuous Learning
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: PENDING
- Chapter 31: Anticipating Future Disruptions and Developing Adaptive Strategies
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: PENDING
- Chapter 32: Measuring, Communicating, and Enhancing Impact
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: PENDING
- Chapter 33: Sustaining Innovation for Long-Term Success
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: PENDING

Conclusion and Tools
- Chapter 34: Conclusion: The Path to Transformative Impact and Global Prosperity
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: PENDING
- Chapter 35: Appendices and Tools
  - Header customized per chapter: YES
  - Header contract applied: YES (admonitions)
  - Canon links resolved: YES
  - Status: PENDING

## 9) Local run commands (correct usage)
- Dev server (interactive): `npm run start -- --port <free-port>`
- Production-like verification (redirects): `npm run serve -- --port 4400`

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

## 12) Backlog (live)
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

PENDING:
- Review Phase 3-5 and conclusion draft content
- ES translation (deferred)
- Docusaurus update decision (3.7 -> 3.9) deferred until stability checkpoint
- IMM mapping/scoring (deferred)
- academic article (deferred)
- templates/case studies (deferred)






=====================================================================
K. DIAGRAMS & FIGURES - GLOBAL CONTRACT (LOCKED)
=====================================================================
Moved to Section 8 "Diagrams & Figures Contract (LOCKED, authoritative)".
This appendix remains as a pointer only; do not maintain competing rules here.


