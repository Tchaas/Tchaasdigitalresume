import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { ArrowUp, Briefcase, MessageSquare, RotateCcw, Sparkles, X } from "lucide-react";

/**
 * "Ask my AI" — a résumé-grounded assistant powered by Claude.
 *
 * Talks to the Cloudflare Worker in /worker, which holds the API key.
 * Set VITE_AI_ENDPOINT (e.g. in .env.production) to the worker URL; when it
 * is unset the launcher is hidden, so the site still builds and runs.
 */
const ENDPOINT = import.meta.env.VITE_AI_ENDPOINT as string | undefined;

/**
 * Open the panel from anywhere (hero CTA, Impact page "Ask how" buttons).
 * Pass a question to send it immediately.
 */
export const OPEN_ASK_AI_EVENT = "open-ask-ai";
export const openAskAI = (question?: string) =>
  window.dispatchEvent(new CustomEvent<{ question?: string }>(OPEN_ASK_AI_EVENT, { detail: { question } }));
export const isAskAIEnabled = Boolean(ENDPOINT);

type Mode = "chat" | "fit";
type Message = { role: "user" | "assistant"; content: string; label?: string };

const SUGGESTIONS = [
  "What has Tchaas delivered at FedEx?",
  "How does the strategy-to-value framework work?",
  "What AI experience does Tchaas have?",
  "Would Tchaas fit a technical product manager role?",
];

const JD_PREFIX = "Here is a job description. How well does Tchaas fit it?\n\n";

