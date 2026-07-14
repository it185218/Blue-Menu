# Blue-Menu

Digital menu for **blue — the beach bar** (GR/EN), implemented from the
"Blue Beach Bar Menu" Claude Design project.

Two design versions share the same content, switchable via the tab bar at
the top of every page (for presenting to the client):

- **Εκδοχή Α · Κλασική** (`index.html`) — single-page menu with sticky
  chip navigation and dotted price leaders.
- **Εκδοχή Β · App** (`v2.html`) — app-style menu (Menurio-like): category
  tile grid, tap-through category screens with back button, and search.

## Structure

- `index.html` — Εκδοχή Α page shell (sticky nav, hero, footer)
- `styles.css` — Εκδοχή Α styling; theme via CSS custom properties
- `menu.js` — Εκδοχή Α renderer (nav chips, sections, legal notes)
- `v2.html` / `v2.css` / `v2.js` — Εκδοχή Β (hash-routed screens: home
  grid, category lists, search)
- `version-tabs.css` — the shared version-switcher tab bar
- `menu-data.js` — the menu content (sections, items, prices, legal
  notes), shared by both versions

No build step or dependencies — plain HTML/CSS/JS. Open `index.html`
directly in a browser, or serve the folder with any static file server
(e.g. `python3 -m http.server`).

## Theming

Adjust the custom properties at the top of `styles.css`:

- `--accent` — accent color (`#2FA8BC` teal · `#3E7BFA` blue · `#E8865A` coral)
- `--bg` — page background (`#F5F1E8` sand · `#FFFFFF` white)

## Editing the menu

All content lives in `menu-data.js`. Each section has an `id`, a nav chip
label (`nav`), a title (`t`), optional right-aligned `note` and footnote
(`foot`), and `items` where `n` = name, `p` = price, `d` = optional
description, and `{h: '…'}` inserts a subheading row.
