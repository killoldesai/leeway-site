// Shared layout and building blocks for the Leeway marketing site.
export const SITE_URL = 'https://leeway.netofficials.com';
export const SITE_NAME = 'Leeway';
export const EMAIL = 'support@netofficials.com';
// Fill these in when the apps are live. While null, the buttons show "Coming soon".
export const STORES = { ios: null, android: null };
export const LASTMOD = '2026-10-29';

import { buildGraph } from './schema.mjs';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const j = (o) => JSON.stringify(o).replace(/</g, '\\u003c');

const NAV = [
  ['/features/', 'Features'],
  ['/pricing/', 'Pricing'],
  ['/compare/', 'Compare'],
  ['/blog/', 'Blog'],
  ['/faq/', 'FAQ'],
];

const APPLE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>';
const PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/></svg>';

export function storeButtons() {
  const one = (href, icon, small, big) =>
    `<a class="store" href="${href}"${href.startsWith('mailto') ? '' : ' rel="noopener"'}>${icon}<span><small>${small}</small><b>${big}</b></span></a>`;
  const note = `mailto:${EMAIL}?subject=${encodeURIComponent('Notify me when Leeway launches')}`;
  const ios = STORES.ios ? one(STORES.ios, APPLE, 'Download on the', 'App Store') : one(note, APPLE, 'Coming soon to the', 'App Store');
  const and = STORES.android ? one(STORES.android, PLAY, 'Get it on', 'Google Play') : one(note, PLAY, 'Coming soon to', 'Google Play');
  return `<div class="store-row">${ios}${and}</div>`;
}

export const phone = (img, alt, cls = '', eager = false) =>
  `<div class="phone ${cls}"><img src="/assets/img/${img}.webp" width="540" height="960" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></div>`;

export const faqList = (items) =>
  `<div class="faq">${items.map(([q, a]) => `<details class="reveal"><summary>${esc(q)}</summary><div class="ans">${a}</div></details>`).join('')}</div>`;

export const ctaBand = (h = 'Give your habits some leeway.', p = 'Free to start. Works offline. No account needed.') =>
  `<section id="get"><div class="wrap"><div class="cta-band reveal pop"><h2>${h}</h2><p>${p}</p>${storeButtons()}</div></div></section>`;

export const ribbonDemo = () => `
<div class="ribbon-card reveal" role="img" aria-label="A week of habit check-ins. Friday is missed, then a leeway day mends the streak automatically.">
  <div class="days" aria-hidden="true">
    ${['M', 'T', 'W', 'T'].map(() => '<div class="day"><svg viewBox="0 0 24 24"><path d="M6 12.5l4 4 8-9"/></svg></div>').join('')}
    <div class="day mend"><span class="miss">✕</span><span class="star">✦</span></div>
    <div class="day"><svg viewBox="0 0 24 24"><path d="M6 12.5l4 4 8-9"/></svg></div>
    <div class="day empty"></div>
  </div>
  <div class="days-label" aria-hidden="true"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>
  <div class="ribbon-caption" aria-hidden="true"><span class="c1">Friday got away from you.</span><span class="c2">Leeway mended it ✦ 5 day streak</span></div>
</div>`;

export const holdDemo = () => `
<div class="demo">
  <button class="hold" data-streak="12" aria-label="Hold for about one second to log Read 20 pages">
    <svg class="ring" viewBox="0 0 200 200" aria-hidden="true"><circle class="track" cx="100" cy="100" r="95"/><circle class="fill" cx="100" cy="100" r="95"/></svg>
    <span class="inner"><span class="emoji">📖</span><span class="nm">Read 20 pages</span><span class="st">12 day streak</span></span>
  </button>
  <p class="demo-hint" aria-live="polite">Press and hold the bubble.</p>
</div>`;

