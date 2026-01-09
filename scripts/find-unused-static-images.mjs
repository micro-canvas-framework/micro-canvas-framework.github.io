import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const imageRoot = join('static', 'img');
const ignoreDirs = new Set([
  'node_modules',
  'build',
  '.docusaurus',
  '.cache',
  '.git',
]);

function listImages(dir, results) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      listImages(full, results);
      continue;
    }
    results.push(full);
  }
}

function listFiles(dir, results) {
  for (const entry of readdirSync(dir)) {
    if (ignoreDirs.has(entry)) continue;
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      listFiles(full, results);
      continue;
    }
    results.push(full);
  }
}

const images = [];
listImages(imageRoot, images);

const files = [];
listFiles('.', files);

const haystack = files
  .filter((file) => !file.startsWith(imageRoot))
  .filter((file) => !file.endsWith('.png') && !file.endsWith('.jpg') && !file.endsWith('.jpeg') && !file.endsWith('.svg') && !file.endsWith('.ico'))
  .map((file) => {
    try {
      return readFileSync(file, 'utf8');
    } catch {
      return '';
    }
  })
  .join('\n');

const unused = [];

for (const img of images) {
  const base = img.split(/[\\/]/).pop();
  if (!base) continue;
  if (!haystack.includes(base)) {
    unused.push(img.replace(/\\/g, '/'));
  }
}

writeFileSync('scripts/unused-static-images.txt', unused.join('\n') + (unused.length ? '\n' : ''), 'utf8');
console.log(`Found ${unused.length} unused image(s).`);
