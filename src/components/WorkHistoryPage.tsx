import { motion, useReducedMotion } from "framer-motion";
import { StatusBadge } from "./StatusBadge";

type Role = {
  id: string;
  title: string;
  company: string;
  logo: string;
  period: string;
  current?: boolean;
  /** headline outcome, pulled forward out of the bullets */
  metric?: { value: string; label: string };
  summary: string;
  bullets: string[];
  tags: string[];
};

/* Source of truth: uploaded resume dated October 5, 2026. */
const ROLES: Role[] = [
  {
    id: "fedex-ba",
    title: "Business Architect",
    company: "FedEx",
    logo: "/icons/work/fedex-logo.png",
    period: "Mar 2025 — Present",
    current: true,
    metric: { value: "$70.5M", label: "estimated strategic value contributed, FY26" },
    summary:
      "Leading demand management across 5 Agile Release Trains, capability modeling, and solution architecture, with AI agents that automate business architecture work.",
    bullets: [
      "Streamlined and automated business demand intake for 5 Agile Release Trains (ARTs), reducing processing time by 40% and aligning prioritized initiatives with enterprise strategy.",
      "Led development and implementation of AI agents to automate business architecture tasks, streamline demand intake, and reduce manual analysis by 50%.",
      "Used AI to process and structure portfolio data and automate lean business cases and problem statements, accelerating decisions on new initiatives.",
      "Architected and documented scalable data architecture integrating 15+ disparate data sources to support enterprise activity capabilities, with a projected 60% improvement in data consistency.",
      "Developed 25+ process maps and capability models for current- and future-state operations, identifying optimization opportunities that contributed to a 15% increase in operational efficiency.",
      "Partnered with enterprise architects and engineering teams to evaluate technology solutions, resulting in selection of a GCP-based platform aligned with strategic modernization goals.",
      "Led 50+ cross-functional working sessions to capture requirements for volume forecasting, dynamic routing, and service integration.",
      "Designed and supported architectural definition for 3 major solutions bridging FedEx Express and Ground systems, projected to reduce package handling redundancies by 25% and optimize last-mile delivery.",
      "Authored and presented solution designs and capability documentation for 10+ initiatives, securing stakeholder buy-in and implementation readiness.",
      "Translated enterprise goals into 12 executable solution concepts, working with ARTs to align delivery with the broader business vision.",
      "Delivered a portfolio of projects contributing an estimated $118M in strategic value in FY25 and $70.5M in FY26.",
    ],
    tags: ["Business architecture", "AI agent automation", "Data architecture", "Capability modeling", "GCP", "SAFe 6"],
  },
  {
    id: "fedex-spo",
    title: "Senior Product Owner",
    company: "FedEx",
    logo: "/icons/work/fedex-logo.png",
    period: "Oct 2023 — Mar 2025",
    summary:
      "Owned a backend development team building agnostic APIs that closed the data gap between FedEx Express and FedEx Ground.",
    bullets: [
      "Product Owner for a backend team developing agnostic APIs supporting multiple business areas.",
      "Delivered products that removed legacy processes and improved the global network by feeding captured data into the network data lake.",
      "Led development of a new process combining Express and Ground volume management per zip code for the global network.",
      "Owned deployment of an application allowing engineers to submit volume changes for all FedEx Ground facilities.",
      "Used GAP analysis to support discovery, define new features, and map processes into digital solutions.",
      "Demoed software solutions to leadership to showcase enterprise-level implementation potential.",
      "Developed solutions supporting volume management for all FedEx facilities in the U.S. and Canada.",
    ],
    tags: ["API strategy", "GAP analysis", "Data lake", "Volume management"],
  },
  {
    id: "fedex-po",
    title: "Product Owner",
    company: "FedEx",
    logo: "/icons/work/fedex-logo.png",
    period: "Mar 2021 — Oct 2023",
    metric: { value: "16+", label: "features shipped to production" },
    summary:
      "Product Owner across three offshore backend teams and a UX/UI team, defining API business rules and MVP scope.",
    bullets: [
      "Product Owner for three offshore teams focused on backend development, production issues, and API business rules.",
      "Partnered with the Senior User Experience Analyst to develop features and engage external users on MVP scope.",
      "Implemented over 16 new features addressing security vulnerabilities, network modernization, and field engineer tooling.",
      "Developed user stories from stakeholder business requirements and worked with architects to gather requirements per feature.",
      "Partnered with Business Architects to structure API contracts for all user-interface applications.",
      "Conducted user interviews with process engineers to identify gaps addressable by new web-based products.",
      "Worked with the Product Manager on a roadmap aligned to overall business direction.",
    ],
    tags: ["Product ownership", "API contracts", "User research", "Offshore teams"],
  },
  {
    id: "kohls",
    title: "Product Manager, Payments",
    company: "Kohl's",
    logo: "/icons/work/kohls-logo.jpg",
    period: "Jan 2020 — Oct 2020",
    summary:
      "Managed payment products and pin-pad estate, balancing customer experience against risk and compliance.",
    bullets: [
      "Developed user stories for payments products in Jira based on business partner requests.",
      "Built pin-pad performance metrics and presented reporting to upper management.",
      "Managed code deployment for releases and produced project documentation for the support team.",
      "Troubleshot and deployed software packages for Verifone Mx925 and Mx915 pin-pads via Verifone Estate Management (VHQ).",
      "Used SQL to trace payment transactions for troubleshooting and validate data from payment processing applications.",
      "Created diagrams and workflows in Lucidchart to determine impacted applications and data flow after changes.",
    ],
    tags: ["Payments", "SQL", "Verifone VHQ", "Release management"],
  },
  {
    "id": "fis-bsa",
    "title": "Senior Business System Analyst / Product Owner",
    "company": "FIS",
    "logo": "/icons/work/fis-logo.png",
    "period": "Jul 2017 \u2014 Dec 2019",
    "metric": {
      "value": "15",
      "label": "IT development projects delivered"
    },
    "summary": "Delivered IT development projects, managed releases across six applications, and analyzed card network requirements across two development platforms.",
    "bullets": [
      "Managed and completed 15 IT development projects, documenting changes in Confluence for Production Support.",
      "Developed technical wording for project changes and approved final copy before publication.",
      "Maintained the in-house manual covering system updates and project changes for project teams and Product Support.",
      "Executed code releases across six applications.",
      "Drove Agile process improvement for code releases, targeting a 60% reduction in delivery delays.",
      "Analyzed American Express, Pulse, Mastercard, and Visa technical documents across two development platforms to determine compliance impacts."
    ],
    "tags": [
      "Agile",
      "Confluence",
      "Technical writing",
      "Release management",
      "Card network compliance"
    ]
  },
  {
    id: "nm",
    title: "Associate Automation Quality Assurance",
    company: "Northwestern Mutual",
    logo: "/icons/work/nm-logo.png",
    period: "Jun 2015 — Jul 2017",
    metric: { value: "100+", label: "automation scripts supported" },
    summary:
      "Built and maintained browser automation coverage, and modeled data warehouse processes.",
    bullets: [
      "Completed 20 test cases and supported 100+ scripts internally.",
      "Developed data warehouse process models covering sourcing, loading, transformation, and extraction.",
      "Built automation test cases using Nightwatch.js and executed them through Sauce Labs.",
      "Worked alongside developers to deploy code into production.",
    ],
    tags: ["Nightwatch.js", "Sauce Labs", "Test automation", "Data warehousing"],
  },
];

