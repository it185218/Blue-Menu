// blue — the beach bar · Εκδοχή Β (app-style, Menurio/parco-like)
// Hash-routed screens over the shared menu-data.js:
//   #        → home (cover with logo card, big category cards, legal card)
//   #c/<id>  → one category's item list with back button and chips

// Flat illustration per category (colored panel on the right of each card),
// drawn as inline SVG in the parco style: solid backdrop, simple shapes,
// soft shadow.
const art = (bg, inner) =>
  '<svg viewBox="0 0 120 120" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
  '<rect width="120" height="120" fill="' + bg + '"/>' + inner + '</svg>';

const ART = {
  rofimata: art('#A8442E',
    '<ellipse cx="66" cy="72" rx="34" ry="26" fill="rgba(0,0,0,0.16)"/>' +
    '<circle cx="58" cy="62" r="30" fill="#FFF6EF"/>' +
    '<circle cx="58" cy="62" r="23" fill="#3B2016"/>' +
    '<path d="M46 58c5-7 16-9 23-3" stroke="#7A4A31" stroke-width="3" fill="none" stroke-linecap="round"/>' +
    '<circle cx="66" cy="70" r="2.2" fill="#6B3B26"/><circle cx="50" cy="68" r="1.6" fill="#6B3B26"/>' +
    '<path d="M86.5 55a11 11 0 0 1 0 15" stroke="#FFF6EF" stroke-width="7" fill="none" stroke-linecap="round"/>'),
  fresh: art('#8FD3DF',
    '<ellipse cx="62" cy="88" rx="26" ry="6" fill="rgba(0,0,0,0.14)"/>' +
    '<rect x="63" y="10" width="5" height="28" rx="2.5" fill="#E14B57" transform="rotate(14 65 24)"/>' +
    '<path d="M45 32h30l-3.2 54H48.2L45 32z" fill="#F5A93B"/>' +
    '<path d="M45 32h30l-1 17H46l-1-17z" fill="#FFC96B"/>' +
    '<ellipse cx="60" cy="32" rx="15" ry="3.5" fill="#FFD98E"/>' +
    '<circle cx="44" cy="35" r="8.5" fill="#F5A93B" stroke="#E8863C" stroke-width="2"/>' +
    '<path d="M44 28v14M37.5 35h13M39.5 30.5l9 9M48.5 30.5l-9 9" stroke="#FFE1B0" stroke-width="1.4"/>'),
  juices: art('#F6C445',
    '<ellipse cx="62" cy="90" rx="28" ry="6" fill="rgba(0,0,0,0.14)"/>' +
    '<path d="M74 34l6-17" stroke="#E14B57" stroke-width="4.5" stroke-linecap="round"/>' +
    '<rect x="40" y="34" width="40" height="54" rx="6" fill="#FFFFFF"/>' +
    '<path d="M40 50h40v-8a6 6 0 0 0-1.8-4.3L74 34H46l-4.2 3.7A6 6 0 0 0 40 42v8z" fill="#DDE7F0"/>' +
    '<rect x="47" y="58" width="26" height="19" rx="4" fill="#2FA8BC"/>' +
    '<circle cx="60" cy="67.5" r="5.5" fill="#F5A93B"/>'),
  soft: art('#B23A2E',
    '<ellipse cx="62" cy="90" rx="26" ry="6" fill="rgba(0,0,0,0.16)"/>' +
    '<rect x="57" y="10" width="5" height="24" rx="2.5" fill="#FFFFFF" transform="rotate(-10 59 22)"/>' +
    '<path d="M44 30h32l-3.4 58H47.4L44 30z" fill="#3A2015"/>' +
    '<ellipse cx="60" cy="30" rx="16" ry="4" fill="#5B3220"/>' +
    '<rect x="49" y="44" width="10" height="10" rx="2" fill="rgba(255,255,255,0.35)" transform="rotate(12 54 49)"/>' +
    '<rect x="60" y="58" width="9" height="9" rx="2" fill="rgba(255,255,255,0.3)" transform="rotate(-14 64 62)"/>' +
    '<circle cx="55" cy="72" r="1.8" fill="rgba(255,255,255,0.5)"/><circle cx="63" cy="78" r="1.4" fill="rgba(255,255,255,0.5)"/><circle cx="59" cy="38" r="1.6" fill="rgba(255,255,255,0.5)"/>' +
    '<circle cx="76" cy="30" r="7" fill="#F6C445" stroke="#E8A62C" stroke-width="2"/>'),
  food: art('#6FA85C',
    '<ellipse cx="60" cy="90" rx="32" ry="6" fill="rgba(0,0,0,0.15)"/>' +
    '<path d="M38 60a22 15 0 0 1 44 0z" fill="#F0B269"/>' +
    '<circle cx="50" cy="50" r="1.6" fill="#FFF3DC"/><circle cx="60" cy="46" r="1.6" fill="#FFF3DC"/><circle cx="70" cy="50" r="1.6" fill="#FFF3DC"/>' +
    '<path d="M36 60h48q0 6-6 6h-2q-2 4-6 1-3 4-7 1-4 4-8 0-4 3-7-1h-3q-6 0-6-6z" fill="#7BC24E" transform="translate(0 1)"/>' +
    '<rect x="37" y="68" width="46" height="9" rx="4.5" fill="#5C3A21"/>' +
    '<path d="M39 79h42v3a8 8 0 0 1-8 8H47a8 8 0 0 1-8-8v-3z" fill="#E8A755"/>'),
  pizza: art('#C75146',
    '<ellipse cx="62" cy="92" rx="28" ry="6" fill="rgba(0,0,0,0.16)"/>' +
    '<path d="M28 42a46 46 0 0 1 64 0L60 96 28 42z" fill="#F1B45C"/>' +
    '<path d="M34 46a37 37 0 0 1 52 0L60 88 34 46z" fill="#F7D154"/>' +
    '<circle cx="52" cy="54" r="5.5" fill="#C6402F"/><circle cx="68" cy="52" r="5" fill="#C6402F"/><circle cx="60" cy="68" r="5" fill="#C6402F"/>' +
    '<circle cx="61" cy="46" r="2.2" fill="#6FA85C"/><circle cx="48" cy="64" r="2" fill="#6FA85C"/>'),
  icecream: art('#F2A7C3',
    '<ellipse cx="62" cy="94" rx="22" ry="5" fill="rgba(0,0,0,0.13)"/>' +
    '<path d="M45 56L60 96l15-40z" fill="#D99A5B"/>' +
    '<path d="M49 62l22-4M51 70l17-3M54 78l11-2M50 56l8 32M60 56l3 32" stroke="#B97F44" stroke-width="1.4"/>' +
    '<circle cx="60" cy="45" r="18" fill="#FFF3EC"/>' +
    '<path d="M44 52q4 9 8 1 3 8 8 1 3 8 8 1 4 8 8-1v-8H44z" fill="#FFF3EC"/>' +
    '<circle cx="60" cy="25" r="4.5" fill="#E14B57"/>'),
  wine: art('#6E2437',
    '<ellipse cx="60" cy="84" rx="30" ry="6" fill="rgba(0,0,0,0.2)"/>' +
    '<path d="M43 26h9v-9a2.5 2.5 0 0 0-2.5-2.5h-4A2.5 2.5 0 0 0 43 17v9z" fill="#3E1524"/>' +
    '<rect x="38" y="24" width="19" height="56" rx="5" fill="#3E1524"/>' +
    '<rect x="41" y="46" width="13" height="16" rx="2" fill="#F5EDE0"/>' +
    '<path d="M62 32h26l-1.6 11a11.4 11.4 0 0 1-22.8 0L62 32z" fill="rgba(255,255,255,0.28)"/>' +
    '<path d="M64 38h22l-.9 5.5a10 10 0 0 1-20.2 0L64 38z" fill="#C4314B"/>' +
    '<rect x="73" y="54" width="4" height="20" fill="rgba(255,255,255,0.4)"/>' +
    '<ellipse cx="75" cy="76" rx="10" ry="2.8" fill="rgba(255,255,255,0.4)"/>'),
  cocktails: art('#F0B7C8',
    '<path d="M60 80l34 18H60z" fill="rgba(0,0,0,0.1)"/>' +
    '<circle cx="81" cy="33" r="7" fill="#F5A93B" stroke="#E8863C" stroke-width="1.6"/>' +
    '<path d="M37 34c1 13 11 22 23 22s22-9 23-22H37z" fill="rgba(255,255,255,0.55)"/>' +
    '<path d="M40.5 37c1.5 9 9.5 15.5 19.5 15.5S78 46 79.5 37h-39z" fill="#D93B4F"/>' +
    '<rect x="58" y="56" width="4" height="20" fill="rgba(255,255,255,0.75)"/>' +
    '<ellipse cx="60" cy="79" rx="13" ry="3.2" fill="rgba(255,255,255,0.75)"/>'),
  premium: art('#232B54',
    '<path d="M60 76l30 16H60z" fill="rgba(0,0,0,0.25)"/>' +
    '<path d="M34 30h52L60 58 34 30z" fill="rgba(255,255,255,0.22)"/>' +
    '<path d="M40 34h40L60 55 40 34z" fill="#F2C14E"/>' +
    '<rect x="58" y="56" width="4" height="18" fill="rgba(255,255,255,0.45)"/>' +
    '<ellipse cx="60" cy="76" rx="12" ry="3" fill="rgba(255,255,255,0.45)"/>' +
    '<path d="M84 16l1.8 4.7 4.7 1.8-4.7 1.8L84 29l-1.8-4.7-4.7-1.8 4.7-1.8L84 16z" fill="#FFFFFF"/>' +
    '<path d="M31 52l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2 1.2-3z" fill="rgba(255,255,255,0.7)"/>'),
  spirits: art('#7C4A22',
    '<ellipse cx="61" cy="86" rx="27" ry="6" fill="rgba(0,0,0,0.18)"/>' +
    '<path d="M42 34h36l-2 42a6 6 0 0 1-6 5.6H50a6 6 0 0 1-6-5.6l-2-42z" fill="rgba(255,255,255,0.3)"/>' +
    '<path d="M44.6 54h30.8l-1.1 22a5 5 0 0 1-5 4.6H50.7a5 5 0 0 1-5-4.6l-1.1-22z" fill="#E8973C"/>' +
    '<rect x="52" y="58" width="12" height="12" rx="2.5" fill="rgba(255,255,255,0.5)" transform="rotate(10 58 64)"/>' +
    '<ellipse cx="60" cy="34" rx="18" ry="3.5" fill="rgba(255,255,255,0.35)"/>'),
  beer: art('#D99114',
    '<ellipse cx="60" cy="88" rx="27" ry="6" fill="rgba(0,0,0,0.15)"/>' +
    '<rect x="38" y="38" width="36" height="46" rx="6" fill="#FCE9A8"/>' +
    '<rect x="43" y="48" width="26" height="31" rx="4" fill="#EDA419"/>' +
    '<path d="M74 48h2a9 9 0 0 1 0 18h-2" stroke="#FCE9A8" stroke-width="6.5" fill="none" stroke-linecap="round"/>' +
    '<circle cx="45" cy="38" r="7" fill="#FFFFFF"/><circle cx="56" cy="34" r="8.5" fill="#FFFFFF"/><circle cx="67" cy="38" r="7" fill="#FFFFFF"/><circle cx="61" cy="41" r="6" fill="#FFFFFF"/><circle cx="50" cy="41" r="6" fill="#FFFFFF"/>'),
  energy: art('#2E4FBF',
    '<ellipse cx="61" cy="90" rx="22" ry="5" fill="rgba(0,0,0,0.2)"/>' +
    '<rect x="46" y="30" width="28" height="58" rx="7" fill="#DDE4EE"/>' +
    '<ellipse cx="60" cy="31" rx="13" ry="3.5" fill="#B9C4D6"/>' +
    '<path d="M64 42L51 64h8l-3 16 13-24h-8l3-14z" fill="#F6C445"/>'),
  fallback: art('#8FD3DF',
    '<circle cx="60" cy="60" r="26" fill="rgba(255,255,255,0.6)"/>'),
};

