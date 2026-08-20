import { cpSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { dirname, extname, join } from 'node:path';

const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg']);

function walk(dir, onFile) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      walk(full, onFile);
    } else {
      onFile(full);
    }
  }
}

function copyContentImages() {
  mkdirSync('public/content', { recursive: true });
  walk('content', (file) => {
    if (!IMAGE_EXT.has(extname(file).toLowerCase())) {
      return;
    }
    const dest = file.replace(/^content/, 'public/content');
    mkdirSync(dirname(dest), { recursive: true });
    cpSync(file, dest);
  });
}

copyContentImages();
