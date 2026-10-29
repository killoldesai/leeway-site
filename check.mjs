// Post-build checks: broken links, contextual internal links, JSON-LD validity, SEO basics.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const dist = path.join(path.dirname(fileURLToPath(import.meta.url)), 'dist');
const files = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : files.push(p); } })(dist);
let problems = 0;
const bad = (m) => { problems++; console.log('✗', m); };
const rows = [];
for (const f of files.filter((x) => x.endsWith('index.html'))) {
  const rel = '/' + path.relative(dist, f).split(path.sep).join('/').replace(/index\.html$/, '');
  const s = fs.readFileSync(f, 'utf8');
  const main = (s.match(/<main[\s\S]*<\/main>/) || [''])[0];
  const title = s.match(/<title>(.*?)<\/title>/)[1], desc = (s.match(/name="description" content="(.*?)"/) || [])[1] || '';
  if (title.length > 60) bad(`${rel} title ${title.length} chars`);
  if (desc.length < 70 || desc.length > 160) bad(`${rel} description ${desc.length} chars`);
  if ((s.match(/<h1/g) || []).length !== 1) bad(`${rel} h1 count`);
  for (const m of s.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    const u = m[1], p = u.endsWith('/') ? u + 'index.html' : u;
    if (!fs.existsSync(path.join(dist, p))) bad(`${rel} broken link ${u}`);
  }
  const inbody = new Set([...main.matchAll(/<a [^>]*href="(\/[^"#?]*)"/g)].map((m) => m[1]).filter((h) => h !== rel && h !== '/'));
  const prose = [...main.matchAll(/<(?:p|li)[^>]*>[\s\S]*?<\/(?:p|li)>/g)].filter((m) => /<a href="\//.test(m[0])).length;
  const ld = [...s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => { try { return JSON.parse(m[1]); } catch { bad(`${rel} invalid JSON-LD`); return null; } }).filter(Boolean);
  const types = ld.flatMap((o) => (o['@graph'] || [o]).map((n) => [].concat(n['@type']).join('/')));
  if (!/noindex/.test(s)) {
    for (const t of ['Organization', 'WebSite', 'MobileApplication/SoftwareApplication', 'BreadcrumbList']) if (!types.includes(t)) bad(`${rel} missing ${t}`);
    if (!types.some((t) => /Page$/.test(t))) bad(`${rel} missing page node`);
    if (inbody.size < 3) bad(`${rel} only ${inbody.size} contextual internal links`);
  }
  rows.push([rel, inbody.size, prose, types.filter((t) => !/^(Organization|WebSite|BreadcrumbList)$/.test(t)).join(', ')]);
}
console.table(rows.map(([p, l, pl, t]) => ({ page: p, 'body links': l, 'in-text links': pl, schema: t })));
console.log(problems ? `${problems} problem(s)` : 'All checks passed');
process.exit(problems ? 1 : 0);
