// One line, at most 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "One star. He asked me to write a review of him, then hovered over my shoulder correcting my grammar while I typed this sentence.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), line, "utf8");
