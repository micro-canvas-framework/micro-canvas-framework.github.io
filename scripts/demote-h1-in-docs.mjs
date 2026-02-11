import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, sep } from 'node:path';

const root = 'docs';
const skipSegments = new Set(['versioned_docs', 'versioned_sidebars', 'versioned']);

function shouldSkipDir(dir) {
  const segments = dir.split(sep);
  return segments.some((seg) => skipSegments.has(seg));
}

function demoteHeadings(text) {
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
    }
  }

  return changed ? lines.join('\n') : text;
}

function walk(dir) {
  if (shouldSkipDir(dir)) {
    return;
  }
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walk(full);
      continue;
    }
    if (!/\.mdx?$/.test(entry)) {
      continue;
    }
    const text = readFileSync(full, 'utf8');
    const next = demoteHeadings(text);
    if (next !== text) {
      writeFileSync(full, next);
    }
  }
}

walk(root);
console.log('OK: H1 headings demoted to H2 in docs/.');
