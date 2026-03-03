import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { to: "/", label: "Overview" },
    { to: "/education", label: "Education" },
    { to: "/experience", label: "Experience" },
    { to: "/professional-development", label: "Professional Development" },
    { to: "/contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#0a0e1a]/95 backdrop-blur-sm border-b border-emerald-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name - Left Side */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <NavLink
              to="/"
              onClick={handleNavClick}
              className="text-gray-100 font-semibold text-base sm:text-lg truncate max-w-[180px] sm:max-w-none block"
            >
              Tchaas Alexander-Wright
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <motion.div
                key={item.to}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 xl:px-4 py-2 rounded-lg text-sm xl:text-base font-medium transition-all whitespace-nowrap block ${
                      isActive
                        ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/30"
                        : "text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/5"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-emerald-400 transition-colors rounded-lg hover:bg-emerald-500/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mt-4 pb-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <NavLink
                      to={item.to}
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        `w-full px-4 py-3 rounded-lg text-left font-medium transition-all block ${
                          isActive
                            ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/30"
                            : "text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/5 border border-transparent"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
