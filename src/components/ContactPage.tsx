import profileImg from "../assets/profile-headshot.png";
import { Mail, Linkedin, Github, MapPin, Download } from "lucide-react";

export function ContactPage() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-blue-500/20 rounded-2xl blur-2xl" />
                
                <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl shadow-emerald-500/20">
                  <img 
                    src={profileImg} 
                    alt="Tchaas Alexander-Wright" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-emerald-500/50 to-emerald-600/30 rounded-2xl -z-10 blur-xl" />
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div>
                <h1 className="text-gray-100 mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Let's Connect</h1>
                <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                  I'm always excited to connect with professionals, discuss new opportunities, or explore potential collaborations. Whether you have a project in mind, want to discuss logistics innovation, or just want to say hello, I'd love to hear from you.
                </p>
                <p className="text-gray-400 text-sm sm:text-base">
                  Feel free to reach out through any of the channels below, and I'll get back to you as soon as possible.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="mailto:tchaasawright@gmail.com"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-emerald-500/50 transition-all flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-500 text-xs sm:text-sm">Email</p>
                    <p className="text-gray-200 text-sm sm:text-base truncate">tchaasawright@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/tchaas-alexander-wright/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-emerald-500/50 transition-all flex-shrink-0">
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs sm:text-sm">LinkedIn</p>
                    <p className="text-gray-200 text-sm sm:text-base">Tchaas Alexander-Wright</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Tchaas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-emerald-500/50 transition-all flex-shrink-0">
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs sm:text-sm">GitHub</p>
                    <p className="text-gray-200 text-sm sm:text-base">View My Projects</p>
                  </div>
                </a>
              </div>

              {/* Download Resume Button */}
              <div className="pt-2 sm:pt-4">
                <a 
                  href="/TchaasHAlexanderWright_Resume.pdf"
                  download="TchaasHAlexanderWright_Resume.pdf"
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all flex items-center justify-center gap-2 sm:gap-3 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 text-sm sm:text-base"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Download My Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-gray-900 mb-4">What I Bring to the Table</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                With years of experience in logistics, technology, and innovation, I'm passionate about creating solutions that drive real business value.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600">United States</p>
                <p className="text-gray-500">Open to remote opportunities</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-gray-900 mb-2">Response Time</h4>
                <p className="text-gray-600">Within 24-48 hours</p>
                <p className="text-gray-500">Usually much faster</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Download className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-gray-900 mb-2">Availability</h4>
                <p className="text-gray-600">Open to opportunities</p>
                <p className="text-gray-500">Full-time & consulting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 sm:p-12 shadow-xl text-center">
            <h2 className="text-white mb-4">Ready to Start a Conversation?</h2>
            <p className="text-emerald-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Whether you're looking to collaborate on a project, explore job opportunities, or simply connect, I'm here and eager to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:tchaasawright@gmail.com"
                className="bg-white text-emerald-600 px-5 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-emerald-50 transition-colors inline-flex items-center gap-2 text-sm sm:text-base"
              >
                <Mail className="w-5 h-5" />
                Send Me an Email
              </a>
              <a
                href="https://www.linkedin.com/in/tchaas-alexander-wright/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-800 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-emerald-900 transition-colors inline-flex items-center gap-2 text-sm sm:text-base"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
