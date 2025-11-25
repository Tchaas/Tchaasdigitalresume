import circuitBg from "figma:asset/d1e24e304bd08c8dad5c534cb5493c70e5febc79.png";
import { Heart, Users, Code, Lightbulb, Target, TrendingUp, Award, Calendar, ExternalLink, Github } from "lucide-react";
import { Footer } from "./Footer";

export function ProfessionalDevelopmentPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] relative">
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

      {/* Non-Profit Board Involvement */}
      <section className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-gray-100 mb-2">Board Involvement</h2>
            <p className="text-gray-400">Serving organizations that make a difference</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Board Position 1 */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8 hover:border-emerald-500/50 transition-all group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-100 mb-1">Board Member</h3>
                  <p className="text-emerald-400 mb-2">Tech for Good Foundation</p>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>2023 - Present</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Serving on the board of a non-profit dedicated to bringing technology education to underserved communities. Leading initiatives to expand digital literacy programs and secure funding for STEM education.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">Strategic Planning</span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">Fundraising</span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">Program Development</span>
              </div>
            </div>

            {/* Board Position 2 */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8 hover:border-emerald-500/50 transition-all group">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-100 mb-1">Advisory Board Member</h3>
                  <p className="text-emerald-400 mb-2">Logistics Innovation Network</p>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>2022 - Present</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Providing strategic guidance to a consortium of logistics companies working to modernize supply chain operations through technology adoption and sustainable practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">Tech Strategy</span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">Industry Relations</span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth Projects */}
      <section className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-gray-100 mb-2">Featured Projects</h2>
            <p className="text-gray-400">Deep dives into projects I'm passionate about</p>
          </div>

          <div className="space-y-8">
            {/* Project 1 - Detailed */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Project Image/Icon Area */}
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 p-12 flex items-center justify-center relative overflow-hidden lg:col-span-1">
                  <div className="absolute inset-0 opacity-10">
                    <img src={circuitBg} alt="" className="w-full h-full object-cover" />
                  </div>
                  <Code className="w-24 h-24 text-emerald-400 relative z-10" />
                </div>
                
                {/* Project Details */}
                <div className="p-8 lg:col-span-2">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-gray-100 mb-2">Freight Negotiation AI Assistant</h3>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">In Development</span>
                        <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-full">Open Source</span>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-emerald-500/10 rounded-lg transition-all">
                      <ExternalLink className="w-5 h-5 text-emerald-400" />
                    </button>
                  </div>
                  
                  <p className="text-gray-400 mb-6">
                    An AI-powered tool designed to help independent truckers and small logistics companies analyze freight load offers and generate confident counter-offers. The system uses machine learning to analyze historical freight rates, market conditions, and route specifics to provide data-driven negotiation recommendations.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-gray-200 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Real-time market rate analysis using API integrations with major freight boards</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Automated counter-offer generation based on route profitability calculations</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Historical data tracking to improve negotiation success rates over time</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Mobile-first design for on-the-go access by truck drivers</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-gray-200 mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">Python</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">TensorFlow</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">React</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">PostgreSQL</span>
                      <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg">AWS</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-200 mb-3">Impact & Goals</h4>
                    <p className="text-gray-400">
                      The goal is to empower independent truckers with the same data-driven insights that large logistics companies use, leveling the playing field in freight negotiations. Early beta testing shows a 23% improvement in accepted counter-offers and an average $150 increase per load.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 - Detailed */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Project Image/Icon Area */}
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 p-12 flex items-center justify-center relative overflow-hidden lg:col-span-1">
                  <div className="absolute inset-0 opacity-10">
                    <img src={circuitBg} alt="" className="w-full h-full object-cover" />
                  </div>
                  <Target className="w-24 h-24 text-emerald-400 relative z-10" />
                </div>
                
                {/* Project Details */}
                <div className="p-8 lg:col-span-2">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-gray-100 mb-2">Route Optimization Engine</h3>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-gray-700/50 text-gray-300 border border-gray-600 rounded-full">Completed</span>
                        <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-full">Production</span>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-emerald-500/10 rounded-lg transition-all">
                      <Github className="w-5 h-5 text-emerald-400" />
                    </button>
                  </div>
                  
                  <p className="text-gray-400 mb-6">
                    A sophisticated route optimization system that helps delivery companies minimize fuel costs and maximize efficiency. The system considers multiple variables including traffic patterns, delivery time windows, vehicle capacity, and driver schedules to generate optimal delivery routes.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-gray-200 mb-3">Technical Approach</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Implemented genetic algorithms for multi-stop route optimization</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Integration with Google Maps API and real-time traffic data</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Built REST API for easy integration with existing fleet management systems</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                        <span>Dashboard for visualizing routes and analyzing performance metrics</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-gray-200 mb-3">Results Achieved</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-semibold text-emerald-400 mb-1">28%</div>
                        <p className="text-gray-400">Fuel Savings</p>
                      </div>
                      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-semibold text-emerald-400 mb-1">15%</div>
                        <p className="text-gray-400">More Deliveries</p>
                      </div>
                      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-semibold text-emerald-400 mb-1">92%</div>
                        <p className="text-gray-400">On-Time Rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Activities */}
      <section className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-gray-100 mb-2">Volunteer Work</h2>
            <p className="text-gray-400">Contributing time and expertise to meaningful causes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Volunteer Activity 1 */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-100 mb-2">Code Mentor</h3>
              <p className="text-emerald-400 mb-3">CodePath</p>
              <p className="text-gray-400 mb-4">
                Mentoring aspiring software engineers from underrepresented backgrounds, providing guidance on technical skills, career development, and interview preparation.
              </p>
              <div className="flex items-center gap-2 text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>2021 - Present</span>
              </div>
            </div>

            {/* Volunteer Activity 2 */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-100 mb-2">Workshop Facilitator</h3>
              <p className="text-emerald-400 mb-3">Local Community Center</p>
              <p className="text-gray-400 mb-4">
                Leading monthly workshops on digital literacy, teaching community members essential computer skills, online safety, and how to leverage technology for career advancement.
              </p>
              <div className="flex items-center gap-2 text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>2020 - Present</span>
              </div>
            </div>

            {/* Volunteer Activity 3 */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-100 mb-2">Career Advisor</h3>
              <p className="text-emerald-400 mb-3">University Alumni Network</p>
              <p className="text-gray-400 mb-4">
                Advising recent graduates on career transitions into tech and logistics fields, reviewing resumes, conducting mock interviews, and sharing industry insights.
              </p>
              <div className="flex items-center gap-2 text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>2019 - Present</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-2xl p-12 text-center backdrop-blur-sm">
            <h2 className="text-gray-100 mb-4">Want to Collaborate?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              I'm always looking for opportunities to contribute to meaningful projects and organizations. If you have an initiative that aligns with my interests in technology, logistics, or community development, I'd love to hear from you.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
            >
              <Heart className="w-5 h-5" />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}