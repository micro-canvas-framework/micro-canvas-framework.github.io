#!/usr/bin/env node
/* eslint-disable no-console */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.join(process.cwd(), "docs", "book");

// Applies ONLY to meta/explanatory contract pages (4-card grid):
// - contract wrapper present with meta modifier
// - AND "Derived from Canon" card present as an admonition:
//   :::note Derived from Canon
const HAS_META_GRID = /mcf-contract-grid--meta/;
const HAS_META_DERIVED_CARD = /:::note\s+Derived\s+from\s+Canon\b/;

// Canon link pattern used in derived card bullets
const CANON_LINK = /\((?:\.\.\/){1,2}canon\/[^\)]+\)/g;

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

const files = walk(ROOT).sort();
const unmapped = [];

for (const f of files) {
  const body = fs.readFileSync(f, "utf8");

  if (!HAS_META_GRID.test(body)) continue;
  if (!HAS_META_DERIVED_CARD.test(body)) continue;

  const links = body.match(CANON_LINK) || [];
  if (links.length === 0) unmapped.push(rel(f));
}

if (unmapped.length > 0) {
  console.error(
    "\n[check:traceability] FAIL — Meta-contract Book pages missing Canon links in 'Derived from Canon':"
  );
  for (const f of unmapped) console.error(`- ${f}`);
  console.error("\nFix: add at least one ../canon/... link in the Derived from Canon card.\n");
  process.exit(1);
}

console.log(
  "[check:traceability] PASS — Meta-contract Book pages include Canon links in 'Derived from Canon'."
);
