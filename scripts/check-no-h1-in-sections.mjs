import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const roots = [
  join('docs', 'FrontMatter'),
  join('docs', 'Part01'),
  join('docs', 'Part02'),
];

const hits = [];

function scan(text, file) {
  const lines = text.split(/\r?\n/);
  let inFence = null;

  for (let i = 0; i < lines.length; i += 1) {
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

    if (inFence) {
      continue;
    }

    if (/^\s*#\s+[^#]/.test(line)) {
      hits.push(`${file}:${i + 1}:ATX_H1`);
    }

    const next = lines[i + 1];
    if (
      next !== undefined &&
      line.trim().length > 0 &&
      !/^\s*#/.test(line) &&
      /^\s*={3,}\s*$/.test(next)
    ) {
      hits.push(`${file}:${i + 2}:SETEXT_H1`);
    }
  }
}

function walk(dir) {
  if (!dir) return;
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
    scan(text, full);
  }
}

for (const root of roots) {
  walk(root);
}

if (hits.length) {
  console.error('H1 headings detected in FrontMatter/Part01/Part02:');
  for (const hit of hits) console.error(`- ${hit}`);
  process.exit(1);
}

console.log('OK: no H1 headings in FrontMatter/Part01/Part02.');
