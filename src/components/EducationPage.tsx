import { motion, useReducedMotion } from "framer-motion";
import { StatusBadge } from "./StatusBadge";

import { CREDENTIALS } from "../data/education";

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
