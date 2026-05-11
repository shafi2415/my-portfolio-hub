## Goal

Repivot the site into an **editorial graphic-designer portfolio** in the spirit of the Khoi Pham reference: serif display type, cream-on-black palette with champagne gold accents, glossy halftone pill motifs, script flourishes, and a print-magazine layout rhythm. Drop the AI/dev tech aesthetic.

## Visual direction

- **Palette**: near-black background `#0A0908`, warm cream foreground `#F2EBD8`, champagne gold accent `#C9A96A`, soft film grain + vignette. No iridescent gradients, no rain, no lightning.
- **Typography**:
  - Display serif: **Fraunces** (variable, high-contrast settings) for hero, section titles, project numbers.
  - Script accent: **Italianno** for "Shafi" signature and small flourishes.
  - Body: **Inter Tight** at small sizes only.
- **Motifs**:
  - Glossy pill chips with inner halftone-dot gradient sitting behind/over wordmarks.
  - Tiny circular bullets (○ ●) as decorative markers.
  - "2026" year tag in a thin pill at the top of the hero.
  - Film grain overlay + soft radial vignette across the page.

## Page structure

```text
┌──────────────────────────────────────────────┐
│  ○ Shafi.  ·  Work  About  Experience  Contact│  slim liquid-glass pill nav, serif brand
├──────────────────────────────────────────────┤
│                ◌  2026  ◌                     │
│        P O R T F O L I O                       │  giant Fraunces, halftone pills
│                       Shafi  (script)          │
│     Graphic Designer · Brand · Editorial       │
└──────────────────────────────────────────────┘
│  Selected Work — magazine grid                 │
│   01 / Darora Royal     02 / Kinderjoy …       │  numbered, serif titles, small caps meta
├──────────────────────────────────────────────┤
│  About — duotone portrait left, serif bio right│
├──────────────────────────────────────────────┤
│  Experience  /  Education  (timeline, serif)   │
├──────────────────────────────────────────────┤
│  Marquee: AVAILABLE FOR WORK — 2026 —          │  serif uppercase, no gradient
├──────────────────────────────────────────────┤
│  Contact — oversized "Let's talk." serif       │
└──────────────────────────────────────────────┘
```

## Work to do (frontend only)

1. **Tokens — `src/index.css`, `tailwind.config.ts`**
   - Replace background/foreground/primary HSL tokens with cream-on-black set; add `--gold`, `--cream`, `--ink`.
   - Remove `.rain-bg`, `.lightning-glow`, `.feather-portrait`, iridescent gradient utilities.
   - Add `.halftone-pill`, `.grain`, `.vignette`, `.duotone-portrait` utilities.
2. **Fonts — `index.html` + Tailwind config**
   - Swap Google Fonts to Fraunces + Italianno + Inter Tight.
   - Extend `fontFamily` with `serif` (Fraunces), `script` (Italianno), `sans` (Inter Tight).
3. **Hero — `src/pages/Index.tsx`**
   - Centered editorial composition: `2026` pill → giant `PORTFOLIO` Fraunces with two halftone pills overlapping letters → script "Shafi" tucked at lower right → role tagline.
   - Move portrait to About section (duotone cream/black); strip lightning + feather effects.
4. **Nav**
   - Slim liquid-glass pill, serif "Shafi." brand with script flourish, cream text, gold hover.
5. **Work section**
   - Convert grid to numbered editorial entries (`01 — Darora Royal Group`, serif title, small-caps meta line, image reveals on hover). Keep existing project data and images.
6. **About / Experience / Education**
   - Re-skin in cream/serif; restore colored highlights using gold/cream system (no neon).
7. **Marquee + Footer**
   - Serif uppercase ticker on cream divider; minimal footer.
8. **Cleanup**
   - Remove rain/lightning/iridescent code paths and unused keyframes.

## Out of scope

- No backend, routing, data, or business-logic changes.
- No new project images — reuse existing `src/assets/work/*` and current portrait file.
