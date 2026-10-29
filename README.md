# Leeway marketing website

Static, no-framework site for https://leeway.netofficials.com (24 pages).

```bash
# from the repo root
npm install        # only needed for sharp (image conversion)
npm run build      # writes dist/
npm run serve      # http://localhost:4173
```

Deploys to GitHub Pages via `.github/workflows/pages.yml` on every push to `main`. `dist/CNAME` sets the custom domain and `.nojekyll` stops Jekyll processing.

## Where to change things
- `lib.mjs`: `SITE_URL`, contact `EMAIL`, `STORES` (set the iOS and Play URLs here when live; the "Coming soon" buttons switch automatically), layout, header, footer, JSON-LD.
- `content.mjs`: all page copy (home, features, pricing, compare, blog posts, FAQ, about, contact).
- `src/style.css`, `src/main.js`: design and motion (respects `prefers-reduced-motion`).
- `build.mjs`: image conversion, sitemap, robots.txt, llms.txt, CNAME. Fonts live in `src/fonts/`. Source images and the privacy/delete-account HTML live in `src/source/`.

## Before launch
- Confirm Pro details on `/pricing/` (currently a planned $19.99 lifetime, labelled "coming soon").
- Submit `https://leeway.netofficials.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- Use these URLs in the store listings: privacy `/privacy/`, delete account `/delete-account/`, marketing URL `/`.
