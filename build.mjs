import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { layout, autolink, SITE_URL, EMAIL, LASTMOD } from './lib.mjs';
import { PAGES, POSTS, FEATURES } from './content.mjs';

import { fileURLToPath } from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(root, 'dist');
const repo = path.join(root, '..');
const shots = path.join(root, 'src/source/screens');
const gfx = path.join(root, 'src/source');
const font = (w, n) => path.join(root, `src/fonts/PlusJakartaSans_${n}.ttf`);

fs.rmSync(out, { recursive: true, force: true });
const w = (p, s) => { const f = path.join(out, p); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, s); };

// ---- assets
fs.mkdirSync(path.join(out, 'assets/img'), { recursive: true });
fs.mkdirSync(path.join(out, 'assets/fonts'), { recursive: true });
fs.copyFileSync(path.join(root, 'src/style.css'), path.join(out, 'assets/style.css'));
fs.copyFileSync(path.join(root, 'src/main.js'), path.join(out, 'assets/main.js'));
for (const [wt, n] of [[500, '500Medium'], [700, '700Bold'], [800, '800ExtraBold']]) fs.copyFileSync(font(wt, n), path.join(out, `assets/fonts/pjs-${wt}.ttf`));
for (const f of fs.readdirSync(shots)) {
  await sharp(path.join(shots, f)).resize(540).webp({ quality: 82 }).toFile(path.join(out, 'assets/img', f.replace('.png', '.webp')));
}
const icon = path.join(gfx, 'app-icon-1024.png');
await sharp(icon).resize(512).png().toFile(path.join(out, 'assets/img/icon-512.png'));
await sharp(icon).resize(192).png().toFile(path.join(out, 'assets/img/icon-192.png'));
await sharp(icon).resize(48).png().toFile(path.join(out, 'assets/img/favicon.png'));
await sharp(path.join(gfx, 'play-feature-graphic-1024x500.png')).resize(1200, 630, { fit: 'contain', background: '#F7F2EA' }).png().toFile(path.join(out, 'assets/img/og.png'));

// ---- pages
const fixed = (s) => s.replace(/\[SUPPORT_EMAIL\]/g, EMAIL).replace(/\[DATE\]/g, 'October 29, 2026').replace(/href="delete-account\.html"/g, 'href="/delete-account/"').replace(/href="privacy\.html"/g, 'href="/privacy/"');
const legal = (file, p) => {
  let m = fs.readFileSync(path.join(root, 'src/source', file), 'utf8').match(/<main>([\s\S]*)<\/main>/)[1];
  m = fixed(m).replace(/<h1>[\s\S]*?<\/h1>/, '').replace(/<footer>[\s\S]*?<\/footer>/, '').replace(/ style="margin-top:\.8em"/g, '').replace(/class="card"/g, 'class="card" style="margin:1em 0"').replace(/class="meta"/, 'class="meta"');
  const more = p.path === '/delete-account/' ? '<p class="related-links">Related: <a href="/contact/">contact support</a>, <a href="/features/offline-private/">how Leeway keeps data on your phone</a>, <a href="/features/export-data/">export your data first</a> and the <a href="/faq/">FAQ</a>.</p>' : '<p class="related-links">Related: <a href="/delete-account/">delete your account</a>, <a href="/features/offline-private/">offline and private tracking</a> and <a href="/contact/">contact us</a>.</p>';
  return { ...p, body: `<section style="padding-top:0"><div class="narrow prose"><h1 style="font-size:clamp(2rem,5vw,3.2rem)">${p.h1}</h1>${m}${more}</div></section>` };
};
const pages = [
  ...PAGES,
  legal('privacy.html', { path: '/privacy/', title: 'Leeway Privacy Policy', description: 'How the Leeway habit tracker handles your information: on-device data, optional sync, crash reports and ads.', h1: 'Leeway Privacy Policy', crumbs: [['Privacy Policy']] }),
  legal('delete-account.html', { path: '/delete-account/', title: 'Delete Your Leeway Account', description: 'How to delete your Leeway account and synced data, inside the app or by email.', h1: 'Delete your Leeway account', crumbs: [['Delete account']] }),
];
for (const p of pages) {
  p.body = autolink(p.body, p.path);
  w(p.path.replace(/^\//, '') + 'index.html', layout(p));
}
w('404.html', layout({ path: '/404.html', noindex: true, title: 'Page not found', description: 'This page could not be found.', body: '<section style="padding-top:0"><div class="narrow center"><h1>This page took a day off.</h1><p class="lead">It happens. Leeway has you covered. Head back home and carry on.</p><p><a class="btn" href="/">Back to home</a></p></div></section>' }));

// ---- crawl files
const urls = pages.map((p) => `  <url><loc>${SITE_URL}${p.path}</loc><lastmod>${LASTMOD}</lastmod><priority>${p.path === '/' ? '1.0' : p.path.split('/').length <= 3 ? '0.8' : '0.6'}</priority></url>`).join('\n');
w('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
w('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
w('llms.txt', `# Leeway\n\n> Leeway is a forgiving habit tracker for iPhone and Android. You get 2 leeway days every month: miss a day and one mends your streak automatically. Works offline with no account. Free to start with 3 habits. Export to CSV or JSON is free.\n\n## Key pages\n${[['/', 'Home'], ['/features/', 'Features'], ...FEATURES.map((f) => [`/features/${f.slug}/`, f.name]), ['/pricing/', 'Pricing'], ['/faq/', 'FAQ'], ['/privacy/', 'Privacy policy']].map(([h, n]) => `- [${n}](${SITE_URL}${h})`).join('\n')}\n\n## Blog\n${POSTS.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}/)`).join('\n')}\n`);
w('CNAME', new URL(SITE_URL).hostname + '\n');
w('.nojekyll', '');
console.log(`Built ${pages.length} pages into dist/`);
