// Local preview. Mirrors Vercel's cleanUrls behaviour so /life-insurance-nz works
// here exactly as it will in production.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';

const DIST = new URL('./dist/', import.meta.url);
const PORT = process.env.PORT || 4321;
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg', '.png': 'image/png', '.woff2': 'font/woff2',
  '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8',
};

createServer(async (req, res) => {
  let path = decodeURIComponent(req.url.split('?')[0]);
  if (path === '/') path = '/index.html';
  if (!extname(path)) path += '.html';
  try {
    const body = await readFile(new URL('.' + path, DIST));
    res.writeHead(200, { 'Content-Type': TYPES[extname(path)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>404</h1><p><a href="/">Home</a></p>');
  }
}).listen(PORT, () => console.log(`Cover Check preview → http://localhost:${PORT}`));
