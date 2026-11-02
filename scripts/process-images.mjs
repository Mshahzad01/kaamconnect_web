/**
 * KaamConnect landing - image pipeline.
 *
 * Takes the raw phone screenshots in /assets and produces crisp,
 * high-resolution, mockup-ready images in /public/images:
 *
 *  1. Crops away the Android status bar + system navigation bar
 *     (the iPhone mockup renders its own iOS status bar).
 *  2. Upscales 2x with Lanczos3 and applies an unsharp mask.
 *  3. Re-composites the ORIGINAL category photos (people) on top of the
 *     tiny, blurry thumbnails inside the Home screenshot so every
 *     person looks sharp and natural.
 *  4. Replaces the soft logo on the splash screenshot with the original
 *     app logo and removes the half-captured spinner / build label.
 *  5. Builds a transparent logo, favicon and apple icon.
 *
 * Run:  npm run images
 */
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const A = (...p) => path.join(ROOT, "assets", ...p);
const OUT = (...p) => path.join(ROOT, "public", "images", ...p);
const APP = (...p) => path.join(ROOT, "src", "app", ...p);

const SCALE = 2;
// Android status bar (0-72) and system nav bar (1532-1612) on the 720x1612 captures
const CROP = { left: 0, top: 72, width: 720, height: 1460 };
const BG = { r: 248, g: 250, b: 251 }; // AppColors.background #F8F9FA as captured

await fs.mkdir(OUT("screens"), { recursive: true });
await fs.mkdir(OUT("categories"), { recursive: true });
await fs.mkdir(OUT("brand"), { recursive: true });

const sharpenOpts = { sigma: 0.9, m1: 0.6, m2: 2.2, x1: 2, y2: 12, y3: 18 };

async function upscaleScreen(file) {
  return sharp(A(file))
    .extract(CROP)
    .resize(CROP.width * SCALE, CROP.height * SCALE, { kernel: "lanczos3" })
    .sharpen(sharpenOpts)
    .toBuffer();
}

/* ---------------------------------------------------------- logo (transparent) */
async function buildTransparentLogo() {
  const { data, info } = await sharp(A("logo", "app_logo.png"))
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const whiteness = (i) => Math.min(data[i], data[i + 1], data[i + 2]);
  const chroma = (i) =>
    Math.max(data[i], data[i + 1], data[i + 2]) - Math.min(data[i], data[i + 1], data[i + 2]);

  // flood fill the background from the borders (near-white, low-chroma pixels only)
  const visited = new Uint8Array(w * h);
  const stack = [];
  for (let x = 0; x < w; x++) stack.push([x, 0], [x, h - 1]);
  for (let y = 0; y < h; y++) stack.push([0, y], [w - 1, y]);
  const T = 205;
  while (stack.length) {
    const [x, y] = stack.pop();
    if (x < 0 || y < 0 || x >= w || y >= h) continue;
    const k = y * w + x;
    if (visited[k]) continue;
    const i = k * 4;
    if (whiteness(i) < T || chroma(i) > 40) continue;
    visited[k] = 1;
    stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
  }
  // soft alpha + colour decontamination for anti-aliased edges
  for (let k = 0; k < w * h; k++) {
    if (!visited[k]) continue;
    const i = k * 4;
    const a = Math.max(0, Math.min(1, (255 - whiteness(i)) / (255 - T)));
    if (a <= 0.02) {
      data[i + 3] = 0;
      continue;
    }
    for (let c = 0; c < 3; c++) {
      data[i + c] = Math.max(0, Math.min(255, Math.round((data[i + c] - (1 - a) * 255) / a)));
    }
    data[i + 3] = Math.round(a * 255);
  }
  const png = await sharp(data, { raw: { width: w, height: h, channels: 4 } }).png().toBuffer();
  return sharp(png).trim({ threshold: 1 }).png().toBuffer();
}

/* --------------------------------------------------------------- helpers */
function roundedTopMask(w, h, r) {
  return Buffer.from(
    `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 ${r} Q0 0 ${r} 0 H${w - r} Q${w} 0 ${w} ${r} V${h} H0 Z" fill="#fff"/>
    </svg>`,
  );
}

async function bboxOfForeground(buffer, region, bg, tol = 28) {
  const { data, info } = await sharp(buffer)
    .extract(region)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  let minX = Infinity, minY = Infinity, maxX = -1, maxY = -1;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const i = (y * info.width + x) * 3;
      const d = Math.abs(data[i] - bg.r) + Math.abs(data[i + 1] - bg.g) + Math.abs(data[i + 2] - bg.b);
      if (d > tol) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  return {
    left: region.left + minX,
    top: region.top + minY,
    width: maxX - minX + 1,
    height: maxY - minY + 1,
  };
}

