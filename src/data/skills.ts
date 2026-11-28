/**
 * Core competencies, skills, and where each skill was applied.
 *
 * Shared by the website and the AI assistant (see src/data/aiProfile.ts).
 * Edit here and both stay in sync.
 */

export const COMPETENCIES = [
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

export const SKILLS = [
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

export const SKILL_EXPERIENCES: Record<string, string[]> = {
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
