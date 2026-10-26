# Design tokens

Taken directly from the approved prototype's CSS (`site/index.html`, `:root` block). Names in backticks are the CSS custom properties used in the prototype.

## Colour: light theme (default)

| Token | Value | Use |
|---|---|---|
| `--crimson` / `--acc` / `--link` | `#6B2230` | Brand maroon: buttons, links, accents |
| `--black` / `--ink` | `#171717` | Body text, dark bands |
| `--ink-2` | `#4A4240` | Secondary text |
| `--muted` | `#6E6461` | Captions, hints |
| `--ivory` / `--bg` / `--on-dark` | `#F7F3EE` | Page background, text on dark |
| `--bg-alt` | `#EDE3D9` | Alternate section background |
| `--sand` / `--band` | `#D6C6B8` | Bands, dividers |
| `--card` | `#FFFDFA` | Card surface |
| `--gold` | `#B08D57` | Thin rules, carousel dots, accents |
| `--gold-ink` | `#7A5A31` | Gold text (readable on ivory) |
| `--sage` | `#7A8063` | Secondary accent |
| `--line` | `rgba(23,23,23,.12)` | Hairlines and borders |
| `--acc-soft` | `rgba(107,34,48,.08)` | Soft tinted backgrounds |
| `--glass` | `rgba(247,243,238,.84)` | Header and sheets (blurred) |

Shadows: `--sh1: 0 1px 2px rgba(23,23,23,.05), 0 10px 28px -14px rgba(107,34,48,.28)`; `--sh2: 0 2px 6px rgba(23,23,23,.06), 0 24px 48px -20px rgba(74,20,30,.40)`.

Each chapter page sets its own accent colours (`--acc`, `--acc-deep`, `--acc-lite`) from `data/chapters.json`; the neutral fallback is `#6B2230` / `#6B2230` / `#E2A3AE`.

## Colour: dark theme

Applied when the visitor's system is dark, or `data-theme="dark"` is set on the root element. `data-theme="light"` forces light.

`--bg #171717`, `--bg-alt #1F1A1A`, `--band #261E1F`, `--card #211B1C`, `--ink #F1EAE2`, `--ink-2 #D5CBC2`, `--muted #A99E97`, `--line rgba(241,234,226,.14)`, `--link #E2A3AE`, `--gold-ink #D1B17E`, `--acc-soft rgba(226,163,174,.08)`, `--glass rgba(28,22,23,.82)`. Shadows are black-based: `--sh1: 0 1px 2px rgba(0,0,0,.3), 0 12px 30px -14px rgba(0,0,0,.6)`; `--sh2: 0 2px 6px rgba(0,0,0,.3), 0 26px 50px -20px rgba(0,0,0,.7)`.

## Typography (Google Fonts)

`https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Forum&family=Inter:wght@400;500;600&display=swap`

| Role | Family | Token |
|---|---|---|
| Display headings (page titles) | Cinzel | `--f-display` |
| Editorial text (sub-headings, product names, lead text) | Forum | `--f-edit` |
| UI, body, prices, buttons | Inter | `--f-ui` |

Scale: `.d1` 500 clamp(2.4rem, 6vw, 4.6rem)/1.04 Cinzel; `.d2` 500 clamp(1.8rem, 3.6vw, 2.7rem)/1.12 Cinzel; `.h2` 400 clamp(1.6rem, 3vw, 2.2rem)/1.15 Forum; `.h3` 400 1.5rem/1.2 Forum; lead text 400 clamp(1.15rem, 1.8vw, 1.35rem)/1.55 Forum; body 400 16px/1.65 Inter; product name 400 1.12rem/1.3 Forum; price 500 1.35rem Inter with tabular numbers.

## Layout

- Content width `--wrap` 1240px; side gutter `--gut` clamp(18px, 4vw, 48px); header height `--nav-h` 72px.
- Product grid: 4 columns on desktop, 3 on tablet, 2 on phone; gap 28px rows, 18px columns.
- Card and tile radius 12px. Product images sit in a 4:5 frame.
- Breakpoints: 1100, 1000, 920 (main phone/tablet switch), 900, 700, 620, 600, 420 (px, max-width); 921 and up for desktop-only rules. Also `hover: none` and `pointer: fine` queries separate touch from mouse.
- Respect `prefers-reduced-motion`, `prefers-color-scheme` and print styles (all present in the prototype).

## Logos and brand marks

In `site/img/`: `lockupIvory.png` (full logo on dark), `wordCrimson.png` / `wordIvory.png` (wordmark), `monoCrimson.png` / `monoIvory.png` (monogram). Service icons are custom vectors in brand maroon and gold, drawn inline in the page.

## Checkout branding (for Shopify's checkout editor)

Standard Shopify plans cannot restyle checkout layout; they can take these brand settings (see `Shopify-build-notes.md`, section 6).

- Logo: `lockupIvory.png` on dark or the wordmark in maroon (`wordCrimson.png`) on light. Favicon: the monogram (`monoCrimson.png`).
- Background `#F7F3EE`, form fields `#FFFDFA`, text `#171717`, secondary text `#4A4240`, accent and buttons `#6B2230` (hover `#5A1B28`), error use Shopify's default red, borders `rgba(23,23,23,.12)`.
- Fonts: headings Cinzel or Forum, body Inter (upload as custom fonts if the plan allows, otherwise pick the closest Shopify fonts).
- Buttons: 12px corner radius is used across the site; checkout allows a few preset radii, so choose the nearest.
