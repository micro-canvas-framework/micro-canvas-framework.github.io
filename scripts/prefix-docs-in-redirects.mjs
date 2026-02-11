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

function parseRedirectInline(value) {
  const trimmed = value.trim();
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    return trimmed
      .slice(1, -1)
      .split(',')
      .map((v) => stripQuotes(v))
      .filter(Boolean);
  }
  return trimmed ? [stripQuotes(trimmed)] : [];
}

function normalizePath(value) {
  if (!value) return '';
  const withSlash = value.startsWith('/') ? value : `/${value}`;
  return withSlash.replace(/\/{2,}/g, '/');
}

function updateFrontMatter(filePath) {
  const content = readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  if (lines[0] !== '---') return false;
  const end = lines.indexOf('---', 1);
  if (end === -1) return false;

  const fmLines = lines.slice(1, end);
  const rest = lines.slice(end + 1);

  let redirectValues = [];
  const nextFmLines = [];

  for (let i = 0; i < fmLines.length; i += 1) {
    const line = fmLines[i];
    const redirectMatch = line.match(/^\s*redirect_from\s*:\s*(.*)\s*$/);
    if (redirectMatch) {
      const inline = redirectMatch[1];
      if (inline) {
        redirectValues = redirectValues.concat(parseRedirectInline(inline));
      } else {
        while (i + 1 < fmLines.length) {
          const next = fmLines[i + 1];
          const itemMatch = next.match(/^\s*-\s*(.+)\s*$/);
          if (!itemMatch) break;
          redirectValues.push(stripQuotes(itemMatch[1]));
          i += 1;
        }
      }
      continue;
    }

    nextFmLines.push(line);
  }

  if (!redirectValues.length) {
    return false;
  }

  const normalized = redirectValues.map(normalizePath).filter(Boolean);
  const redirectSet = new Set();
  const ordered = [];

  for (const value of normalized) {
    if (!redirectSet.has(value)) {
      redirectSet.add(value);
      ordered.push(value);
    }
    if (!value.startsWith('/docs/')) {
      const docsValue = normalizePath(`/docs${value}`);
      if (!redirectSet.has(docsValue)) {
        redirectSet.add(docsValue);
        ordered.push(docsValue);
      }
    }
  }

  const updatedFm = [...nextFmLines];
  updatedFm.push('redirect_from:');
  for (const value of ordered) {
    updatedFm.push(`  - ${value}`);
  }

  const updated = ['---', ...updatedFm, '---', ...rest].join('\n');
  if (updated !== content) {
    writeFileSync(filePath, updated, 'utf8');
    return true;
  }
  return false;
}

let changed = 0;

for (const root of roots) {
  if (!existsSync(root)) continue;
  for (const entry of readdirSync(root)) {
    const full = join(root, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) continue;
    if (!/\.mdx?$/.test(entry)) continue;
    if (updateFrontMatter(full)) {
      changed += 1;
    }
  }
}

console.log(`Updated ${changed} file(s).`);
