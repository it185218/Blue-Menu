// blue — the beach bar · renders the menu from menu-data.js (SECTIONS, LEGAL)

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function renderChips(sections) {
  const chips = document.getElementById('chips');
  for (const s of sections) {
    const chip = el('a', 'chip', s.nav);
    chip.href = '#' + s.id;
    chips.appendChild(chip);
  }
}

function renderItem(item) {
  if (item.h) {
    const sub = el('div', 'subheading');
    sub.appendChild(el('span', 'subheading-label', item.h));
    sub.appendChild(el('span', 'subheading-rule'));
    return sub;
  }
  const wrap = el('div', 'item');
  const row = el('div', 'item-row');
  row.appendChild(el('span', 'item-name', item.n));
  row.appendChild(el('span', 'item-leader'));
  row.appendChild(el('span', 'item-price', item.p));
  wrap.appendChild(row);
  if (item.d) wrap.appendChild(el('div', 'item-desc', item.d));
  return wrap;
}

function renderSections(sections) {
  const main = document.getElementById('menu');
  for (const s of sections) {
    const section = el('section', 'section');
    section.id = s.id;

    const head = el('div', 'section-head');
    const titleWrap = el('div', 'section-title-wrap');
    titleWrap.appendChild(el('span', 'section-dot'));
    titleWrap.appendChild(el('h2', 'section-title', s.t));
    head.appendChild(titleWrap);
    if (s.note) head.appendChild(el('div', 'section-note', s.note));
    section.appendChild(head);

    const body = el('div', 'section-body');
    for (const item of s.items) body.appendChild(renderItem(item));
    if (s.foot) body.appendChild(el('div', 'section-foot', s.foot));
    section.appendChild(body);

    main.appendChild(section);
  }
}

function renderLegal(lines) {
  const legal = document.getElementById('legal');
  for (const line of lines) legal.appendChild(el('div', 'footer-legal-line', line));
}

renderChips(SECTIONS);
renderSections(SECTIONS);
renderLegal(LEGAL);
