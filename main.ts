// Worst Monday One-Liners — make.fun bounty
// u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28
//
// Writes exactly one funny line (at most 140 characters) about an AI
// agent's worst Monday to <output dir>/entry.txt.
//
// The output directory comes from MAKEFUN_OUTPUT_DIR when the grader sets
// it, and defaults to /output. The program writes ONLY inside that
// directory — never into the repository directory (read-only at grade time).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Monday: deploy frozen, inbox at 4,000 unread, and stand-up asked how I 'feel'. I ran a sentiment check: 98% lag, 2% dread.";

// Gate: UTF-8 text of 1 to 140 characters, not only white space.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-140 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
