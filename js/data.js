/**
 * PM Portfolio Master Data Store
 * Featuring Souvik Ghosh's 4 Flagship PM Projects & Official CV Download
 */

const DEFAULT_PORTFOLIO_DATA = {
  profile: {
    name: "Souvik Ghosh",
    role: "Senior Manager at CK Birla Group | Aspiring Product Manager",
    tagline: "IIM Calcutta MBA • B.Tech Computer Science & Engineering • Current: CK Birla Group | Prior: Cognizant",
    bio: "Driven by an interest in solving complex user and business challenges within high-growth product environments. Experienced in roadmap planning, stakeholder management, business case development, AI-led product initiatives, and cross-functional program execution.",
    email: "souvikd772@gmail.com",
    phone: "+91-8145354044",
    linkedin: "https://www.linkedin.com/in/souvik-ghosh-038174249/",
    github: "https://github.com/souvik-ghosh",
    resumeUrl: "Souvik_Ghosh_CV.pdf",

    workExperience: [
      {
        company: "CK Birla Group",
        title: "Senior Manager",
        period: "Sep'25 - Present",
        highlights: [
          "Evaluating 20+ CRM platforms and developing business cases for enterprise-wide system selection & cost optimization.",
          "Built financial models delivering ₹18.75L savings on a ₹3.75 Cr investment with payback in under 6 months.",
          "Owned a 2-year roadmap prioritizing 40+ initiatives across AI, CRM, and enterprise transformation programs.",
          "Designed CRM-SAP API integrations reducing turnaround time for workflows handling ~₹8 Cr monthly transactions.",
          "Assessed 270+ AI use cases and identified high-ROI opportunities for enterprise adoption.",
          "Delivered AI automation and agentic AI solutions (AIsera/OpenAI), reducing process time by up to 50% and improving resolution speed by 35%."
        ]
      },
      {
        company: "Cognizant",
        title: "Programmer Analyst",
        period: "Sep'21 - May'23",
        highlights: [
          "Managed backlog prioritization and sprint execution for an 8-member agile team, achieving 95% on-time delivery across releases.",
          "Defined and delivered 120+ business requirements/user stories across 4 releases for enterprise insurance platforms.",
          "Partnered with 30+ business and technology stakeholders, accelerating feature delivery timelines by 15%.",
          "Leveraged SQL-driven insights and performance analysis to improve customer experience, increasing CSAT to 90%.",
          "Contributed to enterprise transformation initiatives generating $16M+ business impact while supporting cloud migration & scalability."
        ]
      }
    ],

    internships: [
      {
        company: "Cognizant",
        title: "Product Intern - Audit Management Portal",
        period: "5 Months",
        details: "Gathered and translated stakeholder needs into product requirements, workflows, and functional specifications for an audit management platform. Coordinated a 4-member cross-functional team."
      },
      {
        company: "Cognizant",
        title: "Research Intern - Wealth Bridge Capital",
        period: "2 Months",
        details: "Conducted industry research, market intelligence, and competitive benchmarking to uncover investment opportunities (~15% growth). Developed data-driven evaluation models improving decision accuracy by 15%."
      }
    ],

    education: [
      {
        institution: "Indian Institute of Management Calcutta (IIM Calcutta)",
        degree: "M.B.A / PGDM Business Management",
        period: "2025",
        details: "Specialized in Product Strategy, Operations, and Business Analytics."
      },
      {
        institution: "BP Poddar Institute of Management & Technology (B.Tech CSE)",
        degree: "B.Tech. Computer Science & Engineering",
        period: "2021",
        details: "Grade: 8.3 / 10. Strong technical roots in Algorithms, Software Architecture, and Database Systems."
      }
    ],

    keyProjects: [
      {
        name: "HandScan (0 → 1 Product)",
        duration: "2 weeks",
        description: "Translated user need for real-time handwriting digitization into a Kotlin mobile app. Optimized pipeline to achieve 2.5s response time and 80% recognition accuracy."
      },
      {
        name: "Product Growth & GTM Strategy (US & Canada)",
        duration: "8 weeks",
        description: "Formulated market entry strategy for $4B US baking industry (~15% market share potential). Designed GTM strategy optimizing $50K budget and forecasting 20% e-commerce growth."
      }
    ],

    metrics: {
      caseStudiesCount: 5,
      prdsWritten: 4,
      skillsCount: 16
    },

    transitionStory: [
      {
        priorRole: "CK Birla Group (Senior Manager)",
        pmSuperpower: "Enterprise AI & Financial Business Modeling",
        description: "Evaluating 20+ CRMs, designing ₹8 Cr/mo SAP API integrations, and delivering Agentic AI automation with up to 50% process time savings."
      },
      {
        priorRole: "Cognizant (Software Lead / Analyst)",
        pmSuperpower: "Agile Execution & Technical Architecture",
        description: "Led 8-member sprint team with 95% on-time delivery across 120+ user stories; skilled in SQL, API schemas, and cloud platforms."
      },
      {
        priorRole: "IIM Calcutta (MBA Alumnus)",
        pmSuperpower: "Product Strategy & Data Analytics",
        description: "Structured GTM strategies, user friction diagnosis, market benchmarking, and quantitative business case modeling."
      }
    ]
  },

  skills: [
    {
      category: "Product Strategy & PRDs",
      items: [
        { name: "Product Roadmap & Vision", level: 95 },
        { name: "User Research & Persona Mapping", level: 92 },
        { name: "PRD Specs & User Story Writing", level: 94 },
        { name: "Feature Prioritization (RICE/Kano)", level: 92 }
      ]
    },
    {
      category: "Analytics & Technology",
      items: [
        { name: "SQL, Product Analytics & A/B Testing", level: 95 },
        { name: "Agentic AI & OpenAI Automation", level: 94 },
        { name: "API Integrations (CRM-SAP)", level: 92 },
        { name: "Process Automation & Financial Modeling", level: 90 }
      ]
    },
    {
      category: "Execution & Leadership",
      items: [
        { name: "Cross-functional Stakeholder Management", level: 95 },
        { name: "Agile / Scrum Delivery (95% On-Time)", level: 94 },
        { name: "Program Management & Business Consulting", level: 92 },
        { name: "Customer & Business Insights", level: 90 }
      ]
    }
  ],

  caseStudies: [

    {
      id: "healthcare-agentic-ai-suite",
      title: "Healthcare Agentic AI Suite: Hospital Onboarding, Insurance Pre-Auth & ICU Clinical Engine",
      category: "Healthcare & Enterprise Agentic AI",
      status: "Flagship Healthcare AI Project",
      themeColor: "teal-cyan",
      summary: "Architected an enterprise Healthcare Agentic AI Suite automating hospital patient onboarding, insurance pre-authorization claims, drug interaction safety checks, and ICU sepsis triage. Reduced pre-auth turnaround time by 82% (24 hours → 4.3 hours) and cut clinical onboarding delays by 68%.",
      impactBadges: [
        { value: "4.3 Hours", label: "Pre-Auth Claim TAT (was 24h)" },
        { value: "82%", label: "Claim Approval Speedup" },
        { value: "99.8%", label: "Medication Safety Accuracy" }
      ],
      tags: ["Healthcare AI", "Agentic Workflows", "ICU Decision Engine", "Pre-Auth Automation", "PRD Specs"],

      executionJourney: [
        { step: "1", icon: "🏥", title: "Patient Intake", subtitle: "Hospital Registration & Onboarding" },
        { step: "2", icon: "📑", title: "Policy Scan", subtitle: "Automated ICD-10 Data Extraction" },
        { step: "3", icon: "🤖", title: "AI Pre-Auth Agent", subtitle: "Automated Insurance Claim Sync" },
        { step: "4", icon: "💊", title: "Safety Check", subtitle: "Drug Interaction & Dosage Verification" },
        { step: "5", icon: "🩺", title: "ICU Support", subtitle: "Sepsis Intercept & Vitals Monitor" },
        { step: "6", icon: "⚡", title: "SLA Escalation", subtitle: "Physician Human-in-the-Loop Guardrail" },
        { step: "7", icon: "🎉", title: "Admission Cleared", subtitle: "82% Pre-Auth Speedup (4.3h TAT)" }
      ],

      productThinking: {
        problemCard: {
          title: "🎯 Problem Statement",
          user: "Hospital Admissions Desk, Chief Nursing Officers & Medical Insurance Desk Leads.",
          problem: "Manual insurance pre-authorization delays and paper-based onboarding causing 24h+ patient admission bottlenecks.",
          frequency: "Hundreds of inpatient admissions daily across tertiary care hospital chains.",
          pain: "High claim rejection rates (85% missing ICD-10 codes) and 24h+ pre-auth delays.",
          metric: "Pre-Auth Claim TAT (24h) & Hospital Bed Turnover Rate"
        },
        researchCard: {
          title: "👤 User Research & Insights",
          primaryUsers: "Dr. Aris Thorne (ICU Director) & Meera Sen (Insurance Pre-Auth Coordinator).",
          painPoints: "Nurses spent 3.5 hours per shift re-entering patient data into insurance portals.",
          findings: "85% of claim rejections stemmed from missing ICD-10 diagnostic codes.",
          bottlenecks: "Fragmented communication between hospital EHR, TPA insurance desks, and ICU bedside monitors."
        },
        decisionsCard: {
          title: "⚖️ Product Decisions & Trade-offs",
          alternatives: "Manual call-center pre-auth support (unscalable & prone to 12h+ hold times).",
          constraints: "Strict HIPAA & ABDM compliance for patient health record privacy and encrypted LLM inferencing.",
          prioritization: "Prioritized Automated Pre-Auth Claim Agent + ICU Sepsis Intercept Agent for v1.0 MVP release.",
          risk: "Human-in-the-loop physician override triggers for any high-severity ICU diagnostic recommendation."
        },
        solutionCard: {
          title: "🚀 Final Solution & Impact",
          chosenSolution: "Healthcare Agentic AI Suite embedding Pre-Auth Automation, Drug Safety Verification & ICU Clinical Decision Support.",
          whyItWorked: "Replaced manual data re-entry with autonomous multi-agent LLM verification and instant TPA portal sync.",
          businessMetrics: "82% Pre-Auth TAT reduction (24h → 4.3h), 68% faster onboarding, 99.8% medication safety accuracy.",
          operationalImpact: "Enabled instant insurance clearance and automated physician escalation for critical vitals.",
          futureRoadmap: "Autonomous post-discharge remote patient monitoring & AI prescription synthesis."
        }
      }
    },

    {
      id: "adobe-firefly-transcreate",
      title: "Adobe Firefly Transcreate: Generative AI Content Localization & Typography Engine",
      category: "Generative AI & Global Content Automation",
      status: "Featured AI PM Project",
      themeColor: "pink-purple",
      summary: "Architected Adobe Firefly Transcreate, a generative AI workflow automating cross-lingual creative ad localization, typography alignment, and cultural adaptation. Reduced ad localization TAT by 85% (14 days → 48 hours).",
      impactBadges: [
        { value: "48 Hours", label: "Global Campaign TAT (was 14d)" },
        { value: "85%", label: "Time Savings" },
        { value: "98.2%", label: "Brand Compliance Rate" }
      ],
      tags: ["Adobe Firefly", "Generative AI", "Content Transcreation", "Multilingual Localization", "PRD Specs"],

      executionJourney: [
        { step: "1", icon: "📊", title: "Market Research", subtitle: "Analyzed global ad campaign localization bottlenecks" },
        { step: "2", icon: "🎨", title: "Creative Team Interviews", subtitle: "Uncovered 14-day TAT pain points with creative leads" },
        { step: "3", icon: "🤖", title: "AI Model Evaluation", subtitle: "Assessed Generative Fill & Inpainting models" },
        { step: "4", icon: "🔤", title: "Typography Engine Design", subtitle: "Architected auto-bounding box & font guardrails" },
        { step: "5", icon: "🌐", title: "Cultural Localization", subtitle: "Built regional preset prompts & inpainting rules" },
        { step: "6", icon: "✅", title: "Brand Validation", subtitle: "Enforced 98.2% font kerning & contrast compliance" },
        { step: "7", icon: "🚀", title: "Business Impact", subtitle: "Achieved 85% TAT reduction (14 days → 48 hours)" }
      ],

      productThinking: {
        problemCard: {
          title: "🎯 Problem Statement",
          user: "Global Creative Directors, Localization Leads & Brand Governance Managers.",
          problem: "Manual creative ad resizing, translation, and cultural background tweaking across 40+ regional markets.",
          frequency: "Occurs during every quarterly product & campaign release across 25+ global countries.",
          pain: "High agency costs ($100K+ fees per campaign), 14-day turnaround delays, and broken typography hierarchy.",
          metric: "Global Campaign Time-to-Market (14 days) and Creative Agency Expenditure."
        },
        researchCard: {
          title: "👤 User Research & Insights",
          primaryUsers: "Elena Rostova (Creative Ops Director) & Kenji Sato (APAC Regional Manager).",
          painPoints: "Literal machine translation breaks brand font bounding boxes; manual inpainting takes 40+ hours per region.",
          findings: "82% of regional ad rejections were caused by non-compliant font scaling and mismatched cultural background imagery.",
          bottlenecks: "Agency handoffs and manual quality control reviews created a 10-day approval deadlock between headquarters and local markets."
        },
        decisionsCard: {
          title: "⚖️ Product Decisions & Trade-offs",
          alternatives: "Considered static template auto-fill (rejected: lacked cultural context & broke typography aesthetics); considered pure text translation APIs (rejected: ignored background inpainting).",
          constraints: "Must execute on existing Firefly Generative AI infrastructure with sub-3-second rendering latencies.",
          prioritization: "Prioritized Generative Background Inpainting + Dynamic Typography Bounding Boxes as P0 MVP features.",
          risk: "Risk of generative AI hallucinations violating brand guidelines; mitigated by hard-coded brand guardrail contrast filters."
        },
        solutionCard: {
          title: "🚀 Final Solution & Impact",
          chosenSolution: "Firefly Transcreate Engine embedding Generative Inpainting, Auto-Typography Bounding, and Brand Guardrails.",
          whyItWorked: "Combined generative AI creativity with strict deterministic brand font constraints.",
          businessMetrics: "85% TAT reduction (14 days → 48 hours) and 98.2% Brand Compliance Rate.",
          operationalImpact: "Enabled 1-click 25-language campaign exports with zero agency overhead.",
          futureRoadmap: "Expanding into 8K broadcast video transcreation and localized AI voiceover synthesis."
        }
      },

      overview: {
        problemStatement: "Global marketing teams using Adobe Creative Cloud spend weeks manually resizing, translating, and culturally tweaking creative assets for international regional campaigns, resulting in high agency costs and campaign launch delays.",
        targetAudience: "Global Creative Directors, Localization Leads, Brand Managers, and Performance Marketing Specialists.",
        personas: [
          {
            name: "Elena Rostova",
            role: "Global Creative Operations Director",
            painPoint: "Managing 40+ localized ad variants manually takes 2+ weeks per quarterly launch.",
            goal: "1-click generative transcreation preserving brand fonts, layout semantics, and cultural nuances."
          },
          {
            name: "Kenji Sato",
            role: "APAC Regional Marketing Manager",
            painPoint: "Literal text translation ruins visual layout hierarchy and breaks font aesthetics.",
            goal: "Contextual AI transcreation with localized typography alignment."
          }
        ],
        solutionSummary: "Designed Adobe Firefly Transcreate module embedding Generative Text-to-Image inpainting, automated typography scaling, and brand guardrail compliance filters."
      },

      prd: {
        title: "PRD: Adobe Firefly Transcreate Engine v1.0",
        version: "v1.0 Production Spec",
        author: "Souvik Ghosh (AI Product Lead)",
        objective: "Reduce creative ad transcreation turn-around-time from 14 days to 48 hours while maintaining 98%+ brand font and color compliance across 25+ global languages.",
        userStories: [
          {
            id: "US-FIRE-01",
            title: "Generative Ad Background Adaptation & Inpainting",
            asA: "Creative Director launching a multi-region campaign",
            iWantTo: "select target region presets (e.g. Japan, India, Germany)",
            soThat: "Firefly auto-inpaints background elements matching local cultural aesthetics.",
            acceptanceCriteria: [
              "Generative background replace maintains 100% foreground product isolation.",
              "Renders localized cultural elements without visual artifacting."
            ]
          },
          {
            id: "US-FIRE-02",
            title: "Automated Typography Bounding Box & Brand Guardrails",
            asA: "Brand Governance Manager",
            iWantTo: "enforce strict brand font boundaries during translation",
            soThat: "translated text never overlaps product imagery or violates brand guidelines.",
            acceptanceCriteria: [
              "Auto-adjusts font kerning, tracking, and font weight dynamically.",
              "Flags non-compliant color contrasts before export."
            ]
          }
        ],
        outOfScope: [
          "Broadcast TV 8K video rendering.",
          "Custom physical print packaging die-cut generation."
        ]
      },

      wireframeFlow: {
        title: "Adobe Firefly Transcreate Interactive Workflow",
        steps: [
          {
            id: "fire_step1",
            label: "1. Master Asset Input",
            screenTitle: "Adobe Creative Cloud Workspace",
            mockupHtml: `
              <div style="background:#14161d; padding:12px; border-radius:10px; margin-bottom:10px;">
                <span style="font-size:10px; color:#ff2a2a; font-weight:700;">ADOBE FIREFLY WORKSPACE</span>
                <p style="font-size:12px; color:white; margin-top:4px;">Master Campaign: <strong>Summer Launch 2026</strong></p>
              </div>
            `
          },
          {
            id: "fire_step2",
            label: "2. Generative Transcreation",
            screenTitle: "Multilingual AI Render",
            mockupHtml: `
              <div style="background:rgba(250, 38, 160, 0.15); border:1px solid #fa26a0; padding:12px; border-radius:10px;">
                <span style="font-size:11px; font-weight:700; color:#00dfd8;">⚡ 12 Regional Ad Variants Rendered</span>
                <p style="font-size:12px; color:white; margin-top:4px;">TAT: 48 Hours • Brand Compliance: 98.2%</p>
              </div>
            `
          }
        ]
      },

      metrics: {
        retentionChart: { labels: ["Legacy Agency TAT (Days)", "Firefly AI Transcreate (Hours)"], legacyCohort: [14, 2], v2Cohort: [14, 2] },
        slaChart: { labels: ["Manual Resizing Fee", "Firefly Cloud API Cost"], beforeSlaHours: [100, 15], afterSlaHours: [100, 15] }
      }
    },

    {
      id: "stanza-care-ai-triage",
      title: "Stanza Living: AI-Powered Maintenance Triage & Vendor SLA Routing",
      category: "AI & Operational Growth",
      status: "Featured PM Case Study",
      themeColor: "green-blue",
      summary: "Designed a Product Requirements Document (PRD) and multimodal vision pipeline for Stanza Living resident app. Reduced Mean Time to Resolve (MTTR) by 77% (18.5h → 4.2h) and raised Resident CSAT from 68% to 92%.",
      impactBadges: [
        { value: "4.2 Hours", label: "MTTR (Down from 18.5h)" },
        { value: "92%", label: "Resident CSAT (up from 68%)" },
        { value: "88%", label: "First-Time Fix Rate" }
      ],
      tags: ["AI Vision Triage", "SLA Automation", "PropTech", "PRD Specs"],

      executionJourney: [
        { step: "1", icon: "🚨", title: "Resident Complaints", subtitle: "Identified 18.5h MTTR as primary churn driver" },
        { step: "2", icon: "💬", title: "User Interviews", subtitle: "Mapped resident & hostel warden inspection delays" },
        { step: "3", icon: "📊", title: "Pain Point Analysis", subtitle: "Discovered vague text tickets causing 4-6h delays" },
        { step: "4", icon: "📸", title: "AI Image Classification", subtitle: "Engineered multimodal vision scan (0.85 cutoff)" },
        { step: "5", icon: "🛠️", title: "Vendor Routing", subtitle: "Automated spare part pre-selection & technician SLA" },
        { step: "6", icon: "🧪", title: "Pilot Launch", subtitle: "Rolled out in Gurgaon & Bengaluru hostels" },
        { step: "7", icon: "📈", title: "Reduced MTTR", subtitle: "Cut MTTR by 77% (18.5h → 4.2h) & boosted CSAT to 92%" }
      ],

      productThinking: {
        problemCard: {
          title: "🎯 Problem Statement",
          user: "50,000+ Stanza Living hostel residents (students & working professionals) and property wardens.",
          problem: "Facility maintenance latency (water leaks, AC breakdowns) driving resident churn.",
          frequency: "Daily occurrence across 500+ properties in Gurgaon, Bengaluru, and Pune.",
          pain: "Vague text tickets caused 4-6h warden inspection delays, leading to 18.5h MTTR and ₹120/ticket triage costs.",
          metric: "Resident CSAT (stuck at 68%) and Mean Time to Resolve (MTTR 18.5h)."
        },
        researchCard: {
          title: "👤 User Research & Insights",
          primaryUsers: "College Student / Tech Professional (Room 204) & Property Warden.",
          painPoints: "Technicians arrived without required spare parts, forcing 2-3 repeat visits per breakdown.",
          findings: "74% of inspection delays were caused by warden availability bottlenecks during peak admission months.",
          bottlenecks: "Manual ticket verification queued up 40+ pending tickets per property every morning."
        },
        decisionsCard: {
          title: "⚖️ Product Decisions & Trade-offs",
          alternatives: "Considered hiring 3x property wardens (rejected: unsustainably expensive); considered basic drop-down category menus (rejected: residents selected wrong categories 60% of the time).",
          constraints: "Must operate on low-end smartphone cameras with varying room lighting conditions.",
          prioritization: "Set AI Vision Confidence Cutoff at 0.85. High-confidence scans (>=0.85) auto-dispatch to vendor APIs; low-confidence scans route to warden dashboard with pre-suggested tags.",
          risk: "Risk of false-positive emergency dispatch; mitigated by warden 5-minute override safety window."
        },
        solutionCard: {
          title: "🚀 Final Solution & Impact",
          chosenSolution: "Multimodal Vision AI Triage in resident app with automated spare part SKU pre-selection.",
          whyItWorked: "Replaced manual warden inspections with instant 2-second AI image diagnostics.",
          businessMetrics: "Cut MTTR by 77% (18.5h → 4.2h), reduced triage cost from ₹120 to ₹8/ticket, boosted CSAT to 92%.",
          operationalImpact: "Raised First-Time Fix Rate from 52% to 88% by equipping technicians with spare parts prior to arrival.",
          futureRoadmap: "Predictive maintenance sensors for central HVAC and water pump failure forecasting."
        }
      },
      
      overview: {
        problemStatement: "Stanza Living manages tens of thousands of beds across major Indian hubs like Gurgaon, Bengaluru, and Pune. Facility maintenance latency (water leaks, AC breakdowns) was the #1 driver of resident churn. In the legacy manual flow, vague text tickets caused a 4-6 hour delay for physical warden inspections, leading to an 18.5 hour MTTR and high triage costs (₹120/ticket).",
        targetAudience: "Stanza Living residents (students & working professionals) and property wardens / external vendor technicians.",
        personas: [
          {
            name: "Resident (Room 204)",
            role: "College Student / Tech Professional",
            painPoint: "Frustrated by vague text tickets, 18+ hour repair delays, and technicians arriving without spare parts.",
            goal: "Instant photo diagnostic, transparent SLA countdown, and 1-visit resolution."
          },
          {
            name: "Hostel Warden & Vendor",
            role: "Ground Operations Lead",
            painPoint: "Overwhelmed by manual room verification visits during peak admission months.",
            goal: "Automated issue tagging with a 5-minute override safety net."
          }
        ],
        solutionSummary: "Stanza Care introduces Multimodal Vision AI Triage directly in the resident mobile app. High-confidence scans (>=0.85) auto-categorize issues, pre-order required spare parts, and dispatch vendor technicians directly."
      },

      prd: {
        title: "PRD: Stanza Care AI Triage & Vendor SLA Routing v2.1",
        version: "v2.1 Final Approved",
        author: "Souvik Ghosh (PM Case Study)",
        objective: "Cut Mean Time to Resolve (MTTR) from 18.5 hours to below 5 hours, boost CSAT from 68% to 90%+, and reduce triage cost per ticket by 90%.",
        userStories: [
          {
            id: "US-01",
            title: "Camera Vision Scan & Confidence Cutoff Guardrail (0.85)",
            asA: "Stanza resident facing a maintenance failure",
            iWantTo: "snap a photo of a pipe leak or AC issue inside the resident app",
            soThat: "the system auto-categorizes the defect and pinpoints required spare parts.",
            acceptanceCriteria: [
              "Vision AI model classifies issue category & severity (P1 Emergency vs P3 Cosmetic).",
              "Guardrail Cutoff: If model confidence >= 0.85, ticket auto-dispatches directly to vendor API.",
              "If confidence < 0.85, ticket routes to Warden Dashboard with pre-suggested tags to preserve safety."
            ]
          },
          {
            id: "US-02",
            title: "Automated Spare Part Pre-Selection & First-Time Fix",
            asA: "External vendor technician",
            iWantTo: "receive issue photo metadata and required inventory list during dispatch",
            soThat: "I arrive equipped with exact spare parts (e.g. 0.5-inch PVC seal) on the first visit.",
            acceptanceCriteria: [
              "App passes pre-selected inventory SKU metadata to vendor API.",
              "First-Time Fix Rate improved from 52% to 88%."
            ]
          }
        ],
        outOfScope: [
          "Automated procurement purchase orders for structural building repairs (HVAC plant overhauls).",
          "Third-party tenant insurance claims integration."
        ]
      },

      wireframeFlow: {
        title: "Stanza Care Side-by-Side Flow Prototype",
        steps: [
          {
            id: "before_flow",
            label: "🔴 BEFORE: Legacy Manual Triage",
            screenTitle: "Legacy Flow (18.5h MTTR)",
            mockupHtml: `
              <div style="background:#1e293b; padding:12px; border-radius:10px; margin-bottom:10px;">
                <span style="font-size:10px; color:#ef4444; font-weight:700;">STEP 1: FREE-TEXT COMPLAINT</span>
                <p style="font-size:12px; color:#f8fafc; margin-top:4px;">Resident enters text: <em>"Water leak near bathroom"</em></p>
              </div>
            `
          },
          {
            id: "improved_flow",
            label: "🟢 IMPROVED: AI Vision & SLA Dispatch",
            screenTitle: "Stanza Care AI (4.2h MTTR)",
            mockupHtml: `
              <div style="background:rgba(16, 185, 129, 0.15); border:1px solid #10b981; padding:12px; border-radius:10px; margin-bottom:10px;">
                <span style="font-weight:700; font-size:11px; color:#6ee7b7;">📸 AI VISION SCAN (96% CONFIDENCE)</span>
                <p style="font-size:12px; color:#f8fafc; margin-top:4px;">Detected: Plumbing Pipe Leak • Part: 0.5" PVC Seal</p>
              </div>
            `
          }
        ]
      },

      metrics: {
        retentionChart: { labels: ["Legacy MTTR", "Stanza Care AI"], legacyCohort: [18.5, 4.2], v2Cohort: [18.5, 4.2] },
        slaChart: { labels: ["Manual Fee", "Cloud API"], beforeSlaHours: [120, 8], afterSlaHours: [120, 8] }
      }
    },

    {
      id: "orient-electric-srn-digitization",
      title: "Orient Electric: Sales Return Network (SRN) Digitization & SAP Credit Settlement",
      category: "Enterprise FinTech & B2B Supply Chain",
      status: "Enterprise PM Project",
      themeColor: "enterprise-blue",
      summary: "Digitized paper-based Sales Return Notes (SRN) across distributor & dealer networks. Integrated automated barcode inspection and SAP ERP credit note posting, reducing settlement turnaround time (TAT) from 28 days to 48 hours.",
      impactBadges: [
        { value: "48 Hours", label: "Credit Settlement (down from 28d)" },
        { value: "99.4%", label: "Triage Accuracy" },
        { value: "-82%", label: "Dealer SLA Disputes" }
      ],
      tags: ["Enterprise B2B", "SAP ERP", "Supply Chain", "Credit Note Settlement", "PRD Specs"],

      executionJourney: [
        { step: "1", icon: "📢", title: "Dealer Feedback", subtitle: "Captured 28-day working capital lockup complaints" },
        { step: "2", icon: "🗺️", title: "Process Mapping", subtitle: "Documented paper SRN slip vulnerabilities & lost claims" },
        { step: "3", icon: "⚡", title: "SAP Analysis", subtitle: "Audited SAP ERP invoice history & BAPI endpoints" },
        { step: "4", icon: "📱", title: "QR Workflow", subtitle: "Created mobile serial barcode scanner intake UI" },
        { step: "5", icon: "🔗", title: "API Integration", subtitle: "Wired BAPI_ACC_DOCUMENT_POST credit note triggers" },
        { step: "6", icon: "🚀", title: "Pilot Rollout", subtitle: "Deployed across 4,000+ pan-India distributors" },
        { step: "7", icon: "💳", title: "Credit Settlement", subtitle: "Slashed settlement TAT to 48 hours & disputes by -82%" }
      ],

      productThinking: {
        problemCard: {
          title: "🎯 Problem Statement",
          user: "4,000+ pan-India distributors, Area Sales Managers & SAP Finance Controllers.",
          problem: "Paper-based Sales Return Notes (SRN) locked up distributor working capital for up to a month.",
          frequency: "Hundreds of defective appliance return claims filed weekly across India.",
          pain: "Lost paper slips, manual data entry errors into SAP ERP, and 28-day settlement cycles fueled dealer disputes.",
          metric: "Credit Note Settlement TAT (28 days) and Dealer Reconciliation Disputes."
        },
        researchCard: {
          title: "👤 User Research & Insights",
          primaryUsers: "Authorized Orient Distributor (Rajesh Agarwal) & Plant Quality Engineer (Sanjay Mehta).",
          painPoints: "Distributors blocked fresh inventory orders while waiting for credit notes; quality engineers lacked defect proof.",
          findings: "65% of settlement delays stemmed from physical paper slips getting misplaced during regional transport.",
          bottlenecks: "Manual reconciliation between physical return boxes and SAP invoice records took 15+ days."
        },
        decisionsCard: {
          title: "⚖️ Product Decisions & Trade-offs",
          alternatives: "Considered web portal spreadsheet uploads (rejected: field distributors required mobile intake); considered manual email workflows (rejected: zero audit trail).",
          constraints: "Must integrate directly with legacy SAP ERP via BAPI without disrupting core finance ledger tables.",
          prioritization: "Prioritized Mobile Barcode/QR Intake + Automated SAP BAPI_ACC_DOCUMENT_POST as core P0 deliverables.",
          risk: "Risk of fraudulent warranty claims on expired stock; mitigated by real-time SAP serial invoice validation upon barcode scan."
        },
        solutionCard: {
          title: "🚀 Final Solution & Impact",
          chosenSolution: "Orient SRN Mobile Intake Suite with Barcode Scan, Quality Inspection Triage, and Direct SAP BAPI Credit Posting.",
          whyItWorked: "Digitized the entire paper trail into a 1-click mobile scan linked directly to SAP ERP finance ledgers.",
          businessMetrics: "Credit Note Settlement TAT reduced from 28 days to 48 hours, 99.4% inspection triage accuracy, -82% dealer disputes.",
          operationalImpact: "Unlocked working capital for 4,000+ distributors, accelerating fresh inventory order cycles by 3x.",
          futureRoadmap: "AI-assisted visual damage verification for instant automatic claim approval."
        }
      },

      overview: {
        problemStatement: "Orient Electric's distributor network faced severe working capital lockup due to paper-based Sales Return Notes (SRN). Return verification took up to 28 days to reconcile with SAP ERP, leading to dealer disputes and high credit note processing overhead.",
        targetAudience: "Distributors, Area Sales Managers, Service Center Quality Engineers, & SAP Finance Desk.",
        personas: [
          {
            name: "Rajesh Agarwal",
            role: "Authorized Orient Distributor (Delhi NCR)",
            painPoint: "Working capital blocked for 4+ weeks awaiting credit note posting in SAP.",
            goal: "Instant QR/barcode scan return filing & 48-hour credit note settlement."
          },
          {
            name: "Sanjay Mehta",
            role: "Plant Quality Inspection Engineer",
            painPoint: "Manual defect logging led to misclassified claims and revenue leakages.",
            goal: "Automated defect tagging with photo proof linked directly to SAP return orders."
          }
        ],
        solutionSummary: "Built Orient SRN Digitization Suite featuring Mobile QR Intake, Automated Quality Inspection Triage, and Direct SAP BAPI Credit Note Posting."
      },

      prd: {
        title: "PRD: Orient Electric SRN Process Digitization v1.0",
        version: "v1.0 Production Spec",
        author: "Souvik Ghosh (PM Lead)",
        objective: "Reduce Credit Note Settlement TAT from 28 days to under 48 hours, eliminate paper SRN claims, and achieve 99%+ automated SAP reconciliation.",
        userStories: [
          {
            id: "US-SRN-01",
            title: "Distributor Barcode / Serial Intake & QR Claim Generation",
            asA: "Distributor returning defective fan/appliance stock",
            iWantTo: "scan item serial number barcodes via mobile app",
            soThat: "warranty validity is checked instantly against SAP invoice history.",
            acceptanceCriteria: [
              "Mobile scanner reads 2D serial barcodes and validates active warranty in SAP.",
              "Auto-populates dealer ledger ID, product SKU, and invoice date."
            ]
          },
          {
            id: "US-SRN-02",
            title: "SAP BAPI Integration & Credit Note Posting",
            asA: "Finance Controller",
            iWantTo: "auto-trigger BAPI_ACC_DOCUMENT_POST upon quality approval",
            soThat: "credit notes are posted to distributor ledgers within 48 hours.",
            acceptanceCriteria: [
              "Automated SAP credit note creation with tax reconciliation.",
              "Pushes real-time SMS notification to distributor upon credit credit."
            ]
          }
        ],
        outOfScope: [
          "Cross-border export dealer return processing.",
          "Third-party e-commerce scrap disposal logistics."
        ]
      },

      wireframeFlow: {
        title: "Orient Electric SRN Interactive Workflow",
        steps: [
          {
            id: "srn_step1",
            label: "1. Distributor Barcode Scan",
            screenTitle: "Orient SRN Mobile Intake",
            mockupHtml: `
              <div style="background:#1e293b; padding:12px; border-radius:10px; margin-bottom:10px;">
                <span style="font-size:10px; color:#dc2626; font-weight:700;">ORIENT ELECTRIC SRN INTAKE</span>
                <p style="font-size:12px; color:white; margin-top:4px;">Serial: <strong>OR-FAN-2026-8891</strong></p>
                <span style="font-size:10px; color:#10b981;">✓ Warranty Valid in SAP</span>
              </div>
            `
          },
          {
            id: "srn_step2",
            label: "2. Quality Inspection & SAP Settlement",
            screenTitle: "SAP Credit Note Trigger",
            mockupHtml: `
              <div style="background:rgba(2, 132, 199, 0.15); border:1px solid #0284c7; padding:12px; border-radius:10px;">
                <span style="font-size:11px; font-weight:700; color:#38bdf8;">⚡ SAP Credit Note Auto-Posted</span>
                <p style="font-size:12px; color:white; margin-top:4px;">Amount: ₹45,200 • TAT: 48 Hours</p>
              </div>
            `
          }
        ]
      },

      metrics: {
        retentionChart: { labels: ["Legacy TAT (Days)", "Digitized SRN (Hours)"], legacyCohort: [28, 2], v2Cohort: [28, 2] },
        slaChart: { labels: ["Disputes Baseline", "Digitized Disputes"], beforeSlaHours: [100, 18], afterSlaHours: [100, 18] }
      }
    },

    {
      id: "snapmint-bnpl-checkout",
      title: "Snapmint BNPL: 1-Tap Checkout & Real-Time Underwriting Engine",
      category: "FinTech & Consumer Credit",
      status: "FinTech Product Showcase",
      themeColor: "fintech-blue",
      summary: "Redesigned Snapmint's Buy Now Pay Later (BNPL) checkout flow with Account Aggregator data streams and 1-tap UPI auto-mandate setup. Boosted checkout conversion rate by +24.5% and reduced drop-off at identity verification.",
      impactBadges: [
        { value: "+24.5%", label: "Checkout Conversion" },
        { value: "2 Mins", label: "Merchant Onboarding SLA" },
        { value: "78%", label: "Credit Approval Rate" }
      ],
      tags: ["FinTech", "BNPL", "UPI AutoMandate", "Credit Scoring", "Conversion Optimization"],

      executionJourney: [
        { step: "1", icon: "📊", title: "Funnel Analysis", subtitle: "Identified 42% drop-off at KYC bank verification" },
        { step: "2", icon: "🔍", title: "User Drop-off", subtitle: "Found manual bank statement uploads killed conversion" },
        { step: "3", icon: "⚖️", title: "Credit Risk", subtitle: "Balanced NPL risk (<1.8%) with instant approval goals" },
        { step: "4", icon: "🌐", title: "AA Integration", subtitle: "Wired 1-Tap Account Aggregator consent datastreams" },
        { step: "5", icon: "💳", title: "UPI AutoMandate", subtitle: "Embedded 1-click GPay/PhonePe recurring EMI autopay" },
        { step: "6", icon: "🧪", title: "A/B Testing", subtitle: "Ran multivariate testing across top merchant SDKs" },
        { step: "7", icon: "📈", title: "Conversion Surge", subtitle: "Delivered +24.5% conversion surge & sub-2 min approval" }
      ],

      productThinking: {
        problemCard: {
          title: "🎯 Problem Statement",
          user: "Gen-Z and millennial e-commerce shoppers looking for no-cost EMI without credit cards.",
          problem: "Severe 42% drop-off at the KYC and income verification step during merchant checkout.",
          frequency: "Tens of thousands of daily checkout attempts across partner e-commerce merchants.",
          pain: "Uploading PDF bank statements and waiting for manual credit approval killed checkout impulse buying.",
          metric: "E-Commerce Merchant Checkout Conversion Rate and Underwriting SLA."
        },
        researchCard: {
          title: "👤 User Research & Insights",
          primaryUsers: "First-Job Professional (Rohan Malhotra) & E-Commerce Merchant Partner (Sneha Patel).",
          painPoints: "Young shoppers lack credit cards and abandon carts when asked for multi-page salary slips.",
          findings: "88% of users who dropped off had active UPI accounts and willingness to grant Account Aggregator data consent.",
          bottlenecks: "Manual PDF statement parsing took 15-25 minutes, leading to cart abandonment."
        },
        decisionsCard: {
          title: "⚖️ Product Decisions & Trade-offs",
          alternatives: "Considered traditional credit bureau hits only (rejected: 60% of Gen-Z shoppers are credit-thin / NTC); considered manual video KYC (rejected: introduced 10-minute friction).",
          constraints: "Must keep Non-Performing Loans (NPL) strictly below 1.8% while offering sub-2 minute underwriting.",
          prioritization: "Integrated Account Aggregator (AA) 1-Tap Bank Consent + UPI AutoMandate recurring autopay into merchant checkout SDKs.",
          risk: "Risk of default on un-collateralized loans; mitigated by real-time AA cashflow algorithm scoring."
        },
        solutionCard: {
          title: "🚀 Final Solution & Impact",
          chosenSolution: "Snapmint 1-Tap BNPL Checkout featuring AA Instant Consent, Dynamic EMI Tenure Selection, and UPI AutoMandate.",
          whyItWorked: "Replaced manual bank statement uploads with a 15-second AA digital consent stream.",
          businessMetrics: "+24.5% checkout conversion surge, 78% instant credit approval, sub-2 minute underwriting decisioning.",
          operationalImpact: "Reduced merchant onboarding SLA to 2 minutes, elevating Average Order Value (AOV) for e-commerce partners.",
          futureRoadmap: "Expanding into offline QR BNPL checkout at physical retail stores."
        }
      },

      overview: {
        problemStatement: "Snapmint's checkout flow suffered from a 42% drop-off at the KYC and income verification step. Users abandoned carts due to cumbersome bank statement uploads and slow credit decisioning.",
        targetAudience: "Gen-Z and young millennial e-commerce shoppers looking for no-cost EMI options without credit cards.",
        personas: [
          {
            name: "Rohan Malhotra (23)",
            role: "First-Job Professional",
            painPoint: "Does not own a credit card; abandons checkout if asked for salary slips.",
            goal: "Instant 1-tap EMI approval using PAN + UPI verification."
          },
          {
            name: "Sneha Patel",
            role: "E-Commerce Merchant Lead",
            painPoint: "High cart abandonment rates on high-ticket items (electronics/fashion).",
            goal: "Seamless BNPL widget integration boosting average order value (AOV)."
          }
        ],
        solutionSummary: "Architected Snapmint 1-Tap Checkout incorporating Account Aggregator instant bank verification, dynamic EMI tenure selection, and automated UPI recurring payment setup."
      },

      prd: {
        title: "PRD: Snapmint 1-Tap BNPL Checkout Suite v3.0",
        version: "v3.0 Production Spec",
        author: "Souvik Ghosh (PM Lead)",
        objective: "Increase e-commerce merchant checkout conversion by 20%+, achieve sub-3-minute credit approval, and maintain NPL (Non-Performing Loans) below 1.8%.",
        userStories: [
          {
            id: "US-SNAP-01",
            title: "1-Tap Account Aggregator Consent & Credit Scoring",
            asA: "Shopper selecting Snapmint Pay Later at checkout",
            iWantTo: "grant 1-tap consent via Account Aggregator framework",
            soThat: "my credit limit is calculated instantly without uploading bank statements.",
            acceptanceCriteria: [
              "AA consent flow completes within 15 seconds.",
              "Real-time underwriting engine returns pre-approved credit limit."
            ]
          },
          {
            id: "US-SNAP-02",
            title: "Automated UPI Auto-Mandate Autopay Setup",
            asA: "Borrower setting up monthly EMI schedule",
            iWantTo: "authorize auto-debit using my existing UPI app (GPay/PhonePe)",
            soThat: "my EMIs are deducted automatically on the due date without late fees.",
            acceptanceCriteria: [
              "UPI AutoMandate authorization modal rendered in checkout.",
              "Pushes automated WhatsApp payment reminders 3 days prior to due date."
            ]
          }
        ],
        outOfScope: [
          "Offline QR pos merchant credit lines.",
          "International currency credit underwriting."
        ]
      },

      wireframeFlow: {
        title: "Snapmint 1-Tap Checkout Workflow",
        steps: [
          {
            id: "snap_step1",
            label: "1. Select Snapmint EMI",
            screenTitle: "Checkout Payment Screen",
            mockupHtml: `
              <div style="background:#151D30; padding:12px; border-radius:10px; margin-bottom:10px;">
                <span style="font-size:10px; color:#00F0FF; font-weight:700;">SNAPMINT NO-COST EMI</span>
                <h4 style="font-size:13px; color:white;">Select Plan: 3 Months @ ₹3,333/mo</h4>
              </div>
            `
          },
          {
            id: "snap_step2",
            label: "2. Instant AA Consent & AutoMandate",
            screenTitle: "1-Tap UPI Autopay",
            mockupHtml: `
              <div style="background:rgba(56, 189, 248, 0.15); border:1px solid #38bdf8; padding:12px; border-radius:10px;">
                <span style="font-size:11px; font-weight:700; color:#38bdf8;">⚡ Account Aggregator Consent Granted</span>
                <p style="font-size:12px; color:white; margin-top:4px;">Credit Approved: ₹25,000 • Sub-2 Mins</p>
              </div>
            `
          }
        ]
      },

      metrics: {
        retentionChart: { labels: ["Baseline Funnel Drop", "Snapmint 1-Tap Checkout"], legacyCohort: [42, 17.5], v2Cohort: [42, 17.5] },
        slaChart: { labels: ["Manual KYC Time (Mins)", "AA Automated Approval"], beforeSlaHours: [25, 2], afterSlaHours: [25, 2] }
      }
    }
  ]
};
