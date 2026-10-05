import { Mail, Linkedin, Github } from "lucide-react";

const LINKS = [
  {
    href: "https://www.linkedin.com/in/tchaas-alexander-wright/",
    label: "LinkedIn",
    Icon: Linkedin,
    external: true,
  },
  {
    href: "https://github.com/Tchaas",
    label: "GitHub",
    Icon: Github,
    external: true,
  },
  {
    href: "mailto:tchaasawright@gmail.com",
    label: "Email",
    Icon: Mail,
    external: false,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-ink-950)]">
      <div className="u-shell">
        <div className="flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-tight text-[var(--color-bone)]">
              Tchaas Alexander-Wright
            </p>
            <p className="u-eyebrow mt-1.5">
              Business Architect · Georgia Tech MSCS candidate
            </p>
          </div>

          <div className="flex items-center gap-2">
            {LINKS.map(({ href, label, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex h-11 w-11 items-center justify-center rounded border border-[var(--color-line)] text-[var(--color-dim)] transition-colors duration-200 hover:border-[var(--color-line-strong)] hover:bg-[var(--color-ink-800)] hover:text-[var(--color-bone)]"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="u-eyebrow border-t border-[var(--color-line)] py-5 text-[0.625rem]">
          © {new Date().getFullYear()} Tchaas Alexander-Wright
        </div>
      </div>
    </footer>
  );
}
