import { phone, storeButtons, faqList, ctaBand, ribbonDemo, holdDemo, showcase, EMAIL } from './lib.mjs';

const arrow = ' →';
const card = (href, ico, cls, h, p) => `<a class="card reveal" href="${href}"><div class="ico ${cls}" aria-hidden="true">${ico}</div><h3>${h}</h3><p>${p}</p><span class="more">Learn more${arrow}</span></a>`;
const sec = (inner, cls = '') => `<section class="${cls}"><div class="wrap">${inner}</div></section>`;

export const FAQ = [
  ['What is Leeway?', '<p>Leeway is a habit tracker for iPhone and Android that forgives missed days. You get 2 leeway days every month. When you miss a day, a leeway day mends your streak automatically.</p>'],
  ['What is a leeway day?', '<p>A leeway day is a monthly allowance that protects your streak. You get 2 per month, shared across all your habits. A mended day is marked as leeway, never as done, so your numbers stay honest. <a href="/features/leeway-days/">See how leeway days work</a>.</p>'],
  ['Is Leeway free?', '<p>Yes. You can track 3 habits for free, with streaks, reminders, progress charts and data export included. You can watch an optional short video to unlock another habit slot. <a href="/pricing/">See pricing</a>.</p>'],
  ['Do I need an account?', '<p>No. Leeway works fully offline with no account. Signing in with Google is optional and only needed if you want to back up and sync your habits across devices.</p>'],
  ['Can I track habits I want to quit?', '<p>Yes. A quit habit counts clean days. If you slip, you log it honestly and the counter restarts. <a href="/features/quit-bad-habits/">Read about quit habits</a>.</p>'],
  ['Can I export my data?', '<p>Yes, any time and for free. Export everything to CSV or a JSON backup, and restore from a backup whenever you want. <a href="/features/export-data/">See export options</a>.</p>'],
  ['How does Leeway handle my privacy?', '<p>Your habits live on your phone. If you choose to sign in, they are stored in your own account for sync. Leeway does not sell your data. Read the <a href="/privacy/">privacy policy</a>.</p>'],
  ['When is Leeway available?', `<p>Leeway is being prepared for the App Store and Google Play. Email <a href="mailto:${EMAIL}?subject=Notify%20me%20when%20Leeway%20launches">${EMAIL}</a> and we will let you know the day it goes live.</p>`],
];

const home = {
  path: '/', faq: FAQ.slice(0, 6),
  title: 'Leeway: The Forgiving Habit Tracker That Keeps Your Streak',
  description: 'Miss a day and keep your streak. Leeway gives you 2 leeway days a month, so one bad day never erases weeks of progress. Private, offline, free to start.',
  hero: `
<div class="hero"><div class="wrap">
  <div>
    <span class="eyebrow rise">The forgiving habit tracker</span>
    <h1 class="rise" style="--d:.05s">Miss a day. <span class="grad nowrap">Keep your streak.</span></h1>
    <p class="lead rise" style="--d:.12s">Most habit trackers reset you to zero the moment life gets in the way. Leeway gives you 2 leeway days every month, so one bad day never erases weeks of progress.</p>
    <div class="rise" style="--d:.2s">${storeButtons()}<p class="fineprint">Free to start · Works offline · No account needed</p></div>
  </div>
  <div class="hero-art" aria-hidden="false">
    <div class="blob a"></div><div class="blob b"></div>
    <span class="orb o1" aria-hidden="true">📖</span><span class="orb o2" aria-hidden="true">🚶</span><span class="orb o3" aria-hidden="true">🧘</span><span class="orb o4" aria-hidden="true">✦</span>
    ${phone('01-today', 'Leeway Today screen with floating habit bubbles for reading, walking and breathing', 'first', true)}
    <div class="phone second" style="--rot:4deg;transform:rotate(4deg)"><img src="/assets/img/03-leeway-mends.webp" width="540" height="960" alt="Leeway mending a missed Friday with a leeway day" decoding="async"></div>
  </div>
</div></div>`,
  body: `
<div class="marquee" aria-hidden="true"><div class="track">
  ${['📖 Read 20 pages', '🚶 Walk 8k steps', '🧘 Deep breathing', '🍬 No sugar', '✍️ Journal', '💧 Drink water', '🎸 Practice guitar', '🌅 Wake at 6', '🤸 Stretch', '🗣️ Learn Spanish'].concat(['📖 Read 20 pages', '🚶 Walk 8k steps', '🧘 Deep breathing', '🍬 No sugar', '✍️ Journal', '💧 Drink water', '🎸 Practice guitar', '🌅 Wake at 6', '🤸 Stretch', '🗣️ Learn Spanish']).map((c) => `<span class="chip">${c}</span>`).join('')}
</div></div>

${sec(`
<div class="split">
  <div>
    <span class="eyebrow reveal">Why streaks break</span>
    <h2 class="reveal">One bad day should not erase 40 good ones.</h2>
    <p class="lead reveal">Strict streak counters turn a sick day or a late flight into a failure. People feel the loss, stop opening the app and give up on a habit that was working.</p>
    <p class="reveal">Leeway treats a missed day as normal. Each month you get 2 leeway days shared by all your habits. When you miss, one is spent automatically and the streak carries on. The day is shown as leeway, so your history stays truthful.</p>
    <a class="btn ghost reveal" href="/features/leeway-days/">How leeway days work${arrow}</a>
  </div>
  ${ribbonDemo()}
</div>`)}

${sec(`
<div class="sec-head center"><span class="eyebrow">Built for real life</span><h2>Everything you need to stay consistent</h2><p class="lead">A calm, fast habit tracker with the features that matter and none of the noise.</p></div>
<div class="grid g3">
  ${card('/features/leeway-days/', '✦', 'leeway', 'Leeway days', 'Two a month. Miss a day and your streak is mended automatically.')}
  ${card('/features/streaks/', '🔥', 'amber', 'Streaks and milestones', 'Current streak, best streak, total reps and badges at 7, 30 and 100 days.')}
  ${card('/features/quit-bad-habits/', '🚭', 'rose', 'Build or quit', 'Count clean days for habits you want to drop. Log a slip honestly.')}
  ${card('/features/reminders/', '🔔', 'sky', 'Gentle reminders', 'A time for each habit, on the days it is scheduled. Snooze without losing your streak.')}
  ${card('/features/offline-private/', '🔒', 'mint', 'Offline and private', 'No account needed. Your habits stay on your phone.')}
  ${card('/features/export-data/', '📤', 'sun', 'Free data export', 'CSV or JSON backup whenever you want. Free forever.')}
</div>`)}

${sec(`
<div class="split rev">
  <div class="reveal">${holdDemo()}</div>
  <div>
    <span class="eyebrow reveal">Hold to log</span>
    <h2 class="reveal">No tiny checkboxes. Just press and hold.</h2>
    <p class="lead reveal">Habits float on your Today screen as bubbles. Hold one and a ring fills, then your day is logged with a small burst of sparks. Hold again to undo.</p>
    <ul class="ticks reveal"><li>Partial credit when you did half your goal</li><li>Count habits with targets, such as 8 glasses of water</li><li>Pick your own days, from daily to weekdays only</li></ul>
  </div>
</div>`)}

${sec(`
<div class="dark-band reveal pop">
  <div class="stats">
    <div><b data-count="2">2</b><span>leeway days every month</span></div>
    <div><b data-count="3">3</b><span>habits free to start</span></div>
    <div><b data-count="0">0</b><span>accounts required</span></div>
    <div><b data-count="100" data-suffix="%">100%</b><span>of your data exportable</span></div>
  </div>
</div>`)}

${sec(`
<div class="sec-head center"><span class="eyebrow">A look inside</span><h2>Designed to feel calm</h2><p class="lead">Tap a screen to see how Leeway works day to day.</p></div>
${showcase()}`)}

${sec(`
<div class="sec-head center"><span class="eyebrow">How it works</span><h2>Start in under a minute</h2></div>
<div class="grid g3">
  <div class="card reveal"><div class="ico amber" aria-hidden="true">1</div><h3>Pick a habit</h3><p>Choose a template such as Read or Walk, or write your own. Add a time and a day start.</p></div>
  <div class="card reveal" style="--d:.1s"><div class="ico mint" aria-hidden="true">2</div><h3>Hold to log</h3><p>Check in each day with one press and hold. Watch your streak and your calendar fill.</p></div>
  <div class="card reveal" style="--d:.2s"><div class="ico leeway" aria-hidden="true">3</div><h3>Let leeway catch you</h3><p>Miss a day and a leeway day mends the streak. You keep going without guilt.</p></div>
</div>`)}

${sec(`
<div class="sec-head"><span class="eyebrow">Questions</span><h2>Frequently asked</h2></div>
<div class="narrow" style="margin:0">${faqList(FAQ.slice(0, 6))}</div>
<p style="margin-top:20px"><a class="btn ghost" href="/faq/">All questions${arrow}</a></p>`)}

${ctaBand()}`,
};

