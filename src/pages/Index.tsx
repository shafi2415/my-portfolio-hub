import { useEffect, useRef, useState } from "react";
import {
  Palette, Type, Wand2, ArrowUpRight, Sparkles, Mail, Phone,
  Briefcase, GraduationCap, Languages, Video,
  FileSpreadsheet, ArrowRight, Cpu, Brain, Code2,
} from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";
import postersA from "@/assets/work/posters-collection-1.jpg";
import postersB from "@/assets/work/posters-collection-2.jpg";
import logo1 from "@/assets/work/logo-1.jpg";
import logo2 from "@/assets/work/logo-2.jpg";
import logo3 from "@/assets/work/logo-3.jpg";
import daroraApp from "@/assets/work/darora-royal-app.png";
import kinderjoyApp from "@/assets/work/kinderjoy-app.png";
import quranClassPoster from "@/assets/work/quran-class-poster.png";
import furnitureCatalog from "@/assets/work/furniture-catalog.jpg";

const ROLES = [
  "Graphic Designer",
  "Brand Identity Designer",
  "AI Web App Developer",
  "Excel Automation Specialist",
];

const services = [
  { icon: Palette, title: "Graphic Design", desc: "Posters, social and editorial visuals with a typographic eye." },
  { icon: Type, title: "Brand Identity", desc: "Marks, systems and stationery rooted in story and craft." },
  { icon: Code2, title: "AI Web Apps", desc: "Modern interfaces and dashboards powered by AI workflows." },
  { icon: FileSpreadsheet, title: "Excel Automation", desc: "Dashboards, formulas and macros that save hours." },
];

const skills = [
  { icon: Palette, name: "Adobe Creative Suite", detail: "Photoshop · Illustrator · InDesign" },
  { icon: Type, name: "Canva & Figma", detail: "Rapid concepts, social kits and UI mocks" },
  { icon: Video, name: "Video Editing", detail: "Reels, promos and motion content" },
  { icon: FileSpreadsheet, name: "Advanced MS Excel", detail: "Automations · MS Word · PowerPoint" },
  { icon: Brain, name: "AI Tools & Curriculum", detail: "Curriculum design · E-learning · Instruction" },
  { icon: Cpu, name: "Hardware & IT", detail: "PC maintenance and troubleshooting" },
];

const experience = [
  { role: "Founder & Lead Graphic Designer", org: "Sha Creatives Design Studio", period: "Jan 2022 — Present",
    desc: "Freelance studio for social branding and visual identity. 50+ marketing posters and 10+ custom logos." },
  { role: "IT & AI Instructor · Digital Media Coordinator", org: "Malja'a Shareeath and Arts College", period: "Apr 2023 — Present",
    desc: "Teaching Adobe CS, MS Office, AI automation and PC hardware. Campus campaigns grew engagement ~70%." },
  { role: "Board Member · IT Curriculum Developer", org: "Coordination of Jami'a Junior Colleges (CJC)", period: "Mar 2023 — Present",
    desc: "Modernizing IT education across 69 affiliated colleges; authored an industry-aligned IT syllabus." },
  { role: "Online Tutor", org: "Zidnee Online Islamic School", period: "Dec 2026 — Present",
    desc: "Online instruction blending Islamic studies with digital learning best practices." },
  { role: "IT & Islamic Studies Teacher", org: "Kammu Soofi Memorial Islamic Complex", period: "2022 — 2023",
    desc: "Taught IT and Islamic studies; selected to the Board of Studies." },
  { role: "Operations Officer & Data Analyst", org: "Bismi E Tickets", period: "Oct 2019 — Mar 2021",
    desc: "Travel documentation during COVID-19; Excel automations cut processing time 30%." },
];

const education = [
  { title: "Diploma in Graphic Design", org: "Diginet Online School", period: "Jan 2026 — Jun 2026" },
  { title: "Master of Arts (MA)", org: "Darul Huda Islamic University", period: "Apr 2021 — Mar 2023" },
  { title: "Bachelor of Arts (BA)", org: "University of Calicut", period: "Apr 2019 — Mar 2022" },
];

