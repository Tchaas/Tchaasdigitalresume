import circuitBg from "figma:asset/d1e24e304bd08c8dad5c534cb5493c70e5febc79.png";
import novaoneIcon from "../assets/icononly_nobuffer.png";
import bytonomyIcon from "../assets/BT icon.jpeg";
import habitatIcon from "../assets/HFH icon.jpeg";
import { Heart, Users, Code, Lightbulb, Target, TrendingUp, Award, Calendar, ExternalLink, Github, Rocket, DollarSign, BarChart3 } from "lucide-react";
import { Footer } from "./Footer";

export function ProfessionalDevelopmentPage() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-xl shadow-emerald-500/50 flex items-center justify-center">
              <Heart className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-gray-100 mb-4">Professional Development</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Beyond my professional career, I'm deeply committed to giving back to the community, contributing to meaningful projects, and serving on boards that drive positive change.
          </p>
        </div>
      </section>

      {/* Startup Ventures */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-gray-100 mb-2">Startup Ventures</h2>
            <p className="text-gray-400">Building innovative solutions from the ground up</p>
          </div>

          <div className="space-y-12">
            {/* NovaOne Technology */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Icon Area */}
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 p-12 flex items-center justify-center relative overflow-hidden lg:col-span-1">
                  <div className="absolute inset-0 opacity-10">
                    <img src={circuitBg} alt="" className="w-full h-full object-cover" />
                  </div>
                  <img 
                    src={novaoneIcon} 
                    alt="NovaOne Technology" 
                    className="w-32 h-32 object-contain relative z-10 rounded-full" 
                  />
                </div>
                
                {/* Details */}
                <div className="p-8 lg:col-span-2">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-gray-100 mb-2">NovaOne Technology</h3>
                      <p className="text-emerald-400 mb-4">Co-Founder & Technology Lead</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">Active</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6">
                    Co-founded a technology startup focused on developing innovative software solutions. Led the technical development strategy while managing budget, infrastructure, and vendor relationships.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-gray-200 mb-3">Key Contributions</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2 text-gray-400">
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
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Developed strategic scaling plan</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Integrated third-party vendors (Fivetran, OKTA)</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Researched automation testing tools</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Used Postman for API development and testing</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-200 mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">JavaScript</span>
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
                  <div className="absolute inset-0 opacity-10">
                    <img src={circuitBg} alt="" className="w-full h-full object-cover" />
                  </div>
                  <img 
                    src={bytonomyIcon} 
                    alt="Bytonomy Tech" 
                    className="w-32 h-32 object-contain relative z-10 rounded-full" 
                  />
                </div>
                
                {/* Details */}
                <div className="p-8 lg:col-span-2">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-gray-100 mb-2">Bytonomy Tech</h3>
                      <p className="text-blue-400 mb-4">Co-Founder & Product Lead</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full">Active</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6">
                    Co-founded Bytonomy Tech with a vision to create innovative technology solutions. Led business strategy, product development, and team coordination while establishing client relationships and managing financial projections.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-gray-200 mb-3">Leadership & Strategy</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2 text-gray-400">
                        <Rocket className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                        <span>Established company vision through comprehensive business plan and mission statement</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <DollarSign className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                        <span>Created financial models based on project projections and client funding</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <Users className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                        <span>Networked and established client relationships with project coordination</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <BarChart3 className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                        <span>Developed marketing plan and strategies to attract potential users</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-gray-200 mb-3">Product Development</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Developed product features and coordinated with Lead Developers</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Created functional documentation for new features and technical changes</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Prioritized projects based on timeliness, complexity, and revenue potential</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Coordinated team building events and work sessions to track progress</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-200 mb-3">Core Competencies</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Business Strategy</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Financial Modeling</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Product Management</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Client Relations</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Marketing Strategy</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Team Leadership</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Documentation</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Project Prioritization</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Profit Board Involvement */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-gray-100 mb-2">Board Involvement</h2>
            <p className="text-gray-400">Serving organizations that make a difference</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Board Position 1 */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8 hover:border-emerald-500/50 transition-all group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all overflow-hidden">
                  <img 
                    src={habitatIcon} 
                    alt="Habitat for Humanity" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-100 mb-1">Membership Chair</h3>
                  <p className="text-emerald-400 mb-2">Habitat for Humanity International</p>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>Present</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Leading committee operations and member engagement for Habitat for Humanity International. Responsible for meeting coordination, documentation management, member recruitment, and ensuring alignment with organizational goals and strategic initiatives.
              </p>
              
              <div className="mb-4">
                <h4 className="text-gray-200 mb-2">Key Responsibilities</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-gray-400 text-sm">
                    <div className="w-1 h-1 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0" />
                    <span>Prepare agendas, minutes, and invitations for committee meetings with timely distribution</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-400 text-sm">
                    <div className="w-1 h-1 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0" />
                    <span>Maintain documentation and ensure successful knowledge transfer to successor chairs</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-400 text-sm">
                    <div className="w-1 h-1 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0" />
                    <span>Partner with staff and volunteers to achieve committee effectiveness and strategic goals</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-400 text-sm">
                    <div className="w-1 h-1 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0" />
                    <span>Recruit new members and ensure current members receive proper orientation and onboarding</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-400 text-sm">
                    <div className="w-1 h-1 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0" />
                    <span>Provide thoughtful leadership and maintain timely communication with all stakeholders</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">Committee Leadership</span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">Member Recruitment</span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">Documentation</span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">Strategic Alignment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Metric 1 */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 text-center hover:border-emerald-500/50 transition-all group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-6 shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-emerald-400 mb-3">2</div>
              <h3 className="text-gray-100 mb-2">Startups Co-Founded</h3>
              <p className="text-gray-400">
                Built innovative technology solutions from the ground up
              </p>
            </div>

            {/* Metric 2 */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 text-center hover:border-emerald-500/50 transition-all group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-6 shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-emerald-400 mb-3">10+</div>
              <h3 className="text-gray-100 mb-2">Technologies Deployed</h3>
              <p className="text-gray-400">
                From cloud infrastructure to API development tools
              </p>
            </div>

            {/* Metric 3 */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 text-center hover:border-emerald-500/50 transition-all group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-6 shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all">
                <Target className="w-8 h-8 text-white" />
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
