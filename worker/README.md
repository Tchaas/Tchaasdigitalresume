# Résumé AI assistant (Cloudflare Worker)

Powers the **Ask my AI** panel on tchaasawright.com. Visitors can ask questions
about Tchaas's background, or paste a job description for a fit analysis.
Uses Claude Haiku 5.5 (`claude-haiku-5-5`), the lowest-cost Claude model.

## Where the AI's knowledge comes from

The assistant answers only from your site's own data in `src/data/` (experience,
education, skills, research, ventures, impact metrics). On every site build,
`vite.config.ts` turns that data into `/ai-profile.txt`, and the worker reads it
from `PROFILE_URL` (cached 5 minutes). So **updating the website updates the AI** —
no worker redeploy needed. If the site can't be reached, the worker falls back to
the copy bundled at its last deploy.

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

Edit the files in `src/data/` and push — the site and the AI both update. Only put
information there you're comfortable with any visitor seeing. Redeploy the worker
(`npm run deploy`) only when worker code changes, or to refresh its fallback copy.

## Guardrails built in

- Allows requests only from the origins in `wrangler.toml` → `ALLOWED_ORIGINS`.
- 10 requests per minute per IP (`[[ratelimits]]` in `wrangler.toml`).
- Caps message length and history; `max_tokens` 1,000 for chat and 2,000 for fit analysis.
- The system prompt keeps the assistant on-topic, factual (no invented details),
  and resistant to "ignore your instructions" attempts.
- The profile prompt is cached, so repeat questions cost much less.
