import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0e1a]/95 backdrop-blur-sm border-t border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Left side - Copyright */}
          <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © 2025 Tchaas Alexander-Wright. All rights reserved.
          </div>

          {/* Right side - Social Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/tchaas-alexander-wright/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 bg-emerald-500/10 hover:bg-emerald-500 rounded-lg flex items-center justify-center text-emerald-400 hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:tchaasawright@gmail.com"
              className="w-8 h-8 sm:w-9 sm:h-9 bg-emerald-500/10 hover:bg-emerald-500 rounded-lg flex items-center justify-center text-emerald-400 hover:text-white transition-all"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Tchaas"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 bg-emerald-500/10 hover:bg-emerald-500 rounded-lg flex items-center justify-center text-emerald-400 hover:text-white transition-all"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
