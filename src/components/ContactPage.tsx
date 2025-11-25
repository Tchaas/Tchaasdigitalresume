import circuitBg from "figma:asset/d1e24e304bd08c8dad5c534cb5493c70e5febc79.png";
import svgPaths from "../imports/svg-o41sg7fn0u";
import { Mail, Linkedin, Github, MapPin, Phone, Send, Download } from "lucide-react";
import { Footer } from "./Footer";

export function ContactPage() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-blue-500/20 rounded-2xl blur-2xl" />
                
                <div className="relative w-[500px] h-[500px] rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl shadow-emerald-500/20">
                  <img 
                    src={svgPaths.profileImg} 
                    alt="Tchaas Alexander-Wright" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-500/50 to-emerald-600/30 rounded-2xl -z-10 blur-xl" />
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-gray-100 mb-4">Let's Connect</h1>
                <p className="text-gray-400 mb-6">
                  I'm always excited to connect with professionals, discuss new opportunities, or explore potential collaborations. Whether you have a project in mind, want to discuss logistics innovation, or just want to say hello, I'd love to hear from you.
                </p>
                <p className="text-gray-400">
                  Feel free to reach out through any of the channels below, and I'll get back to you as soon as possible.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <a
                  href="mailto:tchaasawright@gmail.com"
                  className="flex items-center gap-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-emerald-500/50 transition-all">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500">Email</p>
                    <p className="text-gray-200">tchaasawright@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/tchaas-alexander-wright/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-emerald-500/50 transition-all">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500">LinkedIn</p>
                    <p className="text-gray-200">Tchaas Alexander-Wright</p>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-emerald-500/50 transition-all">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500">GitHub</p>
                    <p className="text-gray-200">View My Projects</p>
                  </div>
                </a>
              </div>

              {/* Download Resume Button */}
              <div className="pt-4">
                <button 
                  onClick={() => {
                    // In a real implementation, this would link to your actual resume file
                    alert('Resume download will be available soon!');
                  }}
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  <span>Download My Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-gray-900 mb-4">What I Bring to the Table</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                With years of experience in logistics, technology, and innovation, I'm passionate about creating solutions that drive real business value.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
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
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-12 shadow-xl text-center">
            <h2 className="text-white mb-4">Ready to Start a Conversation?</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Whether you're looking to collaborate on a project, explore job opportunities, or simply connect, I'm here and eager to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:tchaasawright@gmail.com"
                className="bg-white text-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-50 transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Me an Email
              </a>
              <a
                href="https://www.linkedin.com/in/tchaas-alexander-wright/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-800 text-white px-8 py-4 rounded-xl hover:bg-emerald-900 transition-colors inline-flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}