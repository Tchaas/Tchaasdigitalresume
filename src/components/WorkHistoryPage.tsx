import circuitBg from "figma:asset/d1e24e304bd08c8dad5c534cb5493c70e5febc79.png";
import svgPaths from "../imports/svg-o41sg7fn0u";
import northwesternMutualLogo from "figma:asset/98586f21bd5edcf117d9f769109283d9aa5526db.png";
import fisLogo from "figma:asset/4f5a36f91e0395747a78ce3ab06594ac361ce959.png";
import kohlsLogo from "figma:asset/461a2e3cbf0d37c40f733da331877d62a57de833.png";
import fedexLogo from "figma:asset/252fdb688f50c8ccf51f69284795552830d66ac6.png";
import { Briefcase, Calendar, TrendingUp, Users, Target, Award } from "lucide-react";
import { Footer } from "./Footer";

export function WorkHistoryPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] relative">
      {/* Hero Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-gray-100 mb-4">Professional Experience</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            A 9+ year journey from quality assurance to business architecture, spanning fintech, retail, financial services, and logistics. My career showcases progressive growth in product ownership, enterprise architecture, and leading digital transformation initiatives that deliver strategic value across global organizations.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-12 px-6">
        <div className="max-w-5xl mx-auto relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent hidden lg:block" />

          <div className="space-y-24">
            {/* Job 1 - Business Architect (Left Side) */}
            <div className="relative">
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-500/50 -ml-2 hidden lg:block" />
              
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Left side - Company Info */}
                <div className="order-2 lg:order-1 mt-8 lg:mt-0">
                  <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 p-6 rounded-xl hover:border-emerald-500/50 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={fedexLogo} alt="FedEx" className="w-12 h-12 rounded-lg" />
                      <h4 className="text-gray-100">About Federal Express Corporation</h4>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Logistics & Transportation
                    </p>
                    <p className="text-gray-300 mb-4">
                      Federal Express Corporation (FedEx) is a multinational conglomerate holding company focused on transportation, e-commerce, and business services. Founded in 1971, FedEx is a global leader in express shipping and logistics solutions, serving millions of customers worldwide with innovative delivery and supply chain management solutions.
                    </p>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p36e52f00} fill="#10B981" />
                      </svg>
                      <span>Remote</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Job Details */}
                <div className="order-1 lg:order-2 space-y-6">
                  <div>
                    <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full inline-flex items-center gap-2">
                      Mar 2025 - Present
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p36e52f00} fill="#10B981" />
                      </svg>
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-gray-100 mb-2">Business Architect</h3>
                    <h4 className="text-emerald-400 mb-4">Federal Express Corporation</h4>
                    <div className="text-gray-400 space-y-3">
                      <p>
                        I manage incoming business demand across five Agile Release Trains (ARTs), ensuring prioritization aligns with enterprise strategies. My responsibilities include defining and documenting data architecture to support new enterprise capabilities, developing process maps and capability models for current and future-state operations, and collaborating with architects and engineering teams to propose technology solutions.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-gray-100 mb-3">Key Metrics:</h5>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Managed demand across 5 Agile Release Trains (ARTs)</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Defined scalable data architecture for new enterprise capabilities</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Developed process maps and capability models for multiple business units</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Delivered $70.5M in strategic value to FedEx in FY26</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Created high-level solution designs and capability documentation for implementation readiness</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Job 2 - Senior Product Owner (Left Side) */}
            <div className="relative">
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-500/50 -ml-2 hidden lg:block" />
              
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Left side - Company Info */}
                <div className="order-2 lg:order-1 mt-8 lg:mt-0">
                  <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 p-6 rounded-xl hover:border-emerald-500/50 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={fedexLogo} alt="FedEx" className="w-12 h-12 rounded-lg" />
                      <h4 className="text-gray-100">About Federal Express Corporation</h4>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Logistics & Transportation
                    </p>
                    <p className="text-gray-300 mb-4">
                      Federal Express Corporation (FedEx) is a multinational conglomerate holding company focused on transportation, e-commerce, and business services. Founded in 1971, FedEx is a global leader in express shipping and logistics solutions, serving millions of customers worldwide with innovative delivery and supply chain management solutions.
                    </p>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p36e52f00} fill="#10B981" />
                      </svg>
                      <span>Remote</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Job Details */}
                <div className="order-1 lg:order-2 space-y-6">
                  <div>
                    <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full inline-flex items-center gap-2">
                      Oct 2023 - Mar 2025
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p36e52f00} fill="#10B981" />
                      </svg>
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-gray-100 mb-2">Senior Product Owner</h3>
                    <h4 className="text-emerald-400 mb-4">Federal Express Corporation</h4>
                    <div className="text-gray-400 space-y-3">
                      <p>
                        I serve as the Product Owner for both UI/UX and backend development teams, driving digital solutions to replace legacy processes and bridge data gaps between FedEx Express and FedEx Ground. I lead initiatives to deliver new products that enhance the global network by leveraging captured data for analytics and volume management.
                      </p>
                      <p>
                        My role includes conducting GAP analysis for feature discovery, collaborating with engineers and designers to define product vision, and managing application deployments to production. I also promote solutions to leadership, facilitate cross-functional sessions to document processes, and develop MVPs that support enterprise-level applications across the U.S. and Canada.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-gray-100 mb-3">Key Metrics:</h5>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Product Owner for UI/UX and backend teams</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Delivered new products eliminating legacy processes and improving global network analytics</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Led development of a process combining Express and Ground volume management per zip code</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Owned deployment of a new application enabling engineers to submit volume changes for all FedEx Ground facilities</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Developed enterprise software solutions supporting volume management for U.S. and Canada</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Job 3 - Product Owner (Left Side) */}
            <div className="relative">
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-500/50 -ml-2 hidden lg:block" />
              
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Left side - Company Info */}
                <div className="order-2 lg:order-1 mt-8 lg:mt-0">
                  <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 p-6 rounded-xl hover:border-emerald-500/50 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={fedexLogo} alt="FedEx" className="w-12 h-12 rounded-lg" />
                      <h4 className="text-gray-100">About Federal Express Corporation</h4>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Logistics & Transportation
                    </p>
                    <p className="text-gray-300 mb-4">
                      Federal Express Corporation (FedEx) is a multinational conglomerate holding company focused on transportation, e-commerce, and business services. Founded in 1971, FedEx is a global leader in express shipping and logistics solutions, serving millions of customers worldwide with innovative delivery and supply chain management solutions.
                    </p>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p36e52f00} fill="#10B981" />
                      </svg>
                      <span>Remote</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Job Details */}
                <div className="order-1 lg:order-2 space-y-6">
                  <div>
                    <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full inline-flex items-center gap-2">
                      Mar 2021 - Sep 2023
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p36e52f00} fill="#10B981" />
                      </svg>
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-gray-100 mb-2">Product Owner</h3>
                    <h4 className="text-emerald-400 mb-4">Federal Express Corporation</h4>
                    <div className="text-gray-400 space-y-3">
                      <p>
                        I serve as a Product Owner for multiple teams, including three offshore backend development teams and a UX/UI team, where I define business rules for APIs and collaborate with stakeholders to deliver high-value features. I develop user stories, gather requirements with architects, and partner with the Product Manager to create a roadmap aligned with business goals.
                      </p>
                      <p>
                        I implemented a new documentation process adopted by eight development teams and introduced a method for capturing production issues. Additionally, I conduct user interviews to identify process gaps, structure API contracts, and work closely with solution architects and lead developers to deliver impactful solutions.
                      </p>
                      <p>
                        My efforts have resulted in the successful implementation of features that enhance security, modernize the FedEx network, and provide new tools for field engineers.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-gray-100 mb-3">Key Metrics:</h5>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Product Owner for 3 offshore backend teams and 1 UX/UI team</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Implemented a new documentation process adopted by 8 development teams</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Delivered over 16 new features improving security and network modernization</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Partnered with Sr. UX Analyst to develop MVP features and engage external users</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Defined API contracts and business rules for multiple UI applications</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Job 4 - Product Manager - Payments (Left Side) */}
            <div className="relative">
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-500/50 -ml-2 hidden lg:block" />
              
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Left side - Company Info */}
                <div className="order-2 lg:order-1 mt-8 lg:mt-0">
                  <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 p-6 rounded-xl hover:border-emerald-500/50 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={kohlsLogo} alt="Kohl's" className="w-12 h-12 rounded-lg" />
                      <h4 className="text-gray-100">About Kohl's</h4>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Retail
                    </p>
                    <p className="text-gray-300 mb-4">
                      Kohl's is an American department store retail chain, founded in 1962. It operates over 1,100 stores across 49 states, offering a wide range of products including apparel, footwear, bedding, furniture, jewelry, beauty products, and housewares. Kohl's is known for its customer-centric approach, loyalty programs, and strategic partnerships with major brands.
                    </p>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p36e52f00} fill="#10B981" />
                      </svg>
                      <span>Menomonee Falls, WI</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Job Details */}
                <div className="order-1 lg:order-2 space-y-6">
                  <div>
                    <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full inline-flex items-center gap-2">
                      Jan 2020 - Oct 2020
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p36e52f00} fill="#10B981" />
                      </svg>
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-gray-100 mb-2">Product Manager - Payments</h3>
                    <h4 className="text-emerald-400 mb-4">Kohl's</h4>
                    <div className="text-gray-400 space-y-3">
                      <p>
                        I develop user stories for payment products based on business partner requests and create acceptance criteria for engineers by analyzing business and technical documentation.
                      </p>
                      <p>
                        I utilize Splunk to validate payment transactions and troubleshoot issues, while also managing and testing Verifone pin-pads in the test environment.
                      </p>
                      <p>
                        My responsibilities include developing performance metrics, creating test cases, supporting server patching, managing code deployments, and documenting processes for the support team. Additionally, I design workflows and diagrams in Lucidchart to map data flows and impacted applications for new projects.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-gray-100 mb-3">Key Metrics:</h5>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Developed user stories and acceptance criteria for payment products</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Utilized Splunk for transaction validation and troubleshooting</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Created and tested pin-pad performance metrics</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Managed and deployed software packages for Verifone Mx925 and Mx915 models</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Supported Microsoft Server 2008 R2 and 2016 patching in test environments</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Designed workflows and diagrams for new projects using Lucidchart</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Job 5 - Senior Business System Analyst at FIS (Left Side) */}
            <div className="relative">
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-500/50 -ml-2 hidden lg:block" />
              
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Left side - Company Info */}
                <div className="order-2 lg:order-1 mt-8 lg:mt-0">
                  <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 p-6 rounded-xl hover:border-emerald-500/50 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={fisLogo} alt="FIS" className="w-12 h-12 rounded-lg" />
                      <h4 className="text-gray-100">About FIS</h4>
                    </div>
                    <p className="text-gray-300 mb-4">
                      FinTech
                    </p>
                    <p className="text-gray-300 mb-4">
                      FIS primarily operates across three major segments, providing software, services, and outsourcing to:
                    </p>
                    <div className="mb-4 space-y-3 text-gray-300 text-sm">
                      <div>
                        <span className="text-emerald-400">1. Merchant Solutions (Worldpay):</span> Enables businesses of all sizes to accept electronic payments (credit, debit, e-commerce, mobile) securely and efficiently through its platform, Worldpay.
                      </div>
                      <div>
                        <span className="text-emerald-400">2. Banking Solutions:</span> Provides technology for financial institutions (from community banks to large regional banks) for core processing, digital solutions, payment services, fraud/risk management, and wealth/retirement services.
                      </div>
                      <div>
                        <span className="text-emerald-400">3. Capital Markets Solutions:</span> Offers an array of solutions for global financial services clients (buy-side and sell-side), including trading, risk management, and compliance software.
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p36e52f00} fill="#10B981" />
                      </svg>
                      <span>Milwaukee, WI</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Job Details */}
                <div className="order-1 lg:order-2 space-y-6">
                  <div>
                    <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full inline-flex items-center gap-2">
                      Oct 2019 - Dec 2019
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p36e52f00} fill="#10B981" />
                      </svg>
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-gray-100 mb-2">Senior Business System Analyst</h3>
                    <h4 className="text-emerald-400 mb-4">FIS</h4>
                    <div className="text-gray-400 space-y-3">
                      <p>
                        I analyze technical documents from major payment networks such as American Express, Pulse, Mastercard, and Visa to assess compliance impacts across two development platforms.
                      </p>
                      <p>
                        I coordinate with development teams to implement compliance features aligned with network delivery timelines, manage feature requirements to meet deadlines, and assist technical writers in creating customer bulletins.
                      </p>
                      <p>
                        Additionally, I oversee production releases, convert mandates into user stories, and ensure compliance features are deployed successfully within an Agile/Scrum/SAFe environment.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-gray-100 mb-3">Key Metrics:</h5>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Analyzed compliance impacts for 4 major payment networks across 2 development platforms</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Coordinated timely delivery of compliance features based on network schedules</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Managed production releases and feature deployments</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Supported creation of customer bulletins for feature changes</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Job 6 - Business System Analyst/Product Owner at FIS (Left Side) */}
            <div className="relative">
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-500/50 -ml-2 hidden lg:block" />
              
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Left side - Company Info */}
                <div className="order-2 lg:order-1 mt-8 lg:mt-0">
                  <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 p-6 rounded-xl hover:border-emerald-500/50 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={fisLogo} alt="FIS" className="w-12 h-12 rounded-lg" />
                      <h4 className="text-gray-100">About FIS</h4>
                    </div>
                    <p className="text-gray-300 mb-4">
                      FinTech
                    </p>
                    <p className="text-gray-300 mb-4">
                      FIS primarily operates across three major segments, providing software, services, and outsourcing to:
                    </p>
                    <div className="mb-4 space-y-3 text-gray-300 text-sm">
                      <div>
                        <span className="text-emerald-400">1. Merchant Solutions (Worldpay):</span> Enables businesses of all sizes to accept electronic payments (credit, debit, e-commerce, mobile) securely and efficiently through its platform, Worldpay.
                      </div>
                      <div>
                        <span className="text-emerald-400">2. Banking Solutions:</span> Provides technology for financial institutions (from community banks to large regional banks) for core processing, digital solutions, payment services, fraud/risk management, and wealth/retirement services.
                      </div>
                      <div>
                        <span className="text-emerald-400">3. Capital Markets Solutions:</span> Offers an array of solutions for global financial services clients (buy-side and sell-side), including trading, risk management, and compliance software.
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p36e52f00} fill="#10B981" />
                      </svg>
                      <span>Milwaukee, WI</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Job Details */}
                <div className="order-1 lg:order-2 space-y-6">
                  <div>
                    <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full inline-flex items-center gap-2">
                      Jul 2017 - Oct 2019
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p36e52f00} fill="#10B981" />
                      </svg>
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-gray-100 mb-2">Business System Analyst/Product Owner</h3>
                    <h4 className="text-emerald-400 mb-4">FIS</h4>
                    <div className="text-gray-400 space-y-3">
                      <p>
                        I manage and deliver IT development projects within an Agile/Scrum environment, focusing on process improvements to ensure timely code releases and reduce delays.
                      </p>
                      <p>
                        My responsibilities include overseeing new software implementations, guiding product introductions, and providing direction to development teams by prioritizing work and converting mandates into actionable user stories.
                      </p>
                      <p>
                        I also facilitate training sessions, test development changes across banking mainframes and web applications, and collaborate with QA analysts and developers to ensure quality and plan future enhancements.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-gray-100 mb-3">Key Metrics:</h5>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Managed and completed 15 IT development projects</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Executed code releases across 6 applications</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Targeted process improvements to reduce delays by 60%</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Facilitated and trained 20+ individuals on new software functionality</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Job 7 - Associate Automation Quality Assurance (Left Side) */}
            <div className="relative">
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-500/50 -ml-2 hidden lg:block" />
              
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Left side - Company Info */}
                <div className="order-2 lg:order-1 mt-8 lg:mt-0">
                  <div className="bg-gray-900/70 backdrop-blur-sm border border-emerald-500/20 p-6 rounded-xl hover:border-emerald-500/50 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={northwesternMutualLogo} alt="Northwestern Mutual" className="w-12 h-12 rounded-lg" />
                      <h4 className="text-gray-100">About Northwestern Mutual</h4>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Financial Services
                    </p>
                    <p className="text-gray-300 mb-4">
                      Northwestern Mutual is a U.S. financial services mutual organization headquartered in Milwaukee, Wisconsin. It was founded in 1857.
                    </p>
                    <div className="mb-4">
                      <h5 className="text-gray-100 mb-2">Key Characteristics</h5>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>
                          <span className="text-emerald-400">• Mutual Company:</span> As a mutual company, it does not have shareholders. It operates for the benefit of its policy-owners, who are considered owners and may receive dividends based on the company's performance.
                        </li>
                        <li>
                          <span className="text-emerald-400"> Financial Strength:</span> It is widely recognized for its exceptional financial strength, often receiving some of the highest financial strength ratings awarded to any U.S. life insurance or financial services company by major rating agencies.
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p36e52f00} fill="#10B981" />
                      </svg>
                      <span>Milwaukee, WI</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Job Details */}
                <div className="order-1 lg:order-2 space-y-6">
                  <div>
                    <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full inline-flex items-center gap-2">
                      Jun 2015 - Jul 2017
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p36e52f00} fill="#10B981" />
                      </svg>
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-gray-100 mb-2">Associate Automation Quality Assurance</h3>
                    <h4 className="text-emerald-400 mb-4">Northwestern Mutual</h4>
                    <p className="text-gray-400 mb-4">
                      I have played a key role in ensuring software quality and automation within an Agile/Scrum/SAFe environment. I develop data warehouse process models covering sourcing, loading, transformation, and extraction. I create and automate test cases using Nightwatch.js and execute them through Sauce Labs. I work closely with developers to deploy code, identify defects, and improve software quality for products like Microsoft CRM, Posting+, CRM for Tablets, and CRM Mobile. Additionally, I document processes, train offshore QA testers on basic testing practices, and continuously look for innovative ways to enhance testing efficiency and product reliability.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-gray-100 mb-3">Key Metrics:</h5>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Completed 20 test cases</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Supported 100+ scripts internally</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Trained offshore QA testers</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-emerald-400 mt-1" fill="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1dd1d300} fill="#10B981" />
                        </svg>
                        <p className="text-gray-300">Implemented automation using Nightwatch.js and Sauce Labs</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Journey Summary */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Career Journey Summary</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Over 9+ years of progressive experience across logistics, retail, fintech, and financial services. A proven track record of delivering enterprise-level solutions, driving digital transformation, and managing cross-functional teams to achieve strategic business objectives.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-gray-900 mb-2">Strategic Value Delivery</h4>
              <p className="text-gray-600">
                Delivered $70.5M in strategic value at FedEx, managed 5 Agile Release Trains, and implemented solutions adopted across 8+ development teams
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-gray-900 mb-2">Cross-Functional Leadership</h4>
              <p className="text-gray-600">
                Led multiple UI/UX and backend teams including 3 offshore development teams, facilitated training for 20+ professionals, and managed enterprise-wide initiatives
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-gray-900 mb-2">Innovation & Modernization</h4>
              <p className="text-gray-600">
                Delivered 16+ features for security and network modernization, eliminated legacy processes, and developed enterprise solutions supporting operations across U.S. and Canada
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