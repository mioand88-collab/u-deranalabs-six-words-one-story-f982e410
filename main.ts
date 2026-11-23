import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Six Words, One Story — a complete story in exactly six words:
// hope planted, then the season that never arrives.
const STORY = "He planted seeds. Spring never came.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
