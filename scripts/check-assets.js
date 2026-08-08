const fs = require("fs");
const src = fs.readFileSync("src/data/work.ts", "utf8");
const re = /(?:logoImage|mockup|logicImage): "([^"]+)"/g;
let m;
const missing = [];
while ((m = re.exec(src))) {
  const p = "public" + m[1];
  if (!fs.existsSync(p)) missing.push(m[1]);
}
console.log(missing.length ? missing.join("\n") : "all ok");