// ---------- feature pages ----------
const F = (o) => o;
export const FEATURES = [
  F({
    slug: 'leeway-days', icon: '✦', cls: 'leeway', name: 'Leeway days',
    title: 'Habit Tracker That Won’t Reset Your Streak After a Miss',
    description: 'Leeway gives you 2 leeway days every month. Miss a day and your habit streak is mended automatically, and shown honestly as leeway.',
    h1: 'The habit tracker that doesn’t reset your streak when you miss a day',
    answer: 'A leeway day is a monthly allowance that protects your habit streak. Leeway gives you 2 per month, shared across all habits. When you miss a day, a leeway day mends the gap automatically.',
    shot: ['03-leeway-mends', 'Leeway mending a missed day on a 5 day streak'],
    sections: [
      ['Why missing one day should not mean starting over', '<p>Habits are built over weeks and broken by ordinary life. Illness, travel and a bad night of sleep all cause missed days. A counter that drops to zero punishes you for being human, and the loss often decides whether you try again.</p><p>Leeway keeps the long view. One missed day inside a good run is a small gap, so the streak stays alive.</p>'],
      ['How leeway days work', '', ['You get 2 leeway days every month, shared by all your habits.', 'Miss a scheduled day and one is spent automatically on the next open.', 'The mended day is drawn in purple with a ✦, never as a checkmark.', 'Your total reps and completion numbers count only real check-ins.', 'The allowance resets each month. A leeway sheet shows what is left.']],
      ['Honest by design', '<p>A streak you cannot trust is worth little. Leeway marks every mended day separately in the calendar, the ribbon and the stats. You can always see how many days you did the habit and how many leeway days kept the streak going.</p>'],
    ],
    faq: [['How many leeway days do I get?', '<p>2 per month by default, shared across all habits.</p>'], ['Do leeway days count as completed?', '<p>No. They protect the streak but are labelled as leeway and are not counted as check-ins.</p>'], ['Does snoozing use a leeway day?', '<p>No. Snoozing a habit freezes the streak and spends no leeway.</p>']],
    related: ['streaks', 'reminders'],
  }),
  F({
    slug: 'streaks', icon: '🔥', cls: 'amber', name: 'Streaks and milestones',
    title: 'Habit Streak Tracker With Milestones and Heatmap',
    description: 'Track your current streak, best streak and total reps. See a calendar heatmap and earn milestone badges at 7, 30 and 100 days.',
    h1: 'A habit streak tracker you will want to open',
    answer: 'Leeway shows your current streak, longest streak and total repetitions for every habit, with a calendar heatmap and milestone badges at 7, 30, 100 days and beyond.',
    shot: ['04-streaks', 'Leeway streak card with current streak, best streak and total reps'],
    sections: [
      ['Your streak, at a glance', '', ['Current streak, best streak and total reps on one card.', 'A last-14-days ribbon shows done, partial, missed and leeway days.', 'Streak numbers on every bubble on the Today screen.']],
      ['See months of progress in one view', '<p>A calendar heatmap shows how consistent you have been. Tap a past day to log it, mark it partial or clear it. Week, month and year views show completion rates and trends.</p>'],
      ['Milestones worth keeping', '<p>At 7, 14, 21, 30, 50 and 100 days Leeway celebrates with a badge and a share card. Celebrations stay small in gentle mode.</p>'],
    ],
    faq: [['Can I fix a day I forgot to log?', '<p>Yes. Open the habit, tap the date and choose Done, Partial or Clear.</p>'], ['What is the day start setting?', '<p>It sets when your day rolls over. The default is 4 AM, so a late-night log counts for the day you meant.</p>']],
    related: ['leeway-days', 'offline-private'],
  }),
  F({
    slug: 'quit-bad-habits', icon: '🚭', cls: 'rose', name: 'Build or quit',
    title: 'Quit Bad Habit Tracker With Clean Day Counter',
    description: 'Track habits you want to quit. Count clean days, log a slip honestly and see your progress, with leeway days to soften the reset.',
    h1: 'Quit a bad habit with a clean-day counter',
    answer: 'In Leeway a quit habit counts clean days. Each day you check in as clean. If you slip, you log it honestly and keep your history.',
    shot: ['06-build-or-quit', 'Leeway build and quit habit options'],
    sections: [
      ['Two kinds of habit in one app', '<p>Build habits such as reading, walking and journaling count when you do them. Quit habits such as no sugar or no smoking count the days you stay clean.</p>'],
      ['Slips are data, not failure', '', ['Log a slip in two taps and add a note about what happened.', 'Your longest clean run and total clean days are kept.', 'A leeway day can protect a clean streak after one slip.']],
      ['Set it up your way', '<p>Choose icons and colors, set a daily reminder, and write an identity statement such as “I am someone who does not need sugar to unwind.”</p>'],
    ],
    faq: [['Can I count a quit habit with a target?', '<p>Yes. Count habits let you set a daily target and go over it.</p>'], ['Is this medical advice?', '<p>No. Leeway is a tracking tool. For addiction or health concerns, speak with a qualified professional.</p>']],
    related: ['leeway-days', 'reminders'],
  }),
  F({
    slug: 'reminders', icon: '🔔', cls: 'sky', name: 'Gentle reminders',
    title: 'Habit Reminder App With Gentle, Per-Habit Notifications',
    description: 'Set a reminder time for each habit and get a notification only on scheduled days. Snooze a habit without losing your streak.',
    h1: 'Habit reminders that nudge without nagging',
    answer: 'Leeway lets you set a reminder time for each habit. Notifications arrive only on the days that habit is scheduled, and you can snooze a habit without losing your streak.',
    shot: ['02-hold-to-log', 'Leeway Today screen with habit bubbles ready to log'],
    sections: [
      ['A reminder for each habit', '<p>Morning pages at 7:00, a walk at 18:00, a stretch at 22:00. Each habit has its own time and its own schedule, from every day to weekdays only.</p>'],
      ['Asked politely', '<p>Leeway explains reminders before the system permission prompt appears, so you know what you are agreeing to. Reminders are scheduled by your phone and do not need a server.</p>'],
      ['Snooze when life gets busy', '', ['Pause a habit for 3 days, a week or until a date you pick.', 'The streak freezes while snoozed.', 'No leeway days are spent.']],
    ],
    faq: [['Do reminders work offline?', '<p>Yes. They are scheduled on your phone.</p>'], ['Can I set quiet hours?', '<p>Reminder times are set per habit, so you choose when each one arrives.</p>']],
    related: ['streaks', 'offline-private'],
  }),
  F({
    slug: 'offline-private', icon: '🔒', cls: 'mint', name: 'Offline and private',
    title: 'Private Habit Tracker That Works Offline With No Account',
    description: 'Leeway works fully offline and needs no account. Your habits stay on your phone, with optional sign-in to back up and sync.',
    h1: 'A private habit tracker that works offline',
    answer: 'Leeway works fully offline and does not need an account. Your habits, check-ins and notes are saved on your phone. Signing in is optional and only adds backup and sync.',
    shot: ['01-today', 'Leeway Today screen'],
    sections: [
      ['Your habits stay on your phone', '<p>Open the app and start tracking. There is no sign-up wall, no email requirement and no waiting for a connection on a train or a flight.</p>'],
      ['Sync only if you want it', '', ['Sign in with Google to back up and sync across your devices.', 'Synced data is protected by access rules so only your account can read it.', 'Delete your cloud data any time from Settings. Local data is not touched.']],
      ['What we do not collect', '<p>Leeway does not collect your precise location, contacts, photos, microphone or camera data. Read the full <a href="/privacy/">privacy policy</a>.</p>'],
    ],
    faq: [['Does Leeway sell my data?', '<p>No. See the privacy policy for the providers that run the app.</p>'], ['How do I delete my account?', '<p>In the app go to Settings, then Sync, then Delete cloud data. You can also <a href="/delete-account/">follow the steps here</a>.</p>']],
    related: ['export-data', 'streaks'],
  }),
  F({
    slug: 'export-data', icon: '📤', cls: 'sun', name: 'Free data export',
    title: 'Habit Tracker With Free CSV and JSON Export',
    description: 'Export all your habit data to CSV or a JSON backup any time, free forever. Restore from a backup whenever you want.',
    h1: 'Export your habit data to CSV or JSON, free forever',
    answer: 'Leeway lets you export all your habits and check-ins to CSV or a JSON backup at any time for free, and restore from a backup whenever you want.',
    shot: ['05-progress', 'Leeway progress screen with charts'],
    sections: [
      ['Never locked in', '<p>Years of habit history belong to you. Export a spreadsheet to analyze in your own tools, or a JSON backup to keep safe.</p>'],
      ['What you can export', '', ['CSV for spreadsheets, with a date range and a habit picker.', 'JSON backup you can import again in Settings.', 'A preview before you share or save.']],
      ['Free, even if you stop using Pro', '<p>Export is not a paid feature. Your data is never held back.</p>'],
    ],
    faq: [['Can I move to a new phone?', '<p>Yes. Export a JSON backup, install Leeway on the new phone and import it. Or sign in to sync.</p>']],
    related: ['offline-private', 'streaks'],
  }),
];

