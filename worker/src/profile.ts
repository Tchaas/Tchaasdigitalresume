/**
 * Everything the assistant is allowed to know about Tchaas.
 *
 * Source of truth: the résumé PDF and the content on tchaasawright.com.
 * When you update the site or résumé, update this file too and redeploy
 * the worker (`npm run deploy` inside /worker).
 *
 * Keep private details (phone number, home address) OUT of this file —
 * anything here can be repeated to any visitor.
 */
export const PROFILE = `
# Tchaas Alexander-Wright, MBA

Business Architect at FedEx with 8+ years in product management and business
analysis, leading demand management, capability modeling, and solution
architecture across 5 Agile Release Trains (ARTs). Builds AI agents that automate
business architecture work. MBA (University of Dayton). Currently completing an
MS in Computer Science at Georgia Tech (anticipated 2027). In the field since 2015.
Open to opportunities: technical product management, solutions architecture, and
enterprise transformation. Open to remote work, full-time and consulting.

Positioning: "I translate business strategy into capabilities and solutions teams
can deliver. At FedEx, I lead demand management across five Agile Release Trains
and build AI agents that automate business architecture work." Career path: QA
automation → business systems analysis → product ownership → business architecture.

Contact: email tchaasawright@gmail.com · LinkedIn linkedin.com/in/tchaas-alexander-wright
· GitHub github.com/Tchaas · Site tchaasawright.com (résumé PDF downloadable there).

## Signature framework: Strategy to confirmed value (five layers)
Every engagement runs the same five layers; each translates the layer above into
something the next can act on, and nothing is called done until the number moves
against a baseline.
1. Executive strategy — objectives with explicit financial targets and a documented baseline. (translation →)
2. Business architecture — capabilities, value streams, and gap analysis showing what must change. (validation →)
3. Product discovery — validated direction and conceptual architecture, tested before commitment. (decomposition →)
4. Agile delivery — epics and stories that still point back to the objective that created them. (measurement →)
5. Financial value — ROI, NPV, payback, and unit cost measured against the original baseline.

## Work experience

### Business Architect — FedEx (Mar 2025 – Present)
Headline: portfolio of projects contributing an estimated $118M in strategic value to FedEx in FY25.
- Streamlined and automated business demand intake for 5 Agile Release Trains (ARTs), reducing processing time by 40% and keeping prioritized initiatives aligned with enterprise strategy.
- Led development and implementation of AI agents that automate business architecture tasks, streamlining demand intake and reducing manual analysis by 50%.
- Used AI to process and structure portfolio data, automating generation of lean business cases and problem statements, which accelerated decisions on new initiatives.
- Architected and documented a scalable data architecture for new enterprise activity capabilities, integrating 15+ disparate data sources; projected to improve data consistency by 60%.
- Developed 25+ process maps and capability models for current- and future-state operations, identifying optimization opportunities that contributed to a 15% increase in operational efficiency.
- Partnered with enterprise architects and engineering teams to evaluate technology solutions, resulting in selection of a new GCP-based platform aligned with FedEx's modernization goals.
- Led 50+ cross-functional working sessions to capture requirements for volume forecasting, dynamic routing, and service integration.
- Designed and supported architectural definition of 3 major solutions bridging FedEx Express and FedEx Ground systems, projected to reduce package handling redundancies by 25% and optimize last-mile delivery.
- Authored and presented solution designs and capability documentation for 10+ key initiatives, securing stakeholder buy-in and implementation readiness.
- Translated enterprise goals into 12 executable solution concepts, working with ARTs to ensure delivery and alignment.

### Senior Product Owner — FedEx (Oct 2023 – Mar 2025)
- Product Owner for a backend team building agnostic APIs serving multiple business areas and bridging the data gap between FedEx Express and FedEx Ground.
- Delivered products that removed legacy processes and improved the global network by feeding captured data into the network data lake for analytics.
- Led a new process combining Express and Ground volume management per zip code for the global network.
- Owned development and production release of an application letting engineers submit volume changes for all FedEx Ground facilities.
- Used GAP analysis to support discovery, define new features, and map processes into digital solutions.
- Demoed software solutions to leadership to show enterprise-level implementation potential.
- Built solutions supporting volume management for all FedEx facilities in the U.S. and Canada.

### Product Owner — FedEx (Mar 2021 – Oct 2023)
Headline: 16+ features shipped to production.
- Product Owner for three offshore teams focused on backend development, production issues, and API business rules.
- Product Owner for a UX/UI team, partnering with the Senior UX Analyst and engaging external users to define MVP features.
- Implemented 16+ features addressing security vulnerabilities, FedEx network modernization, and new tools for field engineers.
- Implemented a documentation process adopted by 8 development teams.
- Wrote user stories from stakeholder requirements; gathered requirements per feature with architects and the business.
- Partnered with Business Architects to structure API contracts for all UI applications.
- Conducted user interviews with process engineers to find gaps addressable by new web-based products.
- Built a product roadmap with the Product Manager aligned to business direction.

### Product Manager, Payments — Kohl's (Jan 2020 – Oct 2020)
- User stories for payments products in Jira from business-partner requests.
- Built pin-pad performance metrics and presented reporting to upper management.
- Managed code deployment for releases; produced project documentation for the support team.
- Troubleshot and deployed software packages for Verifone Mx925/Mx915 pin-pads via Verifone Estate Management (VHQ).
- Used SQL to trace payment transactions and validate data from payment processing applications.
- Supported Microsoft Server 2008 R2 and 2016 patching in test environments.
- Lucidchart diagrams and workflows to determine impacted applications and data flow after changes.

### Senior Business Systems Analyst / Product Owner — FIS (Jul 2017 – Dec 2019)
Headline: 15 IT development projects delivered.
- Managed and completed 15 IT development projects, documenting changes in Confluence for Production Support.
- Wrote technical verbiage for project changes and approved final copy before publication; maintained the in-house manual for system updates.
- Executed code releases across six applications.
- Drove Agile process improvement for code releases, targeting a 60% reduction in delivery delays.
- Analyzed technical documentation from American Express, Pulse, Mastercard, and Visa across two development platforms to determine compliance impacts.
- Facilitated and trained 20+ people on new software functionality.

### Associate Automation Quality Assurance — Northwestern Mutual (Jun 2015 – Jul 2017)
Headline: 100+ automation scripts supported.
- Completed 20 test cases and supported 100+ scripts internally.
- Developed data warehouse process models (sourcing, loading, transformation, extraction).
- Built automation tests with Nightwatch.js, executed through Sauce Labs. Trained offshore QA testers. Worked with developers to deploy to production.

## Ventures and community
- NovaOne Technology — Co-Founder & Technology Lead (active). Defined the product roadmap through customer engagement, created wireframes, used GitHub Copilot to develop JavaScript logic, managed budget and financial planning, implemented Google Cloud infrastructure, established CockroachDB database architecture, built the company website on Squarespace, negotiated the operating agreement and equity distribution. Stack: JavaScript, GitHub Copilot, Google Cloud, CockroachDB, Postman, Squarespace, Fivetran, OKTA, Cypress, Nightwatch.js.
- Bytonomy Tech — Co-Founder & Product Lead (active), fintech startup focused on financial accessibility. Wrote the business plan, built financial models, developed product features with lead developers, built client relationships, wrote the marketing plan, created functional documentation, prioritized projects by timeliness and complexity.
- Habitat for Humanity International — Membership Chair, Young Professionals Board (volunteer). Leads committee operations and membership growth, recruits board members, organizes community engagement events, maintains meeting documentation.

## Education
- Georgia Institute of Technology — MS Computer Science, 2025 – anticipated 2027 (Atlanta, GA). Coursework: Intro to Cognitive Science (CS 6795), Human-Computer Interaction.
- University of Dayton — MBA (Dayton, OH). Coursework: Corporate Finance, Business Analytics, Managerial Economics, Case Studies in Analytics, Negotiation.
- Milwaukee School of Engineering — BS Management Information Systems (Milwaukee, WI). Coursework: Java (intro & intermediate), Database Management Systems, Managerial Cost Accounting, Managerial Finance.
- Milwaukee Area Technical College — AS IT Networking Specialist (Milwaukee, WI). Cisco 1–4 (network fundamentals, routing protocols, advanced routing & switching, WAN), Network Security (Security+).

## Research and writing (full PDFs on the site's Research page)
1. "AI-Augmented Business Architecture: Translating Executive Strategy into Implemented Organizational Value" (Georgia Tech framework paper). Argues ~70% of digital transformations miss objectives because no discipline connects executive intent to confirmed outcomes; proposes the five-layer framework with AI embedded at each layer and human judgment governing every translation. Anchored in FedEx DRIVE, Walmart supply chain automation, and Amazon fulfillment regionalization (FedEx confirmed $4B in structural cost reductions against a FY2023 baseline). Introduces baseline-first measurement and the strategic value scorecard. 31 references (BIZBOK, Lean Startup, DORA, NIST AI RMF). Has a companion web app: tchaas.github.io/strategic-lifecycle-ai-framework
2. "A Cognitive Science Meta-Analysis of Schema-Driven Scaffolds in Object-Oriented Programming for Neurodivergent Learners" (CS 6795, Summer 2026). Systematic review of 15 sources on how schema-driven visual supports affect syntax comprehension, implementation, and debugging for learners with ADHD and autism; finds the two groups fail differently and most studies conflate them; uses Marr's three levels. Has a recorded presentation.
3. "Trucking Dispatching System Price Transparency Tool" (Georgia Tech HCI process paper). Needfinding, interviews, and heuristic evaluation for a peer-to-peer freight pricing transparency concept serving shippers and truckers.
4. "Albrecht Wood Interiors (AWI) Analysis" (University of Dayton MBA capstone, 2020, team of six). PESTDGE, Porter's Five Forces, Herfindahl, SWOT, VRIO; recommended financial infrastructure (forecasting, budgeting, KPIs) projecting net income growth from ~$205K to ~$414K over five years, plus a hire/train/retain workforce plan.

## Skills and where they were applied
- AI agent automation: FedEx — AI agents cut manual business architecture analysis by 50%; AI-generated lean business cases and problem statements from portfolio data; demand intake automation cut processing time by 40%.
- Business architecture, capability modeling, solution design: FedEx — 25+ process maps and capability models, 12 solution concepts, designs for 10+ initiatives.
- Data architecture: FedEx — scalable architecture integrating 15+ data sources.
- SAFe 6: FedEx — demand management and delivery alignment across 5 ARTs.
- Product management & roadmapping: FedEx (Business Architect, Sr. PO, PO), Kohl's Payments PM, Bytonomy.
- Agile / SAFe: demand across 5 ARTs at FedEx; FIS release process improvement (60% delay-reduction target).
- Requirements, GAP analysis, use cases, process mapping, capability modeling: FedEx.
- API development & contracts: FedEx agnostic APIs bridging Express and Ground; API contracts for UI apps.
- Data architecture, data mining, data lake, forecasting/volume management: FedEx.
- UAT and release management: FIS (six applications), Kohl's.
- Risk & compliance: FIS card-network compliance (Amex, Pulse, Mastercard, Visa); Kohl's payment security.
- User research / UX / UI: FedEx user interviews with process engineers, partnership with Sr. UX Analyst; Georgia Tech HCI.
- Facilitation & training: FIS (20+ people trained); FedEx working sessions.
- Technical writing: FIS in-house manual; FedEx documentation process adopted by 8 teams.
- Cloud: Google Cloud — FedEx GCP-based platform selection; NovaOne infrastructure.
- Tools: SQL, Jira, Confluence, Splunk, Lucidchart, Nightwatch.js, Sauce Labs, Cypress, Postman, Google Cloud, CockroachDB, Fivetran, OKTA, GitHub Copilot, JavaScript, Java (coursework), Cisco networking.
- AI: builds AI agents at FedEx that automate business architecture work (see Business Architect role); authored the AI-Augmented Business Architecture framework (AI at each layer, governed by human judgment, NIST AI RMF); uses AI coding tools (GitHub Copilot); this site's assistant is built on Claude.
`.trim();
