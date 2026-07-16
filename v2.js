// blue — the beach bar · Εκδοχή Β (app-style, Menurio/parco-like)
// On first entry the visitor picks a language (gr/en/bg) on a branded gate;
// the whole menu then renders in that language via v2-i18n.js.
// Hash-routed screens over the shared menu-data.js:
//   #        → home (cover with logo card, big category cards, legal card)
//   #c/<id>  → one category's item list with back button

// Category art: refined monoline icon on a deep navy gradient panel —
// brand-consistent and photography-free. Gradient ids are namespaced per
// category because inline SVG ids share one DOM namespace.
const MONO = {
  rofimata: '<path d="M4 9h12v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9z"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M8.5 2.5c-.5.8.5 1.2 0 2M12 2.5c-.5.8.5 1.2 0 2"/>',
  fresh: '<circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16M6.6 6.6l10.8 10.8M17.4 6.6 6.6 17.4"/>',
  juices: '<rect x="7" y="7" width="10" height="13" rx="2"/><path d="M7 10.5h10M13.5 7l1.2-3.5 2.3.7"/>',
  soft: '<path d="M7 8h10l-1.2 12H8.2L7 8z"/><path d="M12.4 8l1.8-5"/>',
  food: '<path d="M4 10a8 5.5 0 0 1 16 0z"/><path d="M4 13.5h16"/><path d="M5 17h14"/>',
  pizza: '<path d="M12 21 4.5 6a14 14 0 0 1 15 0L12 21z"/><circle cx="10.5" cy="9.5" r="1" fill="currentColor" stroke="none"/><circle cx="13.5" cy="12.5" r="1" fill="currentColor" stroke="none"/>',
  icecream: '<path d="M7.5 11a4.5 4.5 0 0 1 9 0"/><path d="M8 11h8l-4 10-4-10z"/>',
  wine: '<path d="M7 3h10l-.6 5a4.4 4.4 0 0 1-8.8 0L7 3z"/><path d="M12 12.5V19M8.5 21h7"/>',
  cocktails: '<path d="M4 4h16l-8 9-8-9z"/><path d="M12 13v6M8 21h8M14.5 4 17 1.5"/>',
  premium: '<path d="M5 5h14c0 3.6-3.1 6.5-7 6.5S5 8.6 5 5z"/><path d="M12 11.5V19M8.5 21h7M19 1.5v3M17.5 3h3"/>',
  spirits: '<path d="M6.5 4.5h11L16.4 20H7.6L6.5 4.5z"/><path d="M7.3 13h9.4"/>',
  beer: '<path d="M6 6.5h10v12a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 6 18.5v-12z"/><path d="M16 10h1a2.5 2.5 0 0 1 0 5h-1M6 9.5h10"/>',
  energy: '<path d="M13 2 5 13.5h6L10.5 22 19 10h-6L13 2z"/>',
  fallback: '<circle cx="12" cy="12" r="9"/><path d="M8 12h8"/>',
};

const art = (id) =>
  '<svg viewBox="0 0 120 120" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
  '<defs><linearGradient id="pg-' + id + '" x1="0" y1="0" x2="1" y2="1">' +
  '<stop offset="0" stop-color="#28386F"/><stop offset="1" stop-color="#161F45"/></linearGradient></defs>' +
  '<rect width="120" height="120" fill="url(#pg-' + id + ')"/>' +
  '<circle cx="96" cy="102" r="58" fill="rgba(255,255,255,0.045)"/>' +
  '<circle cx="18" cy="14" r="30" fill="rgba(47,168,188,0.14)"/>' +
  '<g color="#8FD9E6" fill="none" stroke="#8FD9E6" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" transform="translate(35,35) scale(2.1)">' +
  (MONO[id] || MONO.fallback) + '</g></svg>';

const ART = {};
for (const key of Object.keys(MONO)) ART[key] = art(key);

// Abstract tone-on-tone cover in deep navy with layered wave curves.
const COVER =
  '<svg viewBox="0 0 800 280" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
  '<defs><linearGradient id="g-cover" x1="0" y1="0" x2="1" y2="1">' +
  '<stop offset="0" stop-color="#22315F"/><stop offset="1" stop-color="#151D3E"/></linearGradient></defs>' +
  '<rect width="800" height="280" fill="url(#g-cover)"/>' +
  '<circle cx="560" cy="64" r="36" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="1.5"/>' +
  '<circle cx="560" cy="64" r="5" fill="rgba(47,168,188,0.55)"/>' +
  '<path d="M0 150q100-26 200 0t200 0 200 0 200 0V280H0z" fill="rgba(255,255,255,0.04)"/>' +
  '<path d="M0 190q100-26 200 0t200 0 200 0 200 0V280H0z" fill="rgba(255,255,255,0.05)"/>' +
  '<path d="M0 232q100-24 200 0t200 0 200 0 200 0V280H0z" fill="rgba(255,255,255,0.06)"/>' +
  '<path d="M0 190q100-26 200 0t200 0 200 0 200 0" fill="none" stroke="rgba(47,168,188,0.5)" stroke-width="2"/>' +
  '</svg>';

