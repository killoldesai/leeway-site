// Builds one linked JSON-LD @graph per page.
const plain = (html) => String(html).replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();

const FEATURE_LIST = [
  'Leeway days that mend a missed day automatically (2 per month)',
  'Hold-to-log habit bubbles',
  'Streaks, best streak and milestone badges',
  'Calendar heatmap with week, month and year progress',
  'Build habits or quit them with a clean-day counter',
  'Per-habit reminders and snooze',
  'Works offline with no account',
  'Free CSV and JSON export',
];

export function buildGraph(p, { SITE_URL, SITE_NAME, EMAIL, LASTMOD, posts = [] }) {
  const url = SITE_URL + p.path;
  const id = (frag) => `${url}#${frag}`;
  const ORG = `${SITE_URL}/#org`, SITE = `${SITE_URL}/#website`, APP = `${SITE_URL}/#app`;
  const img = { '@type': 'ImageObject', '@id': `${SITE_URL}/#og`, url: `${SITE_URL}/assets/img/og.png`, width: 1200, height: 630 };
  const logo = { '@type': 'ImageObject', '@id': `${SITE_URL}/#logo`, url: `${SITE_URL}/assets/img/icon-512.png`, width: 512, height: 512 };
  const crumbs = [['Home', '/'], ...(p.crumbs || [])];

  const org = {
    '@type': 'Organization', '@id': ORG, name: SITE_NAME, url: SITE_URL, logo, image: logo, email: EMAIL,
    contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: EMAIL, availableLanguage: 'English' },
  };
  const site = { '@type': 'WebSite', '@id': SITE, url: SITE_URL, name: SITE_NAME, description: 'The forgiving habit tracker. Streaks that bend, not break.', inLanguage: 'en', publisher: { '@id': ORG } };

  const offers = p.path === '/pricing/'
    ? [
        { '@type': 'Offer', name: 'Leeway Free', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: SITE_URL + '/pricing/' },
        { '@type': 'Offer', name: 'Leeway Pro (lifetime, planned)', price: '19.99', priceCurrency: 'USD', availability: 'https://schema.org/PreOrder', url: SITE_URL + '/pricing/' },
      ]
    : { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' };
  const app = {
    '@type': ['MobileApplication', 'SoftwareApplication'], '@id': APP, name: 'Leeway: Habit Streak Tracker', alternateName: 'Leeway',
    operatingSystem: 'iOS, Android', applicationCategory: 'LifestyleApplication', applicationSubCategory: 'Habit tracker',
    description: 'A forgiving habit tracker. Miss a day and a leeway day mends your streak. Works offline with no account.',
    url: SITE_URL, image: img, featureList: FEATURE_LIST, inLanguage: 'en', offers, publisher: { '@id': ORG }, author: { '@id': ORG },
    screenshot: ['01-today', '03-leeway-mends', '04-streaks', '05-progress'].map((n) => `${SITE_URL}/assets/img/${n}.webp`),
  };

  const pageType = p.type || 'WebPage';
  const hasAnswer = /class="answer"/.test(p.body);
  const page = {
    '@type': pageType, '@id': id('webpage'), url, name: p.h1 || p.title, headline: p.h1 || p.title, description: p.description, inLanguage: 'en',
    isPartOf: { '@id': SITE }, about: { '@id': APP }, publisher: { '@id': ORG }, primaryImageOfPage: { '@id': img['@id'] }, image: { '@id': img['@id'] },
    breadcrumb: { '@id': id('breadcrumb') }, dateModified: LASTMOD, datePublished: p.article?.date || '2026-10-29',
  };
  if (hasAnswer) page.speakable = { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.answer'] };

  const breadcrumb = {
    '@type': 'BreadcrumbList', '@id': id('breadcrumb'),
    itemListElement: crumbs.map(([n, h], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: SITE_URL + (h || p.path) })),
  };

  const graph = [org, site, app, page, breadcrumb];

  if (p.faq && p.faq.length) {
    graph.push({
      '@type': 'FAQPage', '@id': id('faq'), url, isPartOf: { '@id': id('webpage') }, inLanguage: 'en',
      mainEntity: p.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: plain(a) } })),
    });
  }

  if (p.article) {
    const text = plain(p.body);
    graph.push({
      '@type': 'BlogPosting', '@id': id('article'), mainEntityOfPage: { '@id': id('webpage') }, url,
      headline: p.h1, description: p.description, image: { '@id': img['@id'] }, inLanguage: 'en',
      datePublished: p.article.date, dateModified: p.article.date, wordCount: text.split(' ').length,
      timeRequired: `PT${p.article.read}M`, articleSection: 'Habits', keywords: (p.article.tags || []).join(', '),
      author: { '@id': ORG }, publisher: { '@id': ORG }, isPartOf: { '@id': `${SITE_URL}/blog/#blog` },
      about: (p.article.tags || []).slice(0, 3).map((t) => ({ '@type': 'Thing', name: t })),
    });
  }

  if (p.path === '/blog/') {
    graph.push({
      '@type': 'Blog', '@id': `${SITE_URL}/blog/#blog`, url, name: 'Leeway Blog', description: p.description, inLanguage: 'en', publisher: { '@id': ORG },
      blogPost: posts.map((x) => ({ '@type': 'BlogPosting', '@id': `${SITE_URL}/blog/${x.slug}/#article`, headline: x.title, url: `${SITE_URL}/blog/${x.slug}/`, datePublished: x.date, description: x.description })),
    });
  }

  if (p.items && p.items.length) {
    graph.push({
      '@type': 'ItemList', '@id': id('list'), name: p.h1, numberOfItems: p.items.length,
      itemListElement: p.items.map(([n, h], i) => ({ '@type': 'ListItem', position: i + 1, name: n, url: SITE_URL + h })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
