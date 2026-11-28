/**
 * Impact dashboard data: metrics and framework evidence, each linked to the
 * role it came from and the exact résumé bullet that backs it up.
 *
 * `quote` is a short, distinctive phrase that must appear in one of that
 * role's bullets in src/data/experience.ts — the dashboard shows the full
 * bullet as the source. If you reword a bullet, update its quote here.
 */
import { ROLES, type Role } from "./experience";

export type RoleId = "fedex-ba" | "fedex-spo" | "fedex-po" | "kohls" | "fis-bsa" | "nm";

export type Metric = {
  id: string;
  roleId: RoleId;
  value: string;
  label: string;
  context: string;
  /** phrase that locates the source bullet */
  quote: string;
  /** shown as a badge so nothing is overstated */
  qualifier?: "Estimated" | "Projected" | "Target";
  skills: string[];
  /** shown in the "All roles" view */
  featured?: boolean;
  /** question sent to the AI assistant from the detail panel */
  ask: string;
};

export const METRICS: Metric[] = [
  // ---- FedEx · Business Architect ----
  {
    id: "fy25-value",
    roleId: "fedex-ba",
    value: "$118M",
    label: "Strategic value contributed, FY25",
    context: "Portfolio of projects delivered as Business Architect",
    quote: "estimated $118M",
    qualifier: "Estimated",
    skills: ["Business Architecture", "Solution Design"],
    featured: true,
    ask: "How did Tchaas's portfolio contribute an estimated $118M in strategic value to FedEx in FY25?",
  },
  {
    id: "intake-40",
    roleId: "fedex-ba",
    value: "40%",
    label: "Faster demand intake",
    context: "Automated intake across 5 Agile Release Trains",
    quote: "processing time by 40%",
    skills: ["SAFe 6", "Business Architecture"],
    featured: true,
    ask: "How did Tchaas cut demand intake processing time by 40% across 5 Agile Release Trains?",
  },
  {
    id: "analysis-50",
    roleId: "fedex-ba",
    value: "50%",
    label: "Less manual analysis",
    context: "AI agents automating business architecture tasks",
    quote: "manual analysis by 50%",
    skills: ["AI Agent Automation"],
    featured: true,
    ask: "What AI agents did Tchaas build at FedEx, and how did they reduce manual analysis by 50%?",
  },
  {
    id: "efficiency-15",
    roleId: "fedex-ba",
    value: "15%",
    label: "Operational efficiency gain",
    context: "From optimizations found in capability models",
    quote: "15% increase in operational efficiency",
    skills: ["Capability Modeling", "Business Process Identification"],
    featured: true,
    ask: "How did Tchaas's process maps and capability models contribute to a 15% increase in operational efficiency?",
  },
  {
    id: "sources-15",
    roleId: "fedex-ba",
    value: "15+",
    label: "Data sources integrated",
    context: "Scalable architecture for enterprise capabilities",
    quote: "15+ disparate data sources",
    skills: ["Data Architecture"],
    featured: true,
    ask: "What data architecture did Tchaas design to integrate 15+ data sources at FedEx?",
  },
  {
    id: "sessions-50",
    roleId: "fedex-ba",
    value: "50+",
    label: "Cross-functional sessions led",
    context: "Volume forecasting, dynamic routing, service integration",
    quote: "50+ cross-functional working sessions",
    skills: ["Requirements Management", "Facilitation"],
    featured: true,
    ask: "What requirements work did Tchaas lead across 50+ cross-functional working sessions?",
  },
  {
    id: "models-25",
    roleId: "fedex-ba",
    value: "25+",
    label: "Process maps & capability models",
    context: "Current- and future-state operations",
    quote: "25+ process maps",
    skills: ["Capability Modeling"],
    ask: "What process maps and capability models has Tchaas built at FedEx?",
  },
  {
    id: "concepts-12",
    roleId: "fedex-ba",
    value: "12",
    label: "Executable solution concepts",
    context: "Translated from enterprise goals",
    quote: "12 executable solution concepts",
    skills: ["Solution Design"],
    ask: "How does Tchaas translate enterprise goals into executable solution concepts?",
  },
  {
    id: "consistency-60",
    roleId: "fedex-ba",
    value: "60%",
    label: "Data consistency improvement",
    context: "From the unified data architecture",
    quote: "projected 60% improvement",
    qualifier: "Projected",
    skills: ["Data Architecture"],
    ask: "How is Tchaas's data architecture projected to improve data consistency by 60%?",
  },
  {
    id: "redundancy-25",
    roleId: "fedex-ba",
    value: "25%",
    label: "Fewer handling redundancies",
    context: "3 solutions bridging FedEx Express and Ground",
    quote: "redundancies by 25%",
    qualifier: "Projected",
    skills: ["Solution Design", "Enterprise Projects"],
    ask: "What solutions bridging FedEx Express and Ground did Tchaas design, and how will they reduce package handling redundancies?",
  },

  // ---- FedEx · Product Owner ----
  {
    id: "features-16",
    roleId: "fedex-po",
    value: "16+",
    label: "Features shipped",
    context: "Security, network modernization, field engineer tools",
    quote: "over 16 new features",
    skills: ["Product Management", "Agile Methodology"],
    featured: true,
    ask: "What 16+ features did Tchaas ship to production as a FedEx Product Owner?",
  },
  {
    id: "teams-3",
    roleId: "fedex-po",
    value: "3",
    label: "Offshore teams led as PO",
    context: "Backend development, production issues, API rules",
    quote: "three offshore teams",
    skills: ["Product Management", "API Development"],
    ask: "How did Tchaas lead three offshore backend teams as a Product Owner?",
  },

  // ---- FIS ----
  {
    id: "projects-15",
    roleId: "fis-bsa",
    value: "15",
    label: "IT projects delivered",
    context: "Documented in Confluence for Production Support",
    quote: "15 IT development projects",
    skills: ["Project Management", "Confluence"],
    featured: true,
    ask: "What IT development projects did Tchaas deliver at FIS?",
  },
  {
    id: "apps-6",
    roleId: "fis-bsa",
    value: "6",
    label: "Applications released",
    context: "Code releases managed end to end",
    quote: "six applications",
    skills: ["User Acceptance Testing"],
    ask: "How did Tchaas manage code releases across six applications at FIS?",
  },
  {
    id: "delays-60",
    roleId: "fis-bsa",
    value: "60%",
    label: "Reduction in release delays",
    context: "Agile process improvement for code releases",
    quote: "60% reduction",
    qualifier: "Target",
    skills: ["Agile Methodology"],
    ask: "What Agile process improvements did Tchaas drive for code releases at FIS?",
  },
  {
    id: "networks-4",
    roleId: "fis-bsa",
    value: "4",
    label: "Card networks analyzed",
    context: "Amex, Pulse, Mastercard, and Visa compliance",
    quote: "Mastercard, and Visa",
    skills: ["Risk Management"],
    ask: "What card network compliance analysis did Tchaas do at FIS?",
  },

  // ---- Northwestern Mutual ----
  {
    id: "scripts-100",
    roleId: "nm",
    value: "100+",
    label: "Automation scripts supported",
    context: "Nightwatch.js and Sauce Labs",
    quote: "100+ scripts",
    skills: ["Nightwatch.js", "Sauce Labs"],
    featured: true,
    ask: "What test automation work did Tchaas do at Northwestern Mutual?",
  },
  {
    id: "tests-20",
    roleId: "nm",
    value: "20",
    label: "Test cases completed",
    context: "Browser automation coverage",
    quote: "20 test cases",
    skills: ["Nightwatch.js"],
    ask: "What test cases did Tchaas build at Northwestern Mutual?",
  },
];