// Language state — session-scoped so every fresh visit (QR scan) asks again.
// Storage access can throw inside sandboxed frames; fall back to in-memory.
const langStore = {
  get() { try { return sessionStorage.getItem('blueLang') || ''; } catch (e) { return ''; } },
  set(v) { try { sessionStorage.setItem('blueLang', v); } catch (e) { /* in-memory only */ } },
  clear() { try { sessionStorage.removeItem('blueLang'); } catch (e) { /* in-memory only */ } },
};
let LANG = langStore.get();

// Canonical strings are "GR / EN"; split once on the first ' / '.
const grPart = (s) => { const i = s.indexOf(' / '); return (i === -1 ? s : s.slice(0, i)).trim(); };
const enPart = (s) => { const i = s.indexOf(' / '); return (i === -1 ? s : s.slice(i + 3)).trim(); };

const itemEntry = (section, item) => I18N.items[section.id + '|' + grPart(item.n)] || {};

function itemName(section, item) {
  const n = itemEntry(section, item).n || {};
  if (LANG === 'gr') return n.gr || grPart(item.n);
  return n[LANG] || enPart(item.n);
}

function itemDesc(section, item) {
  if (!item.d) return null;
  const d = itemEntry(section, item).d || {};
  if (LANG === 'gr') return d.gr || grPart(item.d);
  return d[LANG] || enPart(item.d);
}

function sectionField(section, field) {
  const s = I18N.sections[section.id];
  return (s && s[field] && s[field][LANG]) || null;
}

const sectionName = (section) => sectionField(section, 'name') || section.nav;

function subheadText(h) {
  const key = h.split('|')[0].trim();
  const e = I18N.subheads[key];
  return (e && e[LANG]) || key;
}

const ui = (key) => I18N.ui[key][LANG];

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

// Flat placeholder for items without a photo yet: soft navy tile with the
// category's line icon. Swapped for a real <img> as soon as item.img is set.
const photoPlaceholder = (sectionId) =>
  '<svg viewBox="0 0 120 120" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
  '<rect width="120" height="120" fill="#22315F"/>' +
  '<circle cx="98" cy="104" r="52" fill="rgba(255,255,255,0.04)"/>' +
  '<g color="#6E87C9" fill="none" stroke="#6E87C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" transform="translate(38,38) scale(1.85)">' +
  (MONO[sectionId] || MONO.fallback) + '</g></svg>';

function itemCard(item, section) {
  const card = el('div', 'card');
  const body = el('div', 'card-body');
  body.appendChild(el('div', 'card-name', itemName(section, item)));
  const desc = itemDesc(section, item);
  if (desc) body.appendChild(el('div', 'card-desc', desc));
  body.appendChild(el('div', 'card-price', item.p));
  card.appendChild(body);
  const photo = el('div', 'card-photo');
  if (item.img) {
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = itemName(section, item);
    img.loading = 'lazy';
    photo.appendChild(img);
  } else {
    photo.innerHTML = photoPlaceholder(section && section.id);
  }
  card.appendChild(photo);
  return card;
}

function renderCover(app) {
  const cover = el('div', 'cover');
  cover.innerHTML = COVER;
  const logoCard = el('div', 'logo-card');
  logoCard.appendChild(el('div', 'logo-card-name', 'blue'));
  logoCard.appendChild(el('div', 'logo-card-tag', 'the beach bar'));
  cover.appendChild(logoCard);
  const lang = I18N.langs.find((l) => l.code === LANG);
  if (lang) {
    const chip = el('button', 'lang-chip');
    chip.type = 'button';
    chip.setAttribute('aria-label', 'Γλώσσα / Language / Език');
    chip.innerHTML = lang.flag;
    chip.addEventListener('click', () => {
      LANG = '';
      langStore.clear();
      router();
    });
    cover.appendChild(chip);
  }
  app.appendChild(cover);
}

function renderLegalCard(parent) {
  const card = el('div', 'legal-card');
  card.appendChild(el('div', 'legal-logo', 'blue'));
  card.appendChild(el('div', 'legal-tagline', 'the beach bar'));
  const inspector = el('div', 'legal-inspector');
  inspector.append(ui('inspectorRole'), document.createElement('br'), ui('inspectorName'));
  card.appendChild(inspector);
  card.appendChild(el('div', 'legal-divider'));
  const lines = el('div', 'legal-lines');
  for (const line of ui('legal')) lines.appendChild(el('div', 'legal-line', line));
  card.appendChild(lines);
  parent.appendChild(card);
}

