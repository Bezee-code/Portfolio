const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

const stanzaGrid = `
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
                      <span class="thinking-field-content">70,000+ Co-Living Residents, Operations Leads & Maintenance Technicians.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">The Core Friction</span>
                      <span class="thinking-field-content">Unstructured text complaint tickets leading to misclassified issues, delayed dispatch, and resident frustration.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Frequency & Pain Point</span>
                      <span class="thinking-field-content"><strong>Frequency:</strong> Daily maintenance tickets across 450+ properties. Long resolution cycles, 62% SLA compliance.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Affected Business Metric</span>
                      <span class="thinking-field-content" style="color:var(--secondary); font-weight:600;">Mean Time to Resolve (MTTR) & Resident Churn / CSAT</span>
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
                      <span class="thinking-field-content">Rohan Mehta (Student Resident) & Vikram Singh (Cluster Operations Lead).</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">User Pain Points</span>
                      <span class="thinking-field-content">38% of complaints logged as "Urgent" were minor; technicians dispatched with wrong tools.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Key Behavioral Findings</span>
                      <span class="thinking-field-content">Residents upload photos of broken amenities but struggle to describe technical issues in text.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Journey Bottleneck Identified</span>
                      <span class="thinking-field-content" style="color:var(--warning); font-weight:600;">Manual ticket triage by property staff created a 6-hour response delay before vendor dispatch.</span>
                    </div>
                  </div>
                </div>

                <!-- Card 3: Product Decisions & Trade-offs -->
                <div class="thinking-card" style="border-color:var(--border-highlight);">
                  <div class="thinking-card-header">
                    <div class="thinking-card-icon" style="background:rgba(236,72,153,0.15); color:var(--accent);">⚖️</div>
                    <div class="thinking-card-title" style="color:var(--text-main);">⚖️ Product Strategy & Solution</div>
                  </div>
                  <div class="thinking-card-body">
                    <div class="thinking-field">
                      <span class="thinking-field-label">Alternative Solutions Rejected</span>
                      <span class="thinking-field-content">Call-center manual triage team (prohibitively expensive & non-scalable).</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Technical & Business Constraints</span>
                      <span class="thinking-field-content">Low-bandwidth mobile connectivity for technicians on-site.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Prioritization & MVP Cutoff</span>
                      <span class="thinking-field-content" style="color:var(--secondary); font-weight:600;">Built Vision AI photo categorization first before automated vendor billing integration.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Risk Analysis & Guardrails</span>
                      <span class="thinking-field-content">Fallback manual review queue for low-confidence AI vision classifications (&lt; 75% score).</span>
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
                      <span class="thinking-field-content">Stanza Care Vision AI Triage Engine with automated severity scoring, SLA countdown timers, and geofenced vendor dispatch.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Why It Worked</span>
                      <span class="thinking-field-content">Transformed vague user photo uploads into structured work orders with 92% categorization accuracy.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Quantified Business Metrics</span>
                      <span class="thinking-field-content" style="color:var(--success); font-weight:700;">SLA compliance improved from 62% to 94%; MTTR reduced by 58%; Resident CSAT increased to 4.6/5.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Future Product Roadmap</span>
                      <span class="thinking-field-content">Predictive maintenance IoT sensors for HVAC and water filtration systems.</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
`;

