import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

// Use the original PNG, avoiding another lossy encode of the site's WebP.
// Keep the whole face and hair while removing space around the shoulders.
const portrait = sharp(
  fileURLToPath(
    new URL('../src/assets/profile-pic-square.png', import.meta.url),
  ),
).extract({ left: 177, top: 70, width: 900, height: 900 });

async function png(size) {
  return portrait
    .clone()
    .resize(size, size, { kernel: 'lanczos3' })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

for (const [name, size] of [
  ['favicon-32.png', 32],
  ['favicon-96.png', 96],
  ['favicon-512.png', 512],
  ['apple-touch-icon.png', 180],
]) {
  await writeFile(
    new URL(`../public/${name}`, import.meta.url),
    await png(size),
  );
}

// ICO directory containing PNG frames for browsers requesting /favicon.ico.
const sizes = [16, 32, 48];
const frames = await Promise.all(sizes.map(png));
const directory = Buffer.alloc(6 + sizes.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(sizes.length, 4);
let offset = directory.length;
frames.forEach((frame, index) => {
  const entry = 6 + index * 16;
  directory[entry] = sizes[index];
  directory[entry + 1] = sizes[index];
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(frame.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += frame.length;
});
await writeFile(
  new URL('../public/favicon.ico', import.meta.url),
  Buffer.concat([directory, ...frames]),
);
