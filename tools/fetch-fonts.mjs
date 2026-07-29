// Downloads the woff2 files so the site self-hosts its type: no third-party font
// request on any page, no layout shift waiting on fonts.google.com.
import { mkdir, writeFile } from 'node:fs/promises';

const OUT = new URL('../public/assets/fonts/', import.meta.url);
await mkdir(OUT, { recursive: true });

// A modern-Chrome UA makes Google Fonts serve woff2 + unicode-range subsets.
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

const FACES = [
  ['poppins', 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'],
  ['fraunces', 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&display=swap'],
];

let css = `/* Self-hosted. Poppins (c) Indian Type Foundry, Fraunces (c) Undercase Type — both SIL OFL 1.1. */\n`;

for (const [family, url] of FACES) {
  const sheet = await fetch(url, { headers: { 'User-Agent': UA } }).then((r) => r.text());
  let i = 0;
  const rewritten = [];
  // Only keep the latin + latin-ext subsets; the rest is dead weight for an NZ site.
  for (const block of sheet.split('/*').slice(1)) {
    const subset = block.slice(0, block.indexOf('*/')).trim();
    if (!['latin', 'latin-ext'].includes(subset)) continue;
    const m = block.match(/src:\s*url\((https:[^)]+\.woff2)\)/);
    if (!m) continue;
    const name = `${family}-${subset}-${i++}.woff2`;
    const buf = Buffer.from(await fetch(m[1], { headers: { 'User-Agent': UA } }).then((r) => r.arrayBuffer()));
    await writeFile(new URL(name, OUT), buf);
    console.log(`  ✓ ${name.padEnd(28)} ${(buf.length / 1024).toFixed(0)}kb`);
    rewritten.push(
      block
        .slice(block.indexOf('*/') + 2)
        .replace(m[1], `/assets/fonts/${name}`)
        .trim()
    );
  }
  css += `\n/* ${family} */\n` + rewritten.join('\n') + '\n';
}

await writeFile(new URL('../public/assets/fonts.css', import.meta.url), css);
console.log('\nWrote public/assets/fonts.css');