const orientGrid = `
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
                      <span class="thinking-field-content">5,000+ B2B Electrical Dealers, Field Audit Engineers & Corporate Finance Teams.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">The Core Friction</span>
                      <span class="thinking-field-content">Manual paper-based Sales Return Note (SRN) processing causing 21-day credit note settlement delays.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Frequency & Pain Point</span>
                      <span class="thinking-field-content"><strong>Frequency:</strong> Monthly defective inventory return claims totaling ~₹8 Cr across India.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Affected Business Metric</span>
                      <span class="thinking-field-content" style="color:var(--secondary); font-weight:600;">Claim Settlement Turnaround Time (21 days) & Dealer NPS</span>
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
                      <span class="thinking-field-content">Rajesh Agarwal (Regional Master Distributor) & Anita Sharma (Commercial Accounts Manager).</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">User Pain Points</span>
                      <span class="thinking-field-content">Dealers had working capital locked for 3+ weeks awaiting credit notes; lost physical serial tag receipts.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Key Behavioral Findings</span>
                      <span class="thinking-field-content">64% of return delays stemmed from manual verification of serial numbers against SAP ERP invoices.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Journey Bottleneck Identified</span>
                      <span class="thinking-field-content" style="color:var(--warning); font-weight:600;">Disconnected dealer portal, field engineer mobile app, and SAP ERP financial ledger.</span>
                    </div>
                  </div>
                </div>

                <!-- Card 3: Product Decisions & Trade-offs -->
                <div class="thinking-card" style="border-color:var(--border-highlight);">
                  <div class="thinking-card-header">
                    <div class="thinking-card-icon" style="background:rgba(236,72,153,0.15); color:var(--accent);">⚖️</div>
                    <div class="thinking-card-title" style="color:var(--text-main);">⚖️ Product Strategy & Solution</div>
                  </div>
                  <div class="thinking-card-body">
                    <div class="thinking-field">
                      <span class="thinking-field-label">Alternative Solutions Rejected</span>
                      <span class="thinking-field-content">Batch offline file uploads (failed real-time ledger verification).</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Technical & Business Constraints</span>
                      <span class="thinking-field-content">Integration with legacy SAP ECC 6.0 system without disrupting core billing APIs.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Prioritization & MVP Cutoff</span>
                      <span class="thinking-field-content" style="color:var(--secondary); font-weight:600;">Focused on QR barcode scan verification for field engineers over automated scrap valuation.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Risk Analysis & Guardrails</span>
                      <span class="thinking-field-content">Strict financial audit logs and multi-level approval thresholds for claims exceeding ₹5 Lakhs.</span>
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
                      <span class="thinking-field-content">B2B SRN Automation Portal with mobile QR audit verification and real-time SAP ERP API ledger bridge.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Why It Worked</span>
                      <span class="thinking-field-content">Automated invoice matching and defect validation, enabling instant credit note generation upon physical verification.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Quantified Business Metrics</span>
                      <span class="thinking-field-content" style="color:var(--success); font-weight:700;">Claim settlement TAT reduced from 21 days to 3 days; 99.4% SAP ledger reconciliation accuracy.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Future Product Roadmap</span>
                      <span class="thinking-field-content">Automated warranty fraud detection using machine learning serial number anomaly models.</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
`;

