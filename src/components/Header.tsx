import { motion } from "framer-motion";

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Header({ currentPage, onPageChange }: HeaderProps) {
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Professional Development' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="bg-[#0a0e1a]/95 backdrop-blur-sm border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name - Left Side */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onPageChange('overview')}
            className="text-gray-100 font-semibold text-lg"
          >
            Tchaas Alexander-Wright
          </motion.button>

          {/* Navigation - Right Side */}
          <nav className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onPageChange(item.id)}
                className={`
                  px-3 md:px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all
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
        </div>
      </div>
    </header>
  );
}