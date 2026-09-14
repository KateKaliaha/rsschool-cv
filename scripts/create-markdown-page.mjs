import { mkdir, readFile, writeFile } from 'node:fs/promises';

const markdown = await readFile('cv.md', 'utf8');
const escaped = markdown
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

await mkdir('dist/cv', { recursive: true });
await writeFile('dist/cv/index.html', `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Katsiaryna Kaliaha — Markdown CV</title>
    <style>body{max-width:900px;margin:40px auto;padding:0 24px;font:16px/1.6 system-ui,sans-serif;color:#263348}pre{white-space:pre-wrap;overflow-wrap:anywhere}a{color:#2359a8}</style>
  </head>
  <body><pre>${escaped}</pre></body>
</html>
`);
