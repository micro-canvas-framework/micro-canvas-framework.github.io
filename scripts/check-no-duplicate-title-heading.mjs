import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const roots = [
  join('docs', 'FrontMatter'),
  join('docs', 'Part01'),
  join('docs', 'Part02'),
];

function parseFrontMatter(lines) {
  if (lines[0] !== '---') return { frontMatterEnd: -1, title: null };
  const end = lines.indexOf('---', 1);
  if (end === -1) return { frontMatterEnd: -1, title: null };
  let title = null;
  for (let i = 1; i < end; i += 1) {
    const line = lines[i];
    const match = line.match(/^\s*title\s*:\s*(.+)\s*$/);
    if (match) {
      title = match[1].trim();
      if (
        (title.startsWith('"') && title.endsWith('"')) ||
        (title.startsWith("'") && title.endsWith("'"))
      ) {
        title = title.slice(1, -1).trim();
      }
    }
  }
  return { frontMatterEnd: end, title };
}

function hasDuplicateHeading(text) {
  const lines = text.split(/\r?\n/);
  const { frontMatterEnd, title } = parseFrontMatter(lines);
  if (!title || frontMatterEnd === -1) return null;

  let inFence = null;
  for (let i = frontMatterEnd + 1; i < lines.length; i += 1) {
    const line = lines[i];
    const fenceMatch = line.match(/^\s*(```|~~~)/);
    if (fenceMatch) {
      const fence = fenceMatch[1];
      if (!inFence) {
        inFence = fence;
      } else if (inFence === fence) {
        inFence = null;
      }
      continue;
    }

    if (inFence) continue;
    if (!line.trim()) continue;

    const atxMatch = line.match(/^\s*##\s+(.+)\s*$/);
    if (atxMatch) {
      const headingText = atxMatch[1].trim();
      if (headingText === title.trim()) {
        return `ATX_H2:${i + 1}`;
      }
      return null;
    }

    const next = lines[i + 1];
    if (next !== undefined && /^\s*-{3,}\s*$/.test(next)) {
      if (line.trim() === title.trim()) {
        return `SETEXT_H2:${i + 1}`;
      }
      return null;
    }

    return null;
  }

  return null;
}

const hits = [];

function walk(dir) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walk(full);
      continue;
    }
    if (!/\.mdx?$/.test(entry)) continue;
    const text = readFileSync(full, 'utf8');
    const hit = hasDuplicateHeading(text);
    if (hit) {
      hits.push(`${full}:${hit}`);
    }
  }
}

for (const root of roots) {
  walk(root);
}

if (hits.length) {
  console.error('Duplicate title headings found:');
  for (const hit of hits) console.error(`- ${hit}`);
  process.exit(1);
}

console.log('OK: no duplicate title headings found.');
