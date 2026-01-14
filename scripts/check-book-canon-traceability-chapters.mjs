#!/usr/bin/env node
/* eslint-disable no-console */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.join(process.cwd(), "docs", "book");

// Detect 6-card chapter header contract by presence of the canonical section titles.
// We look for a "Derived from Canon" admonition (any admonition type) AND at least one other known header section.
const HAS_DERIVED_SECTION = /:::(note|tip|info|warning)\s+Derived\s+from\s+Canon\b/;
const HAS_CHAPTER_HEADER_SIGNAL =
  /:::(note|tip|info|warning)\s+What\s+this\s+chapter\s+does\b/;

const CANON_LINK = /\((?:\.\.\/){1,2}canon\/[^\)]+\)|\(\/docs\/canon\/[^\)]+\)/g;

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (entry.isFile() && (p.endsWith(".mdx") || p.endsWith(".md"))) out.push(p);
  }
  return out;
}

function rel(p) {
  return path.relative(process.cwd(), p).replace(/\\/g, "/");
}

// Exclusions: front-matter + meta contract pages
const EXCLUDE = [
  "docs/book/front-matter/",
  "docs/book/how-to-read-mcf.mdx",
  "docs/book/evidence-first-thinking.mdx",
  "docs/book/epistemic-stages.mdx",
  "docs/book/decision-logic.mdx",
  "docs/book/governance-and-roles.mdx",
  "docs/book/failure-modes.mdx",
  "docs/book/boundaries-and-misuse.mdx",
  "docs/book/versioning-and-change-control.mdx",
];

function isExcluded(r) {
  return EXCLUDE.some((x) => r.startsWith(x) || r === x);
}

const files = walk(ROOT).sort();
const unmapped = [];

for (const f of files) {
  const r = rel(f);
  if (isExcluded(r)) continue;

  const body = fs.readFileSync(f, "utf8");

  // Only enforce on pages that look like they use the chapter header contract.
  if (!HAS_CHAPTER_HEADER_SIGNAL.test(body)) continue;
  if (!HAS_DERIVED_SECTION.test(body)) {
    unmapped.push({ file: r, reason: "missing 'Derived from Canon' section in chapter header contract" });
    continue;
  }

  // Count canon links anywhere on page (simple + robust).
  const links = body.match(CANON_LINK) || [];
  if (links.length < 2) {
    unmapped.push({ file: r, reason: `has only ${links.length} canon link(s); require >= 2` });
  }
}

if (unmapped.length) {
  console.error("\n[check:traceability:chapters] FAIL — Chapter pages missing sufficient Canon links:");
  for (const x of unmapped) console.error(`- ${x.file}: ${x.reason}`);
  console.error("\nFix: add at least 2 ../canon/... links inside the chapter header 'Derived from Canon' section.\n");
  process.exit(1);
}

console.log("[check:traceability:chapters] PASS — Chapter pages include Canon links in 'Derived from Canon'.");
