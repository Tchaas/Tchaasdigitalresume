import { Cpu } from "lucide-react";

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Header({ currentPage, onPageChange }: HeaderProps) {
  return (
    <header className="bg-gray-900/95 backdrop-blur-md border-b border-emerald-500/20 sticky top-0 z-50 shadow-lg shadow-black/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-100">Tchaas Alexander-Wright</span>
          </div>

          {/* Navigation */}
          <nav className="flex gap-8">
            <button
              onClick={() => onPageChange('overview')}
              className={`transition-all relative ${
                currentPage === 'overview'
                  ? 'text-emerald-400'
                  : 'text-gray-400 hover:text-emerald-400'
              }`}
            >
              Overview
              {currentPage === 'overview' && (
                <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-emerald-500 shadow-lg shadow-emerald-500/50" />
              )}
            </button>
            <button
              onClick={() => onPageChange('education')}
              className={`transition-all relative ${
                currentPage === 'education'
                  ? 'text-emerald-400'
                  : 'text-gray-400 hover:text-emerald-400'
              }`}
            >
              Education
              {currentPage === 'education' && (
                <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-emerald-500 shadow-lg shadow-emerald-500/50" />
              )}
            </button>
            <button
              onClick={() => onPageChange('experience')}
              className={`transition-all relative ${
                currentPage === 'experience'
                  ? 'text-emerald-400'
                  : 'text-gray-400 hover:text-emerald-400'
              }`}
            >
              Experience
              {currentPage === 'experience' && (
                <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-emerald-500 shadow-lg shadow-emerald-500/50" />
              )}
            </button>
            <button
              onClick={() => onPageChange('skills')}
              className={`transition-all relative ${
                currentPage === 'skills'
                  ? 'text-emerald-400'
                  : 'text-gray-400 hover:text-emerald-400'
              }`}
            >
              Professional Development
              {currentPage === 'skills' && (
                <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-emerald-500 shadow-lg shadow-emerald-500/50" />
              )}
            </button>
            <button
              onClick={() => onPageChange('contact')}
              className={`transition-all relative ${
                currentPage === 'contact'
                  ? 'text-emerald-400'
                  : 'text-gray-400 hover:text-emerald-400'
              }`}
            >
              Contact
              {currentPage === 'contact' && (
                <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-emerald-500 shadow-lg shadow-emerald-500/50" />
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}