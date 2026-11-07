import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  Copy,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
} from 'lucide-react'
import { useState } from 'react'

const GITHUB = 'https://github.com/Phuocsiucap'
const EMAIL = 'Nguyenvanphuoc09112004@gmail.com'

const skills = [
  {
    title: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Java'],
  },
  {
    title: 'Backend & APIs',
    items: ['FastAPI', 'NestJS', 'Node.js', 'Express', 'Django', 'RESTful APIs', 'Swagger / OpenAPI'],
  },
  {
    title: 'Databases & Caching',
    items: ['PostgreSQL', 'pgvector', 'Redis', 'MongoDB', 'MySQL', 'Prisma ORM', 'TypeORM'],
  },
  {
    title: 'Systems & Tools',
    items: ['Microservices', 'Apache Kafka', 'Socket.IO / WebSockets', 'Docker', 'Docker Compose', 'Git', 'OAuth2 / RBAC'],
  },
]

const experiences = [
  {
    company: '3NestInvest',
    location: 'Hanoi, Vietnam',
    period: 'Jan 2026 — Oct 2026',
    role: 'Software Developer',
    stack: ['PostgreSQL', 'Prisma ORM', 'TypeScript', 'React', 'Vite', 'Tailwind CSS'],
    bullets: [
      'Built internal tools for data collection and processing, reducing manual workload for operational teams.',
      'Structured PostgreSQL schemas and optimized queries with Prisma ORM to improve data processing efficiency.',
      'Developed responsive interfaces and internal dashboards for the MICE platform using React, TypeScript, Vite, and Tailwind CSS.',
    ],
  },
  {
    company: '3NestInvest',
    location: 'Hanoi, Vietnam',
    period: 'Jan 2026 — May 2026',
    role: 'Backend Developer Intern',
    stack: ['FastAPI', 'NestJS', 'PostgreSQL', 'TypeORM', 'RBAC', 'Swagger'],
    bullets: [
      'Built RESTful APIs with FastAPI and NestJS for internal financial tools: Pricebook, SaleForecast, and PricingCalculator.',
      'Implemented multi-year TCO and margin calculations, data snapshots, and contract audit logging.',
      'Designed PostgreSQL schemas with TypeORM, implemented role-based access control (RBAC), and maintained Swagger documentation.',
    ],
  },
]

