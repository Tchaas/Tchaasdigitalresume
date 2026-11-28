import { motion, useReducedMotion } from "framer-motion";
import { StatusBadge } from "./StatusBadge";

import { ROLES } from "../data/experience";

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