export function WorkHistoryPage() {
  const reduceMotion = useReducedMotion();

  const rise = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <div className="bg-[var(--color-ink-950)]">
      {/* header */}
      <section className="u-shell pt-14 pb-10 sm:pt-20 sm:pb-14">
        <motion.div {...rise()}>
          <p className="u-eyebrow u-eyebrow-accent mb-4">Track record</p>
          <h1 className="u-display max-w-[14ch] text-[clamp(2.25rem,7vw,4.25rem)]">
            Experience
          </h1>
          <p className="mt-6 max-w-[58ch] text-lg text-[var(--color-fog)]">
            From test automation to business analysis, product ownership, and business
            architecture. I bring 8+ years in product management and business analysis,
            now leading demand management and AI automation at FedEx.
          </p>
        </motion.div>
      </section>

      {/* timeline */}
      <section className="u-shell pb-16 sm:pb-24">
        <div className="relative">
          {/* spine */}
          <div
            aria-hidden="true"
            className="absolute left-[15px] top-2 bottom-2 hidden w-px bg-[var(--color-line)] sm:block"
          />

          <ol className="flex list-none flex-col gap-5">
            {ROLES.map((role, i) => (
              <motion.li key={role.id} {...rise(Math.min(i, 4) * 0.05)} className="relative">
                <div className="sm:pl-12">
                  {/* node */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-[9px] top-7 hidden h-3.5 w-3.5 rounded-full border-2 sm:block ${
                      role.current
                        ? "border-[var(--color-signal-500)] bg-[var(--color-signal-500)]"
                        : "border-[var(--color-line-strong)] bg-[var(--color-ink-950)]"
                    }`}
                  />

                  <article className="u-card u-card-hover p-5 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex min-w-0 items-start gap-4">
                        <img
                          src={role.logo}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          className="h-11 w-11 flex-none rounded border border-[var(--color-line)] bg-white/95 object-contain p-1.5"
                        />
                        <div className="min-w-0">
                          <h2 className="text-[1.125rem] leading-snug sm:text-[1.3125rem]">
                            {role.title}
                          </h2>
                          <p className="u-mono mt-1.5 text-[0.6875rem] uppercase tracking-[0.12em] text-[var(--color-signal-400)]">
                            {role.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-2 sm:items-end">
                        <span className="u-mono text-[0.6875rem] tracking-[0.08em] text-[var(--color-dim)]">
                          {role.period}
                        </span>
                        {role.current && <StatusBadge>Current role</StatusBadge>}
                      </div>
                    </div>

                    <p className="mt-5 max-w-[68ch] text-[var(--color-fog)]">{role.summary}</p>

                    {role.metric && (
                      <div className="mt-5 flex items-baseline gap-3 border-l-2 border-[var(--color-brass-500)] bg-white/[0.02] px-4 py-3">
                        <span className="font-[family-name:var(--font-display)] text-[1.5rem] font-bold leading-none text-[var(--color-brass-400)]">
                          {role.metric.value}
                        </span>
                        <span className="u-eyebrow text-[0.625rem]">{role.metric.label}</span>
                      </div>
                    )}

                    <ul className="mt-5 flex flex-col gap-2.5">
                      {role.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="relative max-w-[76ch] pl-5 text-sm text-[var(--color-dim)]"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute left-0 top-[0.6em] h-px w-2.5 bg-[var(--color-signal-500)]"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-6 flex flex-wrap gap-1.5">
                      {role.tags.map((tag) => (
                        <li key={tag} className="u-chip">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
