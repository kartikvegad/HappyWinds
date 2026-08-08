const sharp = require("sharp");
const fs = require("fs");

const dir = "../Happywinds MBG Data/MBG Data/PNG Logos/lOGOS PNG";
const files = fs.readdirSync(dir).filter((f) => f.startsWith("2021 PNG LOGO PROFILE"));
const CW = 240, CH = 190, IMGH = 140, COLS = 6;

(async () => {
  const rows = Math.ceil(files.length / COLS);
  const comps = [];
  for (let i = 0; i < files.length; i++) {
    const buf = await sharp(`${dir}/${files[i]}`)
      .resize(CW - 20, IMGH, { fit: "inside" })
      .png()
      .toBuffer();
    const meta = await sharp(buf).metadata();
    const col = i % COLS, row = Math.floor(i / COLS);
    comps.push({
      input: buf,
      left: col * CW + Math.round((CW - meta.width) / 2),
      top: row * CH + 10 + Math.round((IMGH - meta.height) / 2),
    });
    const num = files[i].match(/-(\d+)\.png/)[1];
    const svg = `<svg width="${CW}" height="30"><text x="50%" y="22" font-size="22" font-family="Arial" font-weight="bold" text-anchor="middle" fill="#c00">#${num}</text></svg>`;
    comps.push({ input: Buffer.from(svg), left: col * CW, top: row * CH + IMGH + 15 });
  }
  await sharp({
    create: { width: COLS * CW, height: rows * CH, channels: 3, background: { r: 255, g: 255, b: 255 } },
  })
    .composite(comps)
    .jpeg({ quality: 85 })
    .toFile("contact-sheet.jpg");
  console.log("done", files.length, "logos");
})();
