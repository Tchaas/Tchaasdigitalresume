import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Navigate, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { ArrowRight, ExternalLink, FileText, Linkedin, Play } from "lucide-react";

import profileImg from "./assets/profile-headshot.webp";
import { SkillTag } from "./components/SkillTag";
import { StatusBadge } from "./components/StatusBadge";
import { FrameworkStack } from "./components/FrameworkStack";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { EducationPage } from "./components/EducationPage";
import { WorkHistoryPage } from "./components/WorkHistoryPage";
import { ContactPage } from "./components/ContactPage";
import { ProfessionalDevelopmentPage } from "./components/ProfessionalDevelopmentPage";
import { ResearchPage } from "./components/ResearchPage";

/* ============================================================
   DATA
   ============================================================ */

const COMPETENCIES = [
  {
    id: "01",
    title: "Business & data architecture",
    body: "Building capability models, process maps, and scalable data architecture across 15+ data sources. Translating enterprise goals into executable solution concepts and bridging FedEx Express and Ground systems.",
    tags: ["Solution design", "Data architecture", "Process mapping"],
  },
  {
    id: "02",
    title: "Agile product ownership",
    body: "Managing demand across five Agile Release Trains and leading backend teams to deliver enterprise-scale APIs. GAP analysis, user story development, and roadmaps aligned to business strategy.",
    tags: ["Roadmapping", "Agile / SAFe", "API delivery"],
  },
  {
    id: "03",
    title: "AI automation & discovery",
    body: "Building AI agents to automate demand intake and business architecture analysis, reducing manual analysis by 50%. Structuring portfolio data to generate lean business cases and problem statements for faster decisions.",
    tags: ["AI agents", "Lean business cases", "Requirements"],
  },
];

const RESEARCH_TEASERS = [
  {
    eyebrow: "Framework paper",
    title: "AI-Augmented Business Architecture",
    body: "A five-layer framework connecting executive strategy to confirmed financial value, anchored in the FedEx DRIVE, Walmart, and Amazon transformations.",
    pdf: "/papers/AI-Augmented-Business-Architecture.pdf",
    appUrl: "https://tchaas.github.io/strategic-lifecycle-ai-framework/#/",
    hasVideo: false,
  },
  {
    eyebrow: "CS 6795 · Literature review",
    title: "Schema-Driven Scaffolds in OOP for Neurodivergent Learners",
    body: "A systematic review of fifteen sources on how visual, schema-based supports change comprehension, implementation, and debugging for learners with ADHD and autism.",
    pdf: "/papers/Schema-Driven-Scaffolds-OOP-Neurodivergent-Learners.pdf",
    hasVideo: true,
  },
  {
    eyebrow: "HCI · Individual project",
    title: "Trucking Dispatching System Price Transparency Tool",
    body: "An HCI process paper documenting discovery, user interviews, and heuristic evaluation for a freight pricing transparency concept serving shippers and truckers.",
    pdf: "/papers/HCI-Individual-Project-Final.pdf",
    hasVideo: false,
  },
];

const SKILLS = [
  // Product & delivery
  "Product Management",
  "Product Road Mapping",
  "Agile Methodology",
  "GAP Analysis",
  "Requirements Management",
  "Use Case Definition",
  "User Acceptance Testing",
  "Enterprise Projects",
  "Cross Functional Features",
  "Project Management",
  "Risk Management",
  "Facilitation",
  // Architecture & analysis
  "Business Architecture",
  "Capability Modeling",
  "Data Architecture",
  "AI Agent Automation",
  "Solution Design",
  "SAFe 6",
  "Business Process Identification",
  "API Development",
  "Data Mining",
  "Forecasting",
  "Technical Reports",
  "Networking",
  // Research & design
  "User Interviews",
  "User Experience",
  "User Interface",
  // Tooling
  "SQL",
  "Jira",
  "Confluence",
  "Splunk",
  "Lucidchart",
  "Nightwatch.js",
  "Sauce Labs",
  "Google Cloud",
  "GitHub Copilot",
  "JavaScript",
  "CockroachDB",
  "Postman",
  "Fivetran",
  "OKTA",
  "Cypress",
];

