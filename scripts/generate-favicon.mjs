import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

// SVG with proper text rendering
const svgContent = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="96" fill="#18181B"/>
  <text x="256" y="340" font-family="Arial, sans-serif" font-size="240" font-weight="700" fill="white" text-anchor="middle">BT</text>
</svg>
`;

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

  // Generate favicon.ico (32x32)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(join(publicDir, 'favicon.png'));

  // For ICO, we'll use the PNG as fallback
  // Most browsers support PNG favicons now
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
