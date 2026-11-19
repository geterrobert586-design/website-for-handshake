import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  FileText,
  MapPin,
  Wrench,
} from "lucide-react"

const skills = [
  {
    title: "Building now",
    label: "Learning in practice",
    icon: Code2,
    items: ["HTML & CSS", "JavaScript fundamentals", "React & Vite projects", "Git & GitHub", "VS Code"],
  },
  {
    title: "Ready to apply",
    label: "Hands-on strengths",
    icon: Wrench,
    items: ["Technical troubleshooting", "Maintenance operations", "Process documentation", "Excel & Google Workspace", "AI-assisted workflows"],
  },
]

const projects = [
  {
    number: "01",
    title: "Maintenance Work Order Tracker",
    type: "Interactive learning project",
    description: "A practical browser-based tool for capturing maintenance issues, assigning a technician, recording actions, and following work through to completion.",
    tags: ["React", "Forms", "Workflow design"],
    icon: Wrench,
  },
  {
    number: "02",
    title: "Business Application Developer Practice Hub",
    type: "Guided learning project",
    description: "A structured space for turning hands-on exercises into repeatable practice—from understanding a business need to shaping and improving a useful tool.",
    tags: ["Learning", "Documentation", "Problem solving"],
    icon: Code2,
  },
  {
    number: "03",
    title: "AI Operations & Workflow Systems",
    type: "Prototype concepts",
    description: "Explorations in AI-assisted SOPs, clear operational documentation, workflow planning, and small-business automation prototypes.",
    tags: ["AI-assisted", "SOPs", "Operations"],
    icon: BriefcaseBusiness,
  },
]

const experience = [
  {
    role: "Maintenance Operations Leadership",
    organization: "Master’s Inn · Hospitality",
    detail: "Led maintenance operations at a 96-room property—coordinating work, troubleshooting issues, supporting day-to-day continuity, and keeping practical records that help teams act.",
    date: "Facilities & hospitality",
  },
  {
    role: "Electrical & Telecommunications Roles",
    organization: "Earlier field experience",
    detail: "Built a foundation in hands-on technical work, methodical fault-finding, safety-minded execution, and explaining problems clearly across real-world environments.",
    date: "Technical foundations",
  },
]

export function PortfolioHeader() {
  return (
    <header className="site-header">
      <div className="header-inner shell">
        <a className="wordmark" href="#home" aria-label="Robert Leon Geter II home">
          <span className="wordmark-mark">RG</span>
          <span className="wordmark-copy"><strong>ROBERT LEON GETER II, LLC</strong><small>Technology · Operations · Solutions</small></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#skills">Capabilities</a><a href="#projects">Projects</a><a href="#experience">Experience</a>
        </nav>
        <a className="header-contact" href="#contact">Let&apos;s connect <ArrowUpRight aria-hidden="true" size={15} /></a>
      </div>
    </header>
  )
}

export function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> Columbia, South Carolina <span className="eyebrow-dot" /> Open to what&apos;s next</div>
          <h1>Practical technology.<br /><span>Real-world perspective.</span></h1>
          <p className="hero-name">Robert Leon Geter II <span>·</span> ROBERT LEON GETER II, LLC</p>
          <p className="hero-headline">Business Application Development <i>/</i> AI Workflow Solutions <i>/</i> Technical Troubleshooting</p>
          <p className="hero-description">I turn everyday operational challenges into clear, useful technology—grounded in years of hands-on problem-solving and a growing practice in modern application development.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowRight aria-hidden="true" size={16} /></a>
            <a className="button button-secondary" href="#resume"><FileText aria-hidden="true" size={16} /> Resume PDF · add link</a>
            <a className="button button-secondary" href="#contact">Contact</a>
          </div>
          <p className="hero-note"><MapPin aria-hidden="true" size={14} /> Columbia, SC <span>·</span> Remote roles, freelance & collaborations</p>
        </div>
        <aside className="hero-aside" aria-label="Professional approach">
          <div className="profile-card">
            <div className="profile-card-top"><span className="card-index">FIELD NOTE · 001</span><span className="live-indicator"><span /> OPEN TO OPPORTUNITIES</span></div>
            <div className="monogram" aria-hidden="true"><span>R</span><span>G</span><span>II</span></div>
            <div className="profile-caption"><div><span className="caption-label">THE THROUGH LINE</span><h2>Make it work.<br />Make it clearer.</h2></div><div className="caption-stamp">SC<br />USA</div></div>
            <div className="profile-divider" />
            <div className="profile-principles"><span><Check size={13} aria-hidden="true" /> People-first problem solving</span><span><Check size={13} aria-hidden="true" /> Useful over complicated</span><span><Check size={13} aria-hidden="true" /> Always learning, always building</span></div>
          </div>
          <div className="aside-caption"><span>01 / 04</span><span>OPERATIONS MEET TECHNOLOGY</span><ArrowDown aria-hidden="true" size={14} /></div>
        </aside>
      </div>
      <div className="hero-bottom-rule" />
    </section>
  )
}