// Beach-scene cover for the home screen (waves, sun) in blue's palette.
const COVER =
  '<svg viewBox="0 0 800 280" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
  '<rect width="800" height="280" fill="#DDF1F5"/>' +
  '<circle cx="640" cy="66" r="40" fill="#F6C445"/>' +
  '<path d="M470 78c8-10 22-10 30 0" stroke="#7A93A8" stroke-width="4" fill="none" stroke-linecap="round"/>' +
  '<path d="M528 52c6-8 18-8 24 0" stroke="#7A93A8" stroke-width="3.5" fill="none" stroke-linecap="round"/>' +
  '<path d="M0 152q50-13 100 0t100 0 100 0 100 0 100 0 100 0 100 0 100 0V280H0z" fill="#63C3D3"/>' +
  '<path d="M0 196q50-13 100 0t100 0 100 0 100 0 100 0 100 0 100 0 100 0V280H0z" fill="#2FA8BC"/>' +
  '<path d="M60 172q20-6 40 0M300 178q20-6 40 0M560 170q20-6 40 0" stroke="rgba(255,255,255,0.55)" stroke-width="4" fill="none" stroke-linecap="round"/>' +
  '<path d="M0 238q50-12 100 0t100 0 100 0 100 0 100 0 100 0 100 0 100 0V280H0z" fill="#1C2957"/>' +
  '</svg>';

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function countItems(section) {
  return section.items.filter((i) => i.n).length;
}