const READS = {
  'leeway-days': ['what-to-do-when-you-miss-a-habit-day', 'are-streaks-good-for-habits', 'habit-tracking-mistakes'],
  'streaks': ['are-streaks-good-for-habits', 'how-long-does-it-take-to-build-a-habit', 'habit-tracking-mistakes'],
  'quit-bad-habits': ['how-to-quit-a-bad-habit', 'what-to-do-when-you-miss-a-habit-day', 'habit-stacking-guide'],
  'reminders': ['habit-stacking-guide', 'morning-routine-checklist', 'how-to-start-a-journaling-habit'],
  'offline-private': ['how-to-keep-habits-when-traveling-or-sick', 'habit-tracker-vs-to-do-list', 'habit-tracking-mistakes'],
  'export-data': ['habit-tracking-mistakes', 'habit-tracker-vs-to-do-list', 'how-long-does-it-take-to-build-a-habit'],
};
const readsBlock = (slug) => `<h2 class="reveal">Related reading</h2><ul class="reveal">${READS[slug].map((sl) => { const p = POSTS.find((x) => x.slug === sl); return `<li><a href="/blog/${sl}/">${p.title}</a>. ${p.description}</li>`; }).join('')}</ul>`;
const featurePage = (f) => {
  const body = `
<div class="wrap page-hero"><nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/features/">Features</a><span>/</span>${f.name}</nav></div>
<section style="padding-top:10px"><div class="wrap split">
  <div>
    <span class="eyebrow">${f.name}</span>
    <h1 style="font-size:clamp(2.1rem,5vw,3.6rem)">${f.h1}</h1>
    <p class="answer">${f.answer}</p>
    ${storeButtons()}
  </div>
  <div class="center" style="position:relative"><div class="blob a" style="right:0;top:0;width:340px;height:340px"></div>${phone(f.shot[0], f.shot[1], 'tilt-r', true)}</div>
</div></section>
<section><div class="narrow prose">
  ${f.sections.map(([h, p, ticks]) => `<h2 class="reveal">${h}</h2><div class="reveal">${p}${ticks ? `<ul class="ticks">${ticks.map((t) => `<li>${t}</li>`).join('')}</ul>` : ''}</div>`).join('')}
  ${readsBlock(f.slug)}
</div></section>
<section><div class="narrow"><div class="sec-head"><h2>Questions</h2></div>${faqList(f.faq)}</div></section>
<section><div class="wrap"><div class="sec-head"><h2>Keep exploring</h2></div><div class="grid g3">
  ${f.related.map((s) => { const r = FEATURES.find((x) => x.slug === s); return card(`/features/${s}/`, r.icon, r.cls, r.name, r.description); }).join('')}
  ${card('/features/', '🧭', 'amber', 'All features', 'See everything Leeway can do.')}
</div></div></section>
${ctaBand()}`;
  return { path: `/features/${f.slug}/`, faq: f.faq, title: f.title, description: f.description, h1: f.h1, body, hero: '', crumbs: [['Features', '/features/'], [f.name]] };
};

