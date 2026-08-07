const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
const dataFile = path.join(__dirname, 'js', 'data.js');
const appFile = path.join(__dirname, 'js', 'app.js');

// 1. Update index.html to add Project 5 in static HTML
let indexContent = fs.readFileSync(indexFile, 'utf8');

const hospitalCaseCard = `
        <!-- Project 5: Healthcare Agentic AI Suite (Hospital Onboarding & ICU Clinical Engine) -->
        <div class="pm-case-card clickable-card" onclick="if(!event.target.closest('a')) window.location.href='hospital.html';" style="cursor:pointer; border-color:var(--border-highlight);">
          <div class="pm-card-banner">
            <div>
              <div class="pm-domain-tags">
                <span class="domain-pill">Healthcare AI</span>
                <span class="domain-pill">Agentic Workflows</span>
                <span class="domain-pill">ICU Decision Engine</span>
                <span class="domain-pill" style="background:rgba(13,148,136,0.18); color:#14B8A6; border-color:#0D9488;">● Flagship Healthcare AI Project</span>
              </div>
              <h3 class="pm-card-title">Healthcare Agentic AI Suite: Hospital Onboarding, Insurance Pre-Auth & ICU Clinical Engine</h3>
              <p class="pm-card-subtitle">Healthcare & Enterprise Agentic AI Platform</p>
            </div>
          </div>

          <!-- Product User Journey: Healthcare AI -->
          <div class="project-hero-visual-card hero-visual-hospital" style="background: linear-gradient(135deg, rgba(13,148,136,0.12), rgba(6,182,212,0.12)); border-color: rgba(13,148,136,0.35);">
            <div class="visual-card-header">
              <span class="visual-header-badge" style="background:rgba(13,148,136,0.2); color:#14B8A6; border-color:rgba(20,184,166,0.4);">🏥 PATIENT ADMISSION & PRE-AUTH JOURNEY</span>
              <span class="visual-header-title">User Story: 4.3h AI Insurance Pre-Auth & Clinical Decision Triage</span>
            </div>
            <div class="visual-workflow-nodes">
              <div class="visual-node-box"><div class="visual-node-icon">🏥</div><div class="visual-node-label">Patient Intake</div><div class="visual-node-sub">Hospital Registration</div></div>
              <div class="visual-flow-arrow">&rarr;</div>
              <div class="visual-node-box"><div class="visual-node-icon">📑</div><div class="visual-node-label">Policy Scan</div><div class="visual-node-sub">ICD-10 Data Extraction</div></div>
              <div class="visual-flow-arrow">&rarr;</div>
              <div class="visual-node-box visual-node-active" style="border-color:#0D9488;"><div class="visual-node-icon">🤖</div><div class="visual-node-label">AI Pre-Auth Agent</div><div class="visual-node-sub">Automated Claim Sync</div></div>
              <div class="visual-flow-arrow">&rarr;</div>
              <div class="visual-node-box"><div class="visual-node-icon">💊</div><div class="visual-node-label">Safety Check</div><div class="visual-node-sub">Drug Interaction Scan</div></div>
              <div class="visual-flow-arrow">&rarr;</div>
              <div class="visual-node-box"><div class="visual-node-icon">🩺</div><div class="visual-node-label">ICU Support</div><div class="visual-node-sub">Sepsis Intercept Agent</div></div>
              <div class="visual-flow-arrow">&rarr;</div>
              <div class="visual-node-box"><div class="visual-node-icon">⚡</div><div class="visual-node-label">SLA Escalation</div><div class="visual-node-sub">Human Guardrail Queue</div></div>
              <div class="visual-flow-arrow">&rarr;</div>
              <div class="visual-node-box visual-node-highlight" style="border-color:#14B8A6;"><div class="visual-node-icon">🎉</div><div class="visual-node-label">Admission Cleared</div><div class="visual-node-sub">82% Speedup (4.3h TAT)</div></div>
            </div>
          </div>

          <div class="pm-card-body">
            <div class="pm-exec-summary">
              <strong>Executive Summary:</strong> Architected an enterprise Healthcare Agentic AI Suite automating hospital patient onboarding, insurance pre-authorization claims, drug interaction safety checks, and ICU sepsis triage. Reduced pre-auth turnaround time by 82% (24 hours &rarr; 4.3 hours) and cut clinical onboarding delays by 68%.
            </div>

            <div class="pm-kpi-grid">
              <div class="pm-kpi-card"><div class="pm-kpi-val">4.3 Hours</div><div class="pm-kpi-lbl">Pre-Auth Claim TAT (was 24h)</div></div>
              <div class="pm-kpi-card"><div class="pm-kpi-val">82%</div><div class="pm-kpi-lbl">Claim Approval Speedup</div></div>
              <div class="pm-kpi-card"><div class="pm-kpi-val">99.8%</div><div class="pm-kpi-lbl">Medication Safety Accuracy</div></div>
            </div>

            <div class="pm-role-bar">
              <div class="pm-role-title">My Role & Competencies:</div>
              <div class="pm-role-tags">
                <span class="role-pill">⚡ Product Strategy</span>
                <span class="role-pill">⚡ User Research</span>
                <span class="role-pill">⚡ PRD Specs</span>
                <span class="role-pill">⚡ Wireframes</span>
                <span class="role-pill">⚡ Prioritization</span>
                <span class="role-pill">⚡ Stakeholder Management</span>
                <span class="role-pill">⚡ Launch</span>
                <span class="role-pill">⚡ Analytics</span>
              </div>
            </div>

            <!-- 2x2 PRODUCT THINKING & STRATEGY GRID -->
            <div class="pm-thinking-grid-section">
              <div class="thinking-section-title">🧠 Product Thinking & Strategy Breakdown</div>
              <div class="pm-thinking-grid">
                
                <!-- Card 1: Problem Statement -->
                <div class="thinking-card">
                  <div class="thinking-card-header">
                    <div class="thinking-card-icon">🎯</div>
                    <div class="thinking-card-title">🎯 Problem Statement & User Pain</div>
                  </div>
                  <div class="thinking-card-body">
                    <div class="thinking-field">
                      <span class="thinking-field-label">Target User</span>
                      <span class="thinking-field-content">Hospital Admissions Desk, Chief Nursing Officers & Medical Insurance Desk Leads.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">The Core Friction</span>
                      <span class="thinking-field-content">Manual insurance pre-authorization delays and paper-based onboarding causing 24h+ patient admission bottlenecks.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Frequency & Pain Point</span>
                      <span class="thinking-field-content"><strong>Frequency:</strong> Hundreds of inpatient admissions daily across tertiary care hospital chains.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Affected Business Metric</span>
                      <span class="thinking-field-content" style="color:var(--secondary); font-weight:600;">Pre-Auth Claim TAT (24h) & Hospital Bed Turnover Rate</span>
                    </div>
                  </div>
                </div>

                <!-- Card 2: User Research & Insights -->
                <div class="thinking-card">
                  <div class="thinking-card-header">
                    <div class="thinking-card-icon">👤</div>
                    <div class="thinking-card-title">👤 User Research & Insights</div>
                  </div>
                  <div class="thinking-card-body">
                    <div class="thinking-field">
                      <span class="thinking-field-label">Primary Personas Studied</span>
                      <span class="thinking-field-content">Dr. Aris Thorne (ICU Director) & Meera Sen (Insurance Pre-Auth Coordinator).</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">User Pain Points</span>
                      <span class="thinking-field-content">85% of claim rejections stemmed from missing ICD-10 diagnostic codes during initial admission filing.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Key Behavioral Findings</span>
                      <span class="thinking-field-content">Nurses spent 3.5 hours per shift manually re-entering patient vitals between EHR and insurance portals.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Journey Bottleneck Identified</span>
                      <span class="thinking-field-content" style="color:var(--warning); font-weight:600;">Fragmented communication between hospital EHR, TPA insurance desks, and ICU bedside monitors.</span>
                    </div>
                  </div>
                </div>

                <!-- Card 3: Product Decisions & Trade-offs -->
                <div class="thinking-card" style="border-color:var(--border-highlight);">
                  <div class="thinking-card-header">
                    <div class="thinking-card-icon" style="background:rgba(13,148,136,0.18); color:#14B8A6;">⚖️</div>
                    <div class="thinking-card-title" style="color:var(--text-main);">⚖️ Product Strategy & Solution</div>
                  </div>
                  <div class="thinking-card-body">
                    <div class="thinking-field">
                      <span class="thinking-field-label">Alternative Solutions Rejected</span>
                      <span class="thinking-field-content">Manual call-center pre-auth support (unscalable & prone to 12h+ hold times).</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Technical & Business Constraints</span>
                      <span class="thinking-field-content">Strict HIPAA & ABDM compliance for patient health record privacy and encrypted LLM inferencing.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Prioritization & MVP Cutoff</span>
                      <span class="thinking-field-content" style="color:var(--secondary); font-weight:600;">Prioritized Automated Pre-Auth Claim Agent + ICU Sepsis Intercept Agent for v1.0 MVP release.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Risk Analysis & Guardrails</span>
                      <span class="thinking-field-content">Human-in-the-loop physician override triggers for any high-severity ICU diagnostic recommendation.</span>
                    </div>
                  </div>
                </div>

                <!-- Card 4: Final Solution & Impact -->
                <div class="thinking-card">
                  <div class="thinking-card-header">
                    <div class="thinking-card-icon" style="background:rgba(16,185,129,0.15); color:var(--success);">🚀</div>
                    <div class="thinking-card-title">📈 Metrics & Business Impact</div>
                  </div>
                  <div class="thinking-card-body">
                    <div class="thinking-field">
                      <span class="thinking-field-label">Chosen Product Solution</span>
                      <span class="thinking-field-content">Healthcare Agentic AI Suite embedding Pre-Auth Automation, Drug Safety Verification & ICU Clinical Decision Support.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Why It Worked</span>
                      <span class="thinking-field-content">Replaced manual data re-entry with autonomous multi-agent LLM verification and instant TPA portal sync.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Quantified Business Metrics</span>
                      <span class="thinking-field-content" style="color:var(--success); font-weight:700;">82% Pre-Auth TAT reduction (24h &rarr; 4.3h), 68% faster onboarding, 99.8% medication safety accuracy.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Future Product Roadmap</span>
                      <span class="thinking-field-content">Autonomous post-discharge remote patient monitoring & AI prescription synthesis.</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class="pm-card-actions">
              <a href="hospital.html" class="btn btn-primary" style="background:linear-gradient(135deg, #0D9488, #06B6D4); color:white; font-weight:800; padding:0.85rem 1.65rem; font-size:0.95rem; text-decoration:none;">
                Explore Complete Case Study &rarr;
              </a>
            </div>
          </div>
        </div>
`;

