import sharp from 'sharp';
import { mkdirSync, readdirSync } from 'node:fs';
import { basename, extname, join } from 'node:path';

const SRC = 'screenshots';
const OUT = 'public/assets/projects';
const MAX_WIDTH = 1600;
const EXTS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif']);

mkdirSync(OUT, { recursive: true });

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

let files;
try {
  files = readdirSync(SRC).filter((f) => EXTS.has(extname(f).toLowerCase()));
} catch {
  console.log(`Skipping project images - no ${SRC}/ folder found.`);
  console.log(`Create it and drop a screenshot named after each project id (e.g. ${SRC}/aether-studio.png), then run \`npm run images:projects\`.`);
  process.exit(0);
}

if (files.length === 0) {
  console.log(`No screenshots found in ${SRC}/.`);
  process.exit(0);
}

for (const file of files) {
  const id = slug(basename(file, extname(file)));
  const src = join(SRC, file);
  const meta = await sharp(src).metadata();
  const width = Math.min(MAX_WIDTH, meta.width ?? MAX_WIDTH);
  await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82, alphaQuality: 90 })
    .toFile(join(OUT, `${id}.webp`));
  console.log(`  ${file} -> ${OUT}/${id}.webp (${width}w)`);
}

console.log(`built ${files.length} project image${files.length === 1 ? '' : 's'}`);
