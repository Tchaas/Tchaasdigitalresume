/**
 * Startup ventures and board / community service (Development page).
 *
 * Shared by the website and the AI assistant (see src/data/aiProfile.ts).
 * Edit here and both stay in sync.
 */

export type Venture = {
  name: string;
  role: string;
  summary: string;
  highlights: string[];
  skills: string[];
};

export const NOVAONE: Venture = {
  "name": "NovaOne Technology",
  "role": "Co-Founder & Technology Lead",
  "summary": "Co-founded a technology startup focused on developing innovative software solutions. Led the technical development strategy while managing budget, infrastructure, and vendor relationships.",
  "highlights": [
    "Defined and developed product roadmap through customer engagement",
    "Created wireframes for initial product design",
    "Utilized GitHub Copilot to develop JavaScript logic",
    "Managed startup budget and financial planning",
    "Implemented Google Cloud infrastructure",
    "Established CockroachDB database architecture",
    "Built company website using Squarespace",
    "Negotiated operating agreement and equity distribution"
  ],
  "skills": [
    "JavaScript",
    "GitHub Copilot",
    "Google Cloud",
    "CockroachDB",
    "Postman",
    "Squarespace",
    "Fivetran",
    "OKTA",
    "Cypress",
    "Nightwatch.js"
  ]
};

export const BYTONOMY: Venture = {
  "name": "Bytonomy Tech",
  "role": "Co-Founder & Product Lead",
  "summary": "Co-founded an innovative fintech startup revolutionizing financial accessibility. Led product strategy, business planning, and go-to-market initiatives while coordinating cross-functional teams.",
  "highlights": [
    "Established company vision through comprehensive business plan",
    "Created financial models based on project projections",
    "Developed product features and coordinated with Lead Developers",
    "Networked and established client relationships",
    "Developed marketing plan to attract users",
    "Coordinated team building events and work sessions",
    "Created functional documentation for features",
    "Prioritized projects based on timeliness and complexity"
  ],
  "skills": [
    "Business Strategy",
    "Financial Modeling",
    "Product Management",
    "Client Relations",
    "Marketing Strategy",
    "Team Leadership",
    "Documentation",
    "Project Prioritization"
  ]
};

export const HABITAT: Venture = {
  "name": "Habitat for Humanity International",
  "role": "Membership Chair - Young Professionals Board",
  "summary": "Serving on the Young Professionals Board, leading membership growth initiatives and fostering community engagement to support Habitat's mission of building affordable housing worldwide.",
  "highlights": [
    "Led committee operations as Membership Chair",
    "Recruited and engaged new board members",
    "Ensured alignment with organizational goals",
    "Maintained comprehensive meeting documentation",
    "Organized community engagement events",
    "Developed strategic membership growth plans"
  ],
  "skills": [
    "Committee Leadership",
    "Member Recruitment",
    "Strategic Alignment",
    "Community Engagement",
    "Documentation",
    "Event Planning"
  ]
};

export const VENTURES: Venture[] = [NOVAONE, BYTONOMY];
export const COMMUNITY: Venture[] = [HABITAT];
