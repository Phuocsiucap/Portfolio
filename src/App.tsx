import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  Code2,
  Copy,
  Cpu,
  Database,
  ExternalLink,
  GitBranch,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Menu,
  Moon,
   Network,
  Server,
  ShieldCheck,
  Sparkles,
  Sun,
  Terminal,
  Workflow,
  X,
  Zap,
} from 'lucide-react'
import { useState } from 'react'

const GITHUB = 'https://github.com/Phuocsiucap'
const EMAIL = 'Nguyenvanphuoc09112004@gmail.com'

const engineeringPillars = [
  {
    icon: Server,
    code: 'SYS_01',
    title: 'API Engineering & Microservices',
    desc: 'Designing clean RESTful contracts, API Gateways, and modular services with FastAPI and NestJS, complete with RBAC, validation, and OpenAPI/Swagger documentation.',
  },
  {
    icon: Workflow,
    code: 'SYS_02',
    title: 'Event-Driven & Async Pipelines',
    desc: 'Decoupling heavy media rendering, crawling, and multi-platform publishing workloads using Apache Kafka message queues and asynchronous worker pools.',
  },
  {
    icon: Database,
    code: 'SYS_03',
    title: 'Data Integrity & Concurrency Control',
    desc: 'Structuring normalized PostgreSQL schemas (Prisma/TypeORM), Redis TTL distributed locks for zero double-booking, and pgvector semantic indexing.',
  },
  {
    icon: Cpu,
    code: 'SYS_04',
    title: 'AI Orchestration & Containerization',
    desc: 'Integrating LLM scripting, TTS, OCR, and Remotion video rendering into reproducible Docker & Docker Compose environments.',
  },
]

const skills = [
  {
    title: 'Languages & Core',
    subtitle: 'Type-safe & backend scripting',
    items: [
      { name: 'Python', level: 'Primary' },
      { name: 'TypeScript', level: 'Primary' },
      { name: 'JavaScript (ES6+)', level: 'Core' },
      { name: 'SQL', level: 'Core' },
      { name: 'Java', level: 'Working' },
    ],
  },
  {
    title: 'Backend Frameworks',
    subtitle: 'Service & API development',
    items: [
      { name: 'FastAPI', level: 'Primary' },
      { name: 'NestJS', level: 'Primary' },
      { name: 'Node.js / Express', level: 'Core' },
      { name: 'Django', level: 'Working' },
      { name: 'RESTful APIs', level: 'Primary' },
      { name: 'Swagger / OpenAPI', level: 'Core' },
    ],
  },
  {
    title: 'Databases & Caching',
    subtitle: 'Relational, vector & in-memory',
    items: [
      { name: 'PostgreSQL', level: 'Primary' },
      { name: 'pgvector', level: 'Core' },
      { name: 'Redis (TTL / PubSub)', level: 'Primary' },
      { name: 'MongoDB', level: 'Core' },
      { name: 'MySQL', level: 'Working' },
      { name: 'Prisma / TypeORM', level: 'Primary' },
    ],
  },
  {
    title: 'Distributed & DevOps',
    subtitle: 'Messaging, real-time & infra',
    items: [
      { name: 'Microservices', level: 'Core' },
      { name: 'Apache Kafka', level: 'Core' },
      { name: 'Socket.IO / WebSockets', level: 'Core' },
      { name: 'Docker & Compose', level: 'Primary' },
      { name: 'OAuth2 / RBAC / JWT', level: 'Core' },
      { name: 'Git / Linux CLI', level: 'Primary' },
    ],
  },
]