const SKILL_EXPERIENCES: Record<string, string[]> = {
  // --- Product & delivery ---
  "Product Management": [
    "FedEx — Business Architect",
    "FedEx — Senior Product Owner",
    "FedEx — Product Owner",
    "Kohl's — Product Manager, Payments",
    "Bytonomy Tech — Product features and lead developer coordination",
  ],
  "Product Road Mapping": [
    "FedEx — Built roadmaps with the Product Manager aligned to business direction",
  ],
  "Agile Methodology": [
    "FedEx — Demand management across 5 Agile Release Trains",
    "FIS — Process improvement targeting a 60% reduction in release delays",
  ],
  "GAP Analysis": [
    "FedEx — Discovery for new features and process mapping into digital solutions",
  ],
  "Requirements Management": [
    "FedEx — Cross-functional requirements for volume, routing, and service integration",
    "FedEx — User stories from stakeholder business requirements",
  ],
  "Use Case Definition": ["FedEx — Feature definition with architects and business partners"],
  "User Acceptance Testing": ["FIS — Release validation across six applications"],
  "Enterprise Projects": [
    "FedEx — Solutions bridging FedEx Express and FedEx Ground systems",
    "FIS — 15 IT development projects delivered",
  ],
  "Cross Functional Features": [
    "FedEx — Working sessions spanning volume, routing, and service integration",
  ],
  "Project Management": ["FIS — Managed and completed 15 IT development projects"],
  "Risk Management": [
    "Kohl's — Payment security and compliance",
    "FIS — Compliance impact analysis across four card networks",
  ],
  Facilitation: [
    "FedEx — Led cross-functional requirements working sessions",
  ],

  // --- Architecture & analysis ---
  "Business Architecture": ["FedEx — Demand intake across 5 ARTs, aligned with enterprise strategy"],
  "Capability Modeling": ["FedEx — 25+ process maps and capability models for current- and future-state operations"],
  "Data Architecture": ["FedEx — Scalable architecture integrating 15+ disparate data sources"],
  "AI Agent Automation": [
    "FedEx — AI agents reduced manual business architecture analysis by 50%",
    "FedEx — Automated lean business cases and problem statements from portfolio data",
  ],
  "Solution Design": ["FedEx — 12 executable solution concepts and designs for 10+ initiatives"],
  "SAFe 6": ["FedEx — Demand management and delivery alignment across 5 Agile Release Trains"],
  "Business Process Identification": [
    "FedEx — Process maps and capability models for current and future-state operations",
  ],
  "API Development": [
    "FedEx — Agnostic APIs bridging Express and Ground data",
    "FedEx — API contracts and business rules for UI applications",
  ],
  "Data Mining": ["FedEx — Captured network data feeding the analytics data lake"],
  Forecasting: ["FedEx — Volume management across U.S. and Canada facilities"],
  "Technical Reports": [
    "FIS — In-house manual for system updates and project changes",
    "Kohl's — Pin-pad performance reporting to upper management",
  ],
  Networking: ["MATC — Cisco routing, switching, WAN, and Security+ coursework"],

  // --- Research & design ---
  "User Interviews": [
    "FedEx — Interviews with process engineers to identify product gaps",
  ],
  "User Experience": ["FedEx — Partnered with the Sr. UX Analyst on MVP features"],
  "User Interface": ["FedEx — Product Owner for the UX/UI team"],

  // --- Tooling ---
  SQL: ["Kohl's — Transaction tracing and payment data validation"],
  Jira: ["Kohl's — User story development for payments products"],
  Confluence: ["FIS — Change documentation for Production Support"],
  Splunk: ["Kohl's — Transaction validation and troubleshooting"],
  Lucidchart: ["Kohl's — Workflow and impact diagrams for new projects"],
  "Nightwatch.js": [
    "Northwestern Mutual — Browser automation test cases",
    "NovaOne Technology — Browser automation and testing",
  ],
  "Sauce Labs": ["Northwestern Mutual — Automation test execution"],
  "Google Cloud": [
    "FedEx — Partnered with architects and engineering teams to select a GCP-based modernization platform",
    "NovaOne Technology — Cloud infrastructure and services",
  ],
  "GitHub Copilot": ["NovaOne Technology — JavaScript development and code generation"],
  JavaScript: ["NovaOne Technology — Developed JavaScript logic"],
  CockroachDB: ["NovaOne Technology — Distributed database implementation"],
  Postman: ["NovaOne Technology — API testing and development"],
  Fivetran: ["NovaOne Technology — Data pipeline and ETL processes"],
  OKTA: ["NovaOne Technology — Identity and access management"],
  Cypress: ["NovaOne Technology — End-to-end testing automation"],
};

/* ============================================================
   HELPERS
   ============================================================ */

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function SectionHeading({
  index,
  title,
  lede,
}: {
  index: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="max-w-[52ch]">
      <p className="u-eyebrow u-eyebrow-accent mb-3">{index}</p>
      <h2 className="u-display text-[clamp(1.75rem,4.5vw,2.75rem)]">{title}</h2>
      {lede && <p className="mt-4 text-[var(--color-fog)]">{lede}</p>}
    </div>
  );
}

