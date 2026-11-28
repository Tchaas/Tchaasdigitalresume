/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL of the Claude-powered résumé assistant worker (see /worker). */
  readonly VITE_AI_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
