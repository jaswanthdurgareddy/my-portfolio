// Orbit Lab style: asymmetric neo-editorial portfolio with instrument labels, signal-lime actions, and a coded 3D core.
import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  X,
} from "lucide-react";
import { toast } from "sonner";
import OrbitCore from "@/components/OrbitCore";

const EMAIL = "jaswanthdurgareddyvelagala@gmail.com";

const projects = [
  {
    id: "vehicle-management-system",
    index: "01",
    type: "REAL-TIME / MANAGEMENT",
    title: "Vehicle Management System",
    description:
      "A real-time vehicle management system built for practical operations, organized records, and faster day-to-day coordination.",
    result: "Real-time project",
    year: "2026",
    stack: ["Python", "MySQL", "HTML / CSS"],

    image: "/manus-storage/project-signal-weave_ba5d8163.png",
    tone: "lime",
  },
  {
    id: "dynamic-pricing-prediction",
    index: "02",
    type: "PREDICTION / INDUSTRIAL",
    title: "Dynamic Pricing Prediction System",
    description:
      "An industrial-oriented mini project exploring how data-driven prediction can support dynamic pricing decisions.",
    result: "Industrial-oriented mini project",
    year: "2026",
    stack: ["Python", "Pandas", "Scikit-learn"],
    image: "/manus-storage/project-kinetic-object_aa69bfd7.png",
    tone: "violet",
  },
];

  
const skills = [
  "Python",
  "Java",
  "React",
  "JavaScript",
  "HTML / CSS",
  "SQL",
  "Machine Learning",
  "Pandas",
  "Scikit-learn",
  "Git",
];



