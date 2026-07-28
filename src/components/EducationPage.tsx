import { motion, useReducedMotion } from "framer-motion";
import { StatusBadge } from "./StatusBadge";

type Credential = {
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

/* Source of truth: TchaasHakeemAlexanderWright_Resume.docx */
const CREDENTIALS: Credential[] = [
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

export function EducationPage() {
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
          <p className="u-eyebrow u-eyebrow-accent mb-4">Foundation</p>
          <h1 className="u-display max-w-[14ch] text-[clamp(2.25rem,7vw,4.25rem)]">
            Education
          </h1>
          <p className="mt-6 max-w-[58ch] text-lg text-[var(--color-fog)]">
            Four degrees built in sequence rather than all at once — networking, then
            information systems, then business, and now computer science. Each one added
            a layer the previous work needed.
          </p>
        </motion.div>
      </section>

      {/* credentials */}
      <section className="u-shell pb-16 sm:pb-24">
        <div className="grid gap-5 lg:grid-cols-2">
          {CREDENTIALS.map((c, i) => (
            <motion.article
              key={c.id}
              {...rise(Math.min(i, 3) * 0.06)}
              className="u-card u-card-hover flex flex-col p-5 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <img
                  src={c.logo}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-12 w-12 flex-none rounded border border-[var(--color-line)] bg-white/95 object-contain p-1.5"
                />
                <div className="min-w-0 flex-1">
                  <h2 className="text-[1.0625rem] leading-snug">{c.school}</h2>
                  <p className="u-mono mt-1.5 text-[0.625rem] uppercase tracking-[0.12em] text-[var(--color-dim)]">
                    {c.location}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-[var(--color-bone)]">{c.degree}</p>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="u-mono text-[0.6875rem] tracking-[0.08em] text-[var(--color-dim)]">
                  {c.period}
                </span>
                {c.inProgress && <StatusBadge>In progress</StatusBadge>}
              </div>

              <div className="mt-6 border-t border-[var(--color-line)] pt-5">
                <p className="u-eyebrow mb-3">Selected coursework</p>
                <ul className="flex flex-wrap gap-1.5">
                  {c.coursework.map((course) => (
                    <li key={course} className="u-chip">
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