export function AboutSection() {
  return (
    <section className="section about-section shell" id="about">
      <div className="section-kicker"><span>01</span> ABOUT</div>
      <div className="about-layout">
        <div><h2 className="section-heading">From keeping places running<br /><span>to building what&apos;s next.</span></h2></div>
        <div className="about-copy"><p className="about-lead">My path into technology started with a practical question: how can we make a difficult job easier to understand and do well?</p><p>I bring experience from facilities engineering, hospitality, electrical work, and telecommunications into a new chapter focused on business application development. At Master&apos;s Inn, I led maintenance operations for a 96-room property—work that called for calm troubleshooting, clear priorities, and reliable follow-through.</p><p>Now I&apos;m applying that same real-world mindset to React projects and AI-enabled workflows: start with the actual need, document the process, and build something people can use.</p><div className="value-strip"><span>01 <b>Listen to the problem</b></span><span>02 <b>Map the workflow</b></span><span>03 <b>Build with purpose</b></span></div></div>
      </div>
    </section>
  )
}

export function SkillsSection() {
  return (
    <section className="section skills-section" id="skills"><div className="shell">
      <div className="section-kicker"><span>02</span> CAPABILITIES</div>
      <div className="section-intro"><h2 className="section-heading">A grounded skill set.<br /><span>A curious builder.</span></h2><p>Clear about what I know, honest about what I&apos;m learning, and ready to keep building.</p></div>
      <div className="skills-grid">{skills.map(({ title, label, icon: Icon, items }, index) => <article className={`skill-card ${index === 0 ? "skill-card-active" : ""}`} key={title}><div className="skill-card-top"><span className="skill-icon"><Icon aria-hidden="true" size={20} /></span><span className="skill-label">{label}</span></div><h3>{title}</h3><ul>{items.map(item => <li key={item}><Check aria-hidden="true" size={14} />{item}</li>)}</ul></article>)}</div>
    </div></section>
  )
}

export function ProjectsSection() {
  return (
    <section className="section projects-section shell" id="projects">
      <div className="section-kicker"><span>03</span> SELECTED WORK</div>
      <div className="section-intro"><h2 className="section-heading">Built from real<br /><span>operational needs.</span></h2><p>Explorations and learning projects in progress. Each one reflects a practical problem-solving approach—not a claim of client outcomes.</p></div>
      <div className="projects-grid">{projects.map(({ number, title, type, description, tags, icon: Icon }) => <article className="project-card" key={title}><div className="project-card-top"><span className="project-number">{number} / PROJECT</span><Icon aria-hidden="true" size={20} /></div><span className="project-type">{type}</span><h3>{title}</h3><p>{description}</p><div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      <div className="demo-intro"><div><span className="demo-kicker">TRY A WORKING DEMO</span><h3>See the work order tracker in action.</h3><p>This small demo runs in your browser. Its sample data stays on this device only.</p></div><a className="text-link" href="#demo">Jump to interactive demo <ArrowDown aria-hidden="true" size={15} /></a></div>
    </section>
  )
}

export function ExperienceSection() {
  return (
    <section className="section experience-section" id="experience"><div className="shell">
      <div className="section-kicker"><span>04</span> EXPERIENCE</div>
      <div className="experience-layout"><div><h2 className="section-heading">The tools change.<br /><span>The fundamentals don&apos;t.</span></h2><p className="experience-summary">Good technology work starts with curiosity, ownership, and respect for the people who rely on the result.</p></div><div className="timeline">{experience.map((item, index) => <article className="timeline-item" key={item.role}><div className="timeline-marker">0{index + 1}</div><div><span className="timeline-date">{item.date}</span><h3>{item.role}</h3><span className="timeline-org">{item.organization}</span><p>{item.detail}</p></div></article>)}</div></div>
    </div></section>
  )
}

export function ContactSection() {
  return (
    <section className="section contact-section shell" id="contact">
      <div className="contact-panel"><div className="contact-panel-copy"><div className="section-kicker"><span>05</span> CONTACT</div><h2>Let&apos;s solve<br /><span>something useful.</span></h2><p>Open to remote technical roles, freelance opportunities, and business collaborations. I&apos;d be glad to hear what you&apos;re working on.</p><span className="contact-location"><MapPin aria-hidden="true" size={15} /> Columbia, South Carolina</span></div><div className="contact-links"><ContactPlaceholder id="resume" icon={<FileText size={18} />} label="Resume PDF" hint="Add your resume PDF link" /><ContactPlaceholder icon={<Code2 size={18} />} label="GitHub" hint="Add your GitHub profile" /><ContactPlaceholder icon={<BriefcaseBusiness size={18} />} label="LinkedIn" hint="Add your LinkedIn profile" /><ContactPlaceholder icon={<ArrowUpRight size={18} />} label="Professional email" hint="Add your preferred email" /></div></div>
      <p className="contact-edit-note">Before publishing, replace these editable contact placeholders with your preferred links and details.</p>
    </section>
  )
}

function ContactPlaceholder({ id, icon, label, hint }: { id?: string; icon: React.ReactNode; label: string; hint: string }) {
  return <div className="contact-link-placeholder" id={id}><span className="contact-link-icon">{icon}</span><span><strong>{label}</strong><small>{hint}</small></span><span className="placeholder-edit">EDIT</span></div>
}

export function PortfolioFooter() {
  return <footer className="site-footer"><div className="shell footer-inner"><a className="footer-brand" href="#home">ROBERT LEON GETER II, LLC</a><span>Practical Technology. Intelligent Workflows. Real Business Solutions.</span><a className="back-to-top" href="#home">Back to top <ArrowUpRight aria-hidden="true" size={14} /></a></div></footer>
}