function renderLangGate(app) {
  const gate = el('div', 'gate');
  const inner = el('div', 'gate-inner');
  inner.appendChild(el('div', 'gate-logo', 'blue'));
  inner.appendChild(el('div', 'gate-tag', 'the beach bar'));
  inner.appendChild(el('div', 'gate-hint', I18N.ui.pick));
  const list = el('div', 'gate-langs');
  for (const l of I18N.langs) {
    const btn = el('button', 'lang-btn');
    btn.type = 'button';
    const flagWrap = el('span', 'lang-btn-flag');
    flagWrap.innerHTML = l.flag;
    btn.appendChild(flagWrap);
    btn.appendChild(el('span', 'lang-btn-label', l.label));
    btn.addEventListener('click', () => {
      LANG = l.code;
      langStore.set(l.code);
      navigate();
    });
    list.appendChild(btn);
  }
  inner.appendChild(list);
  gate.appendChild(inner);
  app.appendChild(gate);
}

function renderHome(app) {
  renderCover(app);

  const shell = el('div', 'shell');
  shell.appendChild(el('div', 'min-note', ui('minNote')));

  const cards = el('div', 'cat-cards');
  for (const s of SECTIONS) {
    const card = el('a', 'cat-card');
    card.href = '#c/' + s.id;
    const body = el('div', 'cat-card-body');
    body.appendChild(el('div', 'cat-card-name', sectionName(s)));
    card.appendChild(body);
    const artWrap = el('div', 'cat-art');
    artWrap.innerHTML = ART[s.id] || ART.fallback;
    card.appendChild(artWrap);
    cards.appendChild(card);
  }
  shell.appendChild(cards);

  renderLegalCard(shell);
  app.appendChild(shell);
}

function renderCategory(app, section) {
  renderCover(app);

  const shell = el('div', 'shell');

  const back = el('a', 'back-pill');
  back.href = '#';
  back.appendChild(el('span', 'back-pill-chevron', '‹'));
  back.appendChild(el('span', null, ui('back')));
  shell.appendChild(back);

  const head = el('div', 'cat-head');
  const headBody = el('div', 'cat-head-body');
  headBody.appendChild(el('div', 'cat-head-name', sectionName(section)));
  const note = sectionField(section, 'note');
  if (note) headBody.appendChild(el('div', 'cat-head-note', note));
  head.appendChild(headBody);
  const headArt = el('div', 'cat-head-art');
  headArt.innerHTML = ART[section.id] || ART.fallback;
  head.appendChild(headArt);
  shell.appendChild(head);

  const items = el('div', 'items');
  for (const item of section.items) {
    if (item.h) items.appendChild(el('div', 'subheading', subheadText(item.h)));
    else items.appendChild(itemCard(item, section));
  }
  const foot = sectionField(section, 'foot');
  if (foot) items.appendChild(el('div', 'section-foot', foot));
  shell.appendChild(items);
  app.appendChild(shell);
}

function router() {
  const app = document.getElementById('app');
  app.textContent = '';
  if (!LANG) {
    renderLangGate(app);
    window.scrollTo(0, 0);
    return;
  }
  const match = location.hash.match(/^#c\/(.+)$/);
  const section = match && SECTIONS.find((s) => s.id === match[1]);
  if (section) renderCategory(app, section);
  else renderHome(app);
  app.classList.remove('screen-in');
  void app.offsetWidth; /* restart the enter animation */
  app.classList.add('screen-in');
  window.scrollTo(0, 0);
}

// Every in-app navigation (into a category, back home) shows a short
// branded splash — the blue logo on navy — before the screen appears.
let loadTimer = null;

function showLoader(app) {
  app.textContent = '';
  const loader = el('div', 'loader');
  const inner = el('div', 'loader-inner');
  inner.appendChild(el('div', 'loader-logo', 'blue'));
  inner.appendChild(el('div', 'loader-tag', 'the beach bar'));
  const dots = el('div', 'loader-dots');
  for (let i = 0; i < 3; i++) dots.appendChild(el('span', 'loader-dot'));
  inner.appendChild(dots);
  loader.appendChild(inner);
  app.appendChild(loader);
}

function navigate() {
  clearTimeout(loadTimer);
  showLoader(document.getElementById('app'));
  window.scrollTo(0, 0);
  loadTimer = setTimeout(router, 500);
}

window.addEventListener('hashchange', navigate);
router();