function enTitle(section) {
  const parts = section.t.split('|');
  return (parts[1] || parts[0]).trim();
}

function itemCard(item) {
  const card = el('div', 'card');
  card.appendChild(el('div', 'card-name', item.n));
  if (item.d) card.appendChild(el('div', 'card-desc', item.d));
  card.appendChild(el('div', 'card-price', item.p));
  return card;
}

function renderCover(app) {
  const cover = el('div', 'cover');
  cover.innerHTML = COVER;
  const logoCard = el('div', 'logo-card');
  logoCard.appendChild(el('div', 'logo-card-name', 'blue'));
  logoCard.appendChild(el('div', 'logo-card-tag', 'the beach bar'));
  cover.appendChild(logoCard);
  app.appendChild(cover);
}

function renderLegalCard(parent) {
  const card = el('div', 'legal-card');
  card.appendChild(el('div', 'legal-logo', 'blue'));
  card.appendChild(el('div', 'legal-tagline', 'the beach bar'));
  const inspector = el('div', 'legal-inspector');
  const [role, name] = INSPECTOR.split(': ');
  inspector.append(role, document.createElement('br'), name);
  card.appendChild(inspector);
  card.appendChild(el('div', 'legal-divider'));
  const lines = el('div', 'legal-lines');
  for (const line of LEGAL) lines.appendChild(el('div', 'legal-line', line));
  card.appendChild(lines);
  parent.appendChild(card);
}

