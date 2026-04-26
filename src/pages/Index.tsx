import { useEffect, useState } from "react";
import {
  Palette, Type, Wand2, ArrowUpRight, Zap, Sparkles, Mail, Phone,
  Briefcase, GraduationCap, FileImage, Languages, Video,
  FileSpreadsheet, ArrowRight, Cpu, Brain,
} from "lucide-react";
import profile from "@/assets/work/profile.jpg";
import postersA from "@/assets/work/posters-collection-1.jpg";
import postersB from "@/assets/work/posters-collection-2.jpg";
import logo1 from "@/assets/work/logo-1.jpg";
import logo2 from "@/assets/work/logo-2.jpg";
import logo3 from "@/assets/work/logo-3.jpg";

const services = [
  { icon: Palette, title: "Graphic Design", desc: "Eye-catching visuals for social, print and web." },
  { icon: Type, title: "Logo & Brand Identity", desc: "Memorable marks rooted in story and craft." },
  { icon: FileImage, title: "Poster & Marketing", desc: "Campaign creatives that convert attention to action." },
  { icon: Brain, title: "IT & AI Instruction", desc: "Curriculum design and classroom training in modern tools." },
];

const skills = [
  { icon: Palette, name: "Adobe Creative Suite", detail: "Photoshop · Illustrator · InDesign" },
  { icon: Type, name: "Canva & Figma", detail: "Rapid concepts, social kits and UI mocks" },
  { icon: Video, name: "Video Editing", detail: "Reels, promos and motion content" },
  { icon: FileSpreadsheet, name: "Advanced MS Excel", detail: "Automations · MS Word · PowerPoint" },
  { icon: Brain, name: "AI Tools & Curriculum", detail: "Curriculum design · E-learning · Classroom instruction" },
  { icon: Cpu, name: "Hardware & IT", detail: "PC maintenance and troubleshooting" },
  { icon: Languages, name: "Languages", detail: "English · Arabic · Urdu · Malayalam" },
];

const experience = [
  { role: "Founder & Lead Graphic Designer", org: "Sha Creatives Design Studio", period: "Jan 2022 — Present",
    desc: "Freelance design agency for social media branding and visual identity. Delivered 50+ marketing posters and 10+ custom logos for diverse clients." },
  { role: "IT & AI Instructor · Digital Media Coordinator", org: "Malja'a Shareeath and Arts College", period: "Apr 2023 — Present",
    desc: "Teach Adobe Creative Suite, MS Office, AI automation and PC hardware. Designed campus campaigns that grew engagement by ~70%." },
  { role: "Board Member · IT Curriculum Developer", org: "Coordination of Jami'a Junior Colleges (CJC)", period: "Mar 2023 — Present",
    desc: "Spearheading IT education modernization across 69 affiliated colleges. Authored a comprehensive industry-aligned IT syllabus." },
  { role: "Online Tutor", org: "Zidnee Online Islamic School", period: "Dec 2025 — Present",
    desc: "Online instruction blending Islamic studies with digital learning best practices." },
  { role: "IT & Islamic Studies Teacher", org: "Kammu Soofi Memorial Islamic Complex", period: "2022 — 2023",
    desc: "Taught IT and Islamic studies; selected to the Board of Studies based on teaching performance." },
  { role: "Operations Officer & Data Analyst", org: "Bismi E Tickets", period: "Oct 2019 — Mar 2021",
    desc: "Managed travel documentation during COVID-19. Built Excel automations that cut processing time by 30%." },
];

const education = [
  { title: "Diploma in Graphic Design", org: "Diginet Online School", period: "Jan 2025 — Jun 2025" },
  { title: "Master of Arts (MA)", org: "Darul Huda Islamic University", period: "Apr 2021 — Mar 2023" },
  { title: "Bachelor of Arts (BA)", org: "University of Calicut", period: "Apr 2019 — Mar 2022" },
];

