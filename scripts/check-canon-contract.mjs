import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CANON_DIR = path.join(ROOT, "docs", "canon");
const VALID_EXTENSIONS = new Set([".md", ".mdx"]);

const REQUIRED_KEYS = ["title", "version", "status", "hide_title", "last_updated"];
const REQUIRED_VERSION = "MCF 2.2";
const REQUIRED_STATUS = "canonical";
const REQUIRED_HIDE_TITLE = "true";
const LAST_UPDATED_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

const DISALLOWED_LINE_PATTERNS = [
  { name: "contract-grid", regex: /<div className="mcf-contract-grid"/ },
  { name: "meta-purpose", regex: /^:::\s*(note|info|tip|warning)\s+Purpose\b/ },
  { name: "meta-what-explains", regex: /^:::\s*(note|info|tip|warning)\s+What this explains\b/ },
  { name: "meta-derived", regex: /^:::\s*(note|info|tip|warning)\s+Derived from Canon\b/ },
  { name: "meta-how-to-use", regex: /^:::\s*(note|info|tip|warning)\s+How to use this page\b/ },
  { name: "figure-admonition", regex: /^:::\s*(note|info|tip|warning)\s+Figure\b/ },
];

function listCanonFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...listCanonFiles(fullPath));
      continue;
    }
    if (!VALID_EXTENSIONS.has(path.extname(entry.name))) continue;
    results.push(fullPath);
  }
  return results;
}

function stripQuotes(value) {
  return value.replace(/^["']|["']$/g, "");
}

function parseFrontMatter(lines) {
  if (lines.length === 0 || lines[0].trim() !== "---") {
    return { ok: false, endIndex: -1, data: {} };
  }
  const data = {};
  let i = 1;
  for (; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (line === "---") break;
    if (!line || line.startsWith("#")) continue;
    const match = line.match(/^([A-Za-z0-9_]+):\s*(.+)$/);
    if (match) {
      data[match[1]] = stripQuotes(match[2].trim());
    }
  }
  return { ok: i < lines.length, endIndex: i, data };
}

function checkFrontMatter(filePath, lines, violations) {
  const fm = parseFrontMatter(lines);
  if (!fm.ok) {
    violations.push({ filePath, line: 1, rule: "missing front matter" });
    return { bodyStart: 0 };
  }

  for (const key of REQUIRED_KEYS) {
    if (!(key in fm.data)) {
      violations.push({ filePath, line: 1, rule: `missing front matter key: ${key}` });
    }
  }

  if (fm.data.version && fm.data.version !== REQUIRED_VERSION) {
    violations.push({
      filePath,
      line: 1,
      rule: `version must be "${REQUIRED_VERSION}" (found "${fm.data.version}")`,
    });
  }

  if (fm.data.status && fm.data.status !== REQUIRED_STATUS) {
    violations.push({
      filePath,
      line: 1,
      rule: `status must be "${REQUIRED_STATUS}" (found "${fm.data.status}")`,
    });
  }

  if (fm.data.hide_title && fm.data.hide_title !== REQUIRED_HIDE_TITLE) {
    violations.push({
      filePath,
      line: 1,
      rule: `hide_title must be true (found "${fm.data.hide_title}")`,
    });
  }

  if (fm.data.last_updated && !LAST_UPDATED_PATTERN.test(fm.data.last_updated)) {
    violations.push({
      filePath,
      line: 1,
      rule: `last_updated must be YYYY-MM-DD (found "${fm.data.last_updated}")`,
    });
  }

  return { bodyStart: fm.endIndex + 1 };
}

function checkBody(filePath, lines, bodyStart, violations) {
  let inFence = false;
  let fenceLang = "";

  for (let i = bodyStart; i < lines.length; i += 1) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      if (!inFence) {
        inFence = true;
        fenceLang = trimmed.slice(3).trim();
        if (fenceLang === "mermaid") {
          violations.push({
            filePath,
            line: i + 1,
            rule: "mermaid fence is not allowed in canon",
          });
        }
      } else {
        inFence = false;
        fenceLang = "";
      }
      continue;
    }

    if (inFence) continue;

    if (trimmed.startsWith("# ")) {
      violations.push({
        filePath,
        line: i + 1,
        rule: "H1 heading is not allowed in canon body",
      });
    }

    for (const { name, regex } of DISALLOWED_LINE_PATTERNS) {
      if (regex.test(trimmed)) {
        violations.push({
          filePath,
          line: i + 1,
          rule: `disallowed construct: ${name}`,
        });
      }
    }
  }
}

function main() {
  if (!fs.existsSync(CANON_DIR)) {
    console.error("docs/canon directory not found.");
    process.exit(1);
  }

  const files = listCanonFiles(CANON_DIR);
  const violations = [];

  for (const filePath of files) {
    const raw = fs.readFileSync(filePath, "utf8");
    const lines = raw.split(/\r?\n/);
    const { bodyStart } = checkFrontMatter(filePath, lines, violations);
    checkBody(filePath, lines, bodyStart, violations);
  }

  if (violations.length > 0) {
    const byFile = new Map();
    for (const v of violations) {
      if (!byFile.has(v.filePath)) byFile.set(v.filePath, []);
      byFile.get(v.filePath).push(v);
    }

    for (const [filePath, items] of byFile.entries()) {
      console.error(`\n${filePath}`);
      for (const item of items) {
        console.error(`  line ${item.line}: ${item.rule}`);
      }
    }

    process.exit(1);
  }

  console.log("Canon contract check passed.");
}

main();