/* ============================================================
   OVERVIEW
   ============================================================ */

function OverviewPage() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const selectedExperiences = selectedSkill ? SKILL_EXPERIENCES[selectedSkill] ?? [] : [];

  const rise = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  const load = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        {/* quiet structural grid — replaces the old circuit image */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 80% 60% at 30% 0%, #000 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 30% 0%, #000 40%, transparent 100%)",
          }}
        />

        <div className="u-shell relative pb-16 pt-14 sm:pb-24 sm:pt-20">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
            {/* left */}
            <div>
              <motion.div {...load(0)}>
                <StatusBadge>Open to opportunities</StatusBadge>
              </motion.div>

              <motion.h1
                {...load(0.06)}
                className="u-display mt-6 text-[clamp(2.5rem,8vw,5rem)]"
              >
                Tchaas
                <span className="block">Alexander-Wright</span>
              </motion.h1>

              <motion.p
                {...load(0.12)}
                className="u-mono mt-5 text-xs uppercase tracking-[0.14em] text-[var(--color-dim)]"
              >
                Business Architect, FedEx
                <span className="mx-2 text-[var(--color-line-strong)]">/</span>
                MBA
                <span className="mx-2 text-[var(--color-line-strong)]">/</span>
                MSCS candidate, Georgia Tech
              </motion.p>

              <motion.p
                {...load(0.18)}
                className="mt-8 max-w-[38ch] text-[clamp(1.125rem,2.4vw,1.5rem)] leading-[1.4] text-[var(--color-bone)]"
              >
                I translate business strategy into{' '}
                <span className="text-[var(--color-signal-400)]">capabilities and solutions</span>{' '}
                teams can deliver. At FedEx, I lead demand management across five Agile
                Release Trains and build AI agents that automate business architecture work.
              </motion.p>

              <motion.p {...load(0.24)} className="mt-6 max-w-[60ch] text-[var(--color-fog)]">
                With 8+ years in product management and business analysis, my work spans
                capability modeling, data architecture, and solution design. I reduced
                demand intake processing time by 40% and manual analysis by 50% through AI
                automation. My project portfolio contributed an estimated $118M in strategic
                value in FY25. I hold an MBA and am completing an MS in
                Computer Science at Georgia Tech, with anticipated graduation in 2027.
              </motion.p>

              <motion.div {...load(0.3)} className="mt-9 flex flex-wrap gap-2.5">
                <NavLink className="u-btn u-btn-primary" to="/research">
                  Read my research
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </NavLink>
                <a
                  className="u-btn"
                  href="/TchaasHAlexanderWright_Resume.pdf?v=20261006"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                  Résumé PDF
                </a>
                <a
                  className="u-btn"
                  href="/TchaasHAlexanderWright_Resume.docx?v=20261006"
                  download="TchaasHAlexanderWright_Resume.docx"
                >
                  <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                  Résumé Word
                </a>
                <a
                  className="u-btn"
                  href="https://www.linkedin.com/in/tchaas-alexander-wright/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                  LinkedIn
                </a>
              </motion.div>
            </div>

            {/* right — portrait, squared and framed rather than the old glow orb */}
            <motion.div {...load(0.16)} className="relative mx-auto w-full max-w-[26rem] lg:mx-0">
              <div className="u-card overflow-hidden p-2">
                <img
                  src={profileImg}
                  alt="Tchaas Alexander-Wright"
                  width={900}
                  height={900}
                  decoding="async"
                  fetchPriority="high"
                  className="aspect-square w-full rounded object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="u-eyebrow">MBA · MSCS candidate</span>
                <span className="u-eyebrow">In the field since 2015</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- FRAMEWORK (signature) ---------------- */}
      <section className="u-section border-b border-[var(--color-line)] bg-[var(--color-ink-900)]">
        <div className="u-shell">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <motion.div {...rise()}>
              <SectionHeading
                index="01 — How I work"
                title="Strategy to confirmed value"
                lede="Every engagement runs the same five layers. Each one translates the layer above it into something the next can act on, and nothing is called done until the number moves against a baseline."
              />
              <NavLink className="u-btn mt-7" to="/research">
                The paper behind this
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </NavLink>
            </motion.div>

            <motion.div {...rise(0.08)}>
              <FrameworkStack />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- RESEARCH ---------------- */}
      <section className="u-section border-b border-[var(--color-line)]">
        <div className="u-shell">
          <motion.div {...rise()}>
            <SectionHeading
              index="02 — Georgia Tech"
              title="Research & writing"
              lede="Graduate work written to publication format, available in full."
            />
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {RESEARCH_TEASERS.map((paper, i) => (
              <motion.article
                key={paper.title}
                {...rise(i * 0.08)}
                className="u-card u-card-hover flex flex-col p-6"
              >
                <p className="u-eyebrow u-eyebrow-accent">{paper.eyebrow}</p>
                <h3 className="mt-3 text-[1.125rem] leading-snug">{paper.title}</h3>
                <p className="mt-3 text-sm text-[var(--color-fog)]">{paper.body}</p>

                <div className="mt-6 flex flex-wrap gap-2 pt-1">
                  <a
                    className="u-btn"
                    href={paper.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                    PDF
                  </a>
                  {paper.hasVideo && (
                    <a
                      className="u-btn"
                      href="https://youtu.be/ssSpAGB72aw?si=F0Segym8-inQRjA3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Play className="h-3.5 w-3.5" aria-hidden="true" />
                      Presentation
                    </a>
                  )}
                  {paper.appUrl && (
                    <a
                      className="u-btn"
                      href={paper.appUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      Web app
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- COMPETENCIES ---------------- */}
      <section className="u-section border-b border-[var(--color-line)] bg-[var(--color-ink-900)]">
        <div className="u-shell">
          <motion.div {...rise()}>
            <SectionHeading
              index="03 — Practice"
              title="Core competencies"
              lede="Where the work actually happens, day to day."
            />
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {COMPETENCIES.map((item, i) => (
              <motion.div
                key={item.id}
                {...rise(i * 0.08)}
                className="u-card u-card-hover flex flex-col p-6"
              >
                <span className="u-mono text-xs font-semibold text-[var(--color-signal-400)]">
                  {item.id}
                </span>
                <h3 className="mt-4 text-[1.0625rem] leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm text-[var(--color-fog)]">{item.body}</p>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <li key={tag} className="u-chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SKILLS ---------------- */}
      <section className="u-section">
        <div className="u-shell">
          <motion.div {...rise()}>
            <SectionHeading
              index="04 — Toolkit"
              title="Skills & technologies"
              lede="Select any skill to see where I've applied it."
            />
          </motion.div>

          <motion.div {...rise(0.06)} className="mt-9 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <SkillTag
                key={skill}
                skill={skill}
                isSelected={selectedSkill === skill}
                onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
              />
            ))}
          </motion.div>

          {selectedSkill && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="u-card mt-6 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base">
                  Where I've used{" "}
                  <span className="text-[var(--color-signal-400)]">{selectedSkill}</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setSelectedSkill(null)}
                  className="u-mono text-[0.625rem] uppercase tracking-[0.1em] text-[var(--color-dim)] transition-colors hover:text-[var(--color-bone)]"
                >
                  Close
                </button>
              </div>

              {selectedExperiences.length > 0 ? (
                <ul className="mt-5 flex flex-col gap-2.5">
                  {selectedExperiences.map((experience) => (
                    <li
                      key={experience}
                      className="relative pl-5 text-sm text-[var(--color-fog)]"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-[0.6em] h-px w-2.5 bg-[var(--color-signal-500)]"
                      />
                      {experience}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-[var(--color-dim)]">
                  No entries recorded for this skill yet.
                </p>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* ---------------- CLOSING ---------------- */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-ink-900)]">
        <div className="u-shell py-16 sm:py-20">
          <motion.div {...rise()} className="max-w-[46ch]">
            <p className="u-eyebrow u-eyebrow-accent mb-3">05 — Next cycle</p>
            <h2 className="u-display text-[clamp(1.75rem,4.5vw,2.75rem)]">
              Let's build the line
            </h2>
            <p className="mt-4 text-[var(--color-fog)]">
              Open to conversations about technical product management, solutions
              architecture, and enterprise transformation.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <NavLink className="u-btn u-btn-primary" to="/contact">
                Get in touch
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </NavLink>
              <NavLink className="u-btn" to="/experience">
                See experience
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   APP
   ============================================================ */

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col overflow-x-hidden bg-[var(--color-ink-950)]">
      <ScrollToTop />
      <Header />

      <main className="flex-1 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/overview" element={<Navigate to="/" replace />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/experience" element={<WorkHistoryPage />} />
          <Route
            path="/professional-development"
            element={<ProfessionalDevelopmentPage />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