type Project = {
  img: string;
  title: string;
  category: string;
  year: string;
  client: string;
  tags: string[];
  desc: string;
  alt: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    img: furnitureCatalog, title: "Roots Arch · Furniture Catalog 2026",
    category: "Editorial · Print", year: "2026", client: "Roots Arch FF&E Contractors",
    tags: ["Editorial", "Print", "Layout", "Typography"],
    desc: "Cover and 40-page catalog system for a contract furniture brand — display serif lockup, structured grids and cinematic product photography.",
    alt: "Furniture Catalog 2026 cover for Roots Arch with bold serif typography over a styled living room scene.",
    featured: true,
  },
  {
    img: quranClassPoster, title: "Parakkulam Masjid · Qur'an Class",
    category: "Poster · Arabic Typography", year: "2026", client: "Parakkulam Masjid Committee",
    tags: ["Poster", "Arabic", "Malayalam", "Event"],
    desc: "Event poster for a community Qur'an study circle — custom Arabic title treatment, Malayalam body and a cool indigo palette.",
    alt: "Qur'an class event poster in indigo and cyan with stylised Arabic title and Malayalam supporting text.",
    featured: true,
  },
  {
    img: daroraApp, title: "Darora Royal Group · POS App",
    category: "AI Web App · UI/UX", year: "2025", client: "Darora Royal Group",
    tags: ["Product", "UI/UX", "AI"],
    desc: "Mobile-first point-of-sale and ledger dashboard for a multi-branch retail group.",
    alt: "Mobile-first point-of-sale dashboard UI for Darora Royal Group on a phone mockup.",
  },
  {
    img: kinderjoyApp, title: "Kinderjoy · Zidnee Islamic School",
    category: "AI Web App · EdTech", year: "2025", client: "Zidnee Online Islamic School",
    tags: ["Product", "EdTech", "AI"],
    desc: "Playful learning app for kids with gamified Islamic studies lessons and progress tracking.",
    alt: "Kinderjoy children's learning app interface for Zidnee Islamic School.",
  },
  {
    img: postersA, title: "Sha Creatives · Poster Vol. 1",
    category: "Social & Print", year: "2024", client: "Sha Creatives",
    tags: ["Poster", "Campaign", "Social"],
    desc: "Admission, event and brand campaign posters across English, Arabic and Malayalam.",
    alt: "Collection of admission and campaign posters designed by Sha Creatives.",
  },
  {
    img: logo1, title: "Malja'a Shareeath",
    category: "Logo · Branding", year: "2024", client: "Malja'a Shareeath College",
    tags: ["Logo", "Identity", "Arabic"],
    desc: "Crest mark blending Arabic calligraphy with an arch motif representing knowledge and shelter.",
    alt: "Malja'a Shareeath crest logo combining Arabic calligraphy with an architectural arch.",
  },
  {
    img: postersB, title: "Sha Creatives · Poster Vol. 2",
    category: "Campaign Creatives", year: "2024", client: "Sha Creatives",
    tags: ["Poster", "Campaign"],
    desc: "Long-form campaign posters spanning education, retail and community sectors.",
    alt: "Second volume of campaign posters by Sha Creatives across multiple sectors.",
  },
  {
    img: logo2, title: "Monogram in Stone",
    category: "Logo · Brand Mark", year: "2023", client: "Private studio",
    tags: ["Logo", "Monogram"],
    desc: "Geometric monogram embossed on a textured canvas — quiet, architectural confidence.",
    alt: "Geometric monogram brand mark embossed on a textured stone-like surface.",
  },
  {
    img: logo3, title: "Al Ishraq Identity",
    category: "Logo · Print", year: "2023", client: "Al Ishraq",
    tags: ["Logo", "Arabic", "Identity"],
    desc: "Bold Arabic display logotype paired with a refined English wordmark.",
    alt: "Al Ishraq brand identity with bold Arabic display logotype and English wordmark.",
  },
];