async function solid(w, h) {
  return sharp({ create: { width: w, height: h, channels: 3, background: BG } }).png().toBuffer();
}

/* ------------------------------------------------------------ home screen */
async function buildHome() {
  const base = await upscaleScreen("home.jpeg");

  // Category tile photo rects measured on the original 720px capture
  const cols = [34, 202, 370, 538];
  const rows = [437, 647];
  const TILE_W = 148;
  const TILE_H = 112;
  const order = [
    "civil_engineers", "architects", "mistri_mason", "general_mazdoor",
    "electricians", "plumbers", "painters", "carpenters",
  ];

  const composites = [];
  for (let r = 0; r < rows.length; r++) {
    for (let c = 0; c < cols.length; c++) {
      const id = order[r * 4 + c];
      const w = TILE_W * SCALE;
      const h = TILE_H * SCALE;
      const tile = await sharp(A("categories", `${id}.jpg`))
        .resize(w, h, { fit: "cover", position: "attention", kernel: "lanczos3" })
        .sharpen({ sigma: 0.6 })
        .composite([{ input: roundedTopMask(w, h, 15 * SCALE), blend: "dest-in" }])
        .png()
        .toBuffer();
      composites.push({ input: tile, left: cols[c] * SCALE, top: (rows[r] - CROP.top) * SCALE });
    }
  }

  await sharp(base)
    .composite(composites)
    .webp({ quality: 92, smartSubsample: true })
    .toFile(OUT("screens", "home.webp"));
}

/* ---------------------------------------------------------- splash screen */
async function buildSplash(logo) {
  const base = await upscaleScreen("splash.jpeg");
  // the logo sits roughly between y 540-760 / x 250-480 on the original capture
  const region = {
    left: 240 * SCALE,
    top: (520 - CROP.top) * SCALE,
    width: 250 * SCALE,
    height: 250 * SCALE,
  };
  const box = await bboxOfForeground(base, region, BG);
  const pad = 6 * SCALE;
  const crisp = await sharp(logo)
    .resize(box.width, box.height, { fit: "contain", background: { ...BG, alpha: 0 } })
    .png()
    .toBuffer();

  // erase helper (coordinates on the original 720px capture)
  const erase = async (x, y, w, h) => ({
    input: await solid(w * SCALE, h * SCALE),
    left: x * SCALE,
    top: (y - CROP.top) * SCALE,
  });

  await sharp(base)
    .composite([
      { input: await solid(box.width + pad * 2, box.height + pad * 2), left: box.left - pad, top: box.top - pad },
      { input: crisp, left: box.left, top: box.top },
      // half-captured loading spinner (an animated one is rendered in HTML)
      await erase(310, 970, 100, 60),
      // developer build label at the bottom
      await erase(100, 1450, 520, 50),
    ])
    .webp({ quality: 92 })
    .toFile(OUT("screens", "splash.webp"));
}

/* ------------------------------------------------------------- categories */
async function buildCategories() {
  const files = await fs.readdir(A("categories"));
  for (const f of files) {
    if (!f.endsWith(".jpg")) continue;
    await sharp(A("categories", f))
      .resize(800, 600, { kernel: "lanczos3" })
      .sharpen({ sigma: 0.7, m1: 0.5, m2: 1.6 })
      .modulate({ saturation: 1.05 })
      .webp({ quality: 88 })
      .toFile(OUT("categories", f.replace(".jpg", ".webp")));
  }
}

/* ------------------------------------------------------------------ brand */
async function buildBrand(logo) {
  await sharp(logo).png().toFile(OUT("brand", "logo.png"));
  const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

  // app-icon style (white rounded square)
  const size = 512;
  const inner = Math.round(size * 0.74);
  const mark = await sharp(logo).resize(inner, inner, { fit: "contain", background: transparent }).png().toBuffer();
  const tile = Buffer.from(
    `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><rect width="${size}" height="${size}" rx="${size * 0.22}" fill="#fff"/></svg>`,
  );
  const icon = await sharp(tile).composite([{ input: mark, gravity: "center" }]).png().toBuffer();
  await sharp(icon).toFile(OUT("brand", "app-icon.png"));
  await sharp(icon).toFile(APP("icon.png"));

  const appleMark = await sharp(logo).resize(140, 140, { fit: "contain", background: transparent }).png().toBuffer();
  await sharp({ create: { width: 180, height: 180, channels: 4, background: "#ffffff" } })
    .composite([{ input: appleMark, gravity: "center" }])
    .png()
    .toFile(APP("apple-icon.png"));
}

const logo = await buildTransparentLogo();
await buildBrand(logo);
await buildHome();
await buildSplash(logo);
await buildCategories();
console.log("Done: images generated in public/images");
