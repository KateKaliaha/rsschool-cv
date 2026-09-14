import { mkdir, readFile, writeFile } from 'node:fs/promises';

const markdown = await readFile('cv.md', 'utf8');

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

const inline = (value) => escapeHtml(value)
  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
  .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  .replace(/\*([^*]+)\*/g, '<em>$1</em>')
  .replace(/`([^`]+)`/g, '<code>$1</code>');

const lines = markdown.split('\n');
const html = [];
let index = 0;

while (index < lines.length) {
  const line = lines[index];
  if (!line.trim()) {
    index += 1;
    continue;
  }
  if (line.startsWith('```')) {
    const code = [];
    index += 1;
    while (index < lines.length && !lines[index].startsWith('```')) {
      code.push(lines[index]);
      index += 1;
    }
    html.push(`<pre><code>${escapeHtml(code.join('\n'))}</code></pre>`);
    index += 1;
    continue;
  }
  const heading = line.match(/^(#{1,3})\s+(.+)$/);
  if (heading) {
    const level = heading[1].length;
    html.push(`<h${level}>${inline(heading[2])}</h${level}>`);
    index += 1;
    continue;
  }
  if (line.startsWith('- ')) {
    const items = [];
    while (index < lines.length && lines[index].startsWith('- ')) {
      items.push(`<li>${inline(lines[index].slice(2))}</li>`);
      index += 1;
    }
    html.push(`<ul>${items.join('')}</ul>`);
    continue;
  }
  const paragraph = [line];
  index += 1;
  while (index < lines.length && lines[index].trim() && !lines[index].startsWith('#') && !lines[index].startsWith('- ') && !lines[index].startsWith('```')) {
    paragraph.push(lines[index]);
    index += 1;
  }
  html.push(`<p>${inline(paragraph.join(' '))}</p>`);
}

await mkdir('dist/cv', { recursive: true });
await writeFile('dist/cv/index.html', `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Katsiaryna Kaliaha — Markdown CV</title>
    <style>body{max-width:900px;margin:40px auto;padding:0 24px;font:16px/1.6 system-ui,sans-serif;color:#263348}h1,h2,h3{color:#17283f;border-bottom:1px solid #dce4ef;padding-bottom:8px;margin-top:32px}h1{font-size:2.2rem}h2{font-size:1.5rem}h3{font-size:1.15rem}a{color:#2359a8}li+li{margin-top:8px}pre{white-space:pre-wrap;overflow-x:auto;padding:20px;border:1px solid #dce4ef;border-radius:12px;background:#f5f8fc}code{font-family:monospace}</style>
  </head>
  <body>${html.join('\n')}</body>
</html>
`);