const featuredProjects = projects.filter((p) => p.featured);
const otherProjects = projects.filter((p) => !p.featured);

const TICKER = ["Graphic Design", "Brand Identity", "Editorial", "Posters", "Logos", "Sha Creatives", "Available 2026"];

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("animate-fade-up")),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

const useTypewriter = (words: string[], typeMs = 70, eraseMs = 35, holdMs = 1400) => {
  const [text, setText] = useState("");
  const idx = useRef(0);
  const phase = useRef<"type" | "hold" | "erase">("type");
  const pos = useRef(0);
  useEffect(() => {
    let timer: number;
    const tick = () => {
      const word = words[idx.current];
      if (phase.current === "type") {
        pos.current += 1;
        setText(word.slice(0, pos.current));
        if (pos.current >= word.length) { phase.current = "hold"; timer = window.setTimeout(tick, holdMs); return; }
        timer = window.setTimeout(tick, typeMs);
      } else if (phase.current === "hold") {
        phase.current = "erase";
        timer = window.setTimeout(tick, eraseMs);
      } else {
        pos.current -= 1;
        setText(word.slice(0, pos.current));
        if (pos.current <= 0) { phase.current = "type"; idx.current = (idx.current + 1) % words.length; }
        timer = window.setTimeout(tick, eraseMs);
      }
    };
    timer = window.setTimeout(tick, typeMs);
    return () => window.clearTimeout(timer);
  }, [words, typeMs, eraseMs, holdMs]);
  return text;
};

/** Small decorative "○" / "●" bullets */
const Dot = ({ filled = false, className = "" }: { filled?: boolean; className?: string }) => (
  <span aria-hidden className={`inline-block w-2 h-2 rounded-full align-middle ${filled ? "bg-cream" : "border border-cream/60"} ${className}`} />
);

