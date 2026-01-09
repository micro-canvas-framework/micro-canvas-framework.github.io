import { readdirSync, readFileSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const roots = [
  join('docs', 'book', 'phase-1'),
  join('docs', 'book', 'phase-2'),
  join('docs', 'book', 'front-matter'),
];

function stripQuotes(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

function parseFrontMatter(content) {
  const lines = content.split(/\r?\n/);
  if (lines[0] !== '---') return null;
  const end = lines.indexOf('---', 1);
  if (end === -1) return null;

  const fmLines = lines.slice(1, end);
  const data = { id: null, slug: null, redirect_from: [] };

  for (let i = 0; i < fmLines.length; i += 1) {
    const line = fmLines[i];
    const idMatch = line.match(/^\s*id\s*:\s*(.+)\s*$/);
    if (idMatch) {
      data.id = stripQuotes(idMatch[1]);
      continue;
    }
    const slugMatch = line.match(/^\s*slug\s*:\s*(.+)\s*$/);
    if (slugMatch) {
      data.slug = stripQuotes(slugMatch[1]);
      continue;
    }
    const redirectMatch = line.match(/^\s*redirect_from\s*:\s*(.*)\s*$/);
    if (redirectMatch) {
      const inline = redirectMatch[1];
      if (inline) {
        if (inline.startsWith('[') && inline.endsWith(']')) {
          const items = inline
            .slice(1, -1)
            .split(',')
            .map((v) => stripQuotes(v))
            .filter(Boolean);
          data.redirect_from.push(...items);
        } else {
          data.redirect_from.push(stripQuotes(inline));
        }
      } else {
        while (i + 1 < fmLines.length) {
          const next = fmLines[i + 1];
          const itemMatch = next.match(/^\s*-\s*(.+)\s*$/);
          if (!itemMatch) break;
          data.redirect_from.push(stripQuotes(itemMatch[1]));
          i += 1;
        }
      }
    }
  }

  return data;
}

function normalizePath(value) {
  if (!value) return '';
  const withSlash = value.startsWith('/') ? value : `/${value}`;
  return withSlash.replace(/\/{2,}/g, '/');
}

const redirects = [];
const seen = new Set();
let filesWithRedirects = 0;
let unresolved = 0;

function addRedirect(from, to) {
  if (!from || !to) return;
  if (seen.has(from)) return;
  seen.add(from);
  redirects.push({ from, to });
}

const docEntries = [];

for (const root of roots) {
  if (!existsSync(root)) continue;
  for (const entry of readdirSync(root)) {
    const full = join(root, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) continue;
    if (!/\.mdx?$/.test(entry)) continue;

    const content = readFileSync(full, 'utf8');
    const fm = parseFrontMatter(content);
    if (!fm) continue;
    docEntries.push({ root, entry, full, fm });
  }
}

const canonicalTargets = new Map();

for (const { root, entry, fm, full } of docEntries) {
  const isPhase1 = root.includes(join('docs', 'book', 'phase-1'));
  const isPhase2 = root.includes(join('docs', 'book', 'phase-2'));
  const isFrontMatter = root.includes(join('docs', 'book', 'front-matter'));
  const base = isFrontMatter
    ? '/docs/book/front-matter/'
    : isPhase1
      ? '/docs/book/phase-1/'
      : isPhase2
        ? '/docs/book/phase-2/'
        : '';

  let to = '';
  if (fm.slug) {
    const normalizedSlug = normalizePath(fm.slug);
    to = normalizedSlug.startsWith('/docs/')
      ? normalizedSlug
      : normalizePath(`/docs${normalizedSlug}`);
  } else if (fm.id && base) {
    to = normalizePath(`${base}${fm.id}`);
  } else if (base) {
    const fileName = entry.replace(/\.(md|mdx)$/, '');
    to = normalizePath(`${base}${fileName}`);
  }

  if (to) {
    canonicalTargets.set(full, to);
  }
}

for (const { full, fm } of docEntries) {
  if (!fm.redirect_from.length) continue;
  filesWithRedirects += 1;

  const to = canonicalTargets.get(full);
  if (!to) {
    unresolved += 1;
    for (const rf of fm.redirect_from) {
      console.warn(`SKIP redirect_from ${rf} -> unresolved target for ${full}`);
    }
    continue;
  }

  for (const rf of fm.redirect_from) {
    const normalized = normalizePath(rf);
    const stripped = normalized.startsWith('/docs/')
      ? normalized.slice('/docs'.length)
      : normalized;
    const fromBase = normalizePath(`/docs${stripped}`);
    addRedirect(fromBase, to);
  }
}

if (redirects.length === 0) {
  console.error(`No redirects generated. Files with redirect_from: ${filesWithRedirects}`);
  process.exit(1);
}

const output = `export default ${JSON.stringify(redirects, null, 2)};\n`;
writeFileSync(join('src', 'redirects.generated.js'), output, 'utf8');
if (unresolved > 0) {
  console.warn(`Skipped ${unresolved} file(s) with unresolved redirect targets.`);
}
console.log(`Generated ${redirects.length} redirects from ${filesWithRedirects} file(s).`);
