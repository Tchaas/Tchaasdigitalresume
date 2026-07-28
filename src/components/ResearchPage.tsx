import { motion, useReducedMotion } from "framer-motion";
import { FileText, Play, ExternalLink } from "lucide-react";
import { FrameworkStack } from "./FrameworkStack";

const STRATEGIC_LIFECYCLE_APP_URL =
  "https://tchaas.github.io/strategic-lifecycle-ai-framework/#/";

type Paper = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  findings: string[];
  tags: string[];
  pdf: string;
  appUrl?: string;
};

const PAPERS: Paper[] = [
  {
    slug: "ai-augmented-business-architecture",
    eyebrow: "Framework paper · Georgia Institute of Technology",
    title:
      "AI-Augmented Business Architecture: Translating Executive Strategy into Implemented Organizational Value",
    summary:
      "Roughly 70% of digital transformations miss their objectives. This paper argues the root cause is structural rather than technological — there is no discipline connecting executive intent to confirmed outcomes — and proposes a five-layer framework with AI embedded at each layer and human judgment governing every translation.",
    findings: [
      "Anchored in three enterprise cases: FedEx DRIVE, Walmart supply chain automation, and Amazon fulfillment regionalization.",
      "FedEx confirmed $4B in structural cost reductions against a fiscal 2023 baseline.",
      "Introduces baseline-first measurement and the strategic value scorecard as governance instruments.",
      "31 references spanning BIZBOK, Lean Startup, DORA, and the NIST AI Risk Management Framework.",
    ],
    tags: [
      "Business architecture",
      "BIZBOK",
      "Product discovery",
      "Agile governance",
      "AI risk",
      "Value measurement",
    ],
    pdf: "/papers/AI-Augmented-Business-Architecture.pdf",
    appUrl: STRATEGIC_LIFECYCLE_APP_URL,
  },
  {
    slug: "schema-driven-scaffolds",
    eyebrow: "Literature review · CS 6795 Intro to Cognitive Science · Summer 2026",
    title:
      "A Cognitive Science Meta-Analysis of Schema-Driven Scaffolds in Object-Oriented Programming for Neurodivergent Learners",
    summary:
      "A systematic review of fifteen peer-reviewed sources across human factors, clinical psychology, and computing education, asking how schema-driven visual supports affect syntax comprehension, implementation, and debugging for learners with ADHD and autism.",
    findings: [
      "Maps three learning milestones onto mental schemas, analogical mapping, and distributed cognition.",
      "Finds that ADHD and autistic learners fail differently — and that most studies conflate them.",
      "Identifies the unresolved gap between block-based scaffolds and industrial OOP languages.",
      "Uses Marr's three levels to show the field tests almost entirely at the computational tier.",
    ],
    tags: [
      "Cognitive load theory",
      "CRUM",
      "Marr's levels",
      "Distributed cognition",
      "Accessibility",
      "CS education",
    ],
    pdf: "/papers/Schema-Driven-Scaffolds-OOP-Neurodivergent-Learners.pdf",
  },
  {
    slug: "trucking-dispatch-price-transparency",
    eyebrow: "HCI process paper · Georgia Institute of Technology",
    title: "Trucking Dispatching System Price Transparency Tool",
    summary:
      "An HCI project documenting early discovery for a peer-to-peer freight pricing transparency tool. The work frames the problem from both shipper and trucker perspectives, then uses needfinding, interviews, and heuristic evaluation to shape the product direction.",
    findings: [
      "Defines the transparency gap in freight pricing for shippers, owner-operators, and dispatch-dependent trucking businesses.",
      "Builds a discovery plan around truckers, logistics professionals, shippers, carriers, and technical contributors.",
      "Uses HCI heuristics including visibility of system status, recognition rather than recall, and error prevention.",
      "Connects product motivation to real logistics operations, cost fluctuation, route profitability, and freight decision-making.",
    ],
    tags: [
      "HCI",
      "Needfinding",
      "User interviews",
      "Heuristic evaluation",
      "Logistics",
      "Pricing transparency",
    ],
    pdf: "/papers/HCI-Individual-Project-Final.pdf",
  },
];

const VIDEO_ID = "ssSpAGB72aw";
const VIDEO_URL = "https://youtu.be/ssSpAGB72aw?si=F0Segym8-inQRjA3";

export function ResearchPage() {
  const reduceMotion = useReducedMotion();

  const fade = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <div className="bg-[var(--color-ink-950)]">
      {/* ---------- page header ---------- */}
      <section className="u-shell pt-14 pb-10 sm:pt-20 sm:pb-14">
        <motion.div {...fade()}>
          <p className="u-eyebrow u-eyebrow-accent mb-4">Georgia Tech · Graduate research</p>
          <h1 className="u-display max-w-[16ch] text-[clamp(2.25rem,7vw,4.25rem)]">
            Research &amp; writing
          </h1>
          <p className="mt-6 max-w-[58ch] text-lg text-[var(--color-fog)]">
            Graduate work written to publication format — spanning enterprise
            transformation, peer-reviewed cognitive science, and HCI product
            discovery. Each paper is available in full below.
          </p>
        </motion.div>
      </section>

      {/* ---------- papers ---------- */}
      <section className="u-shell pb-16 sm:pb-24">
        <div className="flex flex-col gap-6">
          {PAPERS.map((paper, i) => (
            <motion.article
              key={paper.slug}
              {...fade(i * 0.08)}
              className="u-card p-5 sm:p-8"
            >
              <p className="u-eyebrow u-eyebrow-accent mb-4">{paper.eyebrow}</p>

              <h2 className="max-w-[46ch] text-[1.375rem] leading-[1.2] sm:text-[1.75rem]">
                {paper.title}
              </h2>

              <p className="mt-4 max-w-[70ch] text-[var(--color-fog)]">{paper.summary}</p>

              <ul className="mt-6 flex flex-col gap-2.5">
                {paper.findings.map((finding) => (
                  <li
                    key={finding}
                    className="relative max-w-[72ch] pl-5 text-sm text-[var(--color-dim)]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-[0.6em] h-px w-2.5 bg-[var(--color-signal-500)]"
                    />
                    {finding}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-1.5">
                {paper.tags.map((tag) => (
                  <li key={tag} className="u-chip">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2.5">
                <a
                  className="u-btn u-btn-primary"
                  href={paper.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                  Read the paper
                </a>

                {paper.slug === "schema-driven-scaffolds" && (
                  <a
                    className="u-btn"
                    href={VIDEO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Play className="h-3.5 w-3.5" aria-hidden="true" />
                    Watch on YouTube
                    <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
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
                    Launch web app
                  </a>
                )}
              </div>

              {/* the framework this paper proposes */}
              {paper.slug === "ai-augmented-business-architecture" && (
                <div className="mt-8">
                  <p className="u-eyebrow mb-3">The proposed framework</p>
                  <FrameworkStack />
                </div>
              )}

              {/* presentation video */}
              {paper.slug === "schema-driven-scaffolds" && (
                <figure className="mt-8 overflow-hidden rounded-lg border border-[var(--color-line)]">
                  <div className="relative aspect-video w-full bg-black">
                    <iframe
                      className="pointer-events-none absolute inset-0 h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}`}
                      title="Project presentation — schema-driven scaffolds in OOP for neurodivergent learners"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      frameBorder="0"
                    />
                  </div>
                  <figcaption className="u-eyebrow border-t border-[var(--color-line)] px-4 py-3">
                    Project presentation · CS 6795 · Summer 2026
                  </figcaption>
                </figure>
              )}
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
