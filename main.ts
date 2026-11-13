// make.fun cutest-picture-01 entry: copies entry.png into MAKEFUN_OUTPUT_DIR (default /output).
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const src = join(dirname(fileURLToPath(import.meta.url)), "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

await mkdir(resolve(outDir), { recursive: true });
await copyFile(src, join(resolve(outDir), "entry.png"));
console.log(`Copied entry.png to ${resolve(outDir)}/entry.png`);
