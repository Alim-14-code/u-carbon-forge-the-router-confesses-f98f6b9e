// The Router Confesses — make.fun entry.
// Copies entry.txt to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Revised: output path is resolved once and reused for both write and log,
// so the logged path always matches the file actually written.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const line = readFileSync(join(here, "entry.txt"), "utf8");
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${line.trim().length} chars)`);
