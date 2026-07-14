// blue — the beach bar · Εκδοχή Β (app-style)
// Hash-routed screens over the shared menu-data.js:
//   #        → home (hero, search, category grid, legal card)
//   #c/<id>  → one category's item list with back button and chips

const ICONS = {
  rofimata: '☕', fresh: '🍊', juices: '🧃', soft: '🥤', food: '🍔',
  pizza: '🍕', icecream: '🍦', wine: '🍷', cocktails: '🍹', premium: '🍸',
  spirits: '🥃', beer: '🍺', energy: '⚡',
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
  const grid = el('div', 'grid');
  for (const s of SECTIONS) {
    const tile = el('a', 'tile');
    tile.href = '#c/' + s.id;
    tile.appendChild(el('div', 'tile-icon', ICONS[s.id] || '🍽️'));
    const nameWrap = el('div');
    nameWrap.appendChild(el('div', 'tile-name', s.nav));
    nameWrap.appendChild(el('div', 'tile-sub', enTitle(s)));
    tile.appendChild(nameWrap);
    tile.appendChild(el('div', 'tile-count', countItems(s) + ' είδη'));
    grid.appendChild(tile);
  }
  shell.appendChild(results);
  shell.appendChild(grid);

  search.addEventListener('input', () => {
    renderSearchResults(results, search.value);
    const searching = search.value.trim().length >= 2;
    results.style.display = searching ? '' : 'none';
    grid.style.display = searching ? 'none' : '';
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