const projects = [
  { img: postersA, title: "Sha Creatives · Poster Vol. 1", category: "Social & Print", desc: "Admission, event and brand campaign posters in Malayalam, Arabic and English typography." },
  { img: logo1, title: "Malja'a Shareeath", category: "Logo · Branding", desc: "Crest mark blending Arabic calligraphy with an architectural arch motif, foiled on craft paper." },
  { img: postersB, title: "Sha Creatives · Poster Vol. 2", category: "Campaign Creatives", desc: "Long-form campaign posters spanning workshops, product, hospitality and educational institutions." },
  { img: logo2, title: "Monogram in Stone", category: "Logo · Brand Mark", desc: "Geometric monogram in pencil-pictogram form, embossed onto a textured green canvas." },
  { img: logo3, title: "Al Ishraq Identity", category: "Logo · Print", desc: "Bold Arabic display logotype paired with confident English wordmark for a student union." },
];

const TICKER = ["Graphic Design", "Logo Design", "Brand Identity", "Sha Creatives", "AI & Curriculum", "Adobe Creative Suite"];

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

const Index = () => {
  useReveal();
  const [open, setOpen] = useState(false);
  const nav = [
    { id: "work", label: "Work" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
        <div className="container flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-coral-grad text-primary-foreground font-display font-bold">S</span>
            <span className="font-display font-semibold tracking-tight text-cream">Shafi<span className="text-primary">.</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-cream-soft">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="hover:text-primary transition-colors">{n.label}</a>
            ))}
          </nav>
          <a href="#contact"
             className="hidden md:inline-flex items-center gap-2 rounded-full bg-coral-grad text-primary-foreground px-5 py-2 text-sm font-medium hover:shadow-glow transition-shadow">
            Hire me <ArrowUpRight className="w-4 h-4" />
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden text-cream" aria-label="Menu">☰</button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border/40 bg-background/95">
            <div className="container py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="text-cream-soft hover:text-primary">{n.label}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="container grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-7" data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background-elev/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-cream-soft">
              <Sparkles className="w-3.5 h-3.5 text-primary" /> Portfolio · 2025
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-cream">
              I'm a <span className="font-serif-display italic text-primary">graphic</span><br />
              designer<br />
              with a <span className="font-serif-display italic text-primary">story</span>.
            </h1>
            <p className="text-lg text-cream-soft max-w-xl leading-relaxed">
              Mohammed Shafi TP — Founder of Sha Creatives, IT &amp; AI instructor, and curriculum
              developer. 50+ branding projects delivered across posters, logos and social campaigns —
              with a multilingual eye for English, Arabic, Urdu and Malayalam typography.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-coral-grad text-primary-foreground px-7 py-3.5 font-medium hover:shadow-glow transition-all">
                See the work <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-cream/30 text-cream px-7 py-3.5 font-medium hover:bg-cream/5 transition-colors">
                Start a project
              </a>
            </div>
            <div className="flex items-center gap-8 pt-6 text-sm text-cream-soft">
              <div><div className="font-display text-3xl text-cream">50+</div>Branding projects</div>
              <div><div className="font-display text-3xl text-cream">10+</div>Custom logos</div>
              <div><div className="font-display text-3xl text-cream">69</div>Colleges impacted</div>
            </div>
          </div>

          <div className="md:col-span-5 relative" data-reveal>
            <div className="relative animate-float-slow">
              <div className="absolute -inset-6 rounded-full bg-coral-grad opacity-20 blur-3xl" />
              <div className="relative aspect-square rounded-full overflow-hidden border-2 border-primary/40 shadow-card">
                <img src={profile} alt="Mohammed Shafi Hudawi, graphic designer" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-cream text-primary-foreground rounded-2xl px-4 py-3 shadow-card">
                <div className="text-[10px] uppercase tracking-widest opacity-70">Designing since</div>
                <div className="font-display text-xl font-bold">2022</div>
              </div>
              <div className="absolute -top-4 -right-2 bg-background-deep border border-primary/40 rounded-2xl px-4 py-3 shadow-card">
                <div className="flex items-center gap-2 text-cream"><Palette className="w-4 h-4 text-primary" /><span className="font-display text-sm">Adobe CS</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-24 overflow-hidden border-y border-border/40 py-6 bg-background-deep/40">
          <div className="flex marquee whitespace-nowrap gap-12">
            {[...TICKER, ...TICKER, ...TICKER].map((t, i) => (
              <span key={i} className="font-serif-display italic text-3xl md:text-5xl text-cream/80 flex items-center gap-12">
                {t} <span className="text-primary">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mb-16" data-reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">What I do</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-cream leading-tight">
              Design that <span className="font-serif-display italic text-primary">speaks</span> before it sells.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <div key={s.title} data-reveal style={{ animationDelay: `${i * 80}ms` }}
                   className="group relative bg-card-grad border border-border/50 rounded-3xl p-7 hover:border-primary/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/15 grid place-items-center mb-6 group-hover:bg-coral-grad transition-all">
                  <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-cream mb-2">{s.title}</h3>
                <p className="text-sm text-cream-soft leading-relaxed">{s.desc}</p>
                <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-cream/30 group-hover:text-primary transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK / PROJECTS */}
      <section id="work" className="py-24 md:py-32 bg-background-deep/40">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" data-reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Selected work</p>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-cream max-w-2xl leading-tight">
                Posters, logos &amp; <span className="font-serif-display italic text-primary">brand identity</span>.
              </h2>
            </div>
            <p className="text-cream-soft md:text-right max-w-sm">
              A glimpse into recent campaigns, identities and editorial pieces — from
              admission posters to typographic brand marks.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-5 md:gap-6">
            {projects.map((p, i) => {
              const span =
                i === 0 ? "md:col-span-8" :
                i === 1 ? "md:col-span-4" :
                i === 2 ? "md:col-span-5" :
                i === 3 ? "md:col-span-3" :
                          "md:col-span-4";
              return (
                <article key={p.title} data-reveal style={{ animationDelay: `${i * 90}ms` }}
                  className={`${span} group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-primary/40 transition-all`}>
                  <div className="aspect-[4/3] overflow-hidden bg-background-deep">
                    <img src={p.img} alt={p.title}
                         loading="lazy"
                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background-deep/95 via-background-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-xs uppercase tracking-widest text-primary mb-2">{p.category}</p>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-cream mb-2">{p.title}</h3>
                    <p className="text-sm text-cream-soft">{p.desc}</p>
                  </div>
                  <div className="p-5 group-hover:opacity-0 transition-opacity">
                    <p className="text-[10px] uppercase tracking-widest text-primary mb-1">{p.category}</p>
                    <h3 className="font-display text-lg font-semibold text-cream">{p.title}</h3>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY HIRE / SKILLS / EXPERIENCE / EDUCATION */}
      <section id="about" className="py-24 md:py-32">
        <div className="container space-y-24">
          {/* Why hire */}
          <div className="grid md:grid-cols-12 gap-10" data-reveal>
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Why hire me</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream leading-tight">
                A designer's eye, an <span className="font-serif-display italic text-primary">operator's</span> hands.
              </h2>
            </div>
            <div className="md:col-span-7 grid sm:grid-cols-3 gap-5">
              {[
                { icon: Wand2, title: "Proven craft", desc: "50+ marketing posters and 10+ custom logos delivered through Sha Creatives." },
                { icon: Zap, title: "Versatile", desc: "Graphic design, video, AI instruction and Excel automation — one operator." },
                { icon: Sparkles, title: "Curriculum lead", desc: "Modernizing IT education across 69 affiliated colleges." },
              ].map((c) => (
                <div key={c.title} className="bg-card-grad border border-border/50 rounded-2xl p-6">
                  <c.icon className="w-6 h-6 text-primary mb-4" />
                  <h3 className="font-display text-lg font-semibold text-cream mb-2">{c.title}</h3>
                  <p className="text-sm text-cream-soft leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div data-reveal>
            <div className="flex items-end justify-between mb-10 gap-6">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-cream">My toolkit.</h3>
              <p className="text-cream-soft text-sm hidden md:block">Versatile skills in design, technology and languages.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((s) => (
                <div key={s.name} className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background-elev/40 p-5 hover:border-primary/40 transition-colors">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/15 grid place-items-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-cream">{s.name}</h4>
                    <p className="text-sm text-cream-soft">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience + Education */}
          <div className="grid md:grid-cols-2 gap-10">
            <div data-reveal>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-5 h-5 text-primary" />
                <h3 className="font-display text-3xl font-bold text-cream">Experience</h3>
              </div>
              <ol className="relative border-l border-border/60 ml-3 space-y-8">
                {experience.map((e) => (
                  <li key={e.role} className="pl-6 relative">
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-coral-grad" />
                    <p className="text-xs uppercase tracking-widest text-primary">{e.period}</p>
                    <h4 className="font-display text-lg font-semibold text-cream mt-1">{e.role}</h4>
                    <p className="text-sm text-cream-soft">{e.org}</p>
                    <p className="text-sm text-cream-soft/80 mt-2 leading-relaxed">{e.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div data-reveal>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="font-display text-3xl font-bold text-cream">Education</h3>
              </div>
              <ol className="relative border-l border-border/60 ml-3 space-y-8">
                {education.map((e) => (
                  <li key={e.title} className="pl-6 relative">
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-coral-grad" />
                    <p className="text-xs uppercase tracking-widest text-primary">{e.period}</p>
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
      <section id="contact" className="py-24 md:py-32 bg-background-deep/60">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2rem] bg-card-grad border border-border/50 p-10 md:p-16" data-reveal>
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-coral-grad opacity-25 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Let's work together</p>
                <h2 className="font-display text-4xl md:text-6xl font-bold text-cream leading-tight mb-6">
                  Have a <span className="font-serif-display italic text-primary">brief</span>?<br />Let's make it sing.
                </h2>
                <p className="text-cream-soft text-lg mb-8 max-w-md">
                  Bringing creativity and efficiency to every project. Ready to collaborate
                  on your next poster, logo or brand identity.
                </p>
                <div className="flex flex-wrap gap-3">
                <a href="mailto:mshafisyd@gmail.com"
                     className="inline-flex items-center gap-2 rounded-full bg-coral-grad text-primary-foreground px-6 py-3 font-medium hover:shadow-glow transition-all">
                    <Mail className="w-4 h-4" /> Email me
                  </a>
                  <a href="https://wa.me/917994724015"
                     target="_blank" rel="noreferrer"
                     className="inline-flex items-center gap-2 rounded-full border border-cream/30 text-cream px-6 py-3 font-medium hover:bg-cream/5 transition-colors">
                    <Phone className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <a href="mailto:mshafisyd@gmail.com" className="group flex items-center justify-between p-5 rounded-2xl border border-border/50 hover:border-primary/40 transition-colors">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-cream-soft">Email</p>
                    <p className="font-display text-lg text-cream">mshafisyd@gmail.com</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-cream-soft group-hover:text-primary transition-colors" />
                </a>
                <a href="https://wa.me/917994724015" target="_blank" rel="noreferrer" className="group flex items-center justify-between p-5 rounded-2xl border border-border/50 hover:border-primary/40 transition-colors">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-cream-soft">WhatsApp</p>
                    <p className="font-display text-lg text-cream">(+91) 799 472 4015</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-cream-soft group-hover:text-primary transition-colors" />
                </a>
                <div className="p-5 rounded-2xl border border-border/50">
                  <p className="text-xs uppercase tracking-widest text-cream-soft">Based in</p>
                  <p className="font-display text-lg text-cream">Areekode, Malappuram · Kerala, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream-soft">
          <p>© {new Date().getFullYear()} Mohammed Shafi TP · Graphic Designer · Sha Creatives</p>
          <p className="font-serif-display italic">Crafted with care &amp; <span className="text-primary">✦</span> coral.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
