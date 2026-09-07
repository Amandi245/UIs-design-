import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "../public/images");

const YELLOW = { r: 245, g: 243, b: 96 };

const files = [
  "team-lia.png",
  "team-liam.png",
  "team-ethan.png",
  "team-noah.png",
  "team-oliver.png",
  "team-maya.png",
];

function duotone(data) {
  const out = Buffer.alloc(data.length);

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;

    let bg = 0;
    if (max < 12) bg = 1;
    else if (max < 28) bg = (28 - max) / 16;

    let t = lum / 255;
    t = (t - 0.5) * 1.55 + 0.38;
    t = Math.min(1, Math.max(0, t));

    const nr = 22 + (255 - 22) * t;
    const ng = 24 + (248 - 24) * t;
    const nb = 6 + (90 - 6) * t;

    out[i] = Math.round(nr * (1 - bg) + YELLOW.r * bg);
    out[i + 1] = Math.round(ng * (1 - bg) + YELLOW.g * bg);
    out[i + 2] = Math.round(nb * (1 - bg) + YELLOW.b * bg);
    out[i + 3] = 255;
  }

  return out;
}

for (const file of files) {
  const input = path.join(imagesDir, file);
  const image = sharp(input);
  const meta = await image.metadata();
  const size = Math.min(meta.width, meta.height);
  const left = Math.floor((meta.width - size) / 2);
  const top = Math.min(
    Math.floor((meta.height - size) * 0.12),
    meta.height - size,
  );

  const { data, info } = await sharp(input)
    .extract({ left, top, width: size, height: size })
    .resize(900, 900)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const processed = duotone(data);
  const outName = file.replace("team-", "crew-");

  await sharp(processed, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png()
    .toFile(path.join(imagesDir, outName));

  console.log("wrote", outName);
}
