import { motion, useReducedMotion } from "framer-motion";

export type Layer = {
  id: string;
  name: string;
  detail: string;
  /** verb describing the translation into the NEXT layer */
  joint?: string;
};

export const FRAMEWORK_LAYERS: Layer[] = [
  {
    id: "L1",
    name: "Executive strategy",
    detail: "Objectives carrying explicit financial targets and a documented baseline.",
    joint: "translation",
  },
  {
    id: "L2",
    name: "Business architecture",
    detail: "Capabilities, value streams, and the gap analysis that shows what must change.",
    joint: "validation",
  },
  {
    id: "L3",
    name: "Product discovery",
    detail: "Validated direction and conceptual architecture, tested before commitment.",
    joint: "decomposition",
  },
  {
    id: "L4",
    name: "Agile delivery",
    detail: "Epics and stories that still point back to the objective that created them.",
    joint: "measurement",
  },
  {
    id: "L5",
    name: "Financial value",
    detail: "ROI, NPV, payback, and unit cost measured against the original baseline.",
  },
];

type Props = {
  /** hide the per-layer description text for tighter placements */
  compact?: boolean;
  className?: string;
};

/**
 * The five-layer traceability framework from "AI-Augmented Business
 * Architecture". Used as the signature visual across the site.
 */
export function FrameworkStack({ compact = false, className = "" }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`u-card overflow-hidden ${className}`}
      role="list"
      aria-label="Five-layer strategy-to-value framework"
    >
      {/* caption bar */}
      <div className="flex items-baseline justify-between gap-4 border-b border-[var(--color-line)] px-4 py-3 sm:px-5">
        <span className="u-eyebrow">Operating framework</span>
        <span className="u-eyebrow hidden sm:inline">AI-augmented · human-governed</span>
      </div>

      {FRAMEWORK_LAYERS.map((layer, i) => {
        const isLast = i === FRAMEWORK_LAYERS.length - 1;

        return (
          <div key={layer.id}>
            <motion.div
              role="listitem"
              initial={reduceMotion ? false : { opacity: 0, x: -12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              tabIndex={0}
              className={`group grid grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-x-4 gap-y-1 border-l-2 border-transparent px-4 py-3.5 transition-colors duration-200 sm:px-5 ${
                isLast
                  ? "hover:border-l-[var(--color-brass-500)]"
                  : "hover:border-l-[var(--color-signal-500)]"
              } hover:bg-white/[0.025] focus-visible:bg-white/[0.025]`}
            >
              <span
                className={`u-mono text-xs font-semibold ${
                  isLast ? "text-[var(--color-brass-400)]" : "text-[var(--color-signal-400)]"
                }`}
              >
                {layer.id}
              </span>

              <span className="min-w-0">
                <span className="block font-[family-name:var(--font-display)] text-[0.9375rem] font-semibold uppercase tracking-wide text-[var(--color-bone)]">
                  {layer.name}
                </span>
                {!compact && (
                  <span className="mt-0.5 block text-sm text-[var(--color-dim)]">
                    {layer.detail}
                  </span>
                )}
              </span>
            </motion.div>

            {/* translation joint */}
            {layer.joint && (
              <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 border-y border-[var(--color-line)] bg-black/20 px-4 py-1.5 sm:px-5">
                <span aria-hidden="true" className="flex justify-center">
                  <span className="h-full w-px bg-[var(--color-line-strong)]" />
                </span>
                <span className="u-eyebrow text-[0.625rem]">{layer.joint} ↓</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