/** The single number the "All roles" view leads with. */
export const HEADLINE_METRIC_ID = "fy25-value";

export type Evidence = {
  layerId: "L1" | "L2" | "L3" | "L4" | "L5";
  roleId: RoleId;
  text: string;
  quote: string;
  featured?: boolean;
};

/** How each role touched each layer of the strategy-to-value framework. */
export const FRAMEWORK_EVIDENCE: Evidence[] = [
  // Business Architect
  { layerId: "L1", roleId: "fedex-ba", text: "12 executable solution concepts from enterprise goals", quote: "12 executable solution concepts", featured: true },
  { layerId: "L2", roleId: "fedex-ba", text: "25+ process maps and capability models", quote: "25+ process maps", featured: true },
  { layerId: "L2", roleId: "fedex-ba", text: "15+ data sources in one architecture", quote: "15+ disparate data sources", featured: true },
  { layerId: "L3", roleId: "fedex-ba", text: "50+ cross-functional working sessions", quote: "50+ cross-functional working sessions", featured: true },
  { layerId: "L3", roleId: "fedex-ba", text: "Solution designs for 10+ initiatives", quote: "10+ initiatives" },
  { layerId: "L4", roleId: "fedex-ba", text: "Demand intake for 5 ARTs, 40% faster", quote: "processing time by 40%", featured: true },
  { layerId: "L4", roleId: "fedex-ba", text: "3 solutions bridging Express and Ground", quote: "3 major solutions" },
  { layerId: "L5", roleId: "fedex-ba", text: "$118M estimated strategic value, FY25", quote: "estimated $118M", featured: true },
  { layerId: "L5", roleId: "fedex-ba", text: "Projected 25% fewer handling redundancies", quote: "redundancies by 25%" },
  // Senior Product Owner
  { layerId: "L2", roleId: "fedex-spo", text: "GAP analysis mapping processes to digital solutions", quote: "GAP analysis" },
  { layerId: "L3", roleId: "fedex-spo", text: "Demos to leadership on enterprise potential", quote: "Demoed software solutions" },
  { layerId: "L4", roleId: "fedex-spo", text: "Agnostic APIs serving multiple business areas", quote: "agnostic APIs" },
  { layerId: "L5", roleId: "fedex-spo", text: "Legacy processes removed; data feeding the network data lake", quote: "removed legacy processes" },
  // Product Owner
  { layerId: "L1", roleId: "fedex-po", text: "Roadmap aligned to business direction", quote: "roadmap aligned" },
  { layerId: "L2", roleId: "fedex-po", text: "API contracts for all UI applications", quote: "API contracts" },
  { layerId: "L3", roleId: "fedex-po", text: "User interviews with process engineers", quote: "user interviews with process engineers", featured: true },
  { layerId: "L4", roleId: "fedex-po", text: "16+ features shipped to production", quote: "over 16 new features", featured: true },
  // Kohl's
  { layerId: "L2", roleId: "kohls", text: "Data-flow and impact diagrams in Lucidchart", quote: "Lucidchart" },
  { layerId: "L4", roleId: "kohls", text: "Release deployments for payments products", quote: "Managed code deployment" },
  { layerId: "L5", roleId: "kohls", text: "Pin-pad performance metrics for leadership", quote: "pin-pad performance metrics" },
  // FIS
  { layerId: "L2", roleId: "fis-bsa", text: "Card-network compliance impact analysis", quote: "compliance impacts" },
  { layerId: "L4", roleId: "fis-bsa", text: "15 IT projects; releases across 6 applications", quote: "15 IT development projects", featured: true },
  { layerId: "L4", roleId: "fis-bsa", text: "Agile release improvements (60% delay-reduction target)", quote: "60% reduction" },
  // Northwestern Mutual
  { layerId: "L2", roleId: "nm", text: "Data warehouse process models", quote: "data warehouse process models" },
  { layerId: "L4", roleId: "nm", text: "Browser test automation with Nightwatch.js", quote: "Nightwatch.js" },
];

