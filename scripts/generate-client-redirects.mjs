import { readdirSync, readFileSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const roots = [
  join('docs', 'book', 'phase-1'),
  join('docs', 'book', 'phase-2'),
  join('docs', 'book', 'frontmatter'),
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

function addRedirect(from, to) {
  if (!from || !to) return;
  if (seen.has(from)) return;
  seen.add(from);
  redirects.push({ from, to });
}

for (const root of roots) {
  if (!existsSync(root)) continue;
  for (const entry of readdirSync(root)) {
    const full = join(root, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) continue;
    if (!/\.mdx?$/.test(entry)) continue;

    const content = readFileSync(full, 'utf8');
    const fm = parseFrontMatter(content);
    if (!fm || !fm.id) continue;

    const docId = fm.id;
    const isPhase1 = root.includes(join('docs', 'book', 'phase-1'));
    const phasePath = isPhase1 ? 'phase-1' : 'phase-2';

    let to = '';
    if (fm.slug && fm.slug.startsWith('/')) {
      to = normalizePath(`/docs${fm.slug}`);
    } else {
      to = normalizePath(`/docs/book/${phasePath}/${docId}`);
    }

    if (fm.redirect_from.length) {
      filesWithRedirects += 1;
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
}

if (redirects.length === 0) {
  console.error(`No redirects generated. Files with redirect_from: ${filesWithRedirects}`);
  process.exit(1);
}

const output = `export default ${JSON.stringify(redirects, null, 2)};\n`;
writeFileSync(join('src', 'redirects.generated.js'), output, 'utf8');
console.log(`Generated ${redirects.length} redirects from ${filesWithRedirects} file(s).`);