const featuresHub = {
  path: '/features/', type: 'CollectionPage', items: FEATURES.map((f) => [f.name, `/features/${f.slug}/`]), title: 'Features: Forgiving Streaks, Reminders and Private Tracking',
  description: 'Explore Leeway features: leeway days that protect your streak, streak milestones, quit-habit tracking, gentle reminders, offline privacy and free export.',
  h1: 'Features', crumbs: [['Features']],
  body: `<section style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow">Features</span><h1>A habit tracker built around forgiveness</h1><p class="lead">Everything in Leeway serves one idea: keep going after a bad day. Pick a feature to see how it works.</p></div>
<div class="grid g3">${FEATURES.map((f) => card(`/features/${f.slug}/`, f.icon, f.cls, f.name, f.description)).join('')}</div>
<p style="margin-top:32px" class="lead">Not sure where to begin? Read <a href="/blog/what-to-do-when-you-miss-a-habit-day/">what to do when you miss a habit day</a>, compare Leeway with <a href="/compare/">other approaches</a>, or check the <a href="/pricing/">pricing</a>.</p></div></section>${ctaBand()}`,
};

// ---------- pricing ----------
const PRICING_FAQ = [['Is Leeway free?', '<p>Yes. You can track 3 habits for free with streaks, leeway days, reminders, progress charts and export. <a href="/features/leeway-days/">Leeway days</a> are included for everyone.</p>'], ['How do I get more than 3 habits?', '<p>Watch an optional short video to unlock another habit slot. Leeway Pro, a planned one-time unlock for unlimited habits, is not on sale yet.</p>'], ['Is my data locked behind Pro?', '<p>No. Export to CSV or JSON is free forever, and nothing is deleted if Pro ever ends. See <a href="/features/export-data/">data export</a>.</p>']];
const pricing = {
  path: '/pricing/', faq: PRICING_FAQ, title: 'Leeway Pricing: Free Habit Tracker With Optional Pro',
  description: 'Leeway is free to start with 3 habits, streaks, reminders and export. Unlock another habit slot by watching a short video, or look out for Pro.',
  h1: 'Pricing', crumbs: [['Pricing']],
  body: `<section style="padding-top:0"><div class="wrap">
<div class="sec-head center"><span class="eyebrow">Pricing</span><h1>Free to start. Fair to grow.</h1><p class="lead">The core of Leeway is free. Streaks, leeway days, reminders, progress and export are all included.</p></div>
<div class="grid g2" style="max-width:860px;margin:0 auto">
  <div class="card price-card reveal"><h3>Free</h3><div class="price">$0</div><p>For building your first habits.</p>
    <ul class="ticks"><li>3 habits to start</li><li>2 leeway days every month</li><li>Streaks, heatmap and milestones</li><li>Reminders for each habit</li><li>CSV and JSON export</li><li>Optional sign-in for backup and sync</li><li>Watch a short optional video to unlock another habit slot</li></ul></div>
  <div class="card price-card best reveal" style="--d:.1s"><span class="tag">COMING SOON</span><h3>Leeway Pro</h3><div class="price">$19.99 <small style="font-size:1rem;font-weight:700;color:var(--muted)">one time</small></div><p>Planned lifetime unlock for people who want more room.</p>
    <ul class="ticks"><li>Everything in Free</li><li>Unlimited habits</li><li>Support an independent app</li><li>If Pro ever ends, nothing is deleted</li></ul>
    <p class="fineprint">Pro is not on sale yet. Price and contents may change before launch.</p></div>
</div>
<p class="center fineprint" style="margin-top:28px">Ads appear only if you choose to watch a video to unlock a habit slot. <a href="/faq/">Read the FAQ</a>.</p>
<div class="narrow" style="margin-top:56px"><div class="sec-head"><h2>Pricing questions</h2></div>${faqList(PRICING_FAQ)}</div>
</div></section>${ctaBand()}`,
};

// ---------- compare ----------
const COMPARE = [
  {
    slug: 'strict-streak-trackers', name: 'Strict streak trackers',
    title: 'Leeway vs Strict Streak Trackers: Missed Day Rules',
    description: 'Compare Leeway with strict streak habit trackers that reset to zero after one missed day. See how leeway days change motivation.',
    h1: 'Leeway vs strict streak trackers',
    intro: 'Strict streak trackers reset to zero after one missed day. Leeway keeps the streak alive with 2 leeway days a month.',
    rows: [['Missed day', 'Streak resets to 0', 'Leeway day mends it (2 per month)'], ['Honest history', 'Missed days vanish into the reset', 'Mended days are marked as leeway'], ['Snooze while ill or away', 'Often not available', 'Freeze a habit without using leeway'], ['Works offline, no account', 'Varies by app', 'Yes'], ['Free export', 'Varies by app', 'CSV and JSON, free']],
    body: '<p>A zero-tolerance streak is simple, and for some people it motivates. For many it backfires. After a missed day the number that took weeks to build disappears, and the easiest response is to stop.</p><p>Leeway is for people who want the motivation of a streak without the cliff. The allowance is small on purpose: 2 days a month is enough to survive a bad week and not enough to coast.</p>',
  },
  {
    slug: 'gamified-habit-apps', name: 'Gamified habit apps',
    title: 'Leeway vs Gamified Habit Apps: Calm, Forgiving Tracking',
    description: 'Compare Leeway with gamified habit apps that use points, avatars and quests. Choose calm, private tracking with forgiving streaks.',
    h1: 'Leeway vs gamified habit apps',
    intro: 'Gamified habit apps turn routines into a game with points and characters. Leeway keeps tracking quiet and focused.',
    rows: [['Core idea', 'Points, levels and rewards', 'Forgiving streaks and a calm interface'], ['Missed day', 'Often costs points or health', 'Leeway day mends the streak'], ['Visual style', 'Game world', 'Floating bubbles on a cream dot grid'], ['Motion', 'Game effects', 'Small celebrations, with a Reduce motion switch'], ['Account', 'Usually required', 'Not required']],
    body: '<p>Game mechanics work well for some people, especially those who enjoy quests. Others find that the game becomes one more thing to maintain.</p><p>Leeway keeps the useful part, a streak, and adds a gentle mode with softer words and smaller celebrations. If you want your habit app to stay out of the way, it is a good fit.</p>',
  },
  {
    slug: 'paper-and-spreadsheets', name: 'Paper and spreadsheets',
    title: 'Leeway vs Paper Habit Trackers and Spreadsheets',
    description: 'Compare Leeway with paper habit trackers and spreadsheets. See what an app adds: reminders, streak math, heatmaps and exports.',
    h1: 'Leeway vs paper trackers and spreadsheets',
    intro: 'Paper and spreadsheets are flexible and private. Leeway adds reminders, automatic streaks and charts while staying private.',
    rows: [['Reminders', 'You remember, or you don’t', 'Per-habit notifications'], ['Streak math', 'Manual', 'Automatic, with leeway days'], ['Charts', 'Build them yourself', 'Heatmap, week, month and year views'], ['Privacy', 'Fully private', 'Offline, no account needed'], ['Data ownership', 'Yours', 'CSV and JSON export, free']],
    body: '<p>A paper grid on the fridge is hard to beat for visibility. A spreadsheet gives you full control. Both leave the counting, charting and reminding to you.</p><p>If you like those tools, keep them. Leeway is for when you want the same ownership of your data with the busywork handled.</p>',
  },
];
const comparePage = (c) => ({
  path: `/compare/${c.slug}/`, title: c.title, description: c.description, h1: c.h1, crumbs: [['Compare', '/compare/'], [c.name]],
  body: `<section style="padding-top:0"><div class="narrow prose">
<span class="eyebrow">Compare</span><h1 style="font-size:clamp(2rem,5vw,3.2rem)">${c.h1}</h1>
<p class="answer">${c.intro}</p>
<div class="table-wrap reveal"><table><thead><tr><th></th><th>${c.name}</th><th>Leeway</th></tr></thead><tbody>${c.rows.map(([a, b, l]) => `<tr><td><b>${a}</b></td><td class="no">${b}</td><td class="yes">${l}</td></tr>`).join('')}</tbody></table></div>
<p class="fineprint">Comparison describes the general approach of each category. Individual apps differ, so check what your current app does.</p>
${c.body}
<p><a href="/features/leeway-days/">See how leeway days work</a> or <a href="/pricing/">view pricing</a>.</p>
</div></section>${ctaBand()}`,
});
const compareHub = {
  path: '/compare/', type: 'CollectionPage', items: COMPARE.map((c) => [`Leeway vs ${c.name.toLowerCase()}`, `/compare/${c.slug}/`]), title: 'Compare Leeway: Habit Tracker Alternatives and Approaches',
  description: 'See how Leeway compares with strict streak trackers, gamified habit apps, and paper or spreadsheet trackers.',
  h1: 'Compare', crumbs: [['Compare']],
  body: `<section style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow">Compare</span><h1>How Leeway compares</h1><p class="lead">Different habit trackers suit different people. Here is how Leeway’s forgiving approach differs from the common alternatives.</p></div>
<div class="grid g3">${COMPARE.map((c) => `<a class="card reveal" href="/compare/${c.slug}/"><h3>Leeway vs ${c.name.toLowerCase()}</h3><p>${c.intro}</p><span class="more">Read comparison${arrow}</span></a>`).join('')}</div>
<p style="margin-top:32px" class="lead">New to Leeway? Start with <a href="/features/leeway-days/">how leeway days work</a>, browse <a href="/features/">all features</a>, or read <a href="/blog/are-streaks-good-for-habits/">whether streaks are good for motivation</a>.</p></div></section>${ctaBand()}`,
};

