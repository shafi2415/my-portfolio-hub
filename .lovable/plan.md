# Motion polish — make scroll & section transitions feel intentional

The current motion uses IntersectionObserver toggles + a single rAF loop. That's why it feels "flat":
- whole grids fade in together (no per-item stagger),
- hero scrub fights Lenis (jitter on first scroll),
- no real handoff between sections (each one just pops),
- parallax is uniform with no easing offsets,
- image hovers, pill float, and the marquee don't react to scroll velocity.

This plan replaces the ad-hoc reveal system with a Lenis-driven GSAP ScrollTrigger pipeline and adds genuine section-to-section choreography.

## What you'll feel after

1. Hero "PORTFOLIO" wordmark plays a letter-by-letter reveal on load, then on scroll the giant title scales/blurs **away** while a thin sticky title bar fades **in** — a real handoff, not a fade.
2. Each section enters with a coordinated timeline: eyebrow line draws → heading masks up → body + meta stagger → media curtain slides.
3. Work cards reveal with proper stagger (60–90ms), images get a subtle scroll-linked Ken Burns + parallax that responds to scroll velocity.
4. Cursor-following magnetic hover on featured cards and the "Hire me" pill.
5. Marquee speed and grain opacity react to scroll velocity (faster scroll → faster ticker, slightly more grain).
6. Smooth anchor jumps via Lenis (`lenis.scrollTo`) with eased duration so nav clicks don't snap.

## Implementation (technical)

**Deps**
- Add `gsap` (already MIT, ~30KB gz). Use `ScrollTrigger` only.

**Sync layer (`src/pages/Index.tsx`)**
- Replace the three IntersectionObservers + the manual rAF loop with one `useGsapMotion()` hook:
  - Drive ScrollTrigger from Lenis via `lenis.on('scroll', ScrollTrigger.update)` and `gsap.ticker.add((t)=>lenis.raf(t*1000))` (kill the existing `requestAnimationFrame` tick).
  - Disable CSS `scroll-behavior: smooth` (Lenis handles it).
- Anchor clicks: intercept `a[href^="#"]` and call `lenis.scrollTo(target, { offset: -80, duration: 1.2 })`.

**Per-section timelines**
- Helper: `revealSection(el)` builds a `gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 75%' } })` that targets `[data-anim="eyebrow|title|body|meta|media|item"]` inside the section with proper offsets (`-=0.4`) and a 0.08s stagger on `[data-anim="item"]`.
- Tag existing markup with `data-anim` attributes (no structural changes): eyebrow rules, h2s, paragraphs, service cards, work cards, more-work rows, toolkit chips, experience entries, education entries, contact block.

**Hero handoff**
- Pin the hero for ~80vh with `ScrollTrigger.create({ trigger: hero, start: 'top top', end: '+=80%', pin: true, scrub: true })`.
- Timeline scrubs: giant `PORTFOLIO` scales `1 → 0.78`, blurs `0 → 6px`, opacity `1 → 0`; the script "Shafi" drifts up; halftone pills counter-parallax; nav pill fills in (`backdrop-filter` saturate up).
- Add a sticky condensed title that fades in as the giant fades out.

**Parallax & velocity**
- Replace the manual `--py` loop with `gsap.to(el, { yPercent: ±N, ease: 'none', scrollTrigger: { scrub: true } })` per `[data-parallax]` element — different magnitudes for hero portrait, work covers, about portrait, and the decorative pills.
- Subscribe to `ScrollTrigger.addEventListener('scrollEnd')` + `lenis.on('scroll', e => velocity)` to drive `--marquee-speed` and `--grain-opacity` CSS vars.

**Card micro-interactions**
- Featured project cards: magnetic hover (`mousemove` translates the card by `(dx,dy)*0.08`, image by `*0.15`), spring back on leave with `gsap.to(..., { duration: 0.6, ease: 'elastic.out(1,0.6)' })`.
- "Hire me" pill: same magnetic effect, smaller magnitude.
- Image curtain reveal: keep the gold curtain, but trigger via ScrollTrigger so it's perfectly synced with the rest of the section timeline.

**Reduced motion**
- Wrap all GSAP setup in `gsap.matchMedia({ '(prefers-reduced-motion: no-preference)': () => { ... } })` so reduced-motion users get instant, static layout.

**Files touched**
- `src/pages/Index.tsx` — replace `useReveal` / `useScrollFx` / `useSmoothScroll` with `useGsapMotion`; add `data-anim` props; add magnetic hover handlers on featured cards & CTA.
- `src/index.css` — remove the manual `[data-reveal]` transition rules (GSAP owns them now); keep `.reveal-image` curtain and grain; add `--marquee-speed` and `--grain-opacity` CSS vars; remove `scroll-behavior: smooth`.
- `package.json` — add `gsap`.

## Out of scope
- No content/layout changes, no new sections, no copy edits.
- No new images.
- Color tokens, typography, and section structure stay exactly as they are.