function renderHome(app) {
  renderCover(app);

  const shell = el('div', 'shell');
  shell.appendChild(el('div', 'min-note', MIN_NOTE));

  const cards = el('div', 'cat-cards');
  for (const s of SECTIONS) {
    const card = el('a', 'cat-card');
    card.href = '#c/' + s.id;
    const body = el('div', 'cat-card-body');
    body.appendChild(el('div', 'cat-card-name', s.nav));
    body.appendChild(el('div', 'cat-card-sub', enTitle(s)));
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
  back.setAttribute('aria-label', 'Πίσω / Back');
  back.appendChild(el('span', 'back-pill-chevron', '‹'));
  back.appendChild(el('span', null, 'Πίσω'));
  shell.appendChild(back);

  const head = el('div', 'cat-head');
  const headBody = el('div', 'cat-head-body');
  headBody.appendChild(el('div', 'cat-head-name', section.nav));
  headBody.appendChild(el('div', 'cat-head-sub', enTitle(section)));
  if (section.note) headBody.appendChild(el('div', 'cat-head-note', section.note));
  head.appendChild(headBody);
  const headArt = el('div', 'cat-head-art');
  headArt.innerHTML = ART[section.id] || ART.fallback;
  head.appendChild(headArt);
  shell.appendChild(head);

  const items = el('div', 'items');
  for (const item of section.items) {
    if (item.h) items.appendChild(el('div', 'subheading', item.h));
    else items.appendChild(itemCard(item));
  }
  if (section.foot) items.appendChild(el('div', 'section-foot', section.foot));
  shell.appendChild(items);
  app.appendChild(shell);
}

function router() {
  const app = document.getElementById('app');
  app.textContent = '';
  const match = location.hash.match(/^#c\/(.+)$/);
  const section = match && SECTIONS.find((s) => s.id === match[1]);
  if (section) renderCategory(app, section);
  else renderHome(app);
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', router);
router();