export function AskAI() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("chat");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [jd, setJd] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const [pendingQuestion, setPendingQuestion] = useState<string | null>(null);

  useEffect(() => {
    const onOpen = (e: Event) => {
      setOpen(true);
      const question = (e as CustomEvent<{ question?: string }>).detail?.question;
      if (typeof question === "string" && question.trim()) {
        setMode("chat");
        setPendingQuestion(question);
      }
    };
    window.addEventListener(OPEN_ASK_AI_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_ASK_AI_EVENT, onOpen);
  }, []);

  // Send a question handed over by openAskAI() once any in-flight answer finishes.
  useEffect(() => {
    if (!ENDPOINT || !pendingQuestion || busy) return;
    const question = pendingQuestion;
    setPendingQuestion(null);
    void send(question, "chat");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingQuestion, busy]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open, mode]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  useEffect(() => () => abortRef.current?.abort(), []);

  if (!ENDPOINT) return null;

  async function send(content: string, requestMode: Mode, label?: string) {
    if (busy || !content.trim()) return;
    setError(null);
    setBusy(true);

    const history: Message[] = [...messages, { role: "user", content, label }];
    setMessages([...history, { role: "assistant", content: "" }]);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch(ENDPOINT!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: requestMode,
          messages: history.map(({ role, content }) => ({ role, content })),
        }),
        signal: controller.signal,
      });

      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "The assistant is unavailable right now.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let text = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setMessages([...history, { role: "assistant", content: text }]);
      }
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      setMessages(history.slice(0, -1)); // drop the failed turn so it can be retried
      setError((err as Error).message || "Something went wrong.");
      if (requestMode === "chat") setInput(content);
    } finally {
      setBusy(false);
      abortRef.current = null;
    }
  }

  function submitChat(e?: FormEvent) {
    e?.preventDefault();
    const q = input.trim();
    if (!q) return;
    setInput("");
    void send(q, "chat");
  }

  function submitFit(e: FormEvent) {
    e.preventDefault();
    const text = jd.trim();
    if (text.length < 80) {
      setError("Paste the full job description (at least a few sentences).");
      return;
    }
    const words = text.split(/\s+/).length;
    setJd("");
    setMode("chat"); // follow-ups continue as a normal conversation
    void send(JD_PREFIX + text, "fit", `Job description · ${words} words`);
  }

  function onChatKey(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitChat();
    }
  }

  function reset() {
    abortRef.current?.abort();
    setMessages([]);
    setError(null);
    setBusy(false);
  }

  return (
    <>
      {/* launcher */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="u-btn u-btn-primary fixed bottom-4 right-4 z-50 shadow-lg shadow-black/40 max-sm:h-12 max-sm:w-12 max-sm:justify-center max-sm:rounded-full max-sm:p-0 sm:bottom-6 sm:right-6"
          aria-haspopup="dialog"
          aria-label="Ask my AI"
        >
          {/* icon-only on phones so it doesn't cover page text */}
          <Sparkles className="h-5 w-5 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
          <span className="hidden sm:inline">Ask my AI</span>
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-label="Ask Tchaas's AI assistant"
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
          className="u-card fixed inset-x-2 bottom-2 z-50 flex max-h-[min(42rem,calc(100dvh-1rem))] flex-col shadow-2xl shadow-black/60 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[26rem]"
        >
          {/* header */}
          <div className="flex items-start justify-between gap-3 border-b border-[var(--color-line)] p-4">
            <div>
              <p className="u-eyebrow u-eyebrow-accent">AI assistant</p>
              <h2 className="mt-1 text-base text-[var(--color-bone)]">Ask about my experience</h2>
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={reset}
                  aria-label="Start over"
                  className="flex h-9 w-9 items-center justify-center rounded text-[var(--color-dim)] transition-colors hover:bg-[var(--color-ink-700)] hover:text-[var(--color-bone)]"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close assistant"
                className="flex h-9 w-9 items-center justify-center rounded text-[var(--color-dim)] transition-colors hover:bg-[var(--color-ink-700)] hover:text-[var(--color-bone)]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* mode tabs */}
          <div role="tablist" aria-label="Assistant mode" className="flex gap-1 border-b border-[var(--color-line)] px-4 py-2">
            {(
              [
                { id: "chat", label: "Ask", Icon: MessageSquare },
                { id: "fit", label: "Job fit", Icon: Briefcase },
              ] as const
            ).map(({ id, label, Icon }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={mode === id}
                onClick={() => {
                  setMode(id);
                  setError(null);
                }}
                className={`u-mono flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[0.6875rem] uppercase tracking-[0.11em] transition-colors ${
                  mode === id
                    ? "bg-[var(--color-ink-700)] text-[var(--color-bone)]"
                    : "text-[var(--color-dim)] hover:text-[var(--color-bone)]"
                }`}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {label}
              </button>
            ))}
          </div>

          {/* conversation */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4" aria-live="polite">
            {messages.length === 0 && mode === "chat" && (
              <div>
                <p className="text-sm text-[var(--color-fog)]">
                  Hi! I'm an AI assistant trained on Tchaas's résumé, research, and projects.
                  Ask me anything a recruiter or hiring manager might want to know.
                </p>
                <ul className="mt-4 flex flex-col gap-2">
                  {SUGGESTIONS.map((s) => (
                    <li key={s}>
                      <button
                        type="button"
                        onClick={() => void send(s, "chat")}
                        className="w-full rounded border border-[var(--color-line)] px-3 py-2 text-left text-sm text-[var(--color-fog)] transition-colors hover:border-[var(--color-line-strong)] hover:bg-[var(--color-ink-700)] hover:text-[var(--color-bone)]"
                      >
                        {s}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {messages.length === 0 && mode === "fit" && (
              <p className="text-sm text-[var(--color-fog)]">
                Paste a job description and I'll map Tchaas's experience to each
                requirement, including any gaps worth asking about.
              </p>
            )}

            <ol className="flex flex-col gap-3">
              {messages.map((m, i) => (
                <li key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                  <div
                    className={`max-w-[90%] whitespace-pre-wrap rounded-lg px-3 py-2 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-[var(--color-signal-600)] text-white"
                        : "bg-[var(--color-ink-700)] text-[var(--color-fog)]"
                    }`}
                  >
                    {m.label ?? m.content.trim()}
                    {m.role === "assistant" && !m.content && busy && (
                      <span className="u-mono text-xs text-[var(--color-dim)]">Thinking…</span>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            {error && (
              <p role="alert" className="mt-3 text-sm text-[#FF8A8E]">
                {error}
              </p>
            )}
          </div>

          {/* composer */}
          {mode === "chat" ? (
            <form onSubmit={submitChat} className="flex items-end gap-2 border-t border-[var(--color-line)] p-3">
              <label htmlFor="ask-ai-input" className="sr-only">
                Your question
              </label>
              <textarea
                id="ask-ai-input"
                ref={inputRef}
                rows={1}
                maxLength={1000}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onChatKey}
                placeholder="Ask a question…"
                className="max-h-32 min-h-[2.5rem] flex-1 resize-none rounded border border-[var(--color-line-strong)] bg-[var(--color-ink-900)] px-3 py-2 text-base text-[var(--color-bone)] sm:text-sm placeholder:text-[var(--color-dim)] focus:border-[var(--color-signal-500)] focus:outline-none"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                aria-label="Send"
                className="u-btn u-btn-primary h-10 px-3 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ArrowUp className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          ) : (
            <form onSubmit={submitFit} className="flex flex-col gap-2 border-t border-[var(--color-line)] p-3">
              <label htmlFor="ask-ai-jd" className="sr-only">
                Job description
              </label>
              <textarea
                id="ask-ai-jd"
                ref={inputRef}
                rows={6}
                maxLength={5500}
                value={jd}
                onChange={(e) => setJd(e.target.value)}
                placeholder="Paste the job description here…"
                className="resize-none rounded border border-[var(--color-line-strong)] bg-[var(--color-ink-900)] px-3 py-2 text-base text-[var(--color-bone)] sm:text-sm placeholder:text-[var(--color-dim)] focus:border-[var(--color-signal-500)] focus:outline-none"
              />
              <button
                type="submit"
                disabled={busy || !jd.trim()}
                className="u-btn u-btn-primary justify-center disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                Analyze fit
              </button>
            </form>
          )}

          <p className="px-4 pb-3 text-[0.6875rem] text-[var(--color-dim)]">
            AI answers come from Tchaas's résumé and can be imperfect. Built with Claude.
          </p>
        </div>
      )}
    </>
  );
}
