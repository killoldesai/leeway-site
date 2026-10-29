(() => {
  const d = document, root = d.documentElement;
  root.classList.add('js');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // nav: condense on scroll, mobile menu
  const nav = d.querySelector('.nav');
  const onScroll = () => nav && nav.classList.toggle('scrolled', scrollY > 12);
  onScroll(); addEventListener('scroll', onScroll, { passive: true });
  const btn = d.querySelector('.menu-btn'), list = d.querySelector('.nav ul');
  if (btn && list) btn.addEventListener('click', () => {
    const open = list.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });

  // reveal on scroll
  const els = d.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => io.observe(el));
  } else els.forEach((el) => el.classList.add('in'));

  // count-up stats
  const fmt = (n) => n.toLocaleString('en-US');
  d.querySelectorAll('[data-count]').forEach((el) => {
    const end = +el.dataset.count, suffix = el.dataset.suffix || '';
    if (reduce || !('IntersectionObserver' in window)) { el.textContent = fmt(end) + suffix; return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const t0 = performance.now(), dur = 1400;
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / dur), eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(Math.round(end * eased)) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(el);
  });

  // hold-to-log demo
  d.querySelectorAll('.hold').forEach((b) => {
    const fill = b.querySelector('.fill'), st = b.querySelector('.st'), hint = d.querySelector('.demo-hint');
    const C = 597, HOLD = 700; let raf = 0, t0 = 0, done = false, streak = +b.dataset.streak || 12;
    const set = (p) => { fill.style.strokeDashoffset = C * (1 - p); };
    const burst = () => {
      const cols = ['#2FAE82', '#EE8640', '#A88BFF', '#E85A82', '#3D88E6', '#DFA318'];
      for (let i = 0; i < 16; i++) {
        const s = d.createElement('i'), a = (i / 16) * Math.PI * 2, r = 80 + Math.random() * 50;
        s.className = 'spark'; s.style.background = cols[i % cols.length];
        s.style.setProperty('--x', Math.cos(a) * r + 'px'); s.style.setProperty('--y', Math.sin(a) * r + 'px');
        b.appendChild(s); setTimeout(() => s.remove(), 850);
      }
    };
    const finish = () => {
      done = true; streak++; b.classList.add('done'); b.classList.remove('holding');
      st.textContent = streak + ' day streak'; hint.textContent = 'Logged. Hold again to undo.';
      set(1); if (!reduce) burst(); try { if (navigator.vibrate) navigator.vibrate(20); } catch (e) {}
    };
    const undo = () => {
      done = false; streak--; b.classList.remove('done'); st.textContent = streak + ' day streak';
      hint.textContent = 'Undone. Hold to log it again.'; set(0);
    };
    const step = (t) => {
      const p = Math.min(1, (t - t0) / HOLD); set(p);
      if (p >= 1) { raf = 0; done ? undo() : finish(); } else raf = requestAnimationFrame(step);
    };
    const start = () => { if (raf) return; b.classList.add('holding'); t0 = performance.now(); if (done) set(1); raf = requestAnimationFrame(step); };
    const cancel = () => { if (!raf) return; cancelAnimationFrame(raf); raf = 0; b.classList.remove('holding'); set(done ? 1 : 0); hint.textContent = 'Keep holding until the ring closes.'; };
    b.addEventListener('pointerdown', (e) => { e.preventDefault(); start(); });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach((ev) => b.addEventListener(ev, cancel));
    b.addEventListener('keydown', (e) => { if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) { e.preventDefault(); start(); } });
    b.addEventListener('keyup', (e) => { if (e.key === ' ' || e.key === 'Enter') cancel(); });
    b.addEventListener('contextmenu', (e) => e.preventDefault());
  });
})();

// screenshot showcase: coverflow stage + tab list, autoplay until the visitor interacts
(() => {
  const root = document.querySelector('[data-showcase]');
  if (!root) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const slides = [...root.querySelectorAll('.sp')], items = [...root.querySelectorAll('.tab-item')], n = slides.length;
  let cur = 0, timer = 0, userStopped = false, visible = false;
  const show = (i, auto) => {
    cur = (i + n) % n;
    slides.forEach((s, k) => { let o = (((k - cur) % n) + n) % n; if (o > n / 2) o -= n; s.dataset.o = o; });
    items.forEach((it, k) => {
      const on = k === cur; it.classList.toggle('active', on); it.querySelector('button').setAttribute('aria-selected', on);
      it.classList.remove('auto'); if (on && auto) { void it.offsetWidth; it.classList.add('auto'); }
    });
  };
  const stop = () => { clearInterval(timer); timer = 0; };
  const play = () => { if (reduce || userStopped || !visible || timer) return; items[cur].classList.add('auto'); timer = setInterval(() => show(cur + 1, true), 4500); };
  items.forEach((it, k) => it.querySelector('button').addEventListener('click', () => { userStopped = true; stop(); show(k, false); }));
  root.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return; e.preventDefault();
    userStopped = true; stop(); show(cur + (e.key === 'ArrowDown' ? 1 : -1), false); items[cur].querySelector('button').focus();
  });
  root.addEventListener('pointerenter', stop); root.addEventListener('pointerleave', play);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? play() : stop(); }, { threshold: 0.35 }).observe(root);
  }
  show(0, false);
})();
