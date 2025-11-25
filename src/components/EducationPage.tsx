import circuitBg from "figma:asset/d1e24e304bd08c8dad5c534cb5493c70e5febc79.png";
import educationIcon from "figma:asset/f4d02be8ee2e842c7fd42eeef23e798576542a47.png";
import gtLogo from "../assets/georgia-tech-logo.svg";
import udLogo from "figma:asset/dd23cb4cc0353fe35b9d749c3ea903e87334bc53.png";
import msoeLogo from "figma:asset/11b33a6497ad88b072c82caa862d024a5cd53c85.png";
import matcLogo from "figma:asset/eb9d13c165ccdc296c05dd793c1a15712623f02a.png";
import degreeIcon from "figma:asset/94719da024130e17b7466b55ccba8a0e51618a8b.png";
import svgPaths from "../imports/svg-o41sg7fn0u";
import { GraduationCap, BookOpen, Award, Calendar, MapPin, Users } from "lucide-react";
import { Footer } from "./Footer";

export function EducationPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] relative">
      {/* Hero Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-xl shadow-emerald-500/50 flex items-center justify-center p-4">
              <img src={educationIcon} alt="Education" className="w-full h-full object-contain" />
            </div>
          </div>
          <h1 className="text-gray-100 mb-4">Educational Journey</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            A decade-long academic progression from IT networking fundamentals to advanced computer science. My educational foundation spans technical infrastructure, information systems management, business strategy, and human-computer interaction—equipping me with a unique blend of technical expertise and business acumen.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-12 px-6">
        <div className="max-w-5xl mx-auto relative">
          {/* Timeline connector line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent hidden lg:block" />

          <div className="space-y-16">
            {/* Georgia Institute of Technology */}
            <div className="relative">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-start">
                <div className="lg:text-right mb-8 lg:mb-0">
                  <div className="inline-block bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-xl shadow-lg shadow-emerald-500/10 p-8 text-left max-w-md w-full hover:border-emerald-500/50 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#B3A369] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30 p-1.5">
                        <img src={gtLogo} alt="Georgia Tech" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-100 mb-1">Georgia Institute of Technology</h3>
                        <p className="text-emerald-400 mb-2">Master of Science in Computer Science</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-gray-400 mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>2025-Present</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">In Progress</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-emerald-400" />
                        <p className="text-gray-200">Key Courses</p>
                      </div>
                      <ul className="space-y-2 ml-6">
                        <li className="text-gray-400">• Human Computer Interaction</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex items-start justify-start pt-8">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-500/50 relative -ml-3" />
                </div>
              </div>
            </div>

            {/* Professional Logistics Institute */}
            <div className="relative">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-start">
                <div className="hidden lg:flex items-start justify-end pt-8">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-500/50 relative -mr-3" />
                </div>

                <div className="mb-8 lg:mb-0">
                  <div className="inline-block bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-xl shadow-lg shadow-emerald-500/10 p-8 text-left max-w-md w-full hover:border-emerald-500/50 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#003A70] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 p-2">
                        <img src={udLogo} alt="University of Dayton" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-100 mb-1">University of Dayton</h3>
                        <p className="text-emerald-400 mb-2">Masters of Business Administration</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-gray-400 mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>2018 - 2020</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Dayton, OH</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-emerald-400" />
                        <p className="text-gray-200">Key Courses</p>
                      </div>
                      <ul className="space-y-2 ml-6">
                        <li className="text-gray-400">• Corporate Finance</li>
                        <li className="text-gray-400">• Business Analytics</li>
                        <li className="text-gray-400">• Negotiation</li>
                        <li className="text-gray-400">• Case Studies in Analytics</li>
                        <li className="text-gray-400">• Managerial Economics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Milwaukee School of Engineering */}
            <div className="relative">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-start">
                <div className="lg:text-right mb-8 lg:mb-0">
                  <div className="inline-block bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-xl shadow-lg shadow-emerald-500/10 p-8 text-left max-w-md w-full hover:border-emerald-500/50 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-500/30 p-1.5">
                        <img src={msoeLogo} alt="Milwaukee School of Engineering" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-100 mb-1">Milwaukee School of Engineering</h3>
                        <p className="text-emerald-400 mb-2">Bachelor of Science in Management Information Systems</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-gray-400 mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>2015 - 2017</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Milwaukee, WI</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-emerald-400" />
                        <p className="text-gray-200">Key Courses</p>
                      </div>
                      <ul className="space-y-2 ml-6">
                        <li className="text-gray-400">• Intro to Java Programming</li>
                        <li className="text-gray-400">• Intermediate Java Programming</li>
                        <li className="text-gray-400">• Managerial Cost Accounting</li>
                        <li className="text-gray-400">• Managerial Finance</li>
                        <li className="text-gray-400">• Database Management Systems</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex items-start justify-start pt-8">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-500/50 relative -ml-3" />
                </div>
              </div>
            </div>

            {/* Milwaukee Area Technical College */}
            <div className="relative">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-start">
                <div className="hidden lg:flex items-start justify-end pt-8">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-500/50 relative -mr-3" />
                </div>

                <div className="mb-8 lg:mb-0">
                  <div className="inline-block bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 rounded-xl shadow-lg shadow-emerald-500/10 p-8 text-left max-w-md w-full hover:border-emerald-500/50 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#0066B3] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 p-1.5">
                        <img src={matcLogo} alt="Milwaukee Area Technical College" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-100 mb-1">Milwaukee Area Technical College</h3>
                        <p className="text-emerald-400 mb-2">Associate of Science in IT Networking</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-gray-400 mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>2012 - 2015</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Milwaukee, WI</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-emerald-400" />
                        <p className="text-gray-200">Key Courses</p>
                      </div>
                      <ul className="space-y-2 ml-6">
                        <li className="text-gray-400">• Cisco 1 (Network Fundamentals)</li>
                        <li className="text-gray-400">• Cisco 2 (Routing Protocols)</li>
                        <li className="text-gray-400">• Cisco 3 (Advance Routing/Switching)</li>
                        <li className="text-gray-400">• Cisco 4 (WAN Technologies)</li>
                        <li className="text-gray-400">• Network Security (Security+)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education at a Glance */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-12 shadow-xl">
            <h2 className="text-white text-center mb-12">Education at a Glance</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="text-white mb-1">4</div>
                <p className="text-emerald-100">Degrees</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="text-white mb-1">230</div>
                <p className="text-emerald-100">Completed Credits</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-white mb-1">2,000+</div>
                <p className="text-emerald-100">Learning Hours</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-white mb-1">3.2</div>
                <p className="text-emerald-100">Average GPA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}