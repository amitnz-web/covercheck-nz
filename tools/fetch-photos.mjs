// One-off asset fetcher. Downloads each photo at three widths from the Unsplash CDN
// (which does the resizing/compression server-side, so we need no image toolchain locally)
// into public/assets/photos. Re-runnable: skips files that already exist.
import { mkdir, writeFile, access } from 'node:fs/promises';
import { PHOTOS, WIDTHS } from '../data/images.mjs';

const OUT = new URL('../public/assets/photos/', import.meta.url);
await mkdir(OUT, { recursive: true });

const exists = async (u) => { try { await access(u); return true; } catch { return false; } };

let got = 0, skipped = 0, failed = [];
for (const p of Object.values(PHOTOS)) {
  for (const w of WIDTHS) {
    const name = `${p.file}-${w}.jpg`;
    const dest = new URL(name, OUT);
    if (await exists(dest)) { skipped++; continue; }
    // 3:2 crop keeps every photo the same shape so the grid never jumps.
    const url = `https://images.unsplash.com/${p.src}?auto=format&fit=crop&crop=entropy&w=${w}&h=${Math.round(w * 2 / 3)}&q=${w > 1400 ? 68 : 76}&fm=jpg`;
    try {
      const r = await fetch(url);
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const buf = Buffer.from(await r.arrayBuffer());
      if (buf.length < 5000) throw new Error(`suspiciously small (${buf.length}b)`);
      await writeFile(dest, buf);
      console.log(`  ✓ ${name.padEnd(28)} ${(buf.length / 1024).toFixed(0)}kb`);
      got++;
    } catch (e) {
      console.error(`  ✗ ${name}: ${e.message}`);
      failed.push(name);
    }
  }
}
console.log(`\n${got} downloaded, ${skipped} already present, ${failed.length} failed`);
if (failed.length) { console.error('FAILED:', failed.join(', ')); process.exit(1); }