const projects = [
  {
    number: '01',
    period: 'Graduation Thesis · Jul 2026 — Present',
    badge: 'Thesis Defense: 9.1 / 10',
    title: 'AI-Powered Social Content Platform',
    summary:
      'A full-stack platform that automates the social content lifecycle — from crawling and semantic deduplication to AI script generation, video rendering, and scheduled multi-channel publishing.',
    role: 'Solo Full-Stack Developer',
    stack: ['FastAPI', 'Apache Kafka', 'PostgreSQL + pgvector', 'MongoDB', 'Docker', 'OpenAI API', 'Remotion'],
    highlights: [
      'Designed event-driven services with Apache Kafka to decouple heavy video rendering and asynchronous publishing tasks.',
      'Built crawling and semantic-processing pipelines with PostgreSQL pgvector for content deduplication, normalization, and topic clustering.',
      'Orchestrated AI video generation combining LLM scripting, TTS, subtitle/OCR extraction, and server-side rendering via Remotion.',
      'Integrated TikTok, YouTube, and TikTok Shop APIs using OAuth2 for scheduled multi-channel distribution.',
    ],
    link: `${GITHUB}/DATN`,
    visual: 'ai' as const,
  },
  {
    number: '02',
    period: 'Personal Project · Nov 2025 — Jan 2026',
    badge: 'Microservices & Concurrency',
    title: 'Movie Ticket Booking Platform',
    summary:
      'A microservices-based cinema reservation system built to handle concurrent seat bookings, real-time seat availability updates, payment rollbacks, and QR-based ticketing.',
    role: 'Solo Full-Stack Developer',
    stack: ['FastAPI', 'Node.js / Express', 'PostgreSQL', 'Redis', 'Socket.IO', 'Docker'],
    highlights: [
      'Separated backend responsibilities into Auth, User, Cinema Catalog, and Reservation services behind an API Gateway.',
      'Implemented Redis TTL-based seat locking and PostgreSQL transactions to prevent double bookings and preserve ACID guarantees.',
      'Used Socket.IO to broadcast live seat availability and prevent stale booking states across clients.',
      'Built QR-code ticket generation and verification alongside Cloudinary asset delivery.',
    ],
    link: `${GITHUB}/cinema`,
    visual: 'cinema' as const,
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="site-shell">
      <header className="topbar-wrap">
        <div className="topbar section-wrap">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-dot" />
            <strong>Nguyen Van Phuoc</strong>
            <span className="brand-role">Backend Developer</span>
          </a>

          <button
            type="button"
            className="mobile-menu"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
            {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ))}
            <a className="nav-cta" href={GITHUB} target="_blank" rel="noreferrer">
              <Github size={14} /> GitHub <ArrowUpRight size={13} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability-pill">
              <span className="pulse-dot" />
              Available for full-time Backend Developer roles
            </div>

            <h1>
              Hi, I’m Phuoc — a backend developer building <span>clear, reliable systems.</span>
            </h1>

            <p className="hero-intro">
              I’m an Information Technology graduate in Hanoi with hands-on experience designing RESTful APIs, relational databases, and event-driven services using{' '}
              <strong>Python (FastAPI), TypeScript (NestJS), PostgreSQL, Redis, and Docker</strong>.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View selected projects <ArrowUpRight size={16} />
              </a>
              <button type="button" className="btn btn-outline" onClick={copyEmail}>
                {copied ? <Check size={15} /> : <Copy size={15} />}
                {copied ? 'Copied email!' : 'Copy email'}
              </button>
            </div>

            <div className="hero-meta">
              <a href={GITHUB} target="_blank" rel="noreferrer">
                <Github size={15} /> github.com/Phuocsiucap
              </a>
              <a href={`mailto:${EMAIL}`}>
                <Mail size={15} /> {EMAIL}
              </a>
              <span>
                <MapPin size={15} /> Hanoi, Vietnam
              </span>
            </div>
          </div>

          <div className="hero-photo-col">
            <div className="photo-card">
              <img src="/profile.png" alt="Nguyen Van Phuoc" />
            </div>
            <p className="photo-caption">
              B.S. in Information Technology · Hanoi University of Industry (GPA 3.35/4.0)
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section section-wrap" id="about">
          <SectionHeader number="01" title="About me" />

          <div className="about-grid">
            <div className="about-lead-col">
              <p className="about-lead">
                I enjoy turning complex business rules into clean APIs, well-structured database schemas, and maintainable backend services.
              </p>

              <div className="stats-grid">
                <div className="stat-item">
                  <strong>3.35 / 4.0</strong>
                  <span>University GPA</span>
                </div>
                <div className="stat-item">
                  <strong>9.1 / 10</strong>
                  <span>Thesis Defense</span>
                </div>
                <div className="stat-item">
                  <strong>2nd Prize</strong>
                  <span>Scientific Research</span>
                </div>
              </div>
            </div>

            <div className="about-text-col">
              <p>
                Through my time at <strong>3NestInvest</strong> and my personal projects, I’ve worked across internal financial calculation tools, automated data pipelines, and microservices-based applications.
              </p>
              <p>
                I care about the practical details of backend engineering: preventing race conditions under concurrent requests, keeping database queries fast and predictable, and documenting APIs clearly so teams can move fast together.
              </p>
              <p>
                I’m currently looking for a full-time <strong>Backend Developer</strong> position where I can contribute to real-world products and keep learning from experienced engineers.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section section-wrap" id="experience">
          <SectionHeader number="02" title="Work experience" />

          <div className="experience-list">
            {experiences.map(exp => (
              <article className="exp-row" key={exp.role}>
                <div className="exp-left">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-company">
                    {exp.company} · {exp.location}
                  </span>
                </div>

                <div className="exp-right">
                  <h3>{exp.role}</h3>
                  <ul>
                    {exp.bullets.map(b => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {exp.stack.map(item => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section section-wrap" id="projects">
          <SectionHeader
            number="03"
            title="Selected projects"
            subtitle="A closer look at two systems I built from scratch, focusing on backend architecture, data flow, and reliability."
          />

          <div className="projects-list">
            {projects.map(project => (
              <article className="project-card" key={project.number}>
                <div className="project-info">
                  <div className="project-top-meta">
                    <span className="project-period">{project.period}</span>
                    <span className="project-badge">{project.badge}</span>
                  </div>

                  <div className="project-title-line">
                    <h3>{project.title}</h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="repo-btn"
                    >
                      <Github size={14} /> Source code <ArrowUpRight size={14} />
                    </a>
                  </div>

                  <p className="project-summary">{project.summary}</p>

                  <div className="project-highlights">
                    <h4>What I built</h4>
                    <ul>
                      {project.highlights.map(h => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="tags">
                    {project.stack.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <ProjectDiagram kind={project.visual} />
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="section section-wrap" id="skills">
          <SectionHeader
            number="04"
            title="Technical skills"
            subtitle="Languages, frameworks, databases, and tools I work with regularly."
          />

          <div className="skills-grid">
            {skills.map(group => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tags">
                  {group.items.map(item => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section section-wrap" id="education">
          <SectionHeader number="05" title="Education & honors" />

          <div className="edu-grid">
            <div className="edu-card">
              <GraduationCap size={20} className="edu-icon" />
              <span className="edu-date">Sep 2022 — Nov 2026</span>
              <h3>Bachelor of Information Technology</h3>
              <p className="edu-org">Hanoi University of Industry (HaUI)</p>
              <p className="edu-note">GPA: 3.35 / 4.0 · Graduation thesis defense: 9.1 / 10</p>
            </div>

            <div className="edu-card">
              <Award size={20} className="edu-icon" />
              <span className="edu-date">2025 — 2026</span>
              <h3>Second Prize — Student Scientific Research</h3>
              <p className="edu-org">University-level Research Competition</p>
              <p className="edu-note">
                Deep Reinforcement Learning for Energy Efficiency Enhancement in RSMA Networks
              </p>
            </div>

            <div className="edu-card">
              <BriefcaseBusiness size={20} className="edu-icon" />
              <span className="edu-date">Aug 2025</span>
              <h3>Samsung Innovation Campus</h3>
              <p className="edu-org">Program Participant</p>
              <p className="edu-note">Practical software development and data engineering coursework.</p>
            </div>
          </div>

          <div className="languages-row">
            <strong>Languages:</strong>
            <span>Vietnamese (Native)</span>
            <span className="sep">·</span>
            <span>English (Basic working proficiency)</span>
            <span className="sep">·</span>
            <span>Korean (TOPIK Level 2)</span>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section section-wrap" id="contact">
          <div className="contact-box">
            <div className="contact-copy">
              <span className="contact-eyebrow">Get in touch</span>
              <h2>Looking for a dedicated Backend Developer?</h2>
              <p>
                I’m available for full-time roles in Hanoi or remote. Feel free to reach out via email or check out my code on GitHub.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
                  <Mail size={15} /> Send me an email
                </a>
                <button type="button" className="btn btn-outline" onClick={copyEmail}>
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                  {copied ? 'Copied!' : EMAIL}
                </button>
              </div>
            </div>

            <div className="contact-links">
              <a href={`mailto:${EMAIL}`}>
                <Mail size={16} />
                <div>
                  <small>Email</small>
                  <strong>{EMAIL}</strong>
                </div>
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer">
                <Github size={16} />
                <div>
                  <small>GitHub</small>
                  <strong>github.com/Phuocsiucap</strong>
                </div>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <Linkedin size={16} />
                <div>
                  <small>LinkedIn</small>
                  <strong>Connect on LinkedIn</strong>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <span>© 2026 Nguyen Van Phuoc</span>
        <span>Backend Developer · Hanoi, Vietnam</span>
      </footer>
    </div>
  )
}

function ProjectDiagram({ kind }: { kind: 'ai' | 'cinema' }) {
  const [tab, setTab] = useState<'flow' | 'preview'>('flow')

  if (kind === 'ai') {
    return (
      <div className="diagram-card">
        <div className="diagram-bar">
          <span className="diagram-title">System overview</span>
          <div className="diagram-tabs">
            <button
              type="button"
              className={tab === 'flow' ? 'active' : ''}
              onClick={() => setTab('flow')}
            >
              Backend flow
            </button>
            <button
              type="button"
              className={tab === 'preview' ? 'active' : ''}
              onClick={() => setTab('preview')}
            >
              UI preview
            </button>
          </div>
        </div>

        {tab === 'flow' ? (
          <div className="flow-body">
            <div className="flow-step">
              <span className="step-num">1</span>
              <div>
                <strong>Data Ingestion &amp; Vector Deduplication</strong>
                <p>Crawler collects social posts → normalized &amp; clustered via PostgreSQL pgvector.</p>
              </div>
            </div>
            <div className="flow-connector" />
            <div className="flow-step">
              <span className="step-num">2</span>
              <div>
                <strong>FastAPI Core &amp; Apache Kafka Queue</strong>
                <p>Decouples API requests from heavy video synthesis &amp; publishing jobs.</p>
              </div>
            </div>
            <div className="flow-connector" />
            <div className="flow-step">
              <span className="step-num">3</span>
              <div>
                <strong>AI Video Pipeline (LLM + TTS + OCR + Remotion)</strong>
                <p>Generates script, voiceover, subtitles, and renders MP4 server-side.</p>
              </div>
            </div>
            <div className="flow-connector" />
            <div className="flow-step">
              <span className="step-num">4</span>
              <div>
                <strong>Scheduled OAuth2 Distribution</strong>
                <p>Publishes automatically to TikTok, YouTube &amp; TikTok Shop APIs.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mini-ui-wrap">
            <div className="mini-window">
              <div className="mini-top">
                <span className="dots"><i /><i /><i /></span>
                <span>Content Studio</span>
              </div>
              <div className="mini-studio">
                <div className="mini-row">
                  <div>
                    <small>Workspace</small>
                    <strong>Scheduled Videos</strong>
                  </div>
                  <span className="mini-btn">+ New job</span>
                </div>
                <div className="mini-metrics">
                  <div>
                    <small>Published</small>
                    <strong>24 posts</strong>
                  </div>
                  <div>
                    <small>Clustered topics</small>
                    <strong>142 items</strong>
                  </div>
                </div>
                <div className="mini-queue">
                  <span className="q-dot" />
                  <div>
                    <strong>3 videos rendered via Remotion</strong>
                    <small>Ready for TikTok &amp; YouTube OAuth2 publish</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="diagram-card">
      <div className="diagram-bar">
        <span className="diagram-title">System overview</span>
        <div className="diagram-tabs">
          <button
            type="button"
            className={tab === 'flow' ? 'active' : ''}
            onClick={() => setTab('flow')}
          >
            Backend flow
          </button>
          <button
            type="button"
            className={tab === 'preview' ? 'active' : ''}
            onClick={() => setTab('preview')}
          >
            UI preview
          </button>
        </div>
      </div>

      {tab === 'flow' ? (
        <div className="flow-body">
          <div className="flow-step">
            <span className="step-num">1</span>
            <div>
              <strong>API Gateway &amp; Microservices</strong>
              <p>Routes requests across Auth, User, Cinema Catalog, and Reservation services.</p>
            </div>
          </div>
          <div className="flow-connector" />
          <div className="flow-step">
            <span className="step-num">2</span>
            <div>
              <strong>Redis TTL Seat Locking</strong>
              <p>Holds selected seats with atomic TTL locks so concurrent users cannot double-book.</p>
            </div>
          </div>
          <div className="flow-connector" />
          <div className="flow-step">
            <span className="step-num">3</span>
            <div>
              <strong>Live Socket.IO Broadcast</strong>
              <p>Pushes real-time seat status updates to all connected browsers in the same showtime.</p>
            </div>
          </div>
          <div className="flow-connector" />
          <div className="flow-step">
            <span className="step-num">4</span>
            <div>
              <strong>PostgreSQL ACID &amp; QR Ticketing</strong>
              <p>Commits payment transaction safely (with rollback on timeout) and issues QR ticket.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mini-ui-wrap">
          <div className="mini-window dark-mini">
            <div className="mini-top">
              <span className="dots"><i /><i /><i /></span>
              <span>Screen 04 · Live Seat Map</span>
            </div>
            <div className="mini-cinema">
              <div className="screen-bar">SCREEN</div>
              <div className="seat-grid">
                {Array.from({ length: 28 }, (_, i) => (
                  <i
                    key={i}
                    className={
                      i === 9 || i === 10 || i === 17
                        ? 'seat selected'
                        : i === 3 || i === 4 || i === 11
                          ? 'seat taken'
                          : 'seat'
                    }
                  />
                ))}
              </div>
              <div className="seat-legend">
                <span><i className="l-free" /> Available</span>
                <span><i className="l-sel" /> Held (Redis TTL)</span>
                <span><i className="l-sold" /> Booked</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="section-header">
      <div className="section-title-row">
        <span className="section-num">{number}</span>
        <h2>{title}</h2>
      </div>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}

export default App
