import { useEffect, useRef, useState } from "react";
import {
  Palette, Type, Wand2, ArrowUpRight, Sparkles, Mail, Phone,
  Briefcase, GraduationCap, FileImage, Languages, Video,
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

const ROLES = [
  "Graphic Designer",
  "Brand Identity Designer",
  "AI Web App Developer",
  "Excel Automation Specialist",
];

const services = [
  { icon: Palette, title: "Graphic Design", desc: "Eye-catching visuals for social, print and web." },
  { icon: Type, title: "Brand Identity", desc: "Memorable marks rooted in story and craft." },
  { icon: Code2, title: "AI Web Apps", desc: "Modern web apps powered by AI workflows and automation." },
  { icon: FileSpreadsheet, title: "Excel Automation", desc: "Dashboards, formulas and macros that save hours." },
];

const skills = [
  { icon: Palette, name: "Adobe Creative Suite", detail: "Photoshop · Illustrator · InDesign" },
  { icon: Type, name: "Canva & Figma", detail: "Rapid concepts, social kits and UI mocks" },
  { icon: Video, name: "Video Editing", detail: "Reels, promos and motion content" },
  { icon: FileSpreadsheet, name: "Advanced MS Excel", detail: "Automations · MS Word · PowerPoint" },
  { icon: Brain, name: "AI Tools & Curriculum", detail: "Curriculum design · E-learning · Classroom instruction" },
  { icon: Cpu, name: "Hardware & IT", detail: "PC maintenance and troubleshooting" },
];

const experience = [
  { role: "Founder & Lead Graphic Designer", org: "Sha Creatives Design Studio", period: "Jan 2022 — Present",
    desc: "Freelance design agency for social media branding and visual identity. Delivered 50+ marketing posters and 10+ custom logos for diverse clients." },
  { role: "IT & AI Instructor · Digital Media Coordinator", org: "Malja'a Shareeath and Arts College", period: "Apr 2023 — Present",
    desc: "Teach Adobe Creative Suite, MS Office, AI automation and PC hardware. Designed campus campaigns that grew engagement by ~70%." },
  { role: "Board Member · IT Curriculum Developer", org: "Coordination of Jami'a Junior Colleges (CJC)", period: "Mar 2023 — Present",
    desc: "Spearheading IT education modernization across 69 affiliated colleges. Authored a comprehensive industry-aligned IT syllabus." },
  { role: "Online Tutor", org: "Zidnee Online Islamic School", period: "Dec 2026 — Present",
    desc: "Online instruction blending Islamic studies with digital learning best practices." },
  { role: "IT & Islamic Studies Teacher", org: "Kammu Soofi Memorial Islamic Complex", period: "2022 — 2023",
    desc: "Taught IT and Islamic studies; selected to the Board of Studies based on teaching performance." },
  { role: "Operations Officer & Data Analyst", org: "Bismi E Tickets", period: "Oct 2019 — Mar 2021",
    desc: "Managed travel documentation during COVID-19. Built Excel automations that cut processing time by 30%." },
];

const education = [
  { title: "Diploma in Graphic Design", org: "Diginet Online School", period: "Jan 2026 — Jun 2026" },
  { title: "Master of Arts (MA)", org: "Darul Huda Islamic University", period: "Apr 2021 — Mar 2023" },
  { title: "Bachelor of Arts (BA)", org: "University of Calicut", period: "Apr 2019 — Mar 2022" },
];

const projects = [
  { img: daroraApp, title: "Darora Royal Group · POS App", category: "AI Web App · UI/UX", desc: "Mobile-first dashboard for sales, inventory and ledger — deep violet glass UI with iridescent accents." },
  { img: kinderjoyApp, title: "Kinderjoy · Zidnee Islamic School", category: "AI Web App · EdTech", desc: "Playful learning app for kids: tasks, quizzes and weekly Islamic challenges with vibrant gamified UI." },
  { img: postersA, title: "Sha Creatives · Poster Vol. 1", category: "Social & Print", desc: "Admission, event and brand campaign posters in Malayalam, Arabic and English typography." },
  { img: logo1, title: "Malja'a Shareeath", category: "Logo · Branding", desc: "Crest mark blending Arabic calligraphy with an architectural arch motif, foiled on craft paper." },
  { img: postersB, title: "Sha Creatives · Poster Vol. 2", category: "Campaign Creatives", desc: "Long-form campaign posters spanning workshops, product, hospitality and educational institutions." },
  { img: logo2, title: "Monogram in Stone", category: "Logo · Brand Mark", desc: "Geometric monogram in pencil-pictogram form, embossed onto a textured green canvas." },
  { img: logo3, title: "Al Ishraq Identity", category: "Logo · Print", desc: "Bold Arabic display logotype paired with confident English wordmark for a student union." },
];

const TICKER = ["Graphic Design", "Brand Identity", "AI Web Apps", "Excel Automation", "Sha Creatives", "Adobe Creative Suite"];

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

/** Typewriter that cycles ROLES with type/erase rhythm */
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

const Index = () => {
  useReveal();
  const role = useTypewriter(ROLES);
  const [open, setOpen] = useState(false);
  const nav = [
    { id: "work", label: "Work" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* NAV — Liquid Glass (Apple WWDC '25 style) */}
      <header className="fixed top-4 inset-x-0 z-50 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="liquid-glass rounded-full pl-3 pr-3 py-2 flex items-center justify-between">
            <a href="#top" className="flex items-center gap-2.5 pl-2">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-iridescent text-white font-display font-bold text-sm shadow-glow">S</span>
              <span className="font-display font-semibold tracking-tight text-cream text-[15px]">
                My <span className="text-iridescent">Portfolio</span><span className="text-primary">.</span>
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-1 text-sm">
              {nav.map((n) => (
                <a key={n.id} href={`#${n.id}`}
                   className="px-4 py-2 rounded-full text-cream-soft hover:text-cream hover:bg-white/10 transition-all">
                  {n.label}
                </a>
              ))}
            </nav>
            <a href="https://wa.me/918086429311?text=Hi%20Shafi%2C%20I%27d%20like%20to%20hire%20you%20for%20a%20design%20project."
               target="_blank" rel="noreferrer"
               className="hidden md:inline-flex items-center gap-2 rounded-full bg-cool-grad text-white px-5 py-2 text-sm font-medium hover:shadow-glow transition-shadow">
              Hire me <ArrowUpRight className="w-4 h-4" />
            </a>
            <button onClick={() => setOpen(!open)} className="md:hidden text-cream px-3 py-2" aria-label="Menu">☰</button>
          </div>
          {open && (
            <div className="md:hidden mt-2 liquid-glass rounded-2xl">
              <div className="py-3 px-4 flex flex-col gap-1">
                {nav.map((n) => (
                  <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}
                     className="text-cream-soft hover:text-cream px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                    {n.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* HERO — Editorial split: text left, framed portrait right */}
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
        {/* Ambient backdrop */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-32 w-[40rem] h-[40rem] rounded-full bg-warm-grad opacity-25 blur-[140px]" />
          <div className="absolute -bottom-40 -left-32 w-[40rem] h-[40rem] rounded-full bg-cool-grad opacity-30 blur-[140px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background-deep))_85%)]" />
        </div>

        <div className="relative container grid md:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Text — left */}
          <div className="md:col-span-7 space-y-5 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full liquid-glass px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-cream-soft">
              <Sparkles className="w-3.5 h-3.5 text-primary" /> Sha Creatives · Portfolio 2026
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-[5rem] lg:text-[6rem] font-bold leading-[0.92] tracking-tighter">
              <span className="text-gradient block">Mohammed</span>
              <span className="text-iridescent block">Shafi TP</span>
            </h1>
            <div className="font-display text-xl sm:text-2xl md:text-3xl text-cream font-medium min-h-[2.4em] sm:min-h-[1.8em]">
              I am a <span className="text-iridescent font-semibold caret">{role}</span>
            </div>
            <p className="text-base md:text-lg text-cream-soft max-w-xl leading-relaxed">
              Founder of <span className="text-primary font-medium">Sha Creatives</span> — designing
              brand identities, posters and AI-powered web experiences. Multilingual eye for English,
              Arabic, Urdu and Malayalam typography.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-cool-grad text-white px-7 py-3.5 font-medium hover:shadow-glow transition-all">
                See the work <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full liquid-glass text-cream px-7 py-3.5 font-medium hover:bg-white/10 transition-colors">
                Start a project
              </a>
            </div>
          </div>

          {/* Portrait — right, framed & smaller */}
          <div className="md:col-span-5 relative animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="relative mx-auto max-w-[360px] md:max-w-[420px]">
              {/* Iridescent halo */}
              <div className="absolute -inset-6 rounded-[2.5rem] bg-iridescent opacity-40 blur-2xl animate-float-slow" />
              {/* Frame */}
              <div className="relative rounded-[2rem] overflow-hidden liquid-glass p-2 shadow-3d">
                <div className="relative rounded-[1.6rem] overflow-hidden aspect-[4/5] bg-background-deep">
                  <img
                    src={heroPortrait}
                    alt="Mohammed Shafi TP, graphic designer"
                    className="w-full h-full object-cover object-[center_20%] animate-hero-zoom"
                  />
                  {/* color wash for cohesion */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-deep/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-grad-1/10 via-transparent to-grad-3/15 mix-blend-overlay" />
                </div>
              </div>
              {/* Floating chip */}
              <div className="absolute -bottom-4 -left-4 liquid-glass rounded-2xl px-4 py-2.5 flex items-center gap-2.5 shadow-3d">
                <span className="w-2 h-2 rounded-full bg-primary shadow-glow animate-pulse" />
                <span className="text-xs font-mono text-cream">Available for work</span>
              </div>
              <div className="absolute -top-3 -right-3 liquid-glass rounded-full px-3 py-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-primary" />
                <span className="text-[10px] uppercase tracking-widest font-mono text-cream-soft">Designer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee — separator */}
      <div className="overflow-hidden border-y border-white/5 py-5 bg-background-deep/60">
        <div className="flex marquee whitespace-nowrap gap-10">
          {[...TICKER, ...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="font-serif-display italic text-2xl md:text-4xl text-cream/70 flex items-center gap-10">
              {t} <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-warm-grad opacity-[0.08] blur-[120px] pointer-events-none" />
        <div className="container relative">
          <div className="max-w-3xl mb-12" data-reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-mono">What I do</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
              <span className="text-gradient">Design that</span> <span className="text-iridescent">speaks</span> <span className="text-gradient">before it sells.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <div key={s.title} data-reveal style={{ animationDelay: `${i * 80}ms` }}
                   className="group relative glass rounded-3xl p-7 hover:shadow-3d hover:-translate-y-1 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-iridescent grid place-items-center mb-6 shadow-glow opacity-90 group-hover:opacity-100 transition-opacity">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-cream mb-2 tracking-tight">{s.title}</h3>
                <p className="text-sm text-cream-soft leading-relaxed">{s.desc}</p>
                <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-cream/30 group-hover:text-primary transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK / PROJECTS */}
      <section id="work" className="py-20 md:py-28 bg-background-deep/60 relative">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" data-reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-mono">Selected work</p>
              <h2 className="font-display text-4xl md:text-6xl font-bold max-w-2xl leading-[1.05]">
                <span className="text-gradient">Posters, logos &amp;</span><br />
                <span className="text-iridescent">brand identity.</span>
              </h2>
            </div>
            <p className="text-cream-soft md:text-right max-w-sm">
              Recent campaigns, identities and editorial pieces — from admission posters to
              typographic brand marks.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-4 md:gap-5">
            {projects.map((p, i) => {
              const span =
                i === 0 ? "md:col-span-8" :
                i === 1 ? "md:col-span-4" :
                i === 2 ? "md:col-span-5" :
                i === 3 ? "md:col-span-3" :
                          "md:col-span-4";
              return (
                <article key={p.title} data-reveal style={{ animationDelay: `${i * 90}ms` }}
                  className={`${span} group relative overflow-hidden rounded-3xl glass hover:shadow-3d transition-all duration-500`}>
                  <div className="aspect-[4/3] overflow-hidden bg-background-deep">
                    <img src={p.img} alt={p.title}
                         loading="lazy"
                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background-deep/95 via-background-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-xs uppercase tracking-widest text-primary mb-2 font-mono">{p.category}</p>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-cream mb-2">{p.title}</h3>
                    <p className="text-sm text-cream-soft">{p.desc}</p>
                  </div>
                  <div className="p-5 group-hover:opacity-0 transition-opacity">
                    <p className="text-[10px] uppercase tracking-widest text-primary mb-1 font-mono">{p.category}</p>
                    <h3 className="font-display text-lg font-semibold text-cream">{p.title}</h3>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-28">
        <div className="container space-y-20">
          {/* Why hire */}
          <div className="grid md:grid-cols-12 gap-8" data-reveal>
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-mono">Why hire me</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.05]">
                <span className="text-gradient">A designer's eye,</span> <span className="text-iridescent">an operator's hands.</span>
              </h2>
            </div>
            <div className="md:col-span-7 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Wand2, title: "Proven craft", desc: "50+ marketing posters and 10+ custom logos delivered through Sha Creatives." },
                { icon: Code2, title: "AI + design", desc: "Web apps, automations and AI workflows alongside full visual identities." },
                { icon: Sparkles, title: "Curriculum lead", desc: "Modernizing IT education across 69 affiliated colleges." },
              ].map((c) => (
                <div key={c.title} className="glass rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-iridescent grid place-items-center mb-4 shadow-glow opacity-90">
                    <c.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-cream mb-2">{c.title}</h3>
                  <p className="text-sm text-cream-soft leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div data-reveal>
            <div className="flex items-end justify-between mb-8 gap-6">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-gradient">My toolkit.</h3>
              <p className="text-cream-soft text-sm hidden md:block">Versatile skills in design, technology and languages.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {skills.map((s) => (
                <div key={s.name} className="flex items-start gap-4 rounded-2xl glass p-5 hover:shadow-3d transition-shadow">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-iridescent grid place-items-center shadow-glow opacity-90">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-cream">{s.name}</h4>
                    <p className="text-sm text-cream-soft">{s.detail}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4 rounded-2xl glass p-5">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-iridescent grid place-items-center shadow-glow opacity-90">
                  <Languages className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-cream">Languages</h4>
                  <p className="text-sm text-cream-soft">English · Arabic · Urdu · Malayalam</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience + Education */}
          <div className="grid md:grid-cols-2 gap-8">
            <div data-reveal>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-5 h-5 text-primary" />
                <h3 className="font-display text-3xl font-bold text-gradient">Experience</h3>
              </div>
              <ol className="relative border-l border-white/10 ml-3 space-y-7">
                {experience.map((e) => (
                  <li key={e.role} className="pl-6 relative">
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-iridescent shadow-glow" />
                    <p className="text-xs uppercase tracking-widest text-primary font-mono">{e.period}</p>
                    <h4 className="font-display text-lg font-semibold text-cream mt-1">{e.role}</h4>
                    <p className="text-sm text-cream-soft">{e.org}</p>
                    <p className="text-sm text-cream-soft/80 mt-2 leading-relaxed">{e.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div data-reveal>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="font-display text-3xl font-bold text-gradient">Education</h3>
              </div>
              <ol className="relative border-l border-white/10 ml-3 space-y-7">
                {education.map((e) => (
                  <li key={e.title} className="pl-6 relative">
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-iridescent shadow-glow" />
                    <p className="text-xs uppercase tracking-widest text-primary font-mono">{e.period}</p>
                    <h4 className="font-display text-lg font-semibold text-cream mt-1">{e.title}</h4>
                    <p className="text-sm text-cream-soft">{e.org}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28 bg-background-deep/70">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2rem] glass p-10 md:p-16" data-reveal>
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-warm-grad opacity-30 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-cool-grad opacity-25 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-mono">Let's work together</p>
                <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] mb-5">
                  <span className="text-gradient">Have a brief?</span><br />
                  <span className="text-iridescent">Let's make it sing.</span>
                </h2>
                <p className="text-cream-soft text-lg mb-7 max-w-md">
                  Bringing creativity and efficiency to every project. Ready to collaborate
                  on your next poster, logo, brand identity or AI web app.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="mailto:shafisayd2415@gmail.com"
                     className="inline-flex items-center gap-2 rounded-full bg-cool-grad text-white px-6 py-3 font-medium hover:shadow-glow transition-all">
                    <Mail className="w-4 h-4" /> Email me
                  </a>
                  <a href="https://wa.me/918086429311?text=Hi%20Shafi%2C%20I%27d%20like%20to%20hire%20you%20for%20a%20design%20project."
                     target="_blank" rel="noreferrer"
                     className="inline-flex items-center gap-2 rounded-full glass text-cream px-6 py-3 font-medium hover:bg-white/10 transition-colors">
                    <Phone className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </div>
              <div className="space-y-3">
                <a href="mailto:shafisayd2415@gmail.com" className="group flex items-center justify-between p-5 rounded-2xl glass hover:shadow-3d transition-shadow">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-cream-soft font-mono">Email</p>
                    <p className="font-display text-lg text-cream">shafisayd2415@gmail.com</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-cream-soft group-hover:text-primary transition-colors" />
                </a>
                <a href="https://wa.me/918086429311?text=Hi%20Shafi%2C%20I%27d%20like%20to%20hire%20you%20for%20a%20design%20project." target="_blank" rel="noreferrer" className="group flex items-center justify-between p-5 rounded-2xl glass hover:shadow-3d transition-shadow">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-cream-soft font-mono">WhatsApp</p>
                    <p className="font-display text-lg text-cream">(+91) 80864 29311</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-cream-soft group-hover:text-primary transition-colors" />
                </a>
                <div className="p-5 rounded-2xl glass">
                  <p className="text-xs uppercase tracking-widest text-cream-soft font-mono">Based in</p>
                  <p className="font-display text-lg text-cream">Areekode, Malappuram · Kerala, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream-soft">
          <p>© {new Date().getFullYear()} Mohammed Shafi TP · Graphic Designer · Sha Creatives</p>
          <p className="font-serif-display italic">Crafted with care &amp; <span className="text-iridescent">✦</span> light.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
