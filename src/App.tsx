import { useState } from "react";
import svgPaths from "./imports/svg-o41sg7fn0u";
import imgImg from "figma:asset/0ec77554b9c2048ea8f456ec28402e266753147d.png";
import circuitBg from "figma:asset/d1e24e304bd08c8dad5c534cb5493c70e5febc79.png";
import gtLogo from "figma:asset/a9d6cc6ec6d79f0db9fc83f7fc2d9daa0ce4611a.png";
import { 
  Mail,
  Linkedin,
  Github,
  Code,
  Cpu,
  Terminal,
  Users,
  Heart
} from "lucide-react";
import { Header } from "./components/Header";
import { EducationPage } from "./components/EducationPage";
import { WorkHistoryPage } from "./components/WorkHistoryPage";
import { ContactPage } from "./components/ContactPage";
import { ProfessionalDevelopmentPage } from "./components/ProfessionalDevelopmentPage";
import { Footer } from "./components/Footer";

function OverviewPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Hero Section with Circuit Background */}
      <section className="relative bg-[#0a0e1a] min-h-[600px] flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Circuit Background */}
        <div className="absolute inset-0 opacity-20">
          <img src={circuitBg} alt="" className="w-full h-full object-cover" />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a]/90 via-[#0a0e1a]/70 to-emerald-900/20" />
        
        {/* Glowing Grid Lines */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-emerald-400">Available for opportunities</span>
              </div>
              
              <h1 className="text-gray-100">
                Hello, I'm <span className="text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">Tchaas</span>
              </h1>
              <div className="text-gray-400 max-w-xl space-y-4">
                <p>
                  I design systems, build products, and solve problems that sit at the crossroads of business strategy and technology. My work blends experience across enterprise architecture, product development, and UX research, supported by ongoing study in Computer Science at Georgia Tech.
                </p>
                <p>
                  I'm energized by collaboration—the kind where ideas evolve, problems get untangled, and solutions emerge with clarity and purpose. Learning is a daily practice for me, and I carry that curiosity into every team, product, and initiative I'm part of.
                </p>
                <p>
                  Across my career at FedEx, my startup projects, and my technical studies, one principle guides everything I build: create work that adds value, empowers people, and stands up to real-world complexity.
                </p>
                <p>
                  My goal is to be a reliable problem-solver, a thoughtful teammate, and a maker of things that genuinely help others.
                </p>
              </div>
              
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-emerald-500/30 rounded-lg backdrop-blur-sm">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-300">Product Management</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-emerald-500/30 rounded-lg backdrop-blur-sm">
                  <Code className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-300">Tech Innovation</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-emerald-500/30 rounded-lg backdrop-blur-sm">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-300">Data Analytics</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/tchaas-alexander-wright/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 px-6 py-3 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/10 transition-all"
                >
                  <svg className="w-5 h-6" fill="none" viewBox="0 0 21 24">
                    <path d={svgPaths.p303ef300} fill="#10B981" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image with Tech Frame */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Outer Glowing Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-blue-500/30 rounded-full blur-2xl" />
                
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-emerald-500/20 to-transparent p-1 backdrop-blur-sm border border-emerald-500/30">
                  <div className="w-full h-full rounded-full bg-gray-900 p-4">
                    <img 
                      src={imgImg} 
                      alt="Tchaas Alexander-Wright" 
                      className="w-full h-full rounded-full object-cover border-2 border-emerald-500/50 shadow-xl"
                    />
                  </div>
                </div>
                
                {/* Floating Tech Badge */}
                <div className="absolute bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full shadow-lg shadow-emerald-500/50 flex items-center justify-center border border-emerald-400/50">
                  <svg className="w-7 h-6" fill="none" viewBox="0 0 27 24">
                    <path d={svgPaths.p302cc000} fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative bg-[#0a0e1a] py-20 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <img src={circuitBg} alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-gray-100 mb-4">Core Competencies</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Bridging technology and business through innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Innovation Focus */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                <svg className="w-4 h-5 flex-shrink-0" fill="none" viewBox="0 0 15 20">
                  <path d={svgPaths.p594b480} fill="white" />
                </svg>
              </div>
              <h3 className="text-gray-100 mb-4">Tech Innovation</h3>
              <p className="text-gray-400">
                Leveraging cutting-edge technology to solve complex logistics challenges and drive digital transformation.
              </p>
            </div>

            {/* Team Leadership */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                <svg className="w-6 h-5 flex-shrink-0" fill="none" viewBox="0 0 25 20">
                  <path d={svgPaths.p39a88000} fill="white" />
                </svg>
              </div>
              <h3 className="text-gray-100 mb-4">Product Leadership</h3>
              <p className="text-gray-400">
                Building and leading cross-functional teams to deliver scalable SaaS solutions and drive product strategy.
              </p>
            </div>

            {/* Results Driven */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p359f3c00} fill="white" />
                </svg>
              </div>
              <h3 className="text-gray-100 mb-4">Data-Driven Results</h3>
              <p className="text-gray-400">
                Using analytics and insights to drive measurable business outcomes and continuous optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Accomplishments Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-[#0a0e1a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gray-100 mb-4">Impact Metrics</h2>
            <p className="text-gray-400">Data-driven achievements across my professional journey</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all group-hover:scale-110">
                <svg className="w-7 h-6 flex-shrink-0" fill="none" viewBox="0 0 30 24">
                  <path d={svgPaths.p3d856570} fill="white" />
                </svg>
              </div>
              <div className="text-gray-100 mb-2 text-3xl font-semibold">500+</div>
              <p className="text-gray-400">Freight Operations Managed</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all group-hover:scale-110">
                <svg className="w-4 h-6 flex-shrink-0" fill="none" viewBox="0 0 15 24">
                  <path d={svgPaths.p1c740200} fill="white" />
                </svg>
              </div>
              <div className="text-gray-100 mb-2 text-3xl font-semibold">$2M+</div>
              <p className="text-gray-400">Revenue Generated</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all group-hover:scale-110">
                <svg className="w-5 h-6 flex-shrink-0" fill="none" viewBox="0 0 18 24">
                  <path d={svgPaths.p2f501700} fill="white" />
                </svg>
              </div>
              <div className="text-gray-100 mb-2 text-3xl font-semibold">15+</div>
              <p className="text-gray-400">Industry Certifications</p>
            </div>

            {/* Stat 4 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all group-hover:scale-110">
                <svg className="w-7 h-6 flex-shrink-0" fill="none" viewBox="0 0 30 24">
                  <path d={svgPaths.p6a55c00} fill="white" />
                </svg>
              </div>
              <div className="text-gray-100 mb-2 text-3xl font-semibold">98%</div>
              <p className="text-gray-400">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative bg-[#0a0e1a] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gray-100 mb-4">Continuous Learning</h2>
            <p className="text-gray-400">Staying ahead through education and skill development</p>
          </div>

          <div className="space-y-8">
            {/* Current Education - Ongoing Learning */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border-l-4 border-emerald-500 relative hover:bg-gray-900/70 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-gray-100 mb-2">Masters of Science in Computer Science</h3>
                  <p className="text-emerald-400 mb-2">Georgia Institute of Technology</p>
                  <p className="text-gray-400 mb-1">2025 - Present</p>
                  <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full mb-4">
                    In Progress
                  </span>
                  <p className="text-gray-400">
                    Currently pursuing advanced studies in Computer Science with a focus on Human Computer Interaction and emerging technologies.
                  </p>
                </div>
                <div className="w-16 h-16 bg-[#B3A369] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30 p-2">
                  <img src={gtLogo} alt="Georgia Tech" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-[#0a0e1a] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gray-100 mb-4">Professional Experience</h2>
            <p className="text-gray-400">Building innovative solutions for modern challenges</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-transparent hidden md:block" />

            <div className="space-y-12">
              {/* Current Job - Senior Product Manager */}
              <div className="relative">
                <div className="flex gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg shadow-emerald-500/50">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p2b274680} fill="white" />
                    </svg>
                  </div>
                  <div className="flex-1 bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-gray-100 mb-1">Senior Product Manager</h3>
                        <p className="text-emerald-400 mb-1">TechFlow Solutions</p>
                        <p className="text-gray-400">2022 - Present</p>
                      </div>
                      <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">Current</span>
                    </div>
                    <p className="text-gray-400 mb-4">
                      Led cross-functional teams in developing innovative SaaS solutions for enterprise clients. Managed product roadmaps, conducted market research, and drove strategic initiatives that resulted in 40% revenue growth.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-1.5 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-full">Product Management</span>
                      <span className="px-4 py-1.5 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-full">SaaS Solutions</span>
                      <span className="px-4 py-1.5 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-full">Team Leadership</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Let's Connect */}
      <Footer />
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('overview');

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      
      {currentPage === 'overview' && <OverviewPage />}
      {currentPage === 'education' && <EducationPage />}
      {currentPage === 'experience' && <WorkHistoryPage />}
      {currentPage === 'skills' && <ProfessionalDevelopmentPage />}
      {currentPage === 'contact' && <ContactPage />}
    </div>
  );
}