import { Heart, Users, Code, Lightbulb, Target, TrendingUp, Award, Calendar, ExternalLink, Github, Rocket, DollarSign, BarChart3 } from "lucide-react";

export function ProfessionalDevelopmentPage() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-xl shadow-emerald-500/50 flex items-center justify-center">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-gray-100 mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Professional Development</h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base">
            Beyond my professional career, I'm deeply committed to giving back to the community, contributing to meaningful projects, and serving on boards that drive positive change.
          </p>
        </div>
      </section>

      {/* Startup Ventures */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-gray-100 mb-2 text-2xl sm:text-3xl md:text-4xl">Startup Ventures</h2>
            <p className="text-gray-400 text-sm sm:text-base">Building innovative solutions from the ground up</p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {/* NovaOne Technology */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Icon Area */}
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 p-8 sm:p-12 flex items-center justify-center relative overflow-hidden lg:col-span-1">
                  <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10"></div>
                  <img 
                    src="/icons/work/NovaOne_icon.png" 
                    alt="NovaOne Technology" 
                    className="w-24 h-24 sm:w-32 sm:h-32 object-contain relative z-10 rounded-lg" 
                  />
                </div>
                
                {/* Details */}
                <div className="p-6 sm:p-8 lg:col-span-2">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-gray-100 mb-2 text-xl sm:text-2xl">NovaOne Technology</h3>
                      <p className="text-emerald-400 mb-4 text-sm sm:text-base">Co-Founder & Technology Lead</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 sm:px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-xs sm:text-sm whitespace-nowrap">Active</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 text-sm sm:text-base">
                    Co-founded a technology startup focused on developing innovative software solutions. Led the technical development strategy while managing budget, infrastructure, and vendor relationships.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-gray-200 mb-3 text-base sm:text-lg">Key Contributions</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2 text-gray-400 text-sm sm:text-base">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Defined and developed product roadmap through customer engagement</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Created wireframes for initial product design</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Utilized GitHub Copilot to develop JavaScript logic</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Managed startup budget and financial planning</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Implemented Google Cloud infrastructure</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Established CockroachDB database architecture</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Built company website using Squarespace</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Negotiated operating agreement and equity distribution</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-gray-200 mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg flex items-center gap-2">
                        <Code className="w-3 h-3" />
                        JavaScript
                      </span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">GitHub Copilot</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Google Cloud</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">CockroachDB</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Postman</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Squarespace</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Fivetran</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">OKTA</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Cypress</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Nightwatch.js</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bytonomy Tech */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Icon Area */}
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 p-12 flex items-center justify-center relative overflow-hidden lg:col-span-1">
                  <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue-500/20 to-blue-600/10"></div>
                  <img 
                    src="/icons/work/BT_icon.jpeg" 
                    alt="Bytonomy Tech" 
                    className="w-32 h-32 object-contain relative z-10 rounded-lg" 
                  />
                </div>
                
                {/* Details */}
                <div className="p-8 lg:col-span-2">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-gray-100 mb-2">Bytonomy Tech</h3>
                      <p className="text-emerald-400 mb-4">Co-Founder & Product Lead</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full">Active</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6">
                    Co-founded an innovative fintech startup revolutionizing financial accessibility. Led product strategy, business planning, and go-to-market initiatives while coordinating cross-functional teams.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-gray-200 mb-3">Key Achievements</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Established company vision through comprehensive business plan</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Created financial models based on project projections</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Developed product features and coordinated with Lead Developers</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Networked and established client relationships</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Developed marketing plan to attract users</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Coordinated team building events and work sessions</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Created functional documentation for features</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Prioritized projects based on timeliness and complexity</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-gray-200 mb-3">Core Competencies</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg flex items-center gap-2">
                        <DollarSign className="w-3 h-3" />
                        Business Strategy
                      </span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg flex items-center gap-2">
                        <BarChart3 className="w-3 h-3" />
                        Financial Modeling
                      </span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Product Management</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Client Relations</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Marketing Strategy</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg flex items-center gap-2">
                        <Users className="w-3 h-3" />
                        Team Leadership
                      </span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Documentation</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg flex items-center gap-2">
                        <Target className="w-3 h-3" />
                        Project Prioritization
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board & Community Service */}
      <section className="relative bg-gradient-to-b from-gray-900 to-[#0a0e1a] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-gray-100 mb-2">Board & Community Service</h2>
            <p className="text-gray-400">Giving back through leadership and community engagement</p>
          </div>

          <div className="space-y-12">
            {/* Habitat for Humanity */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Icon Area */}
                <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 p-12 flex items-center justify-center relative overflow-hidden lg:col-span-1">
                  <img 
                    src="/icons/work/HFH_icon.jpeg" 
                    alt="Habitat for Humanity" 
                    className="w-32 h-32 object-contain relative z-10 rounded-lg" 
                  />
                </div>
                
                {/* Details */}
                <div className="p-8 lg:col-span-2">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-gray-100 mb-2">Habitat for Humanity International</h3>
                      <p className="text-emerald-400 mb-4">Membership Chair - Young Professionals Board</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full flex items-center gap-2">
                        <Heart className="w-3 h-3" />
                        Volunteer
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6">
                    Serving on the Young Professionals Board, leading membership growth initiatives and fostering community engagement to support Habitat's mission of building affordable housing worldwide.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-gray-200 mb-3">Key Responsibilities</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Led committee operations as Membership Chair</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Recruited and engaged new board members</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Ensured alignment with organizational goals</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Maintained comprehensive meeting documentation</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Organized community engagement events</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Developed strategic membership growth plans</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-gray-200 mb-3">Leadership Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg flex items-center gap-2">
                        <Users className="w-3 h-3" />
                        Committee Leadership
                      </span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg flex items-center gap-2">
                        <TrendingUp className="w-3 h-3" />
                        Member Recruitment
                      </span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg flex items-center gap-2">
                        <Target className="w-3 h-3" />
                        Strategic Alignment
                      </span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Community Engagement</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Documentation</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Event Planning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gray-100 mb-4">Community Impact</h2>
            <p className="text-gray-400">Measurable contributions to communities and organizations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-emerald-400 mb-3">2</div>
              <h3 className="text-gray-100 mb-2">Startups Founded</h3>
              <p className="text-gray-400">
                Co-founded and led technology ventures from inception
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-emerald-400 mb-3">10+</div>
              <h3 className="text-gray-100 mb-2">Technologies Deployed</h3>
              <p className="text-gray-400">
                Implemented cutting-edge tech stacks and platforms
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-emerald-400 mb-3">100%</div>
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