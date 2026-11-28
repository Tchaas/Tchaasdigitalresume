/**
 * Who Tchaas is, in one place: headline, summary, contact, availability.
 *
 * Shared by the website and the AI assistant (see src/data/aiProfile.ts).
 * Keep private details (phone, home address) OUT of this folder — the AI
 * can repeat anything here to any visitor.
 */

export const PROFILE = {
  name: "Tchaas Alexander-Wright",
  credentials: "MBA",
  headline: "Business Architect | MBA | MS Computer Science Candidate, Georgia Tech",
  summary:
    "Business Architect with 8+ years in product management and business analysis, leading demand management, capability modeling, and solution architecture across 5 ARTs at FedEx. Builds AI agents that automate business architecture work.",
  careerStart: 2015,
  availability: {
    status: "Open to opportunities",
    roles: ["Technical product management", "Solutions architecture", "Enterprise transformation"],
    arrangements: "Full-time and consulting; open to remote",
  },
  contact: {
    email: "tchaasawright@gmail.com",
    linkedin: "https://www.linkedin.com/in/tchaas-alexander-wright/",
    github: "https://github.com/Tchaas",
    website: "https://tchaasawright.com",
  },
} as const;