if (!indexContent.includes('hospital.html')) {
  // Insert before </main> or after snapmint project
  const snapmintEnd = indexContent.lastIndexOf('<!-- Project 4: Snapmint');
  if (snapmintEnd !== -1) {
    const cardEnd = indexContent.indexOf('</div>\n        </div>', snapmintEnd);
    if (cardEnd !== -1) {
      const pos = cardEnd + 16;
      indexContent = indexContent.substring(0, pos) + '\n\n' + hospitalCaseCard + indexContent.substring(pos);
      fs.writeFileSync(indexFile, indexContent, 'utf8');
      console.log('Injected Project 5 (Healthcare Agentic AI Suite) into index.html!');
    }
  }
}

// 2. Update js/data.js to include hospital project in DEFAULT_PORTFOLIO_DATA
let dataContent = fs.readFileSync(dataFile, 'utf8');
if (!dataContent.includes('healthcare-agentic-ai-suite')) {
  dataContent = dataContent.replace('caseStudiesCount: 4', 'caseStudiesCount: 5');
  dataContent = dataContent.replace('prdsWritten: 4', 'prdsWritten: 5');

  const hospitalDataObject = `
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
`;

  dataContent = dataContent.replace('caseStudies: [', 'caseStudies: [\n' + hospitalDataObject);
  fs.writeFileSync(dataFile, dataContent, 'utf8');
  console.log('Updated data.js with 5th Healthcare AI project!');
}

console.log('Done adding hospital project!');