export function layout(p) {
  const url = SITE_URL + p.path;
  const title = p.title.includes('Leeway') || p.title.length > 50 ? p.title : `${p.title} | Leeway`;
  const crumbs = p.crumbs || [];
  const ld = [buildGraph(p, { SITE_URL, SITE_NAME, EMAIL, LASTMOD, posts: p.posts || [] })];
  const crumbHtml = crumbs.length
    ? `<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a>${crumbs.map(([n, h], i) => `<span>/</span>${i < crumbs.length - 1 ? `<a href="${h}">${esc(n)}</a>` : esc(n)}`).join('')}</nav>`
    : '';
  const nav = NAV.map(([h, n]) => `<li><a href="${h}"${p.path.startsWith(h) ? ' aria-current="page"' : ''}>${n}</a></li>`).join('');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(p.description)}">
<link rel="canonical" href="${url}">
${p.noindex ? '<meta name="robots" content="noindex,follow">' : '<meta name="robots" content="index,follow,max-image-preview:large">'}
<meta name="theme-color" content="#F7F2EA">
<meta property="og:type" content="${p.article ? 'article' : 'website'}">
<meta property="og:site_name" content="Leeway">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE_URL}/assets/img/og.png">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" href="/assets/img/favicon.png">
<link rel="apple-touch-icon" href="/assets/img/icon-192.png">
<link rel="preload" href="/assets/fonts/pjs-800.ttf" as="font" type="font/ttf" crossorigin>
<link rel="stylesheet" href="/assets/style.css">
${ld.map((o) => `<script type="application/ld+json">${j(o)}</script>`).join('\n')}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="nav"><div class="wrap">
  <a class="brand" href="/"><img src="/assets/img/icon-192.png" width="36" height="36" alt="">Leeway</a>
  <button class="menu-btn" aria-label="Menu" aria-expanded="false"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
  <ul>${nav}</ul>
  <a class="btn sm" href="/#get">Get the app</a>
</div></header>
<main id="main">
${p.hero !== undefined ? p.hero : `<div class="${/^(<article>|<section[^>]*>)<div class="narrow/.test(p.body.trim()) ? "narrow" : "wrap"} page-hero">${crumbHtml}${p.article ? `<p class="meta">${p.article.dateLabel} · ${p.article.read} min read</p>` : ''}</div>`}
${p.body}
</main>
<footer><div class="wrap">
  <div class="foot">
    <div><a class="brand" href="/"><img src="/assets/img/icon-192.png" width="36" height="36" alt="">Leeway</a>
      <p style="margin-top:14px;color:var(--muted);max-width:32ch">The forgiving habit tracker. Streaks that bend, not break.</p></div>
    <div><h4>Product</h4><ul><li><a href="/features/">Features</a></li><li><a href="/pricing/">Pricing</a></li><li><a href="/faq/">FAQ</a></li><li><a href="/compare/">Compare</a></li></ul></div>
    <div><h4>Features</h4><ul><li><a href="/features/leeway-days/">Leeway days</a></li><li><a href="/features/streaks/">Streaks</a></li><li><a href="/features/quit-bad-habits/">Quit bad habits</a></li><li><a href="/features/reminders/">Reminders</a></li></ul></div>
    <div><h4>Company</h4><ul><li><a href="/about/">About</a></li><li><a href="/blog/">Blog</a></li><li><a href="/contact/">Contact</a></li><li><a href="/privacy/">Privacy</a></li><li><a href="/delete-account/">Delete account</a></li></ul></div>
  </div>
  <div class="copy"><span>© 2026 Leeway. All rights reserved.</span><span>Made for people who miss a day sometimes.</span></div>