const projects = [
  {
    number: '01',
    code: 'ARCH-AI-PIPELINE',
    type: 'GRADUATION THESIS · JUL 2026 — PRESENT',
    status: '9.1 / 10 Defense Score',
    title: 'AI-Powered Social Content Platform',
    summary:
      'An event-driven backend platform automating the end-to-end social content lifecycle — from multi-source crawling and vector deduplication to AI video synthesis and scheduled OAuth2 publishing.',
    role: 'Solo Full-Stack & System Architect',
    stack: ['FastAPI', 'Apache Kafka', 'PostgreSQL + pgvector', 'MongoDB', 'Docker', 'OpenAI API', 'Remotion'],
    metrics: [
      { label: 'Architecture', value: 'Event-Driven Kafka' },
      { label: 'Vector Search', value: 'pgvector Cosine' },
      { label: 'Integrations', value: 'TikTok / YT OAuth2' },
    ],
    highlights: [
      'Designed event-driven microservices with Apache Kafka to decouple heavy media rendering and asynchronous publishing workloads.',
      'Built data crawling and semantic-processing pipelines using PostgreSQL pgvector for content deduplication, normalization, and topic clustering.',
      'Orchestrated automated video generation combining LLM scripting, TTS synthesis, subtitle/OCR extraction, and server-side rendering via Remotion.',
      'Integrated TikTok, YouTube, and TikTok Shop APIs using OAuth2 token lifecycle management for reliable scheduled multi-channel distribution.',
    ],
    link: `${GITHUB}/DATN`,
    linkLabel: 'Inspect Source Repository',
    icon: Workflow,
    visual: 'ai' as const,
  },
  {
    number: '02',
    code: 'ARCH-TICKET-ACID',
    type: 'DISTRIBUTED SYSTEMS PROJECT · NOV 2025 — JAN 2026',
    status: 'Zero Race-Condition Design',
    title: 'High-Concurrency Movie Ticket Booking Platform',
    summary:
      'A microservices-based cinema reservation engine engineered for concurrent seat booking, distributed lock management, real-time state synchronization, payment rollback, and QR ticketing.',
    role: 'Solo Backend & Full-Stack Developer',
    stack: ['FastAPI', 'Node.js / Express', 'PostgreSQL', 'Redis TTL Lock', 'Socket.IO', 'Docker', 'API Gateway'],
    metrics: [
      { label: 'Concurrency', value: 'Redis Distributed Lock' },
      { label: 'Consistency', value: 'PostgreSQL ACID' },
      { label: 'Real-time Sync', value: 'Socket.IO Broadcast' },
    ],
    highlights: [
      'Decomposed backend domain into Auth, User, Cinema Catalog, and Reservation microservices behind a unified API Gateway.',
      'Implemented Redis TTL-based seat locking and PostgreSQL transactional rollbacks to eliminate double-bookings under concurrent load.',
      'Engineered real-time seat state broadcasting via Socket.IO to synchronize live availability across connected clients instantly.',
      'Built cryptographic QR-code ticket generation, verification endpoints, and Cloudinary media delivery pipelines.',
    ],
    link: `${GITHUB}/cinema`,
    linkLabel: 'Inspect Source Repository',
    icon: Database,
    visual: 'cinema' as const,
  },
]

