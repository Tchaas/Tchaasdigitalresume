import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FileText, Play, ExternalLink } from "lucide-react";
import { FrameworkStack } from "./FrameworkStack";

import { PAPERS } from "../data/research";

const VIDEO_ID = "ssSpAGB72aw";
const VIDEO_URL = "https://youtu.be/ssSpAGB72aw?si=F0Segym8-inQRjA3";

export function ResearchPage() {
  const reduceMotion = useReducedMotion();
  const [isVideoActive, setIsVideoActive] = useState(false);

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
                      className={`absolute inset-0 h-full w-full ${
                        isVideoActive ? "pointer-events-auto" : "pointer-events-none"
                      }`}
                      src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}${
                        isVideoActive ? "?autoplay=1" : ""
                      }`}
                      title="Project presentation — schema-driven scaffolds in OOP for neurodivergent learners"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      frameBorder="0"
                    />
                    {!isVideoActive && (
                      <button
                        type="button"
                        className="absolute inset-0 flex items-center justify-center bg-black/35 text-[var(--color-bone)] transition-colors hover:bg-black/20"
                        onClick={() => setIsVideoActive(true)}
                        aria-label="Play project presentation video"
                      >
                        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-[var(--color-signal-500)] shadow-[0_0_32px_rgba(91,108,255,0.42)] transition-transform hover:scale-105">
                          <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
                        </span>
                      </button>
                    )}
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
