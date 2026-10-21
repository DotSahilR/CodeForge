import sharp from 'sharp';
import { existsSync, mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const SRC_HI = 'pic1.jpeg';
const SRC_CUTOUT = 'pic.png';

if (!existsSync(SRC_HI) || !existsSync(SRC_CUTOUT)) {
  console.log(`Skipping image build - ${SRC_HI} and ${SRC_CUTOUT} were not found in the project root.`);
  console.log('Add the high-res photo as pic1.jpeg and its background-removed cutout as pic.png, then run `npm run images` again.');
  process.exit(0);
}

const hi = sharp(SRC_HI);
const { width, height } = await hi.metadata();

const alpha = await sharp(SRC_CUTOUT)
  .ensureAlpha()
  .extractChannel('alpha')
  .resize(width, height, { kernel: 'lanczos3' })
  .blur(0.8)
  .raw()
  .toBuffer();

const rgb = await sharp(SRC_HI).removeAlpha().raw().toBuffer();
const rgba = Buffer.alloc(width * height * 4);
for (let i = 0; i < width * height; i++) {
  rgba[i * 4] = rgb[i * 3];
  rgba[i * 4 + 1] = rgb[i * 3 + 1];
  rgba[i * 4 + 2] = rgb[i * 3 + 2];
  rgba[i * 4 + 3] = alpha[i];
}
const cutout = await sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();

for (const w of [1100, 720, 420]) {
  await sharp(cutout).resize({ width: w }).webp({ quality: 86, alphaQuality: 90 }).toFile(`${OUT}/portrait-${w}.webp`);
}

const portrait = await sharp(cutout).resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#1ed760" stop-opacity="0.35"/><stop offset="1" stop-color="#1ed760" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="300" font-family="Figtree, 'Arial Narrow', sans-serif" font-weight="800" font-size="110" fill="#ffffff" letter-spacing="2">CODEFORGE</text>
        <text x="78" y="356" font-family="Figtree, Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#1ed760" letter-spacing="16">SOFTWARE STUDIO</text>
        <text x="78" y="424" font-family="Figtree, Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#b3b3b3" letter-spacing="5">WEB • SAAS &amp; MVP • AI &amp; AUTOMATION</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);
console.log('images built');