// ---------- blog ----------
export const POSTS = [
  {
    slug: 'what-to-do-when-you-miss-a-habit-day', date: '2026-10-29', dateLabel: 'October 29, 2026', read: 4,
    title: 'What to Do When You Miss a Day of Your Habit',
    description: 'Missed a day of your habit? Here is a simple plan to get back on track without guilt, plus why one missed day rarely matters.',
    answer: 'Missing one day rarely undoes a habit. The risk is the second missed day. Do a smaller version of the habit as soon as you can, and plan around whatever caused the miss.',
    body: `<h2>Missing once is normal</h2><p>Research on habit formation suggests that missing a single opportunity does not meaningfully hurt the process of building a habit. What matters is returning to it. The trap is the story we tell: “I broke the streak, so it is over.”</p>
<h2>A four-step reset</h2><ol><li><b>Name the cause.</b> Was it sleep, travel, a packed schedule or low motivation?</li><li><b>Shrink the habit.</b> Do a two-minute version today. Read one page. Walk to the corner.</li><li><b>Make the next day easy.</b> Move the habit to a time that survived the last bad day.</li><li><b>Do not make up for it.</b> Doubling up tomorrow adds pressure and makes a second miss more likely.</li></ol>
<h2>Never miss twice</h2><p>A useful rule is to never miss two days in a row. One miss is an accident. Two begins a new pattern. If you are tracking, protect the second day.</p>
<blockquote>The goal is not a perfect record. The goal is a record that survives real life.</blockquote>
<h2>Use a tracker that expects misses</h2><p>A habit app that resets to zero turns an ordinary slip into a loss. With <a href="/features/leeway-days/">leeway days</a>, Leeway mends a missed day automatically, 2 times a month, and marks it honestly. You keep your momentum and your data stays truthful.</p>`,
  },
  {
    slug: 'how-long-does-it-take-to-build-a-habit', date: '2026-10-29', dateLabel: 'October 29, 2026', read: 4,
    title: 'How Long Does It Take to Build a Habit? The Research',
    description: 'The “21 days” rule is a myth. A study of habit formation found it took 66 days on average, with a wide range. Here is what that means for you.',
    answer: 'It depends on the person and the habit. A well-known 2009 study from University College London found an average of 66 days for a new behavior to feel automatic, with a range from 18 to 254 days.',
    body: `<h2>Where “21 days” came from</h2><p>The idea that habits take 21 days is popular and not backed by habit research. It traces back to an observation by a plastic surgeon in the 1960s about how long patients took to adjust to a new appearance.</p>
<h2>What the study found</h2><p>In a 2009 study published in the European Journal of Social Psychology, Phillippa Lally and colleagues followed participants as they tried to make a new daily behavior automatic. On average it took 66 days. Individuals ranged from 18 to 254 days, and simpler habits tended to become automatic faster.</p>
<h2>Missing a day did not ruin it</h2><p>The same study reported that missing a single opportunity did not materially affect the habit forming process. That is a good reason to choose a tracker that does not punish an occasional miss.</p>
<h2>How to use this</h2><ul><li>Plan for about two to three months, not three weeks.</li><li>Start with a version of the habit that feels almost too easy.</li><li>Attach it to something you already do each day.</li><li>Track it so you can see consistency build.</li></ul>
<p>Leeway’s <a href="/features/streaks/">streak view</a> and calendar heatmap show how consistent you have been across months, not only the current run.</p>`,
  },
  {
    slug: 'morning-routine-checklist', date: '2026-10-29', dateLabel: 'October 29, 2026', read: 3,
    title: 'A Simple Morning Routine Checklist You Can Actually Keep',
    description: 'Build a morning routine in small steps. A realistic checklist, how to start with one habit, and how to track it without pressure.',
    answer: 'The morning routines that last are short. Pick two or three small habits, put them in a fixed order, and track them daily for a few weeks before adding more.',
    body: `<h2>Start with one anchor</h2><p>Choose something you already do every morning, such as making coffee or brushing your teeth. Attach your new habit to it. “After I pour my coffee, I write one line in my journal.”</p>
<h2>A starter checklist</h2><ul><li>Drink a glass of water</li><li>Two minutes of stretching or breathing</li><li>Write one line in a journal</li><li>Read one page</li><li>Look at today’s top task</li></ul>
<h2>Keep it to three</h2><p>Long routines break on the first rushed morning. Three habits that take under fifteen minutes survive the days you oversleep.</p>
<h2>Track it gently</h2><p>Set a reminder for each habit and use hold-to-log for a quick check-in. When a morning goes wrong, a leeway day keeps your streak from resetting. See <a href="/features/reminders/">how reminders work in Leeway</a>.</p>`,
  },
  {
    slug: 'how-to-quit-a-bad-habit', date: '2026-10-29', dateLabel: 'October 29, 2026', read: 4,
    title: 'How to Quit a Bad Habit: A Practical, Guilt-Free Approach',
    description: 'Practical steps to quit a bad habit: spot the trigger, swap the routine, make it harder, and track clean days without shame.',
    answer: 'To quit a bad habit, find the trigger, replace the routine with something easier, add friction to the old behavior, and track clean days. Treat a slip as information.',
    body: `<h2>1. Find the trigger</h2><p>Habits are cued. Note when and where the urge shows up: stress, boredom, a certain time or person. The cue is usually easier to change than the craving.</p>
<h2>2. Swap, do not just stop</h2><p>Plan what you will do instead. If you reach for sugar at 3 pm, decide on tea and a short walk ahead of time.</p>
<h2>3. Add friction</h2><p>Make the old habit harder. Remove the app, keep snacks out of the house, log out of the site.</p>
<h2>4. Count clean days</h2><p>Seeing a run of clean days builds motivation. In Leeway, a <a href="/features/quit-bad-habits/">quit habit</a> counts clean days and lets you log a slip honestly without losing your history.</p>
<h2>5. Treat a slip as data</h2><p>Ask what the trigger was and what you will change. Then carry on. Shame tends to make the next slip more likely.</p>
<p class="fineprint">This article is general information. If a habit is affecting your health, talk to a qualified professional.</p>`,
  },
  {
    slug: 'habit-tracker-vs-to-do-list', date: '2026-10-29', dateLabel: 'October 29, 2026', read: 3,
    title: 'Habit Tracker vs To-Do List: Which Do You Need?',
    description: 'A to-do list tracks one-off tasks. A habit tracker tracks repeated behavior. Learn the difference and when to use each.',
    answer: 'Use a to-do list for one-time tasks with an end. Use a habit tracker for behaviors you repeat on a schedule, where consistency over time is the goal.',
    body: `<h2>The difference</h2><p>A to-do item is finished once. A habit never finishes. It repeats, and the value comes from showing up again and again.</p>
<h2>When a to-do list works</h2><ul><li>Book a dentist appointment</li><li>Send the invoice</li><li>Buy a birthday gift</li></ul>
<h2>When a habit tracker works</h2><ul><li>Read every evening</li><li>Walk 8,000 steps</li><li>No sugar on weekdays</li></ul>
<h2>Use both</h2><p>Keep one-off tasks in your list and recurring behavior in a tracker. A tracker shows trends, streaks and gaps that a checked-off list cannot. If you try Leeway, start with <a href="/blog/morning-routine-checklist/">a short morning routine</a>.</p>`,
  },
  {
    slug: 'habit-stacking-guide', date: '2026-10-29', dateLabel: 'October 29, 2026', read: 4,
    title: 'Habit Stacking: How to Attach a New Habit to an Old One',
    description: 'Habit stacking links a new habit to something you already do. Learn the formula, see examples, and avoid the common mistakes.',
    answer: 'Habit stacking means attaching a new habit to an existing routine, using the formula “After I [current habit], I will [new habit].” The old habit acts as the cue.',
    body: `<h2>The formula</h2><p>Habit stacking uses something you already do without thinking as the trigger for something new. The formula is simple: <b>After I [current habit], I will [new habit].</b> The idea was popularized in the book <i>Atomic Habits</i> and builds on the older concept of anchoring a behavior to an existing cue.</p>
<h2>Examples</h2><ul><li>After I pour my morning coffee, I will write one line in my journal.</li><li>After I brush my teeth at night, I will stretch for two minutes.</li><li>After I sit down at my desk, I will drink a glass of water.</li><li>After I plug in my phone at night, I will read one page.</li></ul>
<h2>How to choose a good anchor</h2><ul><li><b>Pick something reliable.</b> Choose an event that happens every day, not one that depends on your mood.</li><li><b>Match the size.</b> A short anchor suits a short habit.</li><li><b>Keep the order clear.</b> Say exactly which comes first.</li></ul>
<h2>Common mistakes</h2><p>Stacking too many habits at once is the most common one. Add one new habit to your stack and keep it for a few weeks before adding another. Another mistake is choosing an anchor that happens at different times each day, which makes the cue unreliable.</p>
<h2>Track the stack</h2><p>Give each habit its own bubble and a reminder at the time of the anchor. Leeway’s <a href="/features/reminders/">per-habit reminders</a> and hold-to-log check-ins make it quick to confirm each step. If a day goes wrong, a leeway day keeps the streak alive.</p>`,
  },
  {
    slug: 'how-to-start-a-reading-habit', date: '2026-10-29', dateLabel: 'October 29, 2026', read: 4,
    title: 'How to Start a Reading Habit That Lasts',
    description: 'Practical ways to start reading every day: shrink the goal, pick a fixed time, keep a book within reach, and track your streak.',
    answer: 'To build a reading habit, start with a tiny goal such as one page a day, read at a fixed time and place, keep a book within reach, and track each day you read.',
    body: `<h2>Start smaller than feels useful</h2><p>Aim for one page or five minutes. The point is to make starting so easy that you do it on busy days too. Most people read more than their minimum once they begin.</p>
<h2>Choose a fixed time and place</h2><p>Reading after dinner on the sofa or before bed in bed gives your brain a cue. You can attach it to an existing routine using <a href="/blog/habit-stacking-guide/">habit stacking</a>.</p>
<h2>Make the book easy to reach</h2><ul><li>Keep a book on your pillow or next to the kettle.</li><li>Put an e-reader on your phone’s home screen.</li><li>Use audiobooks for commutes and chores if they suit you.</li></ul>
<h2>Pick books you want to finish</h2><p>Abandoning a book that bores you is fine. A habit is easier to keep when the reading is enjoyable.</p>
<h2>Track it</h2><p>A visible streak is a quiet motivator. In Leeway you can create a habit such as “Read 20 pages” with a reminder, and use the <a href="/features/streaks/">streak view and heatmap</a> to see consistency build. If a week gets away from you, <a href="/features/leeway-days/">leeway days</a> mean a missed evening does not reset the count.</p>
<blockquote>Aim for a reading life that survives busy weeks, not a perfect record.</blockquote>`,
  },
  {
    slug: 'are-streaks-good-for-habits', date: '2026-10-29', dateLabel: 'October 29, 2026', read: 4,
    title: 'Are Habit Streaks Good or Bad for Motivation?',
    description: 'Streaks can motivate and they can backfire. Here is when streaks help, when they hurt, and how a forgiving streak changes the trade-off.',
    answer: 'Streaks help many people by making progress visible and giving a reason to show up. They backfire when one missed day resets everything. Forgiving streaks keep the benefit and reduce the harm.',
    body: `<h2>Why streaks work</h2><ul><li><b>They make progress visible.</b> A number that grows is satisfying.</li><li><b>They create a small cost to skipping.</b> You do not want to break the chain.</li><li><b>They simplify the decision.</b> “Do I do it today?” has an easy answer.</li></ul>
<h2>When streaks backfire</h2><p>A long streak can turn into pressure. People may keep doing the habit in a minimal way only to protect the number, or abandon the habit completely after a break because the number reset to zero. This is sometimes called the “what the hell” effect: once the streak is gone, it feels pointless to continue.</p>
<h2>Who benefits most</h2><p>Streaks tend to suit people who like clear rules and visible scores. They suit people who are prone to guilt less well.</p>
<h2>A middle path</h2><p>You can keep the motivation of a streak and soften the cliff. Leeway gives you 2 <a href="/features/leeway-days/">leeway days</a> a month that mend a missed day automatically and are marked honestly in your history. You still see your <a href="/features/streaks/">best streak and total reps</a>, and the numbers stay truthful.</p>
<h2>How to use streaks well</h2><ul><li>Track more than one number, such as total days and best streak.</li><li>Decide in advance what a “minimum version” of the habit is.</li><li>Treat a break as information, then restart the same day.</li></ul>
<p>See how Leeway compares with <a href="/compare/strict-streak-trackers/">strict streak trackers</a>.</p>`,
  },
  {
    slug: 'how-to-keep-habits-when-traveling-or-sick', date: '2026-10-29', dateLabel: 'October 29, 2026', read: 4,
    title: 'How to Keep Your Habits When You Travel or Get Sick',
    description: 'Travel and illness break routines. Use a minimum version, snooze honestly, and restart gently to protect your habits.',
    answer: 'When you travel or get sick, switch to a minimum version of your habit, or pause it on purpose. Then restart the next day without trying to make up for lost time.',
    body: `<h2>Plan a minimum version</h2><p>Decide ahead of time what the smallest version of each habit looks like. A 20-minute workout becomes five push-ups. Reading 20 pages becomes one page. On a travel day, the minimum version keeps the routine alive.</p>
<h2>Know the difference between a pause and a miss</h2><p>If you are ill, resting is the right choice. Pausing on purpose is different from drifting away. A planned pause has an end date, and you restart on it.</p>
<h2>Travel tips</h2><ul><li>Pack a small cue: a book, a resistance band, a journal.</li><li>Anchor the habit to something that still happens, like your morning coffee.</li><li>Expect a different schedule and adjust the reminder time.</li></ul>
<h2>When you are sick</h2><ul><li>Rest first. Habits can wait.</li><li>Pause tracking so the break is not counted as a failure.</li><li>Restart with the smallest version when you feel better.</li></ul>
<h2>How Leeway helps</h2><p>You can snooze a habit for 3 days, a week or until a date you choose. The streak freezes and no <a href="/features/leeway-days/">leeway days</a> are used. Reminders keep working offline, which is handy on flights. See <a href="/features/offline-private/">offline and private</a>.</p>
<p class="fineprint">This article is general information, not medical advice.</p>`,
  },
  {
    slug: 'how-to-start-a-journaling-habit', date: '2026-10-29', dateLabel: 'October 29, 2026', read: 3,
    title: 'How to Start a Journaling Habit in Five Minutes a Day',
    description: 'A simple way to start journaling: use prompts, write for five minutes, pick a time, and track the habit without pressure.',
    answer: 'Start journaling with five minutes or one line a day, at a fixed time, using a simple prompt. Lower the bar until it feels easy, then let the habit grow.',
    body: `<h2>Keep the bar low</h2><p>One line counts. Many people give up on journaling because they imagine pages of reflection. Begin with a sentence and stop when the timer ends.</p>
<h2>Use prompts</h2><ul><li>What is one thing I am grateful for today?</li><li>What went well, and what did I learn?</li><li>What is one thing I want to do tomorrow?</li></ul>
<h2>Choose a time</h2><p>Morning journaling suits people who like to set intentions. Evening journaling suits people who like to reflect. Either works if you attach it to something fixed, as in a <a href="/blog/morning-routine-checklist/">morning routine</a>.</p>
<h2>Paper or phone</h2><p>Use whichever you will actually open. A notebook on your pillow beats an app you forget about.</p>
<h2>Track the habit, not the content</h2><p>Track whether you wrote, not what you wrote. In Leeway, add a “Journal” habit with a reminder and check in with a hold. Your entries stay wherever you keep them, and the app keeps the streak. Read how <a href="/features/reminders/">gentle reminders</a> work.</p>`,
  },
  {
    slug: 'habit-tracking-mistakes', date: '2026-10-29', dateLabel: 'October 29, 2026', read: 4,
    title: '7 Habit Tracking Mistakes and How to Fix Them',
    description: 'Common habit tracking mistakes, from tracking too many habits to chasing perfect streaks, and simple ways to fix each one.',
    answer: 'The most common habit tracking mistakes are tracking too many habits, setting goals that are too big, chasing perfect streaks, and not planning for misses. Each has a simple fix.',
    body: `<h2>1. Tracking too many habits</h2><p>Start with one to three. Every habit you add competes for the same attention.</p>
<h2>2. Setting goals that are too big</h2><p>“Run 5 km daily” fails on a bad day. “Put on running shoes” does not.</p>
<h2>3. Chasing a perfect streak</h2><p>Perfection is fragile. Allow for the occasional miss, as in Leeway’s <a href="/features/leeway-days/">leeway days</a>.</p>
<h2>4. No plan for misses</h2><p>Decide in advance what you do after a missed day. Read <a href="/blog/what-to-do-when-you-miss-a-habit-day/">what to do when you miss a day</a>.</p>
<h2>5. Vague habits</h2><p>“Be healthier” cannot be checked off. “Walk 8,000 steps” can.</p>
<h2>6. Tracking without a cue</h2><p>Attach the habit to something you already do. See <a href="/blog/habit-stacking-guide/">habit stacking</a>.</p>
<h2>7. Never reviewing</h2><p>Look at your heatmap once a week. Notice which days fail and why, then adjust the schedule or the size of the habit. A <a href="/features/streaks/">calendar heatmap</a> makes patterns easy to see.</p>`,
  },
];
const TAGS = {
  'what-to-do-when-you-miss-a-habit-day': ['missed day', 'habit streak', 'consistency'],
  'how-long-does-it-take-to-build-a-habit': ['habit formation', '66 days', 'research'],
  'morning-routine-checklist': ['morning routine', 'checklist', 'habit stacking'],
  'how-to-quit-a-bad-habit': ['quit bad habits', 'triggers', 'clean days'],
  'habit-tracker-vs-to-do-list': ['habit tracker', 'to-do list', 'productivity'],
  'habit-stacking-guide': ['habit stacking', 'habit formation', 'routines'],
  'how-to-start-a-reading-habit': ['reading', 'habit formation', 'daily routine'],
  'are-streaks-good-for-habits': ['streaks', 'motivation', 'habit tracking'],
  'how-to-keep-habits-when-traveling-or-sick': ['travel', 'sick days', 'consistency'],
  'how-to-start-a-journaling-habit': ['journaling', 'habit formation', 'mindfulness'],
  'habit-tracking-mistakes': ['habit tracking', 'mistakes', 'consistency'],
};
const RELATED = {
  'what-to-do-when-you-miss-a-habit-day': ['are-streaks-good-for-habits', 'how-to-keep-habits-when-traveling-or-sick', 'habit-tracking-mistakes'],
  'how-long-does-it-take-to-build-a-habit': ['habit-stacking-guide', 'are-streaks-good-for-habits', 'habit-tracking-mistakes'],
  'morning-routine-checklist': ['habit-stacking-guide', 'how-to-start-a-journaling-habit', 'how-to-start-a-reading-habit'],
  'how-to-quit-a-bad-habit': ['habit-tracking-mistakes', 'what-to-do-when-you-miss-a-habit-day', 'are-streaks-good-for-habits'],
  'habit-tracker-vs-to-do-list': ['habit-tracking-mistakes', 'morning-routine-checklist', 'habit-stacking-guide'],
  'habit-stacking-guide': ['morning-routine-checklist', 'how-long-does-it-take-to-build-a-habit', 'how-to-start-a-reading-habit'],
  'how-to-start-a-reading-habit': ['habit-stacking-guide', 'morning-routine-checklist', 'are-streaks-good-for-habits'],
  'are-streaks-good-for-habits': ['what-to-do-when-you-miss-a-habit-day', 'how-long-does-it-take-to-build-a-habit', 'habit-tracking-mistakes'],
  'how-to-keep-habits-when-traveling-or-sick': ['what-to-do-when-you-miss-a-habit-day', 'are-streaks-good-for-habits', 'habit-tracking-mistakes'],
  'how-to-start-a-journaling-habit': ['habit-stacking-guide', 'morning-routine-checklist', 'how-to-start-a-reading-habit'],
  'habit-tracking-mistakes': ['are-streaks-good-for-habits', 'what-to-do-when-you-miss-a-habit-day', 'habit-tracker-vs-to-do-list'],
};
const postPage = (p) => ({
  path: `/blog/${p.slug}/`, title: p.title, description: p.description, h1: p.title, crumbs: [['Blog', '/blog/'], [p.title]],
  article: { date: p.date, dateLabel: p.dateLabel, read: p.read, tags: TAGS[p.slug] || [] },
  body: `<article><div class="narrow prose"><h1 style="font-size:clamp(2rem,5vw,3.2rem)">${p.title}</h1><p class="answer">${p.answer}</p>${p.body}</div></article>
<section><div class="wrap"><div class="sec-head"><h2>Keep reading</h2></div><div class="grid g3">${(RELATED[p.slug] || []).map((sl) => POSTS.find((x) => x.slug === sl)).filter(Boolean).map((x) => `<a class="card" href="/blog/${x.slug}/"><h3>${x.title}</h3><p>${x.description}</p><span class="more">Read${arrow}</span></a>`).join('')}</div></div></section>${ctaBand()}`,
});
const blogIndex = {
  path: '/blog/', type: 'CollectionPage', posts: POSTS, title: 'Leeway Blog: Habit Building, Streaks and Routines',
  description: 'Practical articles on building habits, keeping streaks, quitting bad habits and creating routines you can stick with.',
  h1: 'Blog', crumbs: [['Blog']],
  body: `<section style="padding-top:0"><div class="wrap"><div class="sec-head"><span class="eyebrow">Blog</span><h1>Habits, streaks and routines</h1><p class="lead">Short, practical reads for people building habits in real life.</p></div>
<div class="grid g3">${POSTS.map((p) => `<a class="card reveal" href="/blog/${p.slug}/"><p class="meta">${p.dateLabel} · ${p.read} min read</p><h3>${p.title}</h3><p>${p.description}</p><span class="more">Read${arrow}</span></a>`).join('')}</div></div></section>${ctaBand()}`,
};