const Index = () => {
  useReveal();
  const role = useTypewriter(ROLES);
  const [open, setOpen] = useState(false);
  const nav = [
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-cream focus:text-ink focus:px-4 focus:py-2 focus:rounded-full focus:text-xs focus:uppercase focus:tracking-[0.2em]">
        Skip to content
      </a>
      {/* Atmosphere */}
      <div className="vignette-overlay" aria-hidden />
      <div className="grain-overlay" aria-hidden />

      {/* NAV */}
      <header className="fixed top-4 inset-x-0 z-50 px-4">
        <div className="container max-w-6xl mx-auto">
          <nav aria-label="Primary" className="liquid-glass rounded-full pl-5 pr-3 py-2 flex items-center justify-between">
            <a href="#top" className="flex items-baseline gap-1.5">
              <span className="font-display text-cream text-[18px] tracking-tight">Shafi</span>
              <span className="font-script text-gold text-[26px] leading-none -translate-y-[2px]">.</span>
            </a>
            <ul className="hidden md:flex items-center gap-1 text-[13px] uppercase tracking-[0.18em] list-none p-0 m-0">
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="px-4 py-2 rounded-full text-cream-soft hover:text-gold transition-colors inline-block">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="https://wa.me/918086429311?text=Hi%20Shafi%2C%20I%27d%20like%20to%20hire%20you%20for%20a%20design%20project."
               target="_blank" rel="noreferrer"
               className="hidden md:inline-flex items-center gap-2 halftone-pill-cream px-5 py-2 text-[12px] uppercase tracking-[0.2em] font-medium">
              Hire me <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button onClick={() => setOpen(!open)} className="md:hidden text-cream px-3 py-2" aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-nav">☰</button>
          </nav>
          {open && (
            <div id="mobile-nav" className="md:hidden mt-2 liquid-glass rounded-2xl">
              <div className="py-3 px-4 flex flex-col gap-1">
                {nav.map((n) => (
                  <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}
                     className="text-cream-soft hover:text-gold uppercase tracking-[0.2em] text-sm px-3 py-2 rounded-lg hover:bg-cream/5 transition-colors">
                    {n.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      <main id="main">
      {/* HERO — editorial centered composition */}
      <section id="top" aria-label="Introduction" className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
        <div className="container relative">
          <div className="flex flex-col items-center text-center animate-fade-up">
            {/* Year tag */}
            <div className="flex items-center gap-3 mb-10">
              <Dot />
              <div className="halftone-pill px-6 py-1.5">
                <span className="font-display italic text-cream text-sm tracking-wide">2026</span>
              </div>
              <Dot filled />
            </div>

            {/* Giant PORTFOLIO wordmark with overlapping pills */}
            <div className="relative w-full max-w-[1000px]">
              {/* left pill behind 'PORT' */}
              <div className="hidden md:block absolute left-[2%] top-[35%] w-[42%] h-[55%] halftone-pill rotate-[-2deg] z-0" aria-hidden />
              {/* right pill behind 'LIO' */}
              <div className="hidden md:block absolute right-[2%] top-[12%] w-[34%] h-[55%] halftone-pill rotate-[2deg] z-0" aria-hidden />

              <h1 className="relative z-10 font-display text-cream font-light leading-[0.85] tracking-tight"
                  style={{ fontVariationSettings: '"opsz" 144, "wght" 400, "SOFT" 50' }}>
                <span className="block" style={{ fontSize: "clamp(3.5rem, 16vw, 14rem)" }}>
                  PORTFOLIO
                </span>
              </h1>

              {/* Script signature */}
              <div className="relative z-10 -mt-4 md:-mt-10 pr-[6%] flex justify-end">
                <span className="font-script text-gold leading-none italic" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
                  Shafi
                </span>
              </div>
            </div>

            {/* Tagline */}
            <div className="mt-10 flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 text-cream-soft text-[11px] uppercase tracking-[0.4em]">
                <span className="h-px w-10 bg-cream/30" />
                Mohammed Shafi TP
                <span className="h-px w-10 bg-cream/30" />
              </div>
              <p className="font-display text-cream text-xl md:text-2xl">
                I am a <span className="text-gold italic caret">{role}</span>
              </p>
              <p className="text-cream-soft max-w-xl text-sm md:text-base leading-relaxed">
                Founder of <span className="text-gold">Sha Creatives</span> — designing brand identities,
                posters and AI-powered web experiences. A multilingual eye for English, Arabic, Urdu and Malayalam typography.
              </p>
              <div className="flex flex-wrap gap-3 pt-2 justify-center">
                <a href="#work" className="group inline-flex items-center gap-2 halftone-pill-cream px-7 py-3 text-[12px] uppercase tracking-[0.22em] font-medium">
                  See the work <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 halftone-pill px-7 py-3 text-[12px] uppercase tracking-[0.22em] text-cream">
                  Start a project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative overflow-hidden border-y border-cream/10 py-5 bg-ink/60">
        <div className="flex marquee whitespace-nowrap gap-12">
          {[...TICKER, ...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="font-display italic text-3xl md:text-5xl text-cream/90 flex items-center gap-12">
              {t} <span className="text-gold not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28 relative">
        <div className="container relative">
          <div className="grid md:grid-cols-12 gap-10 mb-14" data-reveal>
            <div className="md:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-5">○ What I do</p>
              <h2 className="font-display text-cream text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-light">
                Design that <em className="font-script text-gold not-italic md:text-7xl lg:text-8xl block leading-none">speaks</em>
                before it sells.
              </h2>
            </div>
            <div className="md:col-span-7 md:pt-8">
              <p className="text-cream-soft text-base md:text-lg leading-relaxed max-w-xl">
                Editorial layouts, typographic identity systems and quietly confident
                interfaces — built with patience and a print designer's eye for detail.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 border border-cream/10 rounded-2xl overflow-hidden">
            {services.map((s, i) => (
              <div key={s.title} data-reveal style={{ animationDelay: `${i * 80}ms` }}
                   className="group relative bg-background p-7 md:p-8 hover:bg-ink transition-colors">
                <p className="font-display italic text-gold text-sm mb-6">0{i + 1} —</p>
                <s.icon className="w-6 h-6 text-cream mb-5" strokeWidth={1.2} />
                <h3 className="font-display text-cream text-2xl mb-2 font-normal">{s.title}</h3>
                <p className="text-sm text-cream-soft leading-relaxed">{s.desc}</p>
                <ArrowUpRight className="absolute top-7 right-7 w-4 h-4 text-cream/30 group-hover:text-gold transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK — editorial numbered list */}
      <section id="work" aria-labelledby="work-heading" className="py-20 md:py-28 bg-ink/50 relative border-y border-cream/10">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6" data-reveal>
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-5">○ Selected work · 2022—2026</p>
              <h2 id="work-heading" className="font-display text-cream text-5xl md:text-7xl leading-[0.95] font-light">
                Posters, logos &amp; <em className="font-script text-gold not-italic block leading-none md:text-8xl">brand identity.</em>
              </h2>
            </div>
            <p className="text-cream-soft md:text-right max-w-sm text-sm md:text-base">
              A focused edit of the work I'm proudest of — recent campaigns,
              editorial systems and brand marks across print, screen and Arabic typography.
            </p>
          </div>

          {/* FEATURED — large cards */}
          <div className="mb-16" aria-labelledby="featured-heading">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px flex-1 bg-cream/15" />
              <h3 id="featured-heading" className="font-display italic text-gold text-sm uppercase tracking-[0.35em]">
                ✦ Featured
              </h3>
              <span className="h-px flex-1 bg-cream/15" />
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {featuredProjects.map((p, i) => (
                <article key={p.title} data-reveal style={{ animationDelay: `${i * 80}ms` }}
                  className="group relative rounded-2xl overflow-hidden border border-cream/10 bg-background">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={p.img} alt={p.alt} loading="lazy"
                         className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" aria-hidden />
                    <div className="absolute top-4 left-4 halftone-pill px-3 py-1">
                      <span className="font-display italic text-cream text-xs">{p.year}</span>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-gold mb-3">
                      {p.category}
                    </p>
                    <h4 className="font-display text-cream text-2xl md:text-3xl font-light leading-tight mb-2">
                      {p.title}
                    </h4>
                    <p className="text-cream-soft text-sm leading-relaxed max-w-md mb-4">{p.desc}</p>
                    <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                      {p.tags.map((t) => (
                        <li key={t} className="text-[10px] uppercase tracking-[0.22em] text-cream/70 border border-cream/20 rounded-full px-2.5 py-0.5">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ArrowUpRight aria-hidden className="absolute top-5 right-5 w-5 h-5 text-cream/60 group-hover:text-gold group-hover:rotate-12 transition-all" />
                </article>
              ))}
            </div>
          </div>

          {/* MORE — numbered editorial list */}
          <div aria-labelledby="more-heading">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px flex-1 bg-cream/15" />
              <h3 id="more-heading" className="font-display italic text-gold text-sm uppercase tracking-[0.35em]">
                ✦ More work
              </h3>
              <span className="h-px flex-1 bg-cream/15" />
            </div>
            <ol className="border-t border-cream/15 list-none p-0 m-0">
              {otherProjects.map((p, i) => (
                <li key={p.title}>
                  <article data-reveal style={{ animationDelay: `${i * 60}ms` }}
                    className="group relative grid grid-cols-12 gap-6 items-center py-6 md:py-8 border-b border-cream/15 hover:bg-cream/[0.03] transition-colors">
                    <span aria-hidden className="col-span-2 md:col-span-1 font-display italic text-gold text-lg md:text-xl">
                      0{i + 3}
                    </span>
                    <div className="col-span-10 md:col-span-5">
                      <h4 className="font-display text-cream text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
                        {p.title}
                      </h4>
                      <p className="text-cream-soft text-sm mt-1">{p.client} · {p.year}</p>
                    </div>
                    <div className="hidden md:block md:col-span-3 text-cream-soft text-[12px] uppercase tracking-[0.25em]">
                      {p.category}
                    </div>
                    <div className="col-span-12 md:col-span-3 relative">
                      <div className="aspect-[4/3] overflow-hidden rounded-xl border border-cream/10 bg-background">
                        <img src={p.img} alt={p.alt} loading="lazy"
                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-11 md:col-start-2 -mt-2 md:hidden text-cream-soft text-[11px] uppercase tracking-[0.25em]">
                      {p.category}
                    </div>
                    <ArrowUpRight aria-hidden className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-cream/30 group-hover:text-gold group-hover:rotate-12 transition-all" />
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ABOUT — duotone portrait + bio */}
      <section id="about" className="py-20 md:py-28 relative">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center" data-reveal>
            <div className="md:col-span-5 relative">
              <div className="relative aspect-[4/5] max-w-[420px] mx-auto rounded-2xl overflow-hidden border border-cream/10">
                <div className="absolute inset-0 bg-ink" />
                <img src={heroPortrait} alt="Mohammed Shafi TP"
                     className="absolute inset-0 w-full h-full object-cover object-[center_20%] duotone-portrait" />
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-transparent mix-blend-overlay" />
                <div className="absolute bottom-4 left-4 halftone-pill px-4 py-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-cream">Available 2026</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 space-y-6">
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold">○ About</p>
              <h2 className="font-display text-cream text-4xl md:text-6xl leading-[0.98] font-light">
                A designer's eye, <em className="font-script text-gold not-italic block md:inline">an operator's</em> hands.
              </h2>
              <p className="text-cream-soft text-base md:text-lg leading-relaxed max-w-xl">
                I'm Mohammed Shafi TP — founder of Sha Creatives, and an instructor of IT &amp; AI.
                I design across print and screen with a strong typographic point of view, and I
                build the systems behind the work, from Excel automations to AI-assisted web apps.
              </p>
              <div className="grid sm:grid-cols-3 gap-px bg-cream/10 border border-cream/10 rounded-xl overflow-hidden">
                {[
                  { icon: Wand2, title: "Proven craft", desc: "50+ posters, 10+ logos." },
                  { icon: Code2, title: "AI + design", desc: "Apps and automations." },
                  { icon: Sparkles, title: "Curriculum lead", desc: "69 affiliated colleges." },
                ].map((c) => (
                  <div key={c.title} className="bg-background p-5">
                    <c.icon className="w-5 h-5 text-gold mb-3" strokeWidth={1.2} />
                    <h4 className="font-display text-cream text-lg mb-1 font-normal">{c.title}</h4>
                    <p className="text-xs text-cream-soft">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Toolkit */}
          <div className="mt-20" data-reveal>
            <div className="flex items-end justify-between mb-8 gap-6">
              <h3 className="font-display text-cream text-3xl md:text-5xl font-light">
                My <em className="font-script text-gold not-italic">toolkit.</em>
              </h3>
              <p className="text-cream-soft text-sm hidden md:block">Versatile across design, technology and languages.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/10 border border-cream/10 rounded-xl overflow-hidden">
              {skills.map((s) => (
                <div key={s.name} className="flex items-start gap-4 bg-background p-5">
                  <s.icon className="w-5 h-5 text-gold mt-1 shrink-0" strokeWidth={1.2} />
                  <div>
                    <h4 className="font-display text-cream text-lg font-normal">{s.name}</h4>
                    <p className="text-xs text-cream-soft">{s.detail}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4 bg-background p-5">
                <Languages className="w-5 h-5 text-gold mt-1 shrink-0" strokeWidth={1.2} />
                <div>
                  <h4 className="font-display text-cream text-lg font-normal">Languages</h4>
                  <p className="text-xs text-cream-soft">English · Arabic · Urdu · Malayalam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE + EDUCATION */}
      <section id="experience" className="py-20 md:py-28 bg-ink/50 border-y border-cream/10">
        <div className="container grid md:grid-cols-2 gap-12 md:gap-16">
          <div data-reveal>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Experience</p>
            </div>
            <h3 className="font-display text-cream text-4xl md:text-5xl mb-10 font-light">
              Where I've <em className="font-script text-gold not-italic">worked.</em>
            </h3>
            <ol className="relative border-l border-cream/15 ml-2 space-y-8">
              {experience.map((e) => (
                <li key={e.role} className="pl-6 relative">
                  <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gold" />
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold-soft">{e.period}</p>
                  <h4 className="font-display text-cream text-xl mt-1 font-normal">{e.role}</h4>
                  <p className="text-sm text-cream/80 italic font-display">{e.org}</p>
                  <p className="text-sm text-cream-soft mt-2 leading-relaxed">{e.desc}</p>
                </li>
              ))}
            </ol>
          </div>
          <div data-reveal>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-4 h-4 text-gold" strokeWidth={1.5} />
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Education</p>
            </div>
            <h3 className="font-display text-cream text-4xl md:text-5xl mb-10 font-light">
              Where I <em className="font-script text-gold not-italic">studied.</em>
            </h3>
            <ol className="relative border-l border-cream/15 ml-2 space-y-8">
              {education.map((e) => (
                <li key={e.title} className="pl-6 relative">
                  <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gold" />
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold-soft">{e.period}</p>
                  <h4 className="font-display text-cream text-xl mt-1 font-normal">{e.title}</h4>
                  <p className="text-sm text-cream/80 italic font-display">{e.org}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 relative">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto" data-reveal>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-6">○ Let's work together</p>
            <h2 className="font-display text-cream text-6xl md:text-8xl lg:text-9xl leading-[0.9] font-light mb-2">
              Let's
            </h2>
            <h2 className="font-script text-gold text-7xl md:text-9xl lg:text-[10rem] leading-none mb-10">
              talk.
            </h2>
            <p className="text-cream-soft text-base md:text-lg max-w-xl mx-auto mb-10">
              Have a brief, an idea or a half-formed thought? I read every message and reply within a day.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              <a href="mailto:shafisayd2415@gmail.com"
                 className="inline-flex items-center gap-2 halftone-pill-cream px-7 py-3 text-[12px] uppercase tracking-[0.22em] font-medium">
                <Mail className="w-3.5 h-3.5" /> Email me
              </a>
              <a href="https://wa.me/918086429311?text=Hi%20Shafi%2C%20I%27d%20like%20to%20hire%20you%20for%20a%20design%20project."
                 target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 halftone-pill px-7 py-3 text-[12px] uppercase tracking-[0.22em] text-cream">
                <Phone className="w-3.5 h-3.5" /> WhatsApp
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-px bg-cream/10 border border-cream/10 rounded-xl overflow-hidden text-left">
              <a href="mailto:shafisayd2415@gmail.com" className="group bg-background p-5 hover:bg-ink transition-colors">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Email</p>
                <p className="font-display text-cream text-base">shafisayd2415@gmail.com</p>
              </a>
              <a href="https://wa.me/918086429311" target="_blank" rel="noreferrer" className="group bg-background p-5 hover:bg-ink transition-colors">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">WhatsApp</p>
                <p className="font-display text-cream text-base">(+91) 80864 29311</p>
              </a>
              <div className="bg-background p-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Based in</p>
                <p className="font-display text-cream text-base">Areekode, Kerala · India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
      {/* FOOTER */}
      <footer className="border-t border-cream/10 py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream-soft">
          <p className="uppercase tracking-[0.3em]">© {new Date().getFullYear()} Mohammed Shafi TP</p>
          <p className="font-display italic text-cream">Crafted with care &amp; <span className="text-gold not-italic">✦</span> light.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
