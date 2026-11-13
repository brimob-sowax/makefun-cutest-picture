
import * as fs from 'fs';
import * as path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scriptDir = __dirname;
const sourcePath = path.join(scriptDir, 'entry.png');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const destinationPath = path.join(outputDir, 'entry.png');

try {
  fs.mkdirSync(outputDir, { recursive: true });
  fs.copyFileSync(sourcePath, destinationPath);
  console.log(`Successfully copied ${sourcePath} to ${destinationPath}`);
} catch (error) {
  console.error(`Error copying file: ${error}`);
  process.exit(1);
}
