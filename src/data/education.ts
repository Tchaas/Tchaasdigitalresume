/**
 * Education.
 *
 * Shared by the website and the AI assistant (see src/data/aiProfile.ts).
 * Edit here and both stay in sync.
 */

export type Credential = {
  id: string;
  school: string;
  abbr?: string;
  degree: string;
  location: string;
  period: string;
  inProgress?: boolean;
  logo: string;
  coursework: string[];
};

export const CREDENTIALS: Credential[] = [
  {
    id: "gt",
    school: "Georgia Institute of Technology",
    abbr: "Georgia Tech",
    degree: "Master of Science, Computer Science",
    location: "Atlanta, GA",
    period: "2025 — anticipated 2027",
    inProgress: true,
    logo: "/icons/education/gt-logo.jpeg",
    coursework: [
      "Intro to Cognitive Science",
      "Human-Computer Interaction",
    ],
  },
  {
    id: "ud",
    school: "University of Dayton",
    abbr: "UD",
    degree: "Master of Business Administration",
    location: "Dayton, OH",
    period: "Completed",
    logo: "/icons/education/ud-logo.webp",
    coursework: [
      "Corporate Finance",
      "Business Analytics",
      "Managerial Economics",
      "Case Studies in Analytics",
      "Negotiation",
    ],
  },
  {
    id: "msoe",
    school: "Milwaukee School of Engineering",
    abbr: "MSOE",
    degree: "Bachelor of Science, Management Information Systems",
    location: "Milwaukee, WI",
    period: "Completed",
    logo: "/icons/education/msoe-logo.png",
    coursework: [
      "Intro to Java Programming",
      "Intermediate Java Programming",
      "Database Management Systems",
      "Managerial Cost Accounting",
      "Managerial Finance",
    ],
  },
  {
    id: "matc",
    school: "Milwaukee Area Technical College",
    abbr: "MATC",
    degree: "Associate of Science, IT Networking Specialist",
    location: "Milwaukee, WI",
    period: "Completed",
    logo: "/icons/education/matc-logo.jpg",
    coursework: [
      "Cisco 1 — Network Fundamentals",
      "Cisco 2 — Routing Protocols",
      "Cisco 3 — Advanced Routing & Switching",
      "Cisco 4 — WAN Technologies",
      "Network Security (Security+)",
    ],
  },
];