/** Which discipline each role counts toward in the career chart. */
export const DISCIPLINE_BY_ROLE: Record<RoleId, string> = {
  nm: "Quality assurance",
  "fis-bsa": "Business analysis",
  kohls: "Product management",
  "fedex-po": "Product management",
  "fedex-spo": "Product management",
  "fedex-ba": "Business architecture",
};

/* ---------------- helpers ---------------- */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "Mar 2025 — Present" → months since year 0, for start and end. */
export function parsePeriod(period: string, now = new Date()) {
  const [a, b] = period.split(/\s*[—–-]\s*/);
  const toMonths = (s: string | undefined) => {
    if (!s || /present/i.test(s)) return now.getFullYear() * 12 + now.getMonth();
    const [mon, year] = s.trim().split(/\s+/);
    return Number(year) * 12 + Math.max(0, MONTHS.indexOf(mon.slice(0, 3)));
  };
  return { start: toMonths(a), end: toMonths(b) };
}

export function getRole(roleId: string): Role | undefined {
  return ROLES.find((r) => r.id === roleId);
}

/** The full résumé bullet behind a metric or evidence item. */
export function findSourceBullet(roleId: string, quote: string): string | undefined {
  const role = getRole(roleId);
  return role?.bullets.find((b) => b.toLowerCase().includes(quote.toLowerCase()));
}

/** Years per discipline, computed from role dates so it stays current. */
export function disciplineYears(now = new Date()) {
  const order = ["Quality assurance", "Business analysis", "Product management", "Business architecture"];
  return order.map((name) => {
    const roles = ROLES.filter((r) => DISCIPLINE_BY_ROLE[r.id as RoleId] === name);
    const months = roles.reduce((n, r) => {
      const { start, end } = parsePeriod(r.period, now);
      return n + (end - start);
    }, 0);
    return { name, roles, years: Math.round((months / 12) * 10) / 10 };
  });
}