const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const sections = ["top", "about", "work", "process", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -55%", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success("Email copied to clipboard");
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error(`Copy failed — reach me at ${EMAIL}`);
    }
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site-shell" id="top">
      <div className="grain" aria-hidden="true" />
      <div className="edge-index edge-index-left" aria-hidden="true">OL / 26</div>
      <div className="edge-index edge-index-right" aria-hidden="true">BTECH / FINAL YEAR</div>
      <div className="research-spine" aria-hidden="true"><span /><span /><span /><span /></div>

      <header className={`site-header ${menuOpen ? "menu-is-open" : ""}`}>
        <a className="brand-lockup" href="#top" aria-label="Orbit Lab home">
          <img src="/manus-storage/orbit-lab-mark_0e682887.png" alt="" className="brand-mark" />
          <span className="brand-name">ORBIT<span>LAB</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a className={activeSection === item.href.slice(1) ? "active" : ""} href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-status">
          <span className="status-dot" />
          <span>OPEN TO COLLABORATION</span>
        </div>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen((open) => !open)}>
          <span className="sr-only">Toggle navigation</span>
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              <span>0{navItems.indexOf(item) + 1}</span>{item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero-section section-pad" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow reveal-item"><span className="eyebrow-rule" /> BTECH / CSE AIML / 2027</p>
            <h1 id="hero-title" className="hero-title reveal-item delay-1">
              I make<br /><em>complex</em> things<br />feel simple<span className="hero-period">.</span>
            </h1>
            <p className="hero-intro reveal-item delay-2">
            Final-year BTech CSE AIML student at JNTUH University College of Engineering Wanaparthy, building practical AI and full-stack software systems.


            </p>
            <div className="hero-actions reveal-item delay-3">
              <a className="button button-primary" href="#work">
                Explore the work <ArrowDownRight size={17} />
              </a>
              <button className="text-action" type="button" onClick={copyEmail}>
                {copied ? <Check size={15} /> : <Mail size={15} />}
                {copied ? "Copied" : "Say hello"}
              </button>
            </div>
            <div className="hero-footnote reveal-item delay-4">
              <span>Currently learning</span>
              <strong>how systems become stories.</strong>
            </div>
          </div>
          <div className="hero-core-wrap reveal-item delay-2">
            <div className="core-label label-top"><span>FIG. 01</span><span>ACTIVE OBJECT</span></div>
            <OrbitCore />
            <div className="core-label label-bottom"><span>ROTATION / 0.2 RPM</span><span>POINTER / MAGNETIC</span></div>
          </div>
          <div className="hero-scroll-cue" aria-hidden="true"><span className="scroll-line" /><span>SCROLL TO EXPLORE</span></div>
        </section>

        <section className="signal-strip" aria-label="Portfolio summary">
          <div><span className="strip-label">01 / BASE</span><strong>India · Remote</strong></div>
          <div><span className="strip-label">02 / EDUCATION</span><strong>JNTUH University College of Engineering Wanaparthy</strong></div>

          <div><span className="strip-label">03 / NOW</span><strong>Looking for first build team</strong></div>
          <div className="strip-symbol" aria-hidden="true">↗</div>
        </section>

        <section className="about-section section-pad" id="about" aria-labelledby="about-title">
          <div className="section-heading reveal-item">
            <span className="section-index">01</span>
            <div><p className="eyebrow">ABOUT THE BUILDER</p><h2 id="about-title">Curiosity is<br /><em>the toolkit.</em></h2></div>
          </div>
          <div className="about-layout">
  <div className="about-copy reveal-item delay-1">
    <p className="large-copy">
      I’m <span className="highlight">Jaswanth Durga Reddy Velagala</span> — a final-year BTech student building useful systems at the intersection of software and intelligence.
    </p>

    <p>
      I’m pursuing a BTech in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at JNTUH University College of Engineering Wanaparthy, graduating in 2027. Based in Wanaparthy, I’m interested in software engineering, machine learning, and building practical systems for real users.
    </p>

    <a className="inline-link" href="#process">
      See how I work <MoveUpRight size={15} />
    </a>
  </div>

  <div className="about-photo reveal-item delay-2">
  <div className="photo-hud">
    <div className="hud-ring ring-1" />
    <div className="hud-ring ring-2" />
    <div className="hud-ring ring-3" />

    <span className="orbit-dot dot-1" />
    <span className="orbit-dot dot-2" />
    <span className="orbit-dot dot-3" />

    <div className="hud-corner corner-tl" />
    <div className="hud-corner corner-tr" />
    <div className="hud-corner corner-bl" />
    <div className="hud-corner corner-br" />

    <div className="scan-line" />

    <img
      src="/profile.png"
      alt="Jaswanth Durga Reddy Velagala"
      className="profile-photo"
    />

    <div className="photo-status">
      <span className="status-dot" />
      SYSTEM ACTIVE
    </div>

    <div className="photo-id">
      <span>SUBJECT_01</span>
      <span>AI / ML</span>
    </div>
  </div>
</div>

  <div className="about-metrics reveal-item delay-2">
    <div className="metric-card">
      <span>03</span>
      <p>years turning<br />questions into builds</p>
    </div>

    <div className="metric-card accent">
      <span>18</span>
      <p>curious people<br />interviewed so far</p>
    </div>

    <div className="metric-card wide">
      <span>∞</span>
      <p>new tabs open<br />at any given time</p>
    </div>
  </div>
</div>
        </section>

        <section className="work-section section-pad" id="work" aria-labelledby="work-title">
          <div className="section-heading work-heading reveal-item">
            <span className="section-index">02</span>
            <div><p className="eyebrow">SELECTED WORK / 2024—26</p><h2 id="work-title">Built to be<br /><em>looked at.</em></h2></div>
            <p className="heading-aside">A few experiments, class projects,<br />and useful things in between.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <button
                type="button"
                className={`project-card project-${index + 1} tone-${project.tone} reveal-item delay-${index + 1}`}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                aria-label={`Open case study: ${project.title}`}
              >
                <div className="project-image-wrap">
                  <img src={project.image} alt="" className="project-image" />
                  <span className="project-open"><ArrowUpRight size={17} /></span>
                  <span className="project-index">{project.index}</span>
                  <span className="evidence-note evidence-note-a">{index === 0 ? "STREAM / 12.4K EVENTS" : index === 1 ? "MODEL / 94% MATCH" : "PANEL / ITERATION 03"}</span>
                </div>
                <div className="project-meta"><span>{project.type}</span><span>{project.year}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-bottom"><span>{project.result}</span><span className="project-arrow">↗</span></div>
              </button>
            ))}
          </div>
          <div className="work-endnote reveal-item"><span className="crosshair-symbol">⊕</span><p>More work is currently in the lab.<br /><strong>Ask me what’s bubbling up.</strong></p><button type="button" className="text-action" onClick={copyEmail}>Request the longlist <ArrowUpRight size={15} /></button></div>
        </section>

        <section className="process-section section-pad" id="process" aria-labelledby="process-title">
          <div className="section-heading reveal-item">
            <span className="section-index">03</span>
            <div><p className="eyebrow">WORKING METHOD / LOOP 01</p><h2 id="process-title">Make room<br />for the <em>unknown.</em></h2></div>
          </div>
          <div className="process-list">
            <article className="process-row reveal-item delay-1"><span className="process-number">01</span><div><h3>Observe the edges</h3><p>Start with the constraints, the awkward bits, and the things people do without saying out loud.</p></div><span className="process-mark">↘</span></article>
            <article className="process-row reveal-item delay-2"><span className="process-number">02</span><div><h3>Build the smallest proof</h3><p>Turn the question into something touchable early. A rough prototype teaches more than a polished guess.</p></div><span className="process-mark">↘</span></article>
            <article className="process-row reveal-item delay-3"><span className="process-number">03</span><div><h3>Refine what matters</h3><p>Keep the signal. Remove the noise. Leave the person on the other side with one clear next move.</p></div><span className="process-mark">↗</span></article>
          </div>
        </section>

        <section className="toolkit-section section-pad" aria-labelledby="toolkit-title">
          <div className="toolkit-intro"><p className="eyebrow">THE CURRENT TOOLKIT</p><h2 id="toolkit-title">Sharp tools.<br /><em>Soft hands.</em></h2><p>Technology is the material. The real craft is deciding what not to add.</p></div>
          <div className="skill-field" aria-label="Skills and technologies">
            {skills.map((skill, index) => <span className={`skill-chip chip-${index + 1}`} key={skill}><i />{skill}</span>)}
            <span className="skill-orbit" aria-hidden="true"><span /></span>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
          <div className="contact-orbit" aria-hidden="true"><span /><span /><span /></div>
          <div className="contact-content reveal-item"><p className="eyebrow"><span className="eyebrow-rule" /> NEXT SIGNAL</p><h2 id="contact-title">Have a good<br /><em>question?</em></h2><p>Hiring for a first build team, testing a new idea, or looking for a second pair of eyes on a system? Send the brief. I’ll bring the prototype mindset.</p><button className="contact-email" type="button" onClick={copyEmail}>{EMAIL}<span>{copied ? <Check size={18} /> : <Copy size={18} />}</span></button><div className="social-row"><a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={12} /></a><a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ExternalLink size={12} /></a></div></div>
        </section>
      </main>

      <footer className="site-footer"><a className="brand-lockup" href="#top" aria-label="Back to top"><img src="/manus-storage/orbit-lab-mark_0e682887.png" alt="" className="brand-mark" /><span className="brand-name">ORBIT<span>LAB</span></span></a><span>© {currentYear} / MADE WITH INTENT</span><a href="#top" className="back-top">BACK TO TOP <ArrowUpRight size={15} /></a></footer>

      {selectedProject && (
        <div className="project-dialog-backdrop" role="presentation" onClick={() => setSelectedProject(null)}>
          <article className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" onClick={(event) => event.stopPropagation()}>
            <button className="dialog-close" type="button" onClick={() => setSelectedProject(null)} aria-label="Close project details"><X size={18} /></button>
            <div className="dialog-image"><img src={selectedProject.image} alt="" /></div>
            <div className="dialog-content"><p className="eyebrow">{selectedProject.index} / {selectedProject.type}</p><h2 id="project-dialog-title">{selectedProject.title}</h2><p>{selectedProject.description}</p><div className="dialog-result"><span>OUTCOME</span><strong>{selectedProject.result}</strong></div><div className="dialog-tags">{selectedProject.stack.map((item) => <span key={item}>{item}</span>)}</div><button type="button" className="button button-primary" onClick={() => toast.info("Full case study link coming soon")}>Open case study <ArrowUpRight size={16} /></button></div>
          </article>
        </div>
      )}
    </div>
  );
}
