# Eens & Altijd — Design System

> *Zorgeloos stralen in jullie eigen sprookje.*
> *(Effortlessly shine in your own fairytale.)*

**Eens & Altijd** ("Once & Always") is a Dutch wedding planner. The service is
white-glove and emotional: a single planner takes a couple from "we're engaged"
through to the morning-after brunch, making sure the day they imagined is the
day they get. The brand voice is warm, attentive, and quietly luxurious —
never loud, never trendy. Couples are addressed as `jullie` (Dutch plural
"you"), and the planner speaks as a calm confidante.

The design system is built around a single hero asset: a hand-set gold serif
wordmark on a tulle background, with a flowing script tagline. From that one
image the whole system descends — champagne golds, ivory canvases, an
elegant Garamond display face, a romantic script for moments of feeling, and
a quiet sans-serif for everything functional.

---

## Sources

| Asset | Path | Notes |
|---|---|---|
| Brand hero / logo lockup | `uploads/50943.png` → `assets/logo-hero.png` | The single source of truth provided. Gold "Eens & Altijd" wordmark with script tagline on tulle. 1408×768. |

No codebase, Figma file, or website was provided. Everything below is derived
from the hero image, the brief ("wedding planner, making sure the client gets
the best wedding they wish for"), and category conventions for high-end Dutch
wedding planners.

> **Asks for the user**
> 1. Original font files for the wordmark serif and tagline script (we've
>    substituted Cormorant Garamond + Italianno — see *Type Substitutions*).
> 2. Any photography library (couples, venues, florals) — we've used
>    placeholder tiles in the UI kit.
> 3. Service copy for the marketing site — we've drafted Dutch placeholder
>    copy in the planner's voice.

---

## Index

```
.
├── README.md                 ← you are here
├── SKILL.md                  ← Claude Code-compatible skill manifest
├── colors_and_type.css       ← CSS variables + semantic element styles
├── assets/
│   ├── logo-hero.png         ← original hero lockup
│   ├── logo-wordmark.svg     ← clean gold wordmark on transparent
│   └── icons/                ← line-icon set (CDN-linked Lucide; see ICONOGRAPHY)
├── fonts/                    ← (currently empty — using Google Fonts CDN)
├── preview/                  ← design system cards (one concept per file)
├── ui_kits/
│   └── marketing/            ← marketing-site UI kit
└── slides/                   ← (none — no deck template was provided)
```

---

## Content Fundamentals

The Eens & Altijd voice is **the planner's voice**: a friend you've known for
years who happens to be exceptionally good at logistics. Calm, warm, and
specific.

**Language.** Dutch is the native language. Couples are always addressed as
`jullie` (the plural informal "you") — never `u` (formal) and never `je`
(singular). The brand speaks *to the couple together*, never to one partner.

**Tone.**
- Warm, never gushing. Confidence is implied by specifics, not adjectives.
- Sentences are short and conversational. Long, flowery prose belongs to
  competitors.
- Service is framed as **caretaking**, not vendoring. The planner *zorgt*
  (takes care), *luistert* (listens), *regelt* (arranges) — verbs do the
  emotional work.

**Casing.** Sentence case for all UI copy. The wordmark itself is the only
place where elegant Title Case appears (Eens & Altijd). Buttons read like
sentences, not labels: *"Plan een kennismaking"*, not "BOOK NOW".

**Examples — yes / no.**

| ✅ Yes | ❌ No |
|---|---|
| "Vertel ons over jullie dag." | "Schedule your free consultation today!" |
| "Een planner. Van eerste idee tot laatste dans." | "Premium end-to-end wedding orchestration." |
| "We luisteren eerst. Plannen daarna." | "We deliver your dream wedding!!" |
| "Plan een kennismaking" | "BOOK NOW" |

**Emoji.** None. Ever. The brand reaches for a script flourish or a
hairline rule before it reaches for an emoji.

**Numbers and stats.** Avoided in marketing copy. Eens & Altijd does not say
"500+ weddings planned" — that's a hospitality-chain register. Specifics are
named obliquely: *"Sinds 2018"*, *"Door heel Nederland en België"*.

**Punctuation.** Em-dashes are used sparingly for breath, not pace. Ellipses
never appear (they read uncertain). Exclamation marks are reserved for genuine
joy in a confirmation message — at most one per page.

**The script line.** Every page has *one* line set in the script face — a
single moment of feeling that anchors the section. It's a tagline, a closing
sign-off, or a section opener. Two scripts on one page is one too many.

---

## Visual Foundations

### Palette

The palette descends from the hero image: warm champagne gold against an
ivory canvas, with botanical accents (sage, dusty rose, deep burgundy)
borrowed from the wedding floral vocabulary.

- **Gold scale** (`--gold-100` → `--gold-600`). The signature is `--gold-400`
  (#b8924a), the same warm gold as the wordmark body. `--gold-500` is the
  burnished hover/press state.
- **Ivory canvas** (`--ivory`, #fbf7ef). Never pure white. The page should
  feel like cream paper.
- **Soft neutrals** (`--pearl`, `--tulle`, `--mist`, `--linen`) are layered on
  the canvas to build subtle depth without shadows.
- **Botanical accents** — `--blush`, `--rose`, `--sage`, `--burgundy`, `--sky`
  — appear inside section blocks, never as button fills.
- **Ink** is `--ink` (#2b2117), a warm near-black. Pure #000 is forbidden.

### Type

- **Display** is **Cormorant Garamond** (Google Fonts substitute for the
  custom serif in the wordmark). High contrast strokes, classical
  proportions, elegant italic.
- **Script** is **Italianno** — used only for tagline-scale flourishes. It
  carries the emotional register of the brand mark's "Zorgeloos stralen"
  line.
- **Body** is **Inter** at 400/500 weights — the quiet companion. It does the
  practical work (forms, navigation, body copy) and never competes with the
  display.
- The display is set in regular weight (400), not bold. Elegance comes from
  the letterforms themselves, not weight.

### Backgrounds

- **Default** is the ivory canvas. No gradient, no texture.
- **Hero surfaces** carry a soft fabric/tulle photograph at low opacity — the
  same visual idea as the source logo image. Never a solid gold fill.
- **Section blocks** are full-content-width panels in `--pearl`, `--tulle`,
  or one of the botanical accents (`--blush`, `--sage`), with `--r-lg` (20px)
  corners and generous interior padding.
- **Gradients** are reserved for the gold metallic effect on the wordmark
  itself (`--grad-gold`). No rainbow gradients, no purple-blue SaaS
  gradients, ever.
- **Patterns / textures.** A faint film grain (`--grain`) may sit at ~6%
  opacity over hero photography to evoke fine-art print. No repeated
  ornaments, no damask, no scrolling vines — those tropes belong to the
  competitive set we are differentiating from.

### Spacing & Layout

- 8pt grid: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- Marketing sections breathe: `--sp-9` (96px) between major blocks on
  desktop, `--sp-7` (48px) on mobile.
- Max content width is 1200px. Editorial passages narrow further to ~720px
  for body type.
- Whitespace is the brand's most important element. If a block looks too
  airy in dev, it's probably right.

### Borders & Hairlines

- A 1px hairline at `var(--hairline)` (≈10% ink) replaces shadows on most
  cards.
- A gold double-rule (`--gold-300` over `--gold-100`) sits beneath section
  eyebrows — a subtle nod to printed wedding stationery.

### Shadows

The brand is **shadow-shy**. Three levels exist:

- `--shadow-1` — barely-there 1px lift on form inputs.
- `--shadow-2` — soft 8/24 lift on hovering cards (rare).
- `--shadow-3` — modal lift only.
- `--shadow-gold` — a warm honey glow used once per page max, behind the
  primary CTA on a hero, to let the gold pill feel kissed by light.

### Corner Radii

| Token | Value | Use |
|---|---|---|
| `--r-xs` | 2px | Hairline accents |
| `--r-sm` | 6px | Form inputs, chips |
| `--r-md` | 12px | Photography frames, cards |
| `--r-lg` | 20px | Color section blocks, hero containers |
| `--r-xl` | 32px | Large feature panels |
| `--r-pill` | 999px | All buttons (no exceptions) |

Buttons are always pills. Square buttons read like a different brand.

### Cards

A card is a tile of `--tulle` or `--pearl` with `--r-md` (12px) corners and a
1px `--hairline` border — *no* drop shadow. Interior padding `--sp-5` (24px).
Hover lift is a 2px translateY and a swap to `--shadow-2`, both over 250ms.

### Animation

- All easing: `cubic-bezier(0.4, 0.0, 0.2, 1)` ("standard"), 200–300ms.
- Page-load: hero text fades up 12px over 400ms, staggered 60ms per child.
- Hover on links: gold color crossfade only — no underline animation.
- Hover on cards: `translateY(-2px)` + soft shadow.
- No bounces. No springs. No parallax. The brand is composed, not performative.

### Hover & Press States

- **Primary button**: gold fill darkens from `--gold-400` to `--gold-500` on
  hover; on press the button shrinks to 98% scale over 80ms.
- **Secondary button**: ivory fill stays; the 1px gold border deepens to
  `--gold-500` and the text follows.
- **Text links**: `--gold-500` → `--gold-600` color crossfade, 250ms.
- **Cards**: 2px lift, soft shadow.
- Focus rings are a 2px `--gold-300` outline at 2px offset — visible, gentle.

### Imagery

- Color register: warm, slightly desaturated, golden-hour light. Never cool
  or high-contrast.
- Subjects: hands, fabric, florals, table settings, candlelight. People are
  often shot from behind or in soft focus — the couple's day, not their
  individual portraits, is the hero.
- All photography sits in `--r-md` (12px) frames with no border.
- A faint inner vignette (≈3% black, 20px inset) keeps photographs from
  feeling clipped.

### Transparency & Blur

Used twice, deliberately:
1. The hero image carries the wordmark via blend modes on a tulle photograph
   at 100% opacity (no blur).
2. A sticky header on scroll uses `backdrop-filter: blur(12px)` over an
   `rgba(251, 247, 239, 0.8)` ivory wash — never a frosted effect on a card
   or a modal scrim.

---

## Iconography

Eens & Altijd is **icon-light**. The brand prefers a script flourish, a
hairline rule, or whitespace over an icon. When icons are necessary
(navigation arrows, form chevrons, social handles, contact-method markers
in the footer), the system uses **Lucide** in 1.5px stroke weight, sized
20–24px, colored `--gold-500`.

- **Icon system**: [Lucide](https://lucide.dev) — linked via CDN. Stroke,
  not fill. Round line-caps and joins.
- **Stroke weight**: always 1.5px. Lucide's default 2px reads too engineering.
- **No emoji.** Anywhere.
- **Decorative ornaments**: a single hairline gold rule (`<hr>`) and a small
  diamond glyph (◆) used as a section divider. Both live in the system, not
  as one-off SVGs.
- **No icon font is bundled.** If the user needs offline support, the
  Lucide SVGs can be inlined; the package is on npm as `lucide`.

> **Substitution flag** — Lucide is a stand-in. If the brand has a custom
> hand-drawn line set (florals, rings, candles), please share them and we'll
> replace the Lucide reference with the bespoke set.

---

## Type Substitutions

The provided hero uses two custom faces we don't have access to. We've
matched them with Google Fonts:

| Role | Original (visual match) | Substitute (in use) |
|---|---|---|
| Display serif (wordmark) | A Trajan / Cinzel-family hand-set serif | **Cormorant Garamond** — closest open-source match for the elegant high-contrast classical serif feel |
| Tagline script | A custom calligraphic script | **Italianno** — flowing copperplate calligraphy, comparable rhythm |

> **Please send the original font files** if available. We'll drop them in
> `fonts/` and the system will pick them up via the family stacks already
> defined in `colors_and_type.css`.

---

## Components

- Nav
- Hero
- Services
- Story
- Testimonial
- ContactCTA
- Footer

## UI Kits

| Kit | Path | Notes |
|---|---|---|
| Marketing site | `ui_kits/marketing/` | Single-page recreation of the Eens & Altijd marketing experience: nav, hero, services, testimonial, contact CTA, footer. |

---

## SKILL.md

`SKILL.md` at the project root is the cross-compatible skill manifest. It
makes this folder usable as a Claude Code skill — drop the folder into a
`.claude/skills/` directory and the agent will read it automatically.
