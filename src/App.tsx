import { useState } from "react";
import { motion } from "framer-motion";
import svgPaths from "./imports/svg-o41sg7fn0u";
import profileImg from "./assets/profile-headshot.png";
import circuitBg from "figma:asset/d1e24e304bd08c8dad5c534cb5493c70e5febc79.png";
import gtLogo from "./assets/georgia-tech-logo.svg";
import { AnimatedCounter } from "./components/AnimatedCounter";
import { SkillTag } from "./components/SkillTag";
import { CircuitBackground } from "./components/CircuitBackground";
import { InteractiveSparks } from "./components/InteractiveSparks";
import { Header } from "./components/Header";
import { EducationPage } from "./components/EducationPage";
import { WorkHistoryPage } from "./components/WorkHistoryPage";
import { ContactPage } from "./components/ContactPage";
import { ProfessionalDevelopmentPage } from "./components/ProfessionalDevelopmentPage";
import { Footer } from "./components/Footer";

function OverviewPage() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skills = [
    "Agile Methodology",
    "Product Management",
    "Enterprise Architecture",
    "API Development",
    "Requirements Gathering",
    "Data Architecture",
    "User Experience (UX)",
    "User Interface (UI)",
    "GAP Analysis",
    "Product Roadmapping",
    "Business Process Analysis",
    "User Acceptance Testing",
    "Data Mining",
    "Technical Documentation",
    "Cross-Functional Leadership",
    "Solution Design",
    "User Interviews",
    "Risk Management",
    "Forecasting",
    "Software Testing",
    "SQL & Databases",
    "Test Automation",
    "Process Improvement",
    "Stakeholder Management",
    "Technical Support"
  ];

  const skillExperiences: Record<string, string[]> = {
    "Agile Methodology": ["Business Architect - FedEx", "Senior Product Owner - FedEx", "Product Owner - FedEx"],
    "Product Management": ["Senior Product Owner - FedEx", "Product Owner - FedEx", "Product Manager - Kohl's"],
    "Enterprise Architecture": ["Business Architect - FedEx"],
    "API Development": ["Senior Product Owner - FedEx", "Product Owner - FedEx"],
    "Data Architecture": ["Business Architect - FedEx"],
    "User Experience (UX)": ["Product Owner - FedEx"],
    "GAP Analysis": ["Senior Product Owner - FedEx"],
    "Requirements Gathering": ["Business Architect - FedEx", "Product Owner - FedEx", "Senior Business Analyst - FIS"],
    "Product Roadmapping": ["Senior Product Owner - FedEx", "Product Owner - FedEx"],
    "Technical Documentation": ["Senior Business Analyst - FIS", "Associate Automation QA - Northwestern Mutual"],
    "User Acceptance Testing": ["Senior Business Analyst - FIS"],
    "Test Automation": ["Associate Automation QA - Northwestern Mutual"],
    "SQL & Databases": ["Product Manager - Kohl's"],
  };

  const handleSkillClick = (skill: string) => {
    setSelectedSkill(selectedSkill === skill ? null : skill);
  };

  const selectedExperiences = selectedSkill ? skillExperiences[selectedSkill] ?? [] : [];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section with Circuit Background */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[600px] flex items-center justify-center px-6 py-20 overflow-hidden"
      >
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
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-2 h-2 bg-emerald-500 rounded-full"
                />
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-emerald-500/30 rounded-lg backdrop-blur-sm cursor-pointer hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
                >
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24">
                    <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-gray-300">Enterprise Architecture</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-emerald-500/30 rounded-lg backdrop-blur-sm cursor-pointer hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
                >
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24">
                    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-gray-300">Product Management</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-emerald-500/30 rounded-lg backdrop-blur-sm cursor-pointer hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
                >
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-gray-300">Business Analysis</span>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/tchaas-alexander-wright/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 px-6 py-3 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/10 transition-all"
                >
                  <svg className="w-5 h-6" fill="none" viewBox="0 0 21 24">
                    <path d={svgPaths.p303ef300} fill="#10B981" />
                  </svg>
                  LinkedIn
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image with Tech Frame */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative z-20">
                {/* Outer Glowing Frame */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-blue-500/30 rounded-full blur-2xl"
                />
                
                <div className="relative w-[420px] h-[420px] rounded-full bg-gradient-to-br from-emerald-500/20 to-transparent p-2.5 backdrop-blur-sm border border-emerald-500/30">
                  <div className="w-full h-full rounded-full bg-gray-900 p-6">
                    <img
                      src={profileImg}
                      alt="Tchaas Alexander-Wright"
                      className="w-full h-full rounded-full object-cover border-[6px] border-emerald-500/60 shadow-xl"
                    />
                  </div>
                </div>
                
                {/* Floating Tech Badge */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full shadow-lg shadow-emerald-500/50 flex items-center justify-center border border-emerald-400/50 cursor-pointer"
                >
                  <svg className="w-7 h-6" fill="none" viewBox="0 0 27 24">
                    <path d={svgPaths.p302cc000} fill="white" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Competencies Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#0a0e1a] py-20 px-6 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <img src={circuitBg} alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-gray-100 mb-4">Core Competencies</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Expertise spanning enterprise architecture, agile product development, and strategic technology leadership
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Competency Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10 cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30"
              >
                <svg className="w-4 h-5 flex-shrink-0" fill="none" viewBox="0 0 15 20">
                  <path d={svgPaths.p594b480} fill="white" />
                </svg>
              </motion.div>
              <h3 className="text-gray-100 mb-4">Enterprise Architecture & Data Strategy</h3>
              <p className="text-gray-400 mb-4">
                Defining scalable data architectures and capability models that bridge FedEx Express and Ground systems. Leading cross-functional requirements gathering and translating enterprise goals into executable technology solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className="text-xs px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded cursor-pointer"
                >
                  Solution Design
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className="text-xs px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded cursor-pointer"
                >
                  Data Architecture
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className="text-xs px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded cursor-pointer"
                >
                  Process Mapping
                </motion.span>
              </div>
            </motion.div>

            {/* Competency Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10 cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30"
              >
                <svg className="w-6 h-5 flex-shrink-0" fill="none" viewBox="0 0 25 20">
                  <path d={svgPaths.p39a88000} fill="white" />
                </svg>
              </motion.div>
              <h3 className="text-gray-100 mb-4">Agile Product Ownership & Delivery</h3>
              <p className="text-gray-400 mb-4">
                Managing 5 Agile Release Trains and leading backend development teams to deliver enterprise-scale APIs. Expert in GAP analysis, user story development, and driving product roadmaps aligned with business strategy.
              </p>
              <div className="flex flex-wrap gap-2">
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className="text-xs px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded cursor-pointer"
                >
                  Product Roadmapping
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className="text-xs px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded cursor-pointer"
                >
                  Agile/Scrum
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className="text-xs px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded cursor-pointer"
                >
                  API Development
                </motion.span>
              </div>
            </motion.div>

            {/* Competency Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2 * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10 cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p359f3c00} fill="white" />
                </svg>
              </motion.div>
              <h3 className="text-gray-100 mb-4">User Experience & Business Analysis</h3>
              <p className="text-gray-400 mb-4">
                Conducting user interviews and partnering with UX analysts to develop MVP features. Specialized in requirements gathering, technical documentation, and transforming business needs into digital solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className="text-xs px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded cursor-pointer"
                >
                  User Research
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className="text-xs px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded cursor-pointer"
                >
                  Requirements Analysis
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className="text-xs px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded cursor-pointer"
                >
                  UX/UI Design
                </motion.span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Key Accomplishments Section - ANIMATED WITH COUNTERS */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-b from-gray-900 to-[#0a0e1a] py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-100 mb-4"
            >
              Impact Metrics
            </motion.h2>
            <p className="text-gray-400">Data-driven achievements across my professional journey</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 * 0.1 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all"
              >
                <svg className="w-7 h-6 flex-shrink-0" fill="none" viewBox="0 0 30 24">
                  <path d={svgPaths.p3d856570} fill="white" />
                </svg>
              </motion.div>
              <div className="text-gray-100 mb-2 text-3xl font-semibold">
                <AnimatedCounter value="500" suffix="+" />
              </div>
              <p className="text-gray-400">Freight Operations Managed</p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 * 0.1 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all"
              >
                <svg className="w-4 h-6 flex-shrink-0" fill="none" viewBox="0 0 15 24">
                  <path d={svgPaths.p1c740200} fill="white" />
                </svg>
              </motion.div>
              <div className="text-gray-100 mb-2 text-3xl font-semibold">
                <AnimatedCounter value="2" suffix="M+" prefix="$" />
              </div>
              <p className="text-gray-400">Revenue Generated</p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2 * 0.1 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all"
              >
                <svg className="w-5 h-6 flex-shrink-0" fill="none" viewBox="0 0 18 24">
                  <path d={svgPaths.p2f501700} fill="white" />
                </svg>
              </motion.div>
              <div className="text-gray-100 mb-2 text-3xl font-semibold">
                <AnimatedCounter value="15" suffix="+" />
              </div>
              <p className="text-gray-400">Industry Certifications</p>
            </motion.div>

            {/* Stat 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 3 * 0.1 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all"
              >
                <svg className="w-7 h-6 flex-shrink-0" fill="none" viewBox="0 0 30 24">
                  <path d={svgPaths.p6a55c00} fill="white" />
                </svg>
              </motion.div>
              <div className="text-gray-100 mb-2 text-3xl font-semibold">
                <AnimatedCounter value="98" suffix="%" />
              </div>
              <p className="text-gray-400">Client Satisfaction Rate</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Professional Skills Section - INTERACTIVE */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#0a0e1a] py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-100 mb-4"
            >
              Professional Skills & Technologies
            </motion.h2>
            <p className="text-gray-400 max-w-3xl mx-auto mb-4">
              A comprehensive toolkit spanning product management, enterprise architecture, and technical delivery
            </p>
            <p className="text-emerald-400 text-sm">
              💡 Click any skill to see where I've applied it
            </p>
          </div>

          {/* Skills Grid */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <SkillTag
                  skill={skill}
                  isSelected={selectedSkill === skill}
                  onClick={() => handleSkillClick(skill)}
                />
              </motion.div>
            ))}
          </div>

          {/* Experience Panel - Shows when skill is selected */}
          {selectedSkill !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-emerald-500/30 p-8 mt-8"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-gray-100 text-xl mb-2">
                      Where I used <span className="text-emerald-400">{selectedSkill}</span>
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Click another skill to explore, or close this panel
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSkill(null)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {selectedExperiences.length > 0 ? (
                  <ul className="space-y-3">
                    {selectedExperiences.map((experience, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                        <span>{experience}</span>
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">No experience entries recorded yet for this skill.</p>
                )}
              </motion.div>
            )}
        </div>
      </motion.section>

      {/* Education Section - STEP 8 ANIMATED */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-b from-gray-900 to-[#0a0e1a] py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-100 mb-4"
            >
              Continuous Learning
            </motion.h2>
            <p className="text-gray-400">Staying ahead through education and skill development</p>
          </div>

          <div className="space-y-8">
            {/* Current Education - Ongoing Learning */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border-l-4 border-emerald-500 relative hover:bg-gray-900/70 transition-all cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-gray-100 mb-2">Master of Science in Computer Science</h3>
                  <p className="text-emerald-400 mb-2">Georgia Institute of Technology</p>
                  <p className="text-gray-400 mb-1">2025 - Present</p>
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full mb-4 cursor-pointer"
                  >
                    In Progress
                  </motion.span>
                  <p className="text-gray-400">
                    Currently pursuing advanced studies in Computer Science with a focus on Human Computer Interaction and emerging technologies.
                  </p>
                </div>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-[#B3A369] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30 p-2"
                >
                  <img src={gtLogo} alt="Georgia Tech" className="w-full h-full object-contain" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Work Experience Section - STEP 9 ANIMATED */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#0a0e1a] py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-100 mb-4"
            >
              Professional Experience
            </motion.h2>
            <p className="text-gray-400">Building innovative solutions for modern challenges</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-transparent hidden md:block" />

            <div className="space-y-12">
              {/* Current Job - Senior Product Manager */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="flex gap-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg shadow-emerald-500/50 cursor-pointer"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p2b274680} fill="white" />
                    </svg>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="flex-1 bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-gray-100 mb-1">Senior Product Manager</h3>
                        <p className="text-emerald-400 mb-1">TechFlow Solutions</p>
                        <p className="text-gray-400">2022 - Present</p>
                      </div>
                      <motion.span
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full"
                      >
                        Current
                      </motion.span>
                    </div>
                    <p className="text-gray-400 mb-4">
                      Led cross-functional teams in developing innovative SaaS solutions for enterprise clients. Managed product roadmaps, conducted market research, and drove strategic initiatives that resulted in 40% revenue growth.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <motion.span
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-1.5 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-full cursor-pointer hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
                      >
                        Product Management
                      </motion.span>
                      <motion.span
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-1.5 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-full cursor-pointer hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
                      >
                        SaaS Solutions
                      </motion.span>
                      <motion.span
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-1.5 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-full cursor-pointer hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
                      >
                        Team Leadership
                      </motion.span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer - Let's Connect */}
      <Footer />
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('overview');

  return (
    <div className="min-h-screen relative bg-[#050608] overflow-x-hidden">
      {/* Global animated circuit background */}
      <CircuitBackground />

      {/* Interactive sparks */}
      <InteractiveSparks />

      {/* Foreground content */}
      <div className="relative z-20">
        <Header currentPage={currentPage} onPageChange={setCurrentPage} />
        
        <main>
          {currentPage === 'overview' && <OverviewPage />}
          {currentPage === 'education' && <EducationPage />}
          {currentPage === 'experience' && <WorkHistoryPage />}
          {currentPage === 'skills' && <ProfessionalDevelopmentPage />}
          {currentPage === 'contact' && <ContactPage />}
        </main>
      </div>
    </div>
  );
}