</div></footer>
<script src="/assets/main.js" defer></script>
</body>
</html>`;
}

// ---------- interactive screenshot showcase (no scrolling) ----------
export const SHOWCASE = [
  ['01-today', 'Today', 'Habits float as bubbles that show each streak at a glance.', '/features/streaks/'],
  ['02-hold-to-log', 'Hold to log', 'Press and hold a bubble. A ring fills and your day is logged.', '/features/streaks/'],
  ['03-leeway-mends', 'Leeway mends it', 'Miss a day and a leeway day mends your streak automatically.', '/features/leeway-days/'],
  ['04-streaks', 'Streaks', 'Current streak, best streak, total reps and a 14-day ribbon.', '/features/streaks/'],
  ['05-progress', 'Progress', 'Week, month and year views with a completion ring.', '/features/streaks/'],
  ['06-build-or-quit', 'Build or quit', 'Count habits you do, or clean days for habits you quit.', '/features/quit-bad-habits/'],
  ['07-milestones', 'Milestones', 'Small celebrations at 7, 30, 100 days and beyond.', '/features/streaks/'],
  ['08-add-habit', 'Add a habit', 'Pick an icon, schedule and reminder in a few taps.', '/features/reminders/'],
];
export const showcase = () => `
<div class="showcase" data-showcase>
  <div class="show-stage" aria-live="polite">
    <div class="blob a"></div><div class="blob b"></div>
    ${SHOWCASE.map(([img, name], i) => `<div class="sp" data-i="${i}" data-o="${i}"><img src="/assets/img/${img}.webp" width="540" height="960" alt="Leeway screen: ${esc(name)}" loading="lazy" decoding="async"></div>`).join('')}
  </div>
  <div class="show-tabs" role="tablist" aria-label="Leeway screens">
    ${SHOWCASE.map(([, name, text, href], i) => `<div class="tab-item${i === 0 ? ' active' : ''}"><button role="tab" type="button" aria-selected="${i === 0}" data-i="${i}"><b>${name}</b><span>${text}</span></button><a class="more" href="${href}">Learn more →</a></div>`).join('')}
  </div>
</div>`;

// ---------- contextual internal links ----------
const AUTOLINKS = [
  [/\bleeway days?\b/i, '/features/leeway-days/'],
  [/\bquit habits?\b|\bquit(?:ting)? a (?:bad )?habit\b|\bclean[- ]day counter\b/i, '/features/quit-bad-habits/'],
  [/\bstreak (?:view|card)s?\b|\bcalendar heatmap\b|\bmilestone badges?\b/i, '/features/streaks/'],
  [/\breminders?\b/i, '/features/reminders/'],
  [/\bworks? (?:fully )?offline\b|\bno account\b/i, '/features/offline-private/'],
  [/\bCSV(?: or| and) JSON\b/, '/features/export-data/'],
  [/\bmorning routines?\b/i, '/blog/morning-routine-checklist/'],
  [/\bhabit stacking\b/i, '/blog/habit-stacking-guide/'],
  [/\bprivacy policy\b/i, '/privacy/'],
];
const SKIP = new Set(['a', 'button', 'summary', 'h1', 'h2', 'h3', 'h4', 'script', 'style', 'figcaption', 'td', 'th']);
const TEXT = new Set(['p', 'li']);

export function autolink(body, pagePath, max = 6) {
  const [main, ...rest] = body.split('<section id="get">');
  const used = new Set([pagePath]);
  for (const m of main.matchAll(/href="(\/[^"#]*)"/g)) used.add(m[1]);
  let count = 0, skip = 0, text = 0;
  const out = main.split(/(<[^>]+>)/).map((tok) => {
    if (tok.startsWith('<')) {
      const m = tok.match(/^<(\/?)([a-z0-9]+)/i);
      if (m) {
        const tag = m[2].toLowerCase(), close = !!m[1], selfClosing = /\/>$/.test(tok);
        if (!selfClosing) {
          if (SKIP.has(tag)) skip += close ? -1 : 1;
          if (TEXT.has(tag)) text += close ? -1 : 1;
        }
      }
      return tok;
    }
    if (skip > 0 || text <= 0 || count >= max || !tok.trim()) return tok;
    for (const [re, href] of AUTOLINKS) {
      if (used.has(href)) continue;
      const m = tok.match(re);
      if (!m) continue;
      used.add(href); count++;
      tok = tok.slice(0, m.index) + `<a href="${href}">${m[0]}</a>` + tok.slice(m.index + m[0].length);
      if (count >= max) break;
    }
    return tok;
  }).join('');
  return [out, ...rest].join('<section id="get">');
}
