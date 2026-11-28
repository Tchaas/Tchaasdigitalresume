/**
 * Research papers and writing.
 *
 * Shared by the website and the AI assistant (see src/data/aiProfile.ts).
 * Edit here and both stay in sync.
 */

export const STRATEGIC_LIFECYCLE_APP_URL =
  "https://tchaas.github.io/strategic-lifecycle-ai-framework/#/";

export type Paper = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  findings: string[];
  tags: string[];
  pdf: string;
  appUrl?: string;
};

export const PAPERS: Paper[] = [
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
  {
    slug: "albrecht-wood-interiors-analysis",
    eyebrow: "MBA capstone · University of Dayton · 2020",
    title: "Albrecht Wood Interiors (AWI) Analysis",
    summary:
      "A team consulting analysis of Albrecht Wood Interiors, a premier custom cabinetry and remodeling contractor in the Dayton, OH area. The report pairs external and internal strategic analysis with a two-part recommendation to help a 30-year-old, reputation-built small business professionalize financial management and workforce development ahead of an anticipated labor shortage. Co-authored with Dan Collier, Lauren Meador, Ahmed Mohammadein, Kaitlyn Roberts, and Robert Volk.",
    findings: [
      "Applies PESTDGE, Porter's Five Forces, and Herfindahl indexes to the finish carpentry contractors industry, alongside SWOT and VRIO analysis of AWI's internal position.",
      "Identifies AWI's word-of-mouth reputation and skilled, tenured labor force as its core competitive advantage — and its looming retirement wave as its central risk.",
      "Recommends a financial infrastructure of forecasting, budgeting, and KPI tracking, projecting net income growth from roughly $205,000 to $414,000 over five years.",
      "Proposes a three-pronged workforce development plan — hire, train, and retain — to replace retiring craftsmen and sustain growth in a saturated market.",
    ],
    tags: [
      "Business strategy",
      "Industry analysis",
      "SWOT/VRIO",
      "Financial forecasting",
      "Workforce development",
      "Small business consulting",
    ],
    pdf: "/papers/albrecht_wood_interiors__awi__analysis.pdf",
  },
];
