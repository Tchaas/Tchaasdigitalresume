import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Quote, Sparkles, X } from "lucide-react";
import { NavLink, useSearchParams } from "react-router-dom";
import { isAskAIEnabled, openAskAI } from "./AskAI";
import { ROLES, type Role } from "../data/experience";
import { FRAMEWORK_LAYERS } from "../data/framework";
import {
  DISCIPLINE_BY_ROLE,
  FRAMEWORK_EVIDENCE,
  HEADLINE_METRIC_ID,
  METRICS,
  disciplineYears,
  findSourceBullet,
  getRole,
  parsePeriod,
  type Evidence,
  type Metric,
  type RoleId,
} from "../data/impact";

/* ============================================================
   Small shared pieces
   ============================================================ */

const shortTitle = (r: Role) =>
  r.title
    .replace("Senior Business System Analyst / Product Owner", "Sr. BSA / PO")
    .replace("Associate Automation Quality Assurance", "Automation QA")
    .replace("Product Manager, Payments", "Product Manager")
    .replace("Senior Product Owner", "Sr. Product Owner");

const years = (r: Role) => {
  const [a, b] = r.period.split(/\s*[—–-]\s*/).map((p) => p.replace(/^[A-Za-z]{3}\s/, ""));
  return a === b ? a : `${a}–${b}`;
};

function AskHow({ question, label = "Ask my AI how" }: { question: string; label?: string }) {
  if (!isAskAIEnabled) return null;
  return (
    <button
      type="button"
      onClick={() => openAskAI(question)}
      className="u-mono inline-flex items-center gap-1.5 text-[0.625rem] font-medium uppercase tracking-[0.11em] text-[var(--color-signal-400)] transition-colors hover:text-[var(--color-bone)] focus-visible:text-[var(--color-bone)]"
    >
      <Sparkles className="h-3 w-3" aria-hidden="true" />
      {label}
    </button>
  );
}

function QualifierBadge({ q }: { q?: Metric["qualifier"] }) {
  if (!q) return null;
  return (
    <span className="u-mono rounded border border-[var(--color-line-strong)] px-1.5 py-0.5 text-[0.5625rem] uppercase tracking-[0.1em] text-[var(--color-dim)]">
      {q}
    </span>
  );
}

/** The résumé bullet behind a number — the core of every drill-down. */
function SourceQuote({ roleId, quote }: { roleId: string; quote: string }) {
  const role = getRole(roleId);
  const bullet = findSourceBullet(roleId, quote);
  if (!role) return null;
  return (
    <figure className="rounded border border-[var(--color-line)] bg-black/20 p-4">
      <p className="u-eyebrow mb-2 flex items-center gap-1.5">
        <Quote className="h-3 w-3" aria-hidden="true" />
        From the résumé
      </p>
      <blockquote className="text-sm leading-relaxed text-[var(--color-bone)]">
        {bullet ?? role.summary}
      </blockquote>
      <figcaption className="mt-2 text-xs text-[var(--color-dim)]">
        {role.title}, {role.company} · {role.period.replace(/\s*—\s*/, " – ")}
      </figcaption>
    </figure>
  );
}

/* ============================================================
   Career timeline — the filter for the whole page
   ============================================================ */

