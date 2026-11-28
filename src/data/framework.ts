/**
 * The five-layer strategy-to-value framework.
 *
 * Shared by the website and the AI assistant (see src/data/aiProfile.ts).
 * Edit here and both stay in sync.
 */

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