const snapmintGrid = `
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
                      <span class="thinking-field-content">First-Time Credit Buyers, E-Commerce Merchants & Risk Analytics Teams.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">The Core Friction</span>
                      <span class="thinking-field-content">High checkout drop-off (65%+) on e-commerce carts due to complex credit application forms and payment gateway failures.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Frequency & Pain Point</span>
                      <span class="thinking-field-content"><strong>Frequency:</strong> High-intent daily online purchases ranging from ₹2,000 to ₹30,000.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Affected Business Metric</span>
                      <span class="thinking-field-content" style="color:var(--secondary); font-weight:600;">E-Commerce Checkout Conversion Rate & First-Payment Default (FPD) Rate</span>
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
                      <span class="thinking-field-content">Ananya Roy (First-Job Professional) & Priyank Shah (D2C Brand Growth Lead).</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">User Pain Points</span>
                      <span class="thinking-field-content">Users abandon checkout when asked for 10+ bank details or when primary UPI payment gateway fails.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Key Behavioral Findings</span>
                      <span class="thinking-field-content">82% of drop-offs happen at the credit approval step if processing takes longer than 45 seconds.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Journey Bottleneck Identified</span>
                      <span class="thinking-field-content" style="color:var(--warning); font-weight:600;">Single payment gateway bottleneck and slow manual KYC document verification.</span>
                    </div>
                  </div>
                </div>

                <!-- Card 3: Product Decisions & Trade-offs -->
                <div class="thinking-card" style="border-color:var(--border-highlight);">
                  <div class="thinking-card-header">
                    <div class="thinking-card-icon" style="background:rgba(236,72,153,0.15); color:var(--accent);">⚖️</div>
                    <div class="thinking-card-title" style="color:var(--text-main);">⚖️ Product Strategy & Solution</div>
                  </div>
                  <div class="thinking-card-body">
                    <div class="thinking-field">
                      <span class="thinking-field-label">Alternative Solutions Rejected</span>
                      <span class="thinking-field-content">Traditional credit card application flow requiring income proof documents.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Technical & Business Constraints</span>
                      <span class="thinking-field-content">Regulatory RBI guidelines for digital lending & AutoMandate e-NACH mandates.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Prioritization & MVP Cutoff</span>
                      <span class="thinking-field-content" style="color:var(--secondary); font-weight:600;">Built multi-acquirer gateway fallback cascade for checkout before personalized EMI plan selector.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Risk Analysis & Guardrails</span>
                      <span class="thinking-field-content">Real-time risk scoring engine to auto-reject high-risk transactions without compromising sub-30sec checkout.</span>
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
                      <span class="thinking-field-content">Snapmint One-Click BNPL Checkout with sub-30sec alternate credit scoring and multi-gateway Auto-Cascade fallback.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Why It Worked</span>
                      <span class="thinking-field-content">Seamless 3-step checkout with instant credit sanctioning and auto-routing around failed payment gateways.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Quantified Business Metrics</span>
                      <span class="thinking-field-content" style="color:var(--success); font-weight:700;">+28% checkout conversion rate boost; 42% payment drop-off reduction; &lt;30sec average approval time.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Future Product Roadmap</span>
                      <span class="thinking-field-content">AI-driven personalized credit limit expansion and merchant co-branded zero-cost EMI campaigns.</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
`;

// Insert for Stanza Living (Project 2)
const stanzaActionBtn = `<a href="stanza.html" class="btn btn-primary" style="background:linear-gradient(135deg, #6366F1, #10B981); color:white; font-weight:800; padding:0.85rem 1.65rem; font-size:0.95rem; text-decoration:none;">`;
if (content.includes(stanzaActionBtn)) {
  const target = `<div class="pm-card-actions">\n              ${stanzaActionBtn}`;
  const replacement = `${stanzaGrid}\n\n            <div class="pm-card-actions">\n              ${stanzaActionBtn}`;
  content = content.replace(target, replacement);
  console.log('Injected 2x2 grid for Stanza Living!');
}

// Insert for Orient Electric (Project 3)
const orientActionBtn = `<a href="orient.html" class="btn btn-primary" style="background:linear-gradient(135deg, #dc2626, #0284c7); color:white; font-weight:800; padding:0.85rem 1.65rem; font-size:0.95rem; text-decoration:none;">`;
if (content.includes(orientActionBtn)) {
  const target = `<div class="pm-card-actions">\n              ${orientActionBtn}`;
  const replacement = `${orientGrid}\n\n            <div class="pm-card-actions">\n              ${orientActionBtn}`;
  content = content.replace(target, replacement);
  console.log('Injected 2x2 grid for Orient Electric!');
}

// Insert for Snapmint (Project 4)
const snapmintActionBtn = `<a href="snapmint.html" class="btn btn-primary" style="background:linear-gradient(135deg, #0052FF, #00F0FF); color:white; font-weight:800; padding:0.85rem 1.65rem; font-size:0.95rem; text-decoration:none;">`;
if (content.includes(snapmintActionBtn)) {
  const target = `<div class="pm-card-actions">\n              ${snapmintActionBtn}`;
  const replacement = `${snapmintGrid}\n\n            <div class="pm-card-actions">\n              ${snapmintActionBtn}`;
  content = content.replace(target, replacement);
  console.log('Injected 2x2 grid for Snapmint!');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated index.html successfully!');