const experiences = [
  {
    company: '3NestInvest',
    location: 'Hanoi, Vietnam',
    period: 'JAN 2026 — OCT 2026',
    duration: '10 mos',
    role: 'Software Developer',
    type: 'Full-time / Core Engineering',
    stack: ['PostgreSQL', 'Prisma ORM', 'TypeScript', 'React', 'Vite', 'Tailwind CSS'],
    bullets: [
      'Engineered internal data collection and automated processing pipelines, significantly reducing manual operational overhead.',
      'Architected relational PostgreSQL schemas and tuned complex analytical queries with Prisma ORM to boost throughput and reliability.',
      'Built responsive management dashboards and internal interfaces for the MICE platform using React, TypeScript, Vite, and Tailwind CSS.',
    ],
  },
  {
    company: '3NestInvest',
    location: 'Hanoi, Vietnam',
    period: 'JAN 2026 — MAY 2026',
    duration: '5 mos',
    role: 'Backend Developer Intern',
    type: 'Backend & Financial Systems',
    stack: ['FastAPI', 'NestJS', 'PostgreSQL', 'TypeORM', 'RBAC', 'Swagger / OpenAPI'],
    bullets: [
      'Developed production RESTful APIs using FastAPI and NestJS for internal financial suites: Pricebook, SaleForecast, and PricingCalculator.',
      'Implemented multi-year TCO (Total Cost of Ownership) and margin calculation engines, point-in-time data snapshots, and immutable contract audit logs.',
      'Designed normalized PostgreSQL schemas with TypeORM and enforced role-based access control (RBAC) alongside comprehensive Swagger documentation.',
    ],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [heroTab, setHeroTab] = useState<'terminal' | 'portrait'>('terminal')
  const [copied, setCopied] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <div className={`site-shell theme-${theme}`}>
      <div className="bg-grid-pattern" aria-hidden="true" />

      <header className="topbar-wrapper">
        <div className="topbar section-wrap">
          <a className="wordmark" href="#home" onClick={closeMenu}>
            <span className="wordmark-bracket">&lt;</span>
            NVP
            <span className="wordmark-slash">/&gt;</span>
            <small className="wordmark-tag">backend.eng</small>
          </a>

          <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
            {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ))}
            <div className="nav-actions">
              <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
              </button>
              <a className="nav-cta" href={GITHUB} target="_blank" rel="noreferrer">
                <Github size={14} /> GitHub <ArrowUpRight size={13} />
              </a>
            </div>
          </nav>

          <div className="mobile-controls">
            <button
              type="button"
              className="theme-toggle mobile-theme-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              type="button"
              className="mobile-menu"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="status-banner">
              <span className="status-dot" />
              <span className="status-text">SYSTEM ONLINE · OPEN FOR BACKEND ENGINEER ROLES</span>
            </div>

            <div className="hero-path">
              <Terminal size={13} />
              <span>~/hanoi-vn/nguyen-van-phuoc</span>
              <span className="path-badge">B.S. IT · GPA 3.35</span>
            </div>

            <h1>
              Nguyen Van <span className="accent-gradient">Phuoc.</span>
            </h1>

            <p className="hero-role">
              <Server size={16} className="role-icon" />
              Backend Software Engineer <span>·</span> Distributed Systems &amp; API Architecture
            </p>

            <p className="hero-intro">
              I architect and build resilient backend services, event-driven pipelines, and high-concurrency relational data layers. Focused on{' '}
              <strong>FastAPI, NestJS, PostgreSQL (pgvector), Redis, and Apache Kafka</strong> to turn complex domain rules into clean, production-grade APIs.
            </p>

            <div className="hero-QuickStack">
              {['Python', 'TypeScript', 'FastAPI', 'NestJS', 'PostgreSQL', 'Redis', 'Apache Kafka', 'Docker'].map(tech => (
                <span key={tech} className="quick-chip">
                  {tech}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                <Layers size={16} /> Inspect Systems &amp; Projects <ArrowUpRight size={16} />
              </a>
              <button type="button" className="button button-secondary" onClick={handleCopyEmail}>
                {copied ? <Check size={15} className="copied-icon" /> : <Copy size={15} />}
                {copied ? 'Email Copied!' : 'Copy Email'}
              </button>
            </div>

            <div className="hero-socials">
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

          {/* RIGHT SIDE: INTERACTIVE ENGINEERING CONSOLE + PROFILE */}
          <div className="hero-aside">
            <div className="console-card">
              <div className="console-topbar">
                <div className="window-dots">
                  <i className="dot-red" />
                  <i className="dot-amber" />
                  <i className="dot-green" />
                </div>
                <div className="console-tabs" role="tablist">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={heroTab === 'terminal'}
                    className={heroTab === 'terminal' ? 'console-tab active' : 'console-tab'}
                    onClick={() => setHeroTab('terminal')}
                  >
                    <Code2 size={12} /> engineer_spec.json
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={heroTab === 'portrait'}
                    className={heroTab === 'portrait' ? 'console-tab active' : 'console-tab'}
                    onClick={() => setHeroTab('portrait')}
                  >
                    <Sparkles size={12} /> profile_card.view
                  </button>
                </div>
                <span className="console-status">200 OK</span>
              </div>

              {/* Developer Mini Header inside Card */}
              <div className="engineer-id-bar">
                <img src="/profile.png" alt="Nguyen Van Phuoc" className="engineer-avatar" />
                <div className="engineer-id-meta">
                  <div className="engineer-id-name">
                    <strong>Nguyen Van Phuoc</strong>
                    <span className="verified-badge">
                      <ShieldCheck size={12} /> Verified Graduate
                    </span>
                  </div>
                  <p>Backend Engineer · 3NestInvest Alumni · HaUI IT</p>
                </div>
                <button
                  type="button"
                  className="view-switch-pill"
                  onClick={() => setHeroTab(heroTab === 'terminal' ? 'portrait' : 'terminal')}
                >
                  {heroTab === 'terminal' ? 'View Photo' : 'View Spec'}
                </button>
              </div>

              {heroTab === 'terminal' ? (
                <div className="console-body">
                  <div className="endpoint-bar">
                    <span className="http-method">GET</span>
                    <code>/api/v1/engineers/nguyen-van-phuoc/capabilities</code>
                    <span className="latency-tag">14ms</span>
                  </div>

                  <pre className="json-View">
                    <code>
                      <span className="c-brace">{'{'}</span>
                      {'\n  '}
                      <span className="c-key">"role"</span>: <span className="c-str">"Backend Software Engineer"</span>,
                      {'\n  '}
                      <span className="c-key">"core_runtime"</span>: [<span className="c-str">"Python/FastAPI"</span>, <span className="c-str">"TS/NestJS"</span>],
                      {'\n  '}
                      <span className="c-key">"data_layer"</span>: <span className="c-brace">{'{'}</span>
                      {'\n    '}
                      <span className="c-key">"relational"</span>: <span className="c-str">"PostgreSQL (ACID, Prisma, TypeORM)"</span>,
                      {'\n    '}
                      <span className="c-key">"vector_search"</span>: <span className="c-str">"pgvector (Semantic Clustering)"</span>,
                      {'\n    '}
                      <span className="c-key">"distributed_lock"</span>: <span className="c-str">"Redis TTL &amp; Pub/Sub"</span>
                      {'\n  '}
                      <span className="c-brace">{'}'}</span>,
                      {'\n  '}
                      <span className="c-key">"messaging"</span>: [<span className="c-str">"Apache Kafka"</span>, <span className="c-str">"Socket.IO"</span>],
                      {'\n  '}
                      <span className="c-key">"benchmarks"</span>: <span className="c-brace">{'{'}</span>
                      {'\n    '}
                      <span className="c-key">"gpa"</span>: <span className="c-num">3.35</span>, <span className="c-key">"thesis_defense"</span>: <span className="c-str">"9.1/10"</span>,
                      {'\n    '}
                      <span className="c-key">"research_award"</span>: <span className="c-str">"2nd Prize DRL-RSMA"</span>
                      {'\n  '}
                      <span className="c-brace">{'}'}</span>
                      {'\n'}
                      <span className="c-brace">{'}'}</span>
                    </code>
                  </pre>

                  <div className="telemetry-grid">
                    <div className="telemetry-item">
                      <small>ARCHITECTURE</small>
                      <strong>Microservices &amp; Event-Driven</strong>
                    </div>
                    <div className="telemetry-item">
                      <small>PRODUCTION EXP</small>
                      <strong>3NestInvest (Financial &amp; Data)</strong>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="portrait-body">
                  <div className="portrait-frame">
                    <img src="/profile.png" alt="Nguyen Van Phuoc" />
                    <div className="portrait-overlay">
                      <span className="overlay-tag">HANOI, VIETNAM</span>
                      <span className="overlay-tag">B.S. INFORMATION TECHNOLOGY</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="console-footer">
                <span className="note-indicator" />
                <p>
                  Focused on building backend systems that are <strong>clear, fault-tolerant, and scalable.</strong>
                </p>
              </div>
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            <ArrowDown size={14} /> SCROLL TO ARCHITECTURE OVERVIEW
          </a>
        </section>

        {/* 01 / ABOUT & ENGINEERING PILLARS */}
        <section className="section section-wrap" id="about">
          <SectionHeading index="01" tag="SYSTEM_PROFILE" title="Engineering Philosophy & Core Focus" />

          <div className="about-grid">
            <div className="about-left">
              <p className="about-lead">
                An IT graduate with production experience in <em>backend engineering</em>, relational database modeling, and distributed system design.
              </p>
              <div className="about-detail">
                <p>
                  My engineering journey spans internal financial calculation engines, automated data pipelines at <strong>3NestInvest</strong>, and end-to-end distributed platforms. I specialize in decomposing complex business workflows into well-bounded services with strict data integrity, observability, and predictable latency.
                </p>
                <p>
                  Whether preventing race conditions with Redis distributed locks or orchestrating asynchronous AI video pipelines over Apache Kafka, I prioritize clean architecture and maintainable codebases.
                </p>
              </div>

              <div className="stat-row">
                <div className="stat-box">
                  <strong>
                    3.35<span>/4.0</span>
                  </strong>
                  <small>UNIVERSITY GPA</small>
                </div>
                <div className="stat-box">
                  <strong>
                    9.1<span>/10</span>
                  </strong>
                  <small>THESIS DEFENSE</small>
                </div>
                <div className="stat-box">
                  <strong>2nd</strong>
                  <small>RESEARCH PRIZE</small>
                </div>
                <div className="stat-box">
                  <strong>10+</strong>
                  <small>MONTHS INDUSTRY EXP</small>
                </div>
              </div>
            </div>

            <div className="pillars-grid">
              {engineeringPillars.map(pillar => {
                const Icon = pillar.icon
                return (
                  <div className="pillar-card" key={pillar.code}>
                    <div className="pillar-top">
                      <span className="pillar-icon">
                        <Icon size={18} />
                      </span>
                      <span className="pillar-code">{pillar.code}</span>
                    </div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 02 / EXPERIENCE */}
        <section className="section section-wrap" id="experience">
          <SectionHeading index="02" tag="CAREER_LOG" title="Professional Experience" />

          <div className="timeline">
            {experiences.map((exp, i) => (
              <article className="timeline-item" key={exp.role}>
                <div className="timeline-meta">
                  <span className="timeline-date">{exp.period}</span>
                  <span className="timeline-duration">{exp.duration}</span>
                  <span className="timeline-type">{exp.type}</span>
                </div>

                <div className="timeline-content">
                  <div className="timeline-heading">
                    <div>
                      <h3>{exp.role}</h3>
                      <p className="timeline-company">
                        <strong>{exp.company}</strong> <span>·</span> {exp.location}
                      </p>
                    </div>
                    <span className="timeline-index">EXP_0{i + 1}</span>
                  </div>

                  <ul className="timeline-bullets">
                    {exp.bullets.map(b => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  <div className="tag-list">
                    {exp.stack.map(t => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 03 / SELECTED PROJECTS */}
        <section className="section projects-section" id="projects">
          <div className="section-wrap">
            <SectionHeading index="03" tag="SYSTEM_ARCHITECTURE" title="Selected Backend & Full-Stack Systems" />
            <p className="section-intro">
              Deep-dive into production-style architectures I’ve designed and built. Switch between the <strong>Architecture Topology</strong> and <strong>Interactive UI Preview</strong> on each system card.
            </p>

            <div className="project-list">
              {projects.map(project => {
                const Icon = project.icon
                return (
                  <article className="project-card" key={project.number}>
                    <ProjectPreview kind={project.visual} number={project.number} code={project.code} />

                    <div className="project-main">
                      <div className="project-header-meta">
                        <span className="project-meta">{project.type}</span>
                        <span className="project-badge">{project.status}</span>
                      </div>

                      <div className="project-title-row">
                        <h3>{project.title}</h3>
                        <a
                          className="round-link"
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={project.linkLabel}
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      </div>

                      <p className="project-summary">{project.summary}</p>

                      <div className="project-metrics-bar">
                        {project.metrics.map(m => (
                          <div key={m.label} className="proj-metric">
                            <small>{m.label}</small>
                            <strong>{m.value}</strong>
                          </div>
                        ))}
                      </div>

                      <div className="project-role">
                        <Icon size={15} /> {project.role}
                      </div>

                      <div className="project-highlights">
                        <h4>ARCHITECTURE &amp; ENGINEERING CONTRIBUTIONS</h4>
                        <ul>
                          {project.highlights.map(h => (
                            <li key={h}>{h}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="project-footer-row">
                        <div className="tag-list">
                          {project.stack.map(tag => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                        <a className="repo-link" href={project.link} target="_blank" rel="noreferrer">
                          <Github size={14} /> {project.linkLabel} <ExternalLink size={13} />
                        </a>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* 04 / TECHNICAL TOOLKIT */}
        <section className="section section-wrap" id="skills">
          <SectionHeading index="04" tag="TECH_STACK" title="Technical Toolkit & Infrastructure" />
          <p className="section-intro">
            Core languages, frameworks, databases, and distributed systems tooling used across commercial and research projects.
          </p>

          <div className="skills-grid">
            {skills.map((group, i) => (
              <div className="skill-card" key={group.title}>
                <div className="skill-card-top">
                  <span className="skill-index">STACK_0{i + 1}</span>
                  <Code2 size={15} className="skill-icon" />
                </div>
                <h3>{group.title}</h3>
                <p className="skill-subtitle">{group.subtitle}</p>
                <div className="skill-items">
                  {group.items.map(item => (
                    <div className="skill-pill" key={item.name}>
                      <span>{item.name}</span>
                      <small className={`level-${item.level.toLowerCase()}`}>{item.level}</small>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 05 / EDUCATION & RECOGNITION */}
        <section className="section section-wrap education-section" id="education">
          <SectionHeading index="05" tag="CREDENTIALS" title="Education, Research & Honors" />

          <div className="education-grid">
            <div className="education-item">
              <div className="edu-icon-box">
                <GraduationCap size={20} />
              </div>
              <div>
                <span className="project-meta">SEP 2022 — NOV 2026</span>
                <h3>B.S. in Information Technology</h3>
                <p>Hanoi University of Industry (HaUI)</p>
                <div className="edu-badges">
                  <span>GPA: 3.35 / 4.0</span>
                  <span>Thesis Defense: 9.1 / 10</span>
                </div>
              </div>
            </div>

            <div className="education-item">
              <div className="edu-icon-box">
                <Award size={20} />
              </div>
              <div>
                <span className="project-meta">2025 — 2026 · SCIENTIFIC RESEARCH</span>
                <h3>Second Prize — Student Research</h3>
                <p>University-level Scientific Research Competition</p>
                <small>
                  Topic: Deep Reinforcement Learning for Energy Efficiency Enhancement in RSMA Networks.
                </small>
              </div>
            </div>

            <div className="education-item">
              <div className="edu-icon-box">
                <BriefcaseBusiness size={20} />
              </div>
              <div>
                <span className="project-meta">AUG 2025 · INTENSIVE PROGRAM</span>
                <h3>Samsung Innovation Campus</h3>
                <p>Selected Program Participant</p>
                <small>Completed intensive technical training in software engineering and data systems.</small>
              </div>
            </div>
          </div>

          <div className="language-bar">
            <span className="lang-label">HUMAN LANGUAGES &amp; CERTIFICATIONS</span>
            <div className="lang-items">
              <span className="lang-chip">
                <strong>Vietnamese</strong> · Native
              </span>
              <span className="lang-chip">
                <strong>English</strong> · Technical Reading &amp; Communication
              </span>
              <span className="lang-chip">
                <strong>Korean</strong> · TOPIK Level 2 Certified
              </span>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="contact-grid">
              <div>
                <div className="eyebrow">
                  <span className="status-dot" /> READY FOR NEW ENGINEERING CHALLENGES
                </div>
                <h2>
                  Let’s engineer <br />
                  <em>reliable systems together.</em>
                </h2>
                <p>
                  I’m actively seeking full-time <strong>Backend Developer / Software Engineer</strong> roles where I can contribute to API architecture, data pipelines, and scalable products.
                </p>
                <div className="contact-actions">
                  <a className="button button-primary" href={`mailto:${EMAIL}`}>
                    <Mail size={16} /> Send an Email <ArrowUpRight size={16} />
                  </a>
                  <button type="button" className="button button-secondary" onClick={handleCopyEmail}>
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                    {copied ? 'Copied to Clipboard!' : EMAIL}
                  </button>
                </div>
              </div>

              <div className="contact-terminal">
                <div className="preview-top">
                  <span className="window-dots">
                    <i className="dot-red" />
                    <i className="dot-amber" />
                    <i className="dot-green" />
                  </span>
                  <span>QUICK_CONNECT.SH</span>
                  <span>SSH / HTTPS</span>
                </div>
                <div className="contact-terminal-body">
                  <div className="term-line">
                    <span className="term-prompt">$</span> curl -X POST https://phuoc.dev/contact
                  </div>
                  <div className="term-output">
                    <div>
                      <span>STATUS:</span> <strong>Available Immediately (Full-time)</strong>
                    </div>
                    <div>
                      <span>LOCATION:</span> <strong>Hanoi, Vietnam (On-site / Hybrid / Remote)</strong>
                    </div>
                    <div>
                      <span>PRIMARY STACK:</span> <strong>Python (FastAPI), TS (NestJS), PostgreSQL, Redis, Kafka</strong>
                    </div>
                  </div>
                  <div className="contact-links-list">
                    <a href={`mailto:${EMAIL}`}>
                      <Mail size={15} /> {EMAIL}
                    </a>
                    <a href={GITHUB} target="_blank" rel="noreferrer">
                      <Github size={15} /> github.com/Phuocsiucap
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                      <Linkedin size={15} /> LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="wordmark" href="#home">
          <span className="wordmark-bracket">&lt;</span>NVP<span className="wordmark-slash">/&gt;</span>
        </a>
        <span>ENGINEERED &amp; DESIGNED BY NGUYEN VAN PHUOC · BACKEND PORTFOLIO</span>
        <span>© 2026 ALL SYSTEMS OPERATIONAL</span>
      </footer>
    </div>
  )
}

function ProjectPreview({
  kind,
  number,
  code,
}: {
  kind: 'ai' | 'cinema'
  number: string
  code: string
}) {
  const [mode, setMode] = useState<'arch' | 'ui'>('arch')

  if (kind === 'ai') {
    return (
      <div className="project-visual visual-ai">
        <div className="visual-header">
          <span className="visual-code">
            <GitBranch size={12} /> {code}
          </span>
          <div className="visual-switch">
            <button
              type="button"
              className={mode === 'arch' ? 'active' : ''}
              onClick={() => setMode('arch')}
            >
              Architecture
            </button>
            <button
              type="button"
              className={mode === 'ui' ? 'active' : ''}
              onClick={() => setMode('ui')}
            >
              Studio UI
            </button>
          </div>
        </div>

        {mode === 'arch' ? (
          <div className="arch-diagram">
            <div className="arch-tier">
              <div className="arch-node">
                <small>INGESTION &amp; VECTOR DB</small>
                <strong>Crawler + pgvector</strong>
                <span>Cosine Deduplication &amp; Clustering</span>
              </div>
              <div className="arch-arrow">→</div>
              <div className="arch-node highlight-node">
                <small>API &amp; ORCHESTRATOR</small>
                <strong>FastAPI Core</strong>
                <span>REST + Task Dispatch</span>
              </div>
            </div>

            <div className="arch-bus">
              <Zap size={12} />
              <span>APACHE KAFKA EVENT STREAM (media.render · social.publish)</span>
            </div>

            <div className="arch-tier">
              <div className="arch-node">
                <small>AI MEDIA WORKER</small>
                <strong>LLM + TTS + OCR + Remotion</strong>
                <span>Async Video Rendering Pipeline</span>
              </div>
              <div className="arch-arrow">→</div>
              <div className="arch-node">
                <small>DISTRIBUTION</small>
                <strong>OAuth2 Publisher</strong>
                <span>TikTok · YouTube · TikTok Shop</span>
              </div>
            </div>

            <div className="arch-footer">
              <span>STORAGE: PostgreSQL + MongoDB</span>
              <span>RUNTIME: Docker Compose</span>
            </div>
          </div>
        ) : (
          <div className="preview-window">
            <div className="preview-top">
              <span className="window-dots">
                <i className="dot-red" />
                <i className="dot-amber" />
                <i className="dot-green" />
              </span>
              <span>AI CONTENT STUDIO · DASHBOARD</span>
              <span className="preview-count">{number} / 02</span>
            </div>
            <div className="studio-layout">
              <div className="studio-rail">
                <b>✳</b>
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="studio-content">
                <div className="preview-heading">
                  <span>
                    <small>KAFKA PIPELINE / ACTIVE</small>
                    <strong>Content Automation Hub</strong>
                  </span>
                  <b>+ Render Job</b>
                </div>
                <div className="studio-stats">
                  <span>
                    <i>Rendered Videos</i>
                    <b>142</b>
                    <em>99.2% Success</em>
                  </span>
                  <span>
                    <i>Vector Dedup</i>
                    <b>8.6k</b>
                    <em>pgvector</em>
                  </span>
                </div>
                <div className="studio-chart">
                  <div className="chart-label">
                    Worker Throughput <small>7-DAY TELEMETRY</small>
                  </div>
                  <div className="chart-bars">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div className="studio-post">
                  <span className="post-thumb">✦</span>
                  <span>
                    <small>OAUTH2 SCHEDULER</small>
                    <b>3 multi-channel posts queued</b>
                  </span>
                  <i className="post-status" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="project-visual visual-cinema">
      <div className="visual-header">
        <span className="visual-code">
          <Network size={12} /> {code}
        </span>
        <div className="visual-switch">
          <button
            type="button"
            className={mode === 'arch' ? 'active' : ''}
            onClick={() => setMode('arch')}
          >
            Architecture
          </button>
          <button
            type="button"
            className={mode === 'ui' ? 'active' : ''}
            onClick={() => setMode('ui')}
          >
            Booking UI
          </button>
        </div>
      </div>

      {mode === 'arch' ? (
        <div className="arch-diagram">
          <div className="arch-tier">
            <div className="arch-node">
              <small>EDGE &amp; REAL-TIME</small>
              <strong>API Gateway + Socket.IO</strong>
              <span>JWT Auth &amp; Live Seat Broadcast</span>
            </div>
            <div className="arch-arrow">→</div>
            <div className="arch-node highlight-node">
              <small>CORE MICROSERVICES</small>
              <strong>Reservation &amp; Catalog</strong>
              <span>FastAPI + Node.js / Express</span>
            </div>
          </div>

          <div className="arch-bus">
            <Lock size={12} />
            <span>CONCURRENCY GUARD: REDIS TTL SEAT LOCK (SETNX + EXPIRE)</span>
          </div>

          <div className="arch-tier">
            <div className="arch-node">
              <small>TRANSACTIONAL DB</small>
              <strong>PostgreSQL ACID</strong>
              <span>Payment Rollback &amp; Ledger</span>
            </div>
            <div className="arch-arrow">→</div>
            <div className="arch-node">
              <small>FULFILLMENT</small>
              <strong>QR Ticket Engine</strong>
              <span>Cryptographic Verify + Cloudinary</span>
            </div>
          </div>

          <div className="arch-footer">
            <span>ISOLATION: Zero Double-Booking</span>
            <span>SYNC: &lt;50ms WebSocket</span>
          </div>
        </div>
      ) : (
        <div className="preview-window cinema-window">
          <div className="preview-top">
            <span className="window-dots">
              <i className="dot-red" />
              <i className="dot-amber" />
              <i className="dot-green" />
            </span>
            <span>LIVE SEAT LOCK · SOCKET.IO</span>
            <span className="preview-count">{number} / 02</span>
          </div>
          <div className="cinema-content">
            <div className="cinema-copy">
              <small>REDIS TTL LOCK · 04:59 REMAINING</small>
              <strong>
                Real-time Seat
                <br />
                Concurrency Matrix
              </strong>
              <span>Screen 04 · ACID Transaction Guard</span>
            </div>
            <div className="cinema-screen">IMAX LASER SCREEN</div>
            <div className="seat-grid">
              {Array.from({ length: 35 }, (_, i) => (
                <i
                  className={
                    i === 10 || i === 17 || i === 18 || i === 23
                      ? 'seat selected'
                      : i === 9 || i === 11 || i === 16
                        ? 'seat taken'
                        : 'seat'
                  }
                  key={i}
                />
              ))}
            </div>
            <div className="seat-legend">
              <span>
                <i /> Free
              </span>
              <span>
                <i className="legend-selected" /> Redis Locked
              </span>
              <span>
                <i className="legend-taken" /> Sold
              </span>
              <b>4 seats · $36</b>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function SectionHeading({
  index,
  tag,
  title,
}: {
  index: string
  tag: string
  title: string
}) {
  return (
    <div className="section-heading">
      <div className="section-heading-top">
        <span className="section-idx">{index} //</span>
        <span className="section-tag">{tag}</span>
      </div>
      <div className="section-heading-main">
        <h2>{title}</h2>
        <div className="section-rule" />
      </div>
    </div>
  )
}

export default App
