import { Heart, Users, Code, Target, TrendingUp, Award, Rocket, DollarSign, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { StatusBadge } from "./StatusBadge";
import { NOVAONE, BYTONOMY, HABITAT } from "../data/ventures";

/** Optional icons for skill tags (purely decorative). */
const TAG_ICONS: Record<string, LucideIcon> = {
  "JavaScript": Code,
  "Business Strategy": DollarSign,
  "Financial Modeling": BarChart3,
  "Team Leadership": Users,
  "Project Prioritization": Target,
  "Committee Leadership": Users,
  "Member Recruitment": TrendingUp,
  "Strategic Alignment": Target,
};

export function ProfessionalDevelopmentPage() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-5 sm:mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-xl shadow-emerald-500/50 flex items-center justify-center">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-gray-100 mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Professional Development</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed bg-black/25 border border-emerald-500/20 backdrop-blur-sm rounded-xl p-4 sm:p-5">
            Beyond my professional career, I'm deeply committed to giving back to the community, contributing to meaningful projects, and serving on boards that drive positive change.
          </p>
        </div>
      </section>

      {/* Startup Ventures */}
      <section className="relative py-10 sm:py-12 md:py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-gray-100 mb-2 text-2xl sm:text-3xl md:text-4xl">Startup Ventures</h2>
            <p className="text-gray-400 text-sm sm:text-base">Building innovative solutions from the ground up</p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {/* NovaOne Technology */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Icon Area */}
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 p-6 sm:p-8 lg:p-12 flex items-center justify-center relative overflow-hidden lg:col-span-1">
                  <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10"></div>
                  <img 
                    src="/icons/work/NovaOne_icon.png" 
                    alt="NovaOne Technology" 
                    width={128}
                    height={128}
                    loading="lazy"
                    decoding="async"
                    className="w-24 h-24 sm:w-32 sm:h-32 object-contain relative z-10 rounded-lg" 
                  />
                </div>
                
                {/* Details */}
                <div className="p-6 sm:p-8 lg:col-span-2">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-gray-100 mb-2 text-xl sm:text-2xl">{NOVAONE.name}</h3>
                      <p className="text-emerald-400 mb-4 text-sm sm:text-base">{NOVAONE.role}</p>
                    </div>
                    <div className="flex gap-2">
                      <StatusBadge className="whitespace-nowrap">Active</StatusBadge>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 text-sm sm:text-base">{NOVAONE.summary}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-gray-200 mb-3 text-base sm:text-lg">Key Contributions</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {NOVAONE.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-gray-400 text-sm sm:text-base">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-gray-200 mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {NOVAONE.skills.map((skill) => {
                        const Icon = TAG_ICONS[skill];
                        return (
                          <span key={skill} className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg flex items-center gap-2">
                            {Icon && <Icon className="w-3 h-3" />}
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bytonomy Tech */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Icon Area */}
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 p-6 sm:p-8 lg:p-12 flex items-center justify-center relative overflow-hidden lg:col-span-1">
                  <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue-500/20 to-blue-600/10"></div>
                  <img 
                    src="/icons/work/BT_icon.jpeg" 
                    alt="Bytonomy Tech" 
                    width={128}
                    height={128}
                    loading="lazy"
                    decoding="async"
                    className="w-32 h-32 object-contain relative z-10 rounded-lg" 
                  />
                </div>
                
                {/* Details */}
                <div className="p-6 sm:p-8 lg:col-span-2">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-gray-100 mb-2">{BYTONOMY.name}</h3>
                      <p className="text-emerald-400 mb-4">{BYTONOMY.role}</p>
                    </div>
                    <div className="flex gap-2">
                      <StatusBadge>Active</StatusBadge>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6">{BYTONOMY.summary}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-gray-200 mb-3">Key Achievements</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {BYTONOMY.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-gray-400 text-sm sm:text-base">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-gray-200 mb-3">Core Competencies</h4>
                    <div className="flex flex-wrap gap-2">
                      {BYTONOMY.skills.map((skill) => {
                        const Icon = TAG_ICONS[skill];
                        return (
                          <span key={skill} className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg flex items-center gap-2">
                            {Icon && <Icon className="w-3 h-3" />}
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board & Community Service */}
      <section className="relative bg-gradient-to-b from-gray-900 to-[var(--color-ink-900)] py-10 sm:py-12 md:py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-gray-100 mb-2">Board & Community Service</h2>
            <p className="text-gray-400">Giving back through leadership and community engagement</p>
          </div>

          <div className="space-y-12">
            {/* Habitat for Humanity */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Icon Area */}
                <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 p-6 sm:p-8 lg:p-12 flex items-center justify-center relative overflow-hidden lg:col-span-1">
                  <img 
                    src="/icons/work/HFH_icon.jpeg" 
                    alt="Habitat for Humanity" 
                    width={128}
                    height={128}
                    loading="lazy"
                    decoding="async"
                    className="w-32 h-32 object-contain relative z-10 rounded-lg" 
                  />
                </div>
                
                {/* Details */}
                <div className="p-6 sm:p-8 lg:col-span-2">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-gray-100 mb-2">{HABITAT.name}</h3>
                      <p className="text-emerald-400 mb-4">{HABITAT.role}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full flex items-center gap-2">
                        <Heart className="w-3 h-3" />
                        Volunteer
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6">{HABITAT.summary}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-gray-200 mb-3">Key Responsibilities</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {HABITAT.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-gray-400 text-sm sm:text-base">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-gray-200 mb-3">Leadership Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {HABITAT.skills.map((skill) => {
                        const Icon = TAG_ICONS[skill];
                        return (
                          <span key={skill} className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg flex items-center gap-2">
                            {Icon && <Icon className="w-3 h-3" />}
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="relative py-10 sm:py-12 md:py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-gray-100 mb-4">Community Impact</h2>
            <p className="text-gray-400">Measurable contributions to communities and organizations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-emerald-500/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-emerald-400 mb-3">2</div>
              <h3 className="text-gray-100 mb-2">Startups Founded</h3>
              <p className="text-gray-400">
                Co-founded and led technology ventures from inception
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-emerald-500/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-emerald-400 mb-3">10+</div>
              <h3 className="text-gray-100 mb-2">Technologies Deployed</h3>
              <p className="text-gray-400">
                Implemented cutting-edge tech stacks and platforms
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-emerald-500/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-emerald-400 mb-3">100%</div>
              <h3 className="text-gray-100 mb-2">Board Commitment</h3>
              <p className="text-gray-400">
                Dedicated leadership in community development initiatives
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
