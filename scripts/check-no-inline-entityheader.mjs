import { readdirSync, statSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = 'docs';
const hits = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walk(full);
      continue;
    }
    if (!/\.mdx?$/.test(entry)) continue;
    const text = readFileSync(full, 'utf8');
    if (/<EntityHeader\b/.test(text)) {
      hits.push(full);
    }
  }
}

walk(root);

if (hits.length) {
  console.error('Inline <EntityHeader> usage found in:');
  for (const p of hits) console.error(`- ${p}`);
  process.exit(1);
}

console.log('OK: no inline <EntityHeader> usage found.');