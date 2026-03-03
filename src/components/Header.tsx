import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export function Header() {
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
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4">
          {/* Logo/Name - Left Side */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <NavLink
              to="/"
              className="text-gray-100 font-semibold text-base sm:text-lg truncate max-w-[180px] sm:max-w-none block"
            >
              Tchaas Alexander-Wright
            </NavLink>
          </motion.div>

          {/* Header Navigation */}
          <nav className="flex items-center gap-x-5 gap-y-2 sm:gap-x-7 flex-wrap">
            {navItems.map((item) => (
              <motion.div
                key={item.to}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm xl:text-base font-medium transition-colors whitespace-nowrap block py-1 ${
                      isActive
                        ? "text-emerald-400"
                        : "text-gray-400 hover:text-emerald-300"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
