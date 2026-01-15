import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

// Read SVG from icon.svg file
const svgContent = readFileSync(join(publicDir, 'icon.svg'), 'utf-8');

async function generateFavicons() {
  const svgBuffer = Buffer.from(svgContent);

  // Generate PNG sizes
  const sizes = [16, 32, 48, 180, 192, 512];

  for (const size of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(join(publicDir, `icon-${size}.png`));
    console.log(`Generated icon-${size}.png`);
  }

  // Generate apple-touch-icon
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(join(publicDir, 'apple-touch-icon.png'));
  console.log('Generated apple-touch-icon.png');

  // Generate favicon.ico (48x48 - Google requires minimum 48x48)
  await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toFile(join(publicDir, 'favicon.ico'));

  await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toFile(join(publicDir, 'favicon.png'));

  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(join(publicDir, 'favicon-32x32.png'));

  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(join(publicDir, 'favicon-16x16.png'));

  console.log('Generated favicon PNGs');
  console.log('Done!');
}

generateFavicons().catch(console.error);
