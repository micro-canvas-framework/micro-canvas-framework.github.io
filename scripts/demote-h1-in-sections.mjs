import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const roots = [
  join('docs', 'FrontMatter'),
  join('docs', 'Part01'),
  join('docs', 'Part02'),
];

function demote(text) {
  const lines = text.split(/\r?\n/);
  let inFence = null;
  let changed = false;

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
      lines[i] = line.replace(/^(\s*)#(\s+[^#])/, '$1##$2');
      changed = true;
      continue;
    }

    const next = lines[i + 1];
    if (
      next !== undefined &&
      line.trim().length > 0 &&
      !/^\s*#/.test(line) &&
      /^\s*={3,}\s*$/.test(next)
    ) {
      lines[i + 1] = '----------------';
      changed = true;
      i += 1;
    }
  }

  return changed ? lines.join('\n') : text;
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
    const next = demote(text);
    if (next !== text) {
      writeFileSync(full, next);
    }
  }
}

for (const root of roots) {
  walk(root);
}

console.log('OK: H1 headings demoted to H2 in FrontMatter/Part01/Part02.');
