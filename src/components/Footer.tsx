import svgPaths from "../imports/svg-o41sg7fn0u";
import { Mail, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white mb-4">Let's Connect!</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Ready to discuss opportunities, collaborations, explore new technologies, or build new skills together.
        </p>
        
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://www.linkedin.com/in/tchaas-alexander-wright/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-emerald-500/50 transition-all hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-4 h-5 flex-shrink-0" fill="none" viewBox="0 0 18 20">
              <path d={svgPaths.p1fd35c80} fill="white" />
            </svg>
          </a>
          <a
            href="mailto:Tchaasawright@gmail.com"
            className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-emerald-500/50 transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-emerald-500/50 transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-white" />
          </a>
        </div>

        <p className="text-gray-500">
          © 2025 Tchaas Alexander-Wright. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
