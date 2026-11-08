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

Scale (exact Figma design tokens, assuming 1rem = 16px):
- Display heading (`.d1`): `clamp(38.4px, 6vw, 73.6px)` (starts at 38.4px, scales with viewport)
- Secondary display (`.d2`): `clamp(28.8px, 3.6vw, 43.2px)` (starts at 28.8px, scales with viewport)
- Section heading (`.h2`, `h2`): `clamp(25.6px, 3vw, 35.2px)` (starts at 25.6px, scales with viewport)
- Heading (`.h3`, `h3`): `24px`
- Small heading (`.h4`, `h4`): `16px`
- Product title (`.pinfo h1`, `.hokk-title`): `clamp(28.8px, 3vw, 38.4px)`
- Default paragraph text (`body`, `p`, `.text-body`): `16px`
- Prose paragraph (`.prose p`): `18.08px`
- Intro/lede text (`.lede`, `.lead`, `p.lead`, `p.lede`): `clamp(18.4px, 1.8vw, 21.6px)`
- Small text (`.small`): `13.76px`
- Hero subtitles:
  - Standard hero subtitle (`.hero .sub`, `.hero-rot .sub`, `.phero .tagline`): `clamp(17.6px, 1.5vw, 21.6px)`
  - Alternate hero subtitle (`.phero--alt .sub`, `.phero-alt .tagline`): `clamp(16px, 1.5vw, 19.2px)`
- Eyebrows, badges, and labels:
  - Pre-heading eyebrow (`.kicker`): `12.8px`
  - Hero kicker eyebrow (`.hero-kick`): `11.84px`
  - Badge counter (`.badge`, `.cart-count-bubble`): `10.88px`
  - Soon tag (`.soon-tag`, `.mega-ct-soon`): `10.56px`
  - Product tags (`.tag`, `.pcard .tag`): `11.2px`

## Layout

- Content width `--wrap` 1240px; side gutter `--gut` clamp(18px, 4vw, 48px); header height `--nav-h` 72px.
- Product grid: 4 columns on desktop, 3 on tablet, 2 on phone; gap 28px rows, 18px columns.
- Card and tile radius 12px. Product images sit in a 4:5 frame.
- Breakpoints: 1100, 1000, 920 (main phone/tablet switch), 900, 700, 620, 600, 420 (px, max-width); 921 and up for desktop-only rules. Also `hover: none` and `pointer: fine` queries separate touch from mouse.
- Respect `prefers-reduced-motion`, `prefers-color-scheme` and print styles (all present in the prototype).

## Custom Shuttle Cursor

For desktop mouse pointers (`@media (pointer: fine)`):
- **Default cursor**: Handloom weaving shuttle SVG (wooden body `#A0703F`, silver metal tip `#C9CED6`, ivory outline `#F7F3EE`, wound with crimson yarn `#6B2230` and a trailing thread). Hotspot at `(3, 3)`.
- **Interactive cursor** (`a`, `button`, `summary`, `[role="button"]`, etc.): Shuttle with golden halo (`#B08D57` at 22% opacity), brighter wood `#C79A55` and crimson yarn `#B3202A`.
- **Thread trail**: Smooth fading quadratic bezier canvas trail (`canvas.trail`) matching the brand thread color that flows from the shuttle tip on pointermove. Disabled automatically on touchscreens or when `prefers-reduced-motion: reduce` is set.

## Logos and brand marks

In `site/img/`: `lockupIvory.png` (full logo on dark), `wordCrimson.png` / `wordIvory.png` (wordmark), `monoCrimson.png` / `monoIvory.png` (monogram). Service icons are custom vectors in brand maroon and gold, drawn inline in the page.

## Checkout branding (for Shopify's checkout editor)

Standard Shopify plans cannot restyle checkout layout; they can take these brand settings (see `Shopify-build-notes.md`, section 6).

- Logo: `lockupIvory.png` on dark or the wordmark in maroon (`wordCrimson.png`) on light. Favicon: the monogram (`monoCrimson.png`).
- Background `#F7F3EE`, form fields `#FFFDFA`, text `#171717`, secondary text `#4A4240`, accent and buttons `#6B2230` (hover `#5A1B28`), error use Shopify's default red, borders `rgba(23,23,23,.12)`.
- Fonts: headings Cinzel or Forum, body Inter (upload as custom fonts if the plan allows, otherwise pick the closest Shopify fonts).
- Buttons: 12px corner radius is used across the site; checkout allows a few preset radii, so choose the nearest.
