# Résumé AI assistant (Cloudflare Worker)

Powers the **Ask my AI** panel on tchaasawright.com. Visitors can ask questions
about Tchaas's background, or paste a job description for a fit analysis.
Answers come only from `src/profile.ts`, using Claude Haiku 5.5 (`claude-haiku-5-5`), the lowest-cost Claude model.

The worker exists so the Anthropic API key never ships to the browser.

## One-time setup

1. **Get an API key** at https://console.anthropic.com. Set a monthly
   **spend limit** under Settings → Limits so a public chatbot can't surprise you.
2. **Deploy the worker:**
   ```bash
   cd worker
   npm install
   npx wrangler login                       # opens Cloudflare in your browser
   npx wrangler secret put ANTHROPIC_API_KEY  # paste the key when prompted
   npm run deploy
   ```
   Wrangler prints a URL such as `https://tchaas-resume-ai.<you>.workers.dev`.
3. **Point the site at it:** in GitHub, open the repo's Settings → Secrets and variables →
   Actions → **Variables** tab and add `VITE_AI_ENDPOINT` = that URL. Then push
   to `main` (or re-run the deploy workflow). Until this variable exists, the
   panel is hidden.

## Local development

```bash
cp .dev.vars.example .dev.vars   # add your key
npm run dev                      # worker on http://localhost:8787
# in the repo root, in another terminal:
VITE_AI_ENDPOINT=http://localhost:8787 npm run dev
```

## Keeping it accurate

When the résumé or site changes, edit `src/profile.ts` and run `npm run deploy`.
Only put information there you're comfortable with any visitor seeing.

## Guardrails built in

- Allows requests only from the origins in `wrangler.toml` → `ALLOWED_ORIGINS`.
- 10 requests per minute per IP (`[[ratelimits]]` in `wrangler.toml`).
- Caps message length and history; `max_tokens` 1,000 for chat and 2,000 for fit analysis.
- The system prompt keeps the assistant on-topic, factual (no invented details),
  and resistant to "ignore your instructions" attempts.
- The profile prompt is cached, so repeat questions cost much less.
