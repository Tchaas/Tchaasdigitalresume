/**
 * Builds the plain-text profile the AI assistant answers from — generated
 * entirely from the same data the website renders, so the two can't drift.
 *
 * - On every site build, vite.config.ts publishes it at /ai-profile.txt.
 * - The Worker (worker/src/index.ts) reads that file from tchaasawright.com,
 *   falling back to a copy bundled at its last deploy.
 */
import { PROFILE } from "./profile";
import { ROLES } from "./experience";
import { CREDENTIALS } from "./education";
import { PAPERS } from "./research";
import { FRAMEWORK_LAYERS } from "./framework";
import { COMPETENCIES, SKILL_EXPERIENCES } from "./skills";
import { VENTURES, COMMUNITY } from "./ventures";
import { METRICS, findSourceBullet, getRole } from "./impact";

const bullets = (items: readonly string[]) => items.map((i) => `- ${i}`).join("\n");

export function buildAiProfile(): string {
  const p = PROFILE;
  const sections: string[] = [];

  sections.push(
    `# ${p.name}, ${p.credentials}
${p.headline}

${p.summary}
In the field since ${p.careerStart}.
Availability: ${p.availability.status} — ${p.availability.roles.join(", ")}. ${p.availability.arrangements}.
Contact: email ${p.contact.email} · LinkedIn ${p.contact.linkedin} · GitHub ${p.contact.github} · Website ${p.contact.website} (résumé PDF and Word downloads there).`,
  );

  sections.push(
    `## Operating framework: strategy to confirmed value (five layers)
Each layer translates the one above into something the next can act on; nothing is done until the number moves against a baseline.
${FRAMEWORK_LAYERS.map((l, i) => `${i + 1}. ${l.name} — ${l.detail}${l.joint ? ` (${l.joint} →)` : ""}`).join("\n")}`,
  );

  sections.push(
    `## Work experience
${ROLES.map(
  (r) => `### ${r.title} — ${r.company} (${r.period.replace(/\s*—\s*/, " – ")})${r.current ? " [current role]" : ""}
${r.metric ? `Headline: ${r.metric.value} ${r.metric.label}.\n` : ""}${r.summary}
${bullets(r.bullets)}
Focus areas: ${r.tags.join(", ")}`,
).join("\n\n")}`,
  );

  sections.push(
    `## Key metrics and their source (qualifiers matter: say "estimated", "projected", or "target" exactly as marked)
${METRICS.map((m) => {
  const role = getRole(m.roleId);
  const src = findSourceBullet(m.roleId, m.quote);
  return `- ${m.value} ${m.label}${m.qualifier ? ` [${m.qualifier}]` : ""} — ${role?.title}, ${role?.company}.${src ? ` Source: "${src}"` : ""}`;
}).join("\n")}`,
  );

  sections.push(
    `## Ventures
${VENTURES.map((v) => `### ${v.name} — ${v.role}\n${v.summary}\n${bullets(v.highlights)}\nSkills/stack: ${v.skills.join(", ")}`).join("\n\n")}

## Board and community service
${COMMUNITY.map((v) => `### ${v.name} — ${v.role}\n${v.summary}\n${bullets(v.highlights)}`).join("\n\n")}`,
  );

  sections.push(
    `## Education
${CREDENTIALS.map(
  (c) => `- ${c.school} — ${c.degree} (${c.location}; ${c.period}). Coursework: ${c.coursework.join(", ")}.`,
).join("\n")}`,
  );

  sections.push(
    `## Research and writing (full PDFs on the Research page)
${PAPERS.map(
  (r) => `### ${r.title}
${r.eyebrow}
${r.summary}
${bullets(r.findings)}${r.appUrl ? `\nCompanion web app: ${r.appUrl}` : ""}`,
).join("\n\n")}`,
  );

  sections.push(
    `## Core competencies
${COMPETENCIES.map((c) => `- ${c.title}: ${c.body}`).join("\n")}

## Skills and where they were applied
${Object.entries(SKILL_EXPERIENCES)
  .map(([skill, uses]) => `- ${skill}: ${uses.join("; ")}`)
  .join("\n")}`,
  );

  return sections.join("\n\n").trim() + "\n";
}
