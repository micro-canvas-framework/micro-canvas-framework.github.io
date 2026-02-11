import fs from "fs";
import path from "path";

const roots = [path.join("docs", "book")];
const headingOrder = [
  "What this chapter does",
  "What this chapter does not do",
  "When you should read this",
  "Derived from Canon",
  "Key terms (canonical)",
  "Minimal evidence expectations (non-prescriptive)",
];

const typeByHeading = {
  "What this chapter does": "info",
  "What this chapter does not do": "warning",
  "When you should read this": "tip",
  "Derived from Canon": "note",
  "Key terms (canonical)": "info",
  "Minimal evidence expectations (non-prescriptive)": "warning",
};

function walk(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "versioned_docs" || entry.name === "versioned_sidebars") {
        continue;
      }
      walk(full, files);
    } else if (entry.isFile()) {
      if (full.endsWith(".md") || full.endsWith(".mdx")) {
        files.push(full);
      }
    }
  }
  return files;
}

function findAdmonitionBlock(lines, startIndex, heading) {
  const escaped = heading.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  const startRe = new RegExp(`^:::\\s*\\w+\\s+${escaped}\\s*$`);
  let start = -1;
  for (let i = startIndex; i < lines.length; i += 1) {
    if (startRe.test(lines[i])) {
      start = i;
      break;
    }
  }
  if (start === -1) {
    return null;
  }
  let end = -1;
  for (let i = start + 1; i < lines.length; i += 1) {
    if (/^:::\s*$/.test(lines[i])) {
      end = i;
      break;
    }
  }
  if (end === -1) {
    return null;
  }
  return { start, end, heading, lines: lines.slice(start, end + 1) };
}

function buildGrid(blocks) {
  const out = [];
  out.push('<div className="mcf-contract-grid">', "");

  for (const block of blocks) {
    const normalizedLines = [...block.lines];
    const desiredType = typeByHeading[block.heading];
    if (desiredType) {
      normalizedLines[0] = `:::${desiredType} ${block.heading}`;
    }
    out.push(...normalizedLines, "");
  }

  out.push("</div>");
  return out;
}

function normalizeMermaidInit(lines) {
  let changed = false;
  const next = [];
  for (const line of lines) {
    if (/^%%\{init:/.test(line.trim())) {
      changed = true;
      continue;
    }
    next.push(line);
  }
  return { lines: next, changed };
}

function wrapFile(filePath) {
  const original = fs.readFileSync(filePath, "utf8");
  const lines = original.split(/\r?\n/);

  let fmEnd = -1;
  if (lines[0] === "---") {
    for (let i = 1; i < lines.length; i += 1) {
      if (lines[i] === "---") {
        fmEnd = i;
        break;
      }
    }
  }

  let searchStart = 0;
  if (fmEnd !== -1) {
    for (let i = fmEnd + 1; i < lines.length; i += 1) {
      if (lines[i].trim() !== "") {
        searchStart = i;
        break;
      }
    }
  }

  const blocks = [];
  let cursor = searchStart;
  for (const heading of headingOrder) {
    const block = findAdmonitionBlock(lines, cursor, heading);
    if (!block) {
      return { changed: false, missing: heading };
    }
    blocks.push(block);
    cursor = block.end + 1;
  }

  let nextLines = [...lines];

  if (blocks.length === headingOrder.length) {
    const first = searchStart;
    let last = blocks[blocks.length - 1].end;
    while (last + 1 < lines.length) {
      const nextLine = lines[last + 1];
      if (nextLine.trim() === "" || /^\s*<\/div>\s*$/.test(nextLine)) {
        last += 1;
        continue;
      }
      break;
    }
    const gridLines = buildGrid(blocks);
    nextLines = [...lines.slice(0, first), ...gridLines, ...lines.slice(last + 1)];
  }

  const mermaidNormalized = normalizeMermaidInit(nextLines);
  const next = mermaidNormalized.lines.join("\n");
  const changed = next !== original || mermaidNormalized.changed;

  if (!changed) {
    return { changed: false };
  }

  fs.writeFileSync(filePath, next, "utf8");
  return { changed: true };
}

const files = roots.flatMap((root) => walk(root));
const changed = [];

for (const file of files) {
  const result = wrapFile(file);
  if (result.changed) {
    changed.push(file);
  } else if (result.missing) {
    console.log(`SKIP ${file} (missing "${result.missing}")`);
  }
}

if (changed.length === 0) {
  console.log("No contract blocks updated.");
} else {
  console.log(`Updated ${changed.length} file(s):`);
  for (const file of changed) {
    console.log(`- ${file}`);
  }
}
