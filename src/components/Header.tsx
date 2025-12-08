import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Header({ currentPage, onPageChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Professional Development' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (page: string) => {
    onPageChange(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#0a0e1a]/95 backdrop-blur-sm border-b border-emerald-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name - Left Side */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavClick('overview')}
            className="text-gray-100 font-semibold text-base sm:text-lg truncate max-w-[180px] sm:max-w-none"
          >
            Tchaas Alexander-Wright
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(item.id)}
                className={`
                  px-3 xl:px-4 py-2 rounded-lg text-sm xl:text-base font-medium transition-all whitespace-nowrap
                  ${currentPage === item.id 
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30' 
                    : 'text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/5'
                  }
                `}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-emerald-400 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-4 pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavClick(item.id)}
                className={`
                  w-full px-4 py-3 rounded-lg text-left font-medium transition-all
                  ${currentPage === item.id 
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30' 
                    : 'text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/5'
                  }
                `}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  );
}