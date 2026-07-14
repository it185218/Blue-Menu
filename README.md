# Blue-Menu

Digital menu for **blue — the beach bar** (GR/EN), implemented from the
"Blue Beach Bar Menu" Claude Design project.

## Structure

- `index.html` — page shell (sticky nav, hero, footer)
- `styles.css` — all styling; theme via CSS custom properties
- `menu-data.js` — the menu content (sections, items, prices, legal notes)
- `menu.js` — renders nav chips, menu sections, and legal notes from the data

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
