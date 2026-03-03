import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { to: "/", label: "Overview" },
    { to: "/education", label: "Education" },
    { to: "/experience", label: "Experience" },
    { to: "/professional-development", label: "Professional Development" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-[#0a0e1a]/95 backdrop-blur-sm border-b border-emerald-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo/Name - Left Side */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <NavLink
              to="/"
              className="text-gray-100 font-semibold text-base sm:text-lg leading-tight block"
              onClick={() => setIsMenuOpen(false)}
            >
              Tchaas Alexander-Wright
            </NavLink>
          </motion.div>

          <button
            type="button"
            className="md:hidden w-11 h-11 inline-flex items-center justify-center rounded-lg border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0e1a]"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <nav className="hidden md:flex items-center gap-2 lg:gap-3 flex-wrap" aria-label="Primary">
            {navItems.map((item) => (
              <motion.div
                key={item.to}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm xl:text-base font-medium transition-colors whitespace-nowrap block rounded-lg px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0e1a] ${
                      isActive
                        ? "text-emerald-300 bg-emerald-500/20 border border-emerald-500/30"
                        : "text-gray-300 hover:text-emerald-300 hover:bg-emerald-500/10 border border-transparent"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </nav>
        </div>

        <nav
          id="mobile-nav"
          className={`${isMenuOpen ? "flex" : "hidden"} md:hidden flex-col gap-2 pt-4 pb-1 mt-3 border-t border-emerald-500/20`}
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 min-h-[48px] rounded-lg text-sm font-medium transition-colors flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0e1a] ${
                  isActive
                    ? "text-emerald-300 bg-emerald-500/20 border border-emerald-500/30"
                    : "text-gray-300 hover:text-emerald-300 hover:bg-emerald-500/10"
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
