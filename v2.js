// blue — the beach bar · Εκδοχή Β (app-style)
// Hash-routed screens over the shared menu-data.js:
//   #        → home (hero, search, category grid, legal card)
//   #c/<id>  → one category's item list with back button and chips

// Monoline SVG icons (24×24, stroke-based) per category id.
const svg = (inner) =>
  '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + inner + '</svg>';

const ICONS = {
  rofimata: svg('<path d="M4 9h12v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9z"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M8.5 2.5c-.5.8.5 1.2 0 2M12 2.5c-.5.8.5 1.2 0 2"/>'),
  fresh: svg('<circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16M6.6 6.6l10.8 10.8M17.4 6.6 6.6 17.4"/>'),
  juices: svg('<rect x="7" y="7" width="10" height="13" rx="2"/><path d="M7 10.5h10M13.5 7l1.2-3.5 2.3.7"/>'),
  soft: svg('<path d="M7 8h10l-1.2 12H8.2L7 8z"/><path d="M12.4 8l1.8-5"/>'),
  food: svg('<path d="M4 10a8 5.5 0 0 1 16 0z"/><path d="M4 13.5h16"/><path d="M5 17h14"/>'),
  pizza: svg('<path d="M12 21 4.5 6a14 14 0 0 1 15 0L12 21z"/><circle cx="10.5" cy="9.5" r="1" fill="currentColor" stroke="none"/><circle cx="13.5" cy="12.5" r="1" fill="currentColor" stroke="none"/>'),
  icecream: svg('<path d="M7.5 11a4.5 4.5 0 0 1 9 0"/><path d="M8 11h8l-4 10-4-10z"/>'),
  wine: svg('<path d="M7 3h10l-.6 5a4.4 4.4 0 0 1-8.8 0L7 3z"/><path d="M12 12.5V19M8.5 21h7"/>'),
  cocktails: svg('<path d="M4 4h16l-8 9-8-9z"/><path d="M12 13v6M8 21h8M14.5 4 17 1.5"/>'),
  premium: svg('<path d="M5 5h14c0 3.6-3.1 6.5-7 6.5S5 8.6 5 5z"/><path d="M12 11.5V19M8.5 21h7M19 1.5v3M17.5 3h3"/>'),
  spirits: svg('<path d="M6.5 4.5h11L16.4 20H7.6L6.5 4.5z"/><path d="M7.3 13h9.4"/>'),
  beer: svg('<path d="M6 6.5h10v12a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 6 18.5v-12z"/><path d="M16 10h1a2.5 2.5 0 0 1 0 5h-1M6 9.5h10"/>'),
  energy: svg('<path d="M13 2 5 13.5h6L10.5 22 19 10h-6L13 2z"/>'),
  fallback: svg('<circle cx="12" cy="12" r="9"/><path d="M8 12h8"/>'),
};

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

function itemCard(item, withCategory) {
  const card = el(withCategory ? 'a' : 'div', 'card');
  const left = el('div');
  left.appendChild(el('div', 'card-name', item.n));
  if (item.d) left.appendChild(el('div', 'card-desc', item.d));
  if (withCategory) {
    card.href = '#c/' + withCategory.id;
    left.appendChild(el('span', 'card-cat', withCategory.nav));
  }
  card.appendChild(left);
  card.appendChild(el('div', 'card-price', item.p));
  return card;
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

function renderSearchResults(container, query) {
  container.textContent = '';
  const q = query.trim().toLowerCase();
  if (q.length < 2) return;
  let hits = 0;
  for (const s of SECTIONS) {
    for (const item of s.items) {
      if (!item.n) continue;
      const hay = (item.n + ' ' + (item.d || '')).toLowerCase();
      if (hay.includes(q)) {
        container.appendChild(itemCard(item, s));
        hits++;
      }
    }
  }
  if (!hits) container.appendChild(el('div', 'empty', 'Δεν βρέθηκαν προϊόντα / No items found'));
}

function renderHome(app) {
  const hero = el('header', 'hero');
  hero.appendChild(el('div', 'hero-logo', 'blue'));
  hero.appendChild(el('div', 'hero-tagline', 'the beach bar'));
  const badge = el('div', 'hero-badge');
  badge.append('Ελάχιστη κατανάλωση ανά άτομο 5.00€', document.createElement('br'), 'Minimum consumption per person 5.00€');
  hero.appendChild(badge);
  app.appendChild(hero);

  const shell = el('div', 'shell');

  const searchWrap = el('div', 'search-wrap');
  const search = el('input', 'search');
  search.type = 'search';
  search.placeholder = '🔍  Αναζήτηση / Search…';
  searchWrap.appendChild(search);
  shell.appendChild(searchWrap);

  const results = el('div', 'items');
  results.style.display = 'none';
  const list = el('div', 'cat-list');
  for (const s of SECTIONS) {
    const row = el('a', 'cat-row');
    row.href = '#c/' + s.id;
    const icon = el('span', 'cat-icon');
    icon.innerHTML = ICONS[s.id] || ICONS.fallback;
    row.appendChild(icon);
    const nameWrap = el('div');
    nameWrap.appendChild(el('div', 'cat-name', s.nav));
    nameWrap.appendChild(el('div', 'cat-sub', enTitle(s)));
    row.appendChild(nameWrap);
    const meta = el('div', 'cat-meta');
    meta.appendChild(el('span', 'cat-count', String(countItems(s))));
    meta.appendChild(el('span', 'cat-chevron', '›'));
    row.appendChild(meta);
    list.appendChild(row);
  }
  shell.appendChild(results);
  shell.appendChild(list);

  search.addEventListener('input', () => {
    renderSearchResults(results, search.value);
    const searching = search.value.trim().length >= 2;
    results.style.display = searching ? '' : 'none';
    list.style.display = searching ? 'none' : '';
  });

  renderLegalCard(shell);
  app.appendChild(shell);
}

function renderCategory(app, section) {
  const appbar = el('div', 'appbar');
  const row = el('div', 'appbar-row');
  const back = el('a', 'back', '←');
  back.href = '#';
  back.setAttribute('aria-label', 'Πίσω / Back');
  row.appendChild(back);
  const titleWrap = el('div');
  titleWrap.appendChild(el('div', 'appbar-title', section.t));
  if (section.note) titleWrap.appendChild(el('div', 'appbar-note', section.note));
  row.appendChild(titleWrap);
  appbar.appendChild(row);

  const chips = el('div', 'chips');
  for (const s of SECTIONS) {
    const chip = el('a', 'chip' + (s.id === section.id ? ' active' : ''), s.nav);
    chip.href = '#c/' + s.id;
    chips.appendChild(chip);
  }
  appbar.appendChild(chips);
  app.appendChild(appbar);

  const shell = el('div', 'shell');
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
  const active = document.querySelector('.chips .chip.active');
  if (active) active.scrollIntoView({ block: 'nearest', inline: 'center' });
}

window.addEventListener('hashchange', router);
router();