// ---------- misc ----------
const faqPage = {
  path: '/faq/', faq: FAQ, title: 'Leeway FAQ: Leeway Days, Pricing, Privacy and More',
  description: 'Answers about Leeway: what leeway days are, whether it is free, how privacy works, quitting habits, exporting data and availability.',
  h1: 'FAQ', crumbs: [['FAQ']],
  body: `<section style="padding-top:0"><div class="narrow"><span class="eyebrow">FAQ</span><h1 style="font-size:clamp(2rem,5vw,3.2rem)">Frequently asked questions</h1>${faqList(FAQ)}<p class="center" style="margin-top:30px">Still curious? <a href="/contact/">Contact us</a>.</p></div></section>${ctaBand()}`,
};
const about = {
  path: '/about/', type: 'AboutPage', title: 'About Leeway: A Habit Tracker Built to Forgive',
  description: 'Why Leeway exists: a habit tracker designed around the idea that missing a day should not erase your progress.',
  h1: 'About', crumbs: [['About']],
  body: `<section style="padding-top:0"><div class="narrow prose"><span class="eyebrow">About</span><h1 style="font-size:clamp(2rem,5vw,3.2rem)">Built for people who miss a day sometimes</h1>
<p class="lead">Leeway started with a simple frustration: a streak that resets to zero after one bad day.</p>
<p>Habit apps tend to treat consistency as pass or fail. In practice, good habits survive because people come back after a miss. Leeway is designed around that. You get a small monthly allowance of leeway days, a calm interface, and honest numbers.</p>
<h2>What we believe</h2><ul><li>A missed day is normal.</li><li>Your data belongs to you, so export is free.</li><li>A habit app should work offline and without an account.</li><li>Celebrations should be small and optional.</li></ul>
<p>Questions or ideas? <a href="/contact/">Get in touch</a>.</p></div></section>${ctaBand()}`,
};
const contact = {
  path: '/contact/', type: 'ContactPage', title: 'Contact Leeway: Support, Feedback and Press',
  description: 'Contact the Leeway team for support, feedback, launch notifications and account deletion requests.',
  h1: 'Contact', crumbs: [['Contact']],
  body: `<section style="padding-top:0"><div class="narrow prose"><span class="eyebrow">Contact</span><h1 style="font-size:clamp(2rem,5vw,3.2rem)">Say hello</h1>
<p class="lead">We read every message.</p>
<p>Email <a href="mailto:${EMAIL}">${EMAIL}</a> for support, feedback or to be notified when Leeway launches.</p>
<p>Many answers are in the <a href="/faq/">FAQ</a>. You can also read about <a href="/pricing/">pricing</a>, see <a href="/features/">all features</a> or browse the <a href="/blog/">blog</a>.</p>
<p>To delete your account and data, see <a href="/delete-account/">how to delete your account</a>. For privacy questions, read the <a href="/privacy/">privacy policy</a>.</p></div></section>`,
};

export const PAGES = [
  home, featuresHub, ...FEATURES.map(featurePage), pricing, compareHub, ...COMPARE.map(comparePage),
  blogIndex, ...POSTS.map(postPage), faqPage, about, contact,
];