function CareerTimeline({
  selected,
  onSelect,
}: {
  selected: RoleId | null;
  onSelect: (id: RoleId | null) => void;
}) {
  const chronological = useMemo(() => [...ROLES].reverse(), []);
  const spans = chronological.map((r) => ({ role: r, ...parsePeriod(r.period) }));
  const min = Math.min(...spans.map((s) => s.start));
  const max = Math.max(...spans.map((s) => s.end));
  const total = max - min;
  const firstYear = Math.floor(min / 12);
  const lastYear = Math.floor(max / 12);
  const yearTicks = Array.from({ length: lastYear - firstYear + 1 }, (_, i) => firstYear + i).filter(
    (y) => y * 12 >= min,
  );

  return (
    <div className="u-card p-4 sm:p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="u-eyebrow u-eyebrow-accent">Filter by role</p>
        <p className="text-xs text-[var(--color-dim)]">
          Select a role to filter every metric, the framework, and the chart.
        </p>
      </div>

      {/* proportional time track (decorative on small screens; buttons below are the control) */}
      <div className="relative mt-5 hidden sm:block" aria-hidden="true">
        <div className="relative h-3">
          {spans.map(({ role, start, end }) => {
            const isOn = selected === null || selected === role.id;
            return (
              <button
                key={role.id}
                type="button"
                tabIndex={-1}
                title={`${role.title}, ${role.company}`}
                onClick={() => onSelect(selected === role.id ? null : (role.id as RoleId))}
                className="absolute inset-y-0 rounded-sm transition-opacity duration-200"
                style={{
                  left: `calc(${((start - min) / total) * 100}% + 1px)`,
                  width: `calc(${((end - start) / total) * 100}% - 2px)`,
                  background: isOn ? "var(--color-signal-500)" : "var(--color-ink-700)",
                }}
              />
            );
          })}
        </div>
        <div className="relative mt-1.5 h-4">
          {yearTicks.map((y) => (
            <span
              key={y}
              className="u-mono absolute -translate-x-1/2 text-[0.5625rem] tabular-nums text-[var(--color-dim)]"
              style={{ left: `${((y * 12 - min) / total) * 100}%` }}
            >
              {y}
            </span>
          ))}
        </div>
      </div>

      {/* role buttons — the accessible control */}
      <div
        role="group"
        aria-label="Filter dashboard by role"
        className="mt-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap"
      >
        <button
          type="button"
          aria-pressed={selected === null}
          onClick={() => onSelect(null)}
          className={`col-span-2 rounded border px-3 py-2 text-left transition-colors sm:col-span-1 ${
            selected === null
              ? "border-[var(--color-signal-500)] bg-[var(--color-signal-500)]/15 text-[var(--color-bone)]"
              : "border-[var(--color-line)] text-[var(--color-fog)] hover:border-[var(--color-line-strong)]"
          }`}
        >
          <span className="block text-sm font-medium">All roles</span>
          <span className="u-mono block text-[0.625rem] text-[var(--color-dim)]">2015–today</span>
        </button>
        {chronological.map((r) => {
          const on = selected === r.id;
          return (
            <button
              key={r.id}
              type="button"
              aria-pressed={on}
              onClick={() => onSelect(on ? null : (r.id as RoleId))}
              className={`min-w-0 rounded border px-3 py-2 text-left transition-colors ${
                on
                  ? "border-[var(--color-signal-500)] bg-[var(--color-signal-500)]/15 text-[var(--color-bone)]"
                  : "border-[var(--color-line)] text-[var(--color-fog)] hover:border-[var(--color-line-strong)]"
              }`}
            >
              <span className="block text-sm font-medium">{shortTitle(r)}</span>
              <span className="u-mono block text-[0.625rem] text-[var(--color-dim)]">
                {r.company} · {years(r)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ============================================================
   Metric tiles + drill-down panel
   ============================================================ */

function MetricDetail({
  metric,
  showRoleLink,
  onFilterRole,
  onClose,
}: {
  metric: Metric;
  showRoleLink: boolean;
  onFilterRole: (id: RoleId) => void;
  onClose: () => void;
}) {
  const role = getRole(metric.roleId);
  return (
    <div className="u-card border-[var(--color-signal-500)]/40 p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="u-eyebrow u-eyebrow-accent">Behind the number</p>
          <p className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-[2rem] font-semibold leading-none text-[var(--color-bone)]">
              {metric.value}
            </span>
            <span className="text-base text-[var(--color-bone)]">{metric.label}</span>
            <QualifierBadge q={metric.qualifier} />
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded text-[var(--color-dim)] transition-colors hover:bg-[var(--color-ink-700)] hover:text-[var(--color-bone)]"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <SourceQuote roleId={metric.roleId} quote={metric.quote} />
        <div className="flex flex-col gap-4">
          <div>
            <p className="u-eyebrow mb-2">Skills applied</p>
            <ul className="flex flex-wrap gap-1.5">
              {metric.skills.map((s) => (
                <li key={s} className="u-chip">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          {role && (
            <div>
              <p className="u-eyebrow mb-2">The role</p>
              <p className="text-sm text-[var(--color-fog)]">{role.summary}</p>
            </div>
          )}
          <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3">
            {showRoleLink && role && (
              <button
                type="button"
                onClick={() => onFilterRole(metric.roleId)}
                className="u-mono inline-flex items-center gap-1.5 text-[0.625rem] font-medium uppercase tracking-[0.11em] text-[var(--color-fog)] transition-colors hover:text-[var(--color-bone)]"
              >
                Show all of this role
                <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </button>
            )}
            <AskHow question={metric.ask} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricTile({
  metric,
  open,
  onToggle,
  showRole,
}: {
  metric: Metric;
  open: boolean;
  onToggle: () => void;
  showRole: boolean;
}) {
  const role = getRole(metric.roleId);
  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={onToggle}
      className={`u-card flex h-full w-full flex-col p-4 text-left transition-colors sm:p-5 ${
        open
          ? "border-[var(--color-signal-500)] bg-[var(--color-ink-700)]"
          : "hover:border-[var(--color-line-strong)] hover:bg-[var(--color-ink-700)]"
      }`}
    >
      <span className="min-h-[2.6em] text-sm leading-snug text-[var(--color-fog)]">{metric.label}</span>
      <span className="mt-2 flex items-baseline gap-2">
        <span className="text-[2rem] font-semibold leading-none text-[var(--color-bone)]">{metric.value}</span>
        <QualifierBadge q={metric.qualifier} />
      </span>
      <span className="mt-2 flex-1 text-xs leading-snug text-[var(--color-dim)]">
        {showRole && role ? `${role.company} · ${shortTitle(role)}` : metric.context}
      </span>
      <span className="u-mono mt-4 inline-flex items-center gap-1 text-[0.625rem] uppercase tracking-[0.11em] text-[var(--color-signal-400)]">
        {open ? "Hide source" : "See the source"}
        <ChevronDown
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </span>
    </button>
  );
}

/* ============================================================
   Framework with evidence (accordion per item)
   ============================================================ */

function FrameworkEvidence({ selected }: { selected: RoleId | null }) {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const items = FRAMEWORK_EVIDENCE.filter((e) => (selected ? e.roleId === selected : e.featured));
  const key = (e: Evidence) => `${e.layerId}:${e.roleId}:${e.quote}`;

  return (
    <ol className="u-card overflow-hidden">
      {FRAMEWORK_LAYERS.map((layer, i) => {
        const isLast = i === FRAMEWORK_LAYERS.length - 1;
        const evidence = items.filter((e) => e.layerId === layer.id);
        return (
          <li
            key={layer.id}
            className={`grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-3 px-4 py-4 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-x-4 sm:px-5 ${
              i > 0 ? "border-t border-[var(--color-line)]" : ""
            }`}
          >
            <span
              className={`u-mono pt-0.5 text-xs font-semibold ${
                isLast ? "text-[var(--color-brass-400)]" : "text-[var(--color-signal-400)]"
              }`}
            >
              {layer.id}
            </span>
            <div className="min-w-0">
              <span className="block font-[family-name:var(--font-display)] text-[0.9375rem] font-semibold uppercase tracking-wide text-[var(--color-bone)]">
                {layer.name}
              </span>
              {evidence.length === 0 ? (
                <p className="mt-2 text-sm italic text-[var(--color-dim)]">
                  Not a focus of this role.
                </p>
              ) : (
                <ul className="mt-2 flex flex-col gap-1">
                  {evidence.map((e) => {
                    const k = key(e);
                    const open = openKey === k;
                    const role = getRole(e.roleId);
                    return (
                      <li key={k}>
                        <button
                          type="button"
                          aria-expanded={open}
                          onClick={() => setOpenKey(open ? null : k)}
                          className="group flex w-full items-start gap-2 rounded py-1 text-left text-sm text-[var(--color-fog)] transition-colors hover:text-[var(--color-bone)]"
                        >
                          <span
                            aria-hidden="true"
                            className={`mt-[0.6em] h-px w-2 shrink-0 ${
                              isLast ? "bg-[var(--color-brass-500)]" : "bg-[var(--color-signal-500)]"
                            }`}
                          />
                          <span className="flex-1">
                            {e.text}
                            {!selected && role && (
                              <span className="text-[var(--color-dim)]"> · {role.company}</span>
                            )}
                          </span>
                          <ChevronDown
                            className={`mt-1 h-3.5 w-3.5 shrink-0 text-[var(--color-dim)] transition-transform group-hover:text-[var(--color-bone)] ${
                              open ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-2 pl-4 pt-1">
                                <SourceQuote roleId={e.roleId} quote={e.quote} />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/* ============================================================
   Years-by-discipline chart (highlights the selected role)
   ============================================================ */

function DisciplineChart({ selected }: { selected: RoleId | null }) {
  const [active, setActive] = useState<number | null>(null);
  const data = useMemo(() => disciplineYears(), []);
  const max = Math.ceil(Math.max(...data.map((d) => d.years)));
  const ticks = Array.from({ length: max + 1 }, (_, i) => i);
  const selectedDiscipline = selected ? DISCIPLINE_BY_ROLE[selected] : null;

  return (
    <figure className="u-card p-5 sm:p-6">
      <figcaption>
        <p className="u-eyebrow u-eyebrow-accent">Career path</p>
        <h3 className="mt-2 text-base text-[var(--color-bone)]">Years by discipline</h3>
        <p className="mt-1 text-sm text-[var(--color-dim)]">
          {selectedDiscipline
            ? `Highlighting ${selectedDiscipline.toLowerCase()}, where the selected role sits.`
            : "In order, from test automation to enterprise architecture."}
        </p>
      </figcaption>

      <div className="mt-6 grid grid-cols-1 gap-x-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-y-3">
        {data.map((d, i) => {
          const pct = (d.years / max) * 100;
          const isActive = active === i;
          const dim = selectedDiscipline !== null && d.name !== selectedDiscipline;
          return (
            <div key={d.name} className="contents">
              <span
                className={`text-sm transition-colors sm:mt-0 sm:self-center ${i > 0 ? "mt-3" : ""} ${
                  dim ? "text-[var(--color-dim)]" : "text-[var(--color-fog)]"
                }`}
              >
                {d.name}
              </span>
              <div className="h-8 pr-14">
                <div className="relative h-full">
                  {ticks.map((t) => (
                    <span
                      key={t}
                      aria-hidden="true"
                      className="absolute inset-y-0 w-px bg-[var(--color-line)]"
                      style={{ left: `${(t / max) * 100}%` }}
                    />
                  ))}
                  <button
                    type="button"
                    onPointerEnter={() => setActive(i)}
                    onPointerLeave={() => setActive(null)}
                    onFocus={() => setActive(i)}
                    onBlur={() => setActive(null)}
                    aria-label={`${d.name}: ${d.years} years. ${d.roles.map((r) => `${r.title}, ${r.company}`).join("; ")}`}
                    className="absolute inset-y-0 left-0 flex items-center focus-visible:outline-none"
                    style={{ width: `max(${pct}%, 1.5rem)` }}
                  >
                    <span
                      className="block h-5 w-full rounded-r transition-[background-color,filter] duration-200"
                      style={{
                        background: dim ? "var(--color-ink-700)" : "var(--color-signal-500)",
                        filter: isActive ? "brightness(1.25)" : undefined,
                        outline: isActive ? "1px solid var(--color-signal-400)" : undefined,
                        outlineOffset: 2,
                      }}
                    />
                  </button>
                  <span
                    className="u-mono pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap pl-2 text-xs text-[var(--color-fog)]"
                    style={{ left: `${pct}%` }}
                  >
                    {d.years.toFixed(1)} yrs
                  </span>
                  {isActive && (
                    <div
                      role="tooltip"
                      className="pointer-events-none absolute bottom-full left-0 z-10 mb-2 w-max max-w-[18rem] rounded border border-[var(--color-line-strong)] bg-[var(--color-ink-950)] px-3 py-2 shadow-lg shadow-black/50"
                    >
                      <p className="text-sm font-semibold text-[var(--color-bone)]">{d.years.toFixed(1)} years</p>
                      <ul className="mt-1 flex flex-col gap-0.5">
                        {d.roles.map((r) => (
                          <li key={r.id} className="text-xs text-[var(--color-dim)]">
                            {r.company} · {r.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        <span aria-hidden="true" className="hidden sm:block" />
        <div aria-hidden="true" className="mt-2 h-4 pr-14 sm:mt-0">
          <div className="relative h-full">
            {ticks.map((t) => (
              <span
                key={t}
                className="u-mono absolute -translate-x-1/2 text-[0.625rem] tabular-nums text-[var(--color-dim)]"
                style={{ left: `${(t / max) * 100}%` }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <details className="mt-5 text-sm">
        <summary className="u-mono cursor-pointer text-[0.6875rem] uppercase tracking-[0.11em] text-[var(--color-dim)] hover:text-[var(--color-bone)]">
          View as table
        </summary>
        <table className="mt-3 w-full text-left">
          <thead>
            <tr className="text-[var(--color-dim)]">
              <th className="py-1 pr-4 font-medium">Discipline</th>
              <th className="py-1 pr-4 font-medium">Roles</th>
              <th className="py-1 text-right font-medium">Years</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.name} className="border-t border-[var(--color-line)] text-[var(--color-fog)]">
                <td className="py-1.5 pr-4 align-top">{d.name}</td>
                <td className="py-1.5 pr-4 align-top">
                  {d.roles.map((r) => `${r.company} · ${r.title}`).join("; ")}
                </td>
                <td className="py-1.5 text-right align-top tabular-nums">{d.years.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}

/* ============================================================
   PAGE
   ============================================================ */

export function ImpactPage() {
  const reduceMotion = useReducedMotion();
  const [params, setParams] = useSearchParams();
  const roleParam = params.get("role");
  const selected = (ROLES.some((r) => r.id === roleParam) ? roleParam : null) as RoleId | null;
  const selectedRole = selected ? getRole(selected) : undefined;
  const [openMetric, setOpenMetric] = useState<string | null>(null);

  const selectRole = (id: RoleId | null) => {
    setOpenMetric(null);
    setParams(id ? { role: id } : {}, { replace: true });
  };

  const roleMetrics = selected ? METRICS.filter((m) => m.roleId === selected) : METRICS.filter((m) => m.featured);
  const hero = selected
    ? roleMetrics[0]
    : METRICS.find((m) => m.id === HEADLINE_METRIC_ID);
  const tiles = roleMetrics.filter((m) => m !== hero);
  // Only show a detail that belongs to what's on screen (the role can also
  // change via the URL or back button, not just the filter buttons).
  const detail = METRICS.find((m) => m.id === openMetric && roleMetrics.includes(m));

  // On narrow screens the panel can open far below the tapped tile — bring it into view.
  const detailRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!detail) return;
    const id = window.setTimeout(() => {
      const el = detailRef.current;
      if (!el) return;
      const { top } = el.getBoundingClientRect();
      if (top > window.innerHeight - 120) {
        el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      }
    }, 50);
    return () => window.clearTimeout(id);
  }, [detail, reduceMotion]);

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
      <section className="u-shell pt-14 pb-8 sm:pt-20 sm:pb-10">
        <motion.div {...rise()}>
          <p className="u-eyebrow u-eyebrow-accent mb-4">Impact</p>
          <h1 className="u-display max-w-[16ch] text-[clamp(2.25rem,7vw,4.25rem)]">Measured outcomes</h1>
          <p className="mt-6 max-w-[62ch] text-lg text-[var(--color-fog)]">
            The numbers behind a career that runs from test automation in 2015 to enterprise
            architecture at FedEx today. Filter by role, then open any number to see the
            résumé line it comes from.
          </p>
        </motion.div>
      </section>

      <section className="u-shell pb-14 sm:pb-20">
        <motion.div {...rise()}>
          <CareerTimeline selected={selected} onSelect={selectRole} />
        </motion.div>

        {/* selected-role context */}
        <AnimatePresence mode="wait">
          {selectedRole && (
            <motion.div
              key={selectedRole.id}
              initial={reduceMotion ? false : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 flex flex-col gap-3 rounded border border-[var(--color-line)] bg-[var(--color-ink-900)] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
            >
              <div>
                <p className="text-base text-[var(--color-bone)]">
                  {selectedRole.title} · {selectedRole.company}
                  <span className="u-mono ml-2 text-xs text-[var(--color-dim)]">
                    {selectedRole.period.replace(/\s*—\s*/, " – ")}
                  </span>
                </p>
                <p className="mt-1 max-w-[80ch] text-sm text-[var(--color-fog)]">{selectedRole.summary}</p>
              </div>
              <NavLink to="/experience" className="u-btn shrink-0 self-start sm:self-center">
                Full role details
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>

        {/* metrics */}
        {hero ? (
          <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2.1fr)]">
            <button
              type="button"
              aria-expanded={openMetric === hero.id}
              onClick={() => setOpenMetric(openMetric === hero.id ? null : hero.id)}
              className={`u-card flex flex-col justify-between border-l-2 border-l-[var(--color-brass-500)] p-6 text-left transition-colors sm:p-7 ${
                openMetric === hero.id ? "bg-[var(--color-ink-700)]" : "hover:bg-[var(--color-ink-700)]"
              }`}
            >
              <span>
                <span className="u-eyebrow block" style={{ color: "var(--color-brass-400)" }}>
                  Headline · {getRole(hero.roleId)?.company}
                </span>
                <span className="mt-4 flex flex-wrap items-baseline gap-3">
                  <span className="text-[clamp(3rem,9vw,4.5rem)] font-semibold leading-none tracking-tight text-[var(--color-bone)]">
                    {hero.value}
                  </span>
                  <QualifierBadge q={hero.qualifier} />
                </span>
                <span className="mt-3 block text-base text-[var(--color-bone)]">{hero.label}</span>
                <span className="mt-1 block text-sm text-[var(--color-dim)]">{hero.context}</span>
              </span>
              <span className="u-mono mt-6 inline-flex items-center gap-1 text-[0.625rem] uppercase tracking-[0.11em] text-[var(--color-signal-400)]">
                {openMetric === hero.id ? "Hide source" : "See the source"}
                <ChevronDown
                  className={`h-3 w-3 transition-transform ${openMetric === hero.id ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </span>
            </button>

            {tiles.length > 0 ? (
              <ul className="grid auto-rows-fr grid-cols-2 gap-4 md:grid-cols-4">
                {tiles.map((m) => (
                  <li key={m.id}>
                    <MetricTile
                      metric={m}
                      open={openMetric === m.id}
                      onToggle={() => setOpenMetric(openMetric === m.id ? null : m.id)}
                      showRole={!selected}
                    />
                  </li>
                ))}
                {/* few numbers for this role: fill the row with what the work involved */}
                {selected && tiles.length <= 2 && (
                  <li className={`col-span-2 ${tiles.length === 1 ? "md:col-span-3" : "md:col-span-2"}`}>
                    <RoleHighlights role={selectedRole} compact />
                  </li>
                )}
              </ul>
            ) : (
              <RoleHighlights role={selectedRole} />
            )}
          </div>
        ) : (
          <div className="mt-4">
            <RoleHighlights role={selectedRole} wide />
          </div>
        )}

        {/* drill-down */}
        <AnimatePresence>
          {detail && (
            <motion.div
              key={detail.id}
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-4 scroll-mt-24"
              aria-live="polite"
              ref={detailRef}
            >
              <MetricDetail
                metric={detail}
                showRoleLink={!selected}
                onFilterRole={selectRole}
                onClose={() => setOpenMetric(null)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* framework + chart */}
      <section className="u-section border-t border-[var(--color-line)] bg-[var(--color-ink-900)]">
        <div className="u-shell grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <motion.div {...rise()}>
            <p className="u-eyebrow u-eyebrow-accent mb-3">Strategy to confirmed value</p>
            <h2 className="u-display text-[clamp(1.75rem,4.5vw,2.5rem)]">The framework, with evidence</h2>
            <p className="mt-4 mb-8 max-w-[52ch] text-[var(--color-fog)]">
              {selectedRole
                ? `How the ${selectedRole.title} role at ${selectedRole.company} touched each layer. Open an item to see its source.`
                : "Each layer of my operating framework, with what it produced. Open an item to see its source."}
            </p>
            <FrameworkEvidence selected={selected} />
          </motion.div>

          <motion.div {...rise(0.08)} className="flex flex-col gap-4">
            <DisciplineChart selected={selected} />

            <div className="u-card p-5 sm:p-6">
              <p className="u-eyebrow u-eyebrow-accent">AI in practice</p>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-[var(--color-fog)]">
                <li>
                  <span className="text-[var(--color-bone)]">AI agents</span> that automate business
                  architecture tasks at FedEx, cutting manual analysis by 50%.
                </li>
                <li>
                  <span className="text-[var(--color-bone)]">AI-structured portfolio data</span> that
                  generates lean business cases and problem statements.
                </li>
                <li>
                  <span className="text-[var(--color-bone)]">Research:</span> a five-layer AI-augmented
                  business architecture framework, governed by human judgment.
                </li>
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <NavLink to="/research" className="u-btn">
                  Read the paper
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </NavLink>
                <AskHow
                  question="What AI experience does Tchaas have, and how have they applied it at FedEx?"
                  label="Ask about my AI work"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <p className="u-shell pb-10 pt-6 text-xs text-[var(--color-dim)]">
        Every figure links to the résumé line it comes from. “Estimated”, “projected”, and “target”
        values are labeled as such.
      </p>
    </div>
  );
}

/** For roles with no headline numbers: show what the work involved instead. */
function RoleHighlights({
  role,
  wide = false,
  compact = false,
}: {
  role?: Role;
  wide?: boolean;
  compact?: boolean;
}) {
  if (!role) return null;
  return (
    <div className={`u-card p-5 sm:p-6 ${wide ? "" : "h-full"}`}>
      <p className="u-eyebrow u-eyebrow-accent">What the work involved</p>
      <ul className={`mt-4 grid gap-3 ${wide ? "md:grid-cols-2" : ""}`}>
        {role.bullets.slice(0, wide ? 6 : compact ? 3 : 4).map((b) => (
          <li key={b} className="relative pl-4 text-sm text-[var(--color-fog)]">
            <span aria-hidden="true" className="absolute left-0 top-[0.6em] h-px w-2 bg-[var(--color-signal-500)]" />
            {b}
          </li>
        ))}
      </ul>
      {!compact && (
        <p className="mt-4 text-xs text-[var(--color-dim)]">
          This role has no headline metrics on the résumé, so here is the work itself.
        </p>
      )}
    </div>
  );
}
