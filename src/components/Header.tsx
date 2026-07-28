import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/", label: "Overview" },
  { to: "/research", label: "Research" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/professional-development", label: "Development" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // close the mobile menu whenever the route changes
  useEffect(() => setIsMenuOpen(false), [pathname]);

  const linkClass = (isActive: boolean) =>
    [
      "u-mono block whitespace-nowrap rounded px-2.5 py-2 text-[0.6875rem] font-medium uppercase tracking-[0.11em] transition-colors duration-200",
      isActive
        ? "text-[var(--color-bone)]"
        : "text-[var(--color-dim)] hover:text-[var(--color-bone)]",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[color-mix(in_srgb,var(--color-ink-950)_88%,transparent)] backdrop-blur-md">
      <div className="u-shell">
        <div className="flex items-center justify-between gap-4 py-3.5">
          {/* wordmark */}
          <NavLink to="/" className="group flex items-baseline gap-2.5">
            <span className="font-[family-name:var(--font-display)] text-[0.9375rem] font-bold uppercase tracking-tight text-[var(--color-bone)]">
              Tchaas Alexander-Wright
            </span>
            <span className="u-mono hidden text-[0.625rem] uppercase tracking-[0.14em] text-[var(--color-dim)] sm:inline">
              Business Architect
            </span>
          </NavLink>

          {/* desktop nav */}
          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"}>
                {({ isActive }) => (
                  <span className="relative block">
                    <span className={linkClass(isActive)}>{item.label}</span>
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-2.5 -bottom-[15px] h-px bg-[var(--color-signal-500)]"
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* mobile toggle */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded border border-[var(--color-line-strong)] text-[var(--color-fog)] transition-colors hover:bg-[var(--color-ink-800)] md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* mobile nav */}
        <nav
          id="mobile-nav"
          className={`${isMenuOpen ? "flex" : "hidden"} flex-col gap-0.5 border-t border-[var(--color-line)] pb-3 pt-3 md:hidden`}
          aria-label="Mobile"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `u-mono flex min-h-[48px] items-center rounded px-3 text-xs uppercase tracking-[0.11em] transition-colors ${
                  isActive
                    ? "bg-[var(--color-ink-800)] text-[var(--color-bone)]"
                    : "text-[var(--color-dim)] hover:bg-[var(--color-ink-800)] hover:text-[var(--color-bone)]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
