const fs = require('fs');
const path = require('path');

const srcBrainPath = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain\\19540445-275a-407b-90fd-75b7b4a79071\\hostassist_ai_prototype.html';
const appDir = __dirname;
const destHostassistHtml = path.join(appDir, 'hostassist.html');
const destHostassistProto = path.join(appDir, 'hostassist_ai_prototype.html');

// 1. Copy prototype file and inject Back button
let protoContent = fs.readFileSync(srcBrainPath, 'utf8');

const backBtnHeader = `<div style="width: 100%; max-width: 1200px; margin-bottom: 16px;">
    <a href="index.html#case-studies" style="display: inline-flex; align-items: center; gap: 8px; background: rgba(99, 102, 241, 0.25); border: 1px solid rgba(99, 102, 241, 0.5); color: #38bdf8; padding: 8px 16px; border-radius: 9999px; font-size: 13px; font-weight: 700; text-decoration: none; box-shadow: 0 4px 12px rgba(0,0,0,0.3); transition: all 0.2s ease;">
        ← <strong>Back to Portfolio Homepage</strong>
    </a>
</div>`;

if (!protoContent.includes('Back to Portfolio Homepage')) {
  protoContent = protoContent.replace('<div class="wrapper">', backBtnHeader + '\n    <div class="wrapper">');
}

fs.writeFileSync(destHostassistHtml, protoContent, 'utf8');
fs.writeFileSync(destHostassistProto, protoContent, 'utf8');
console.log('Saved hostassist.html & hostassist_ai_prototype.html with Back button!');

// 2. Inject HostAssist AI card into index.html under Category 2: Independent PM Case Studies
const indexFile = path.join(appDir, 'index.html');
let indexContent = fs.readFileSync(indexFile, 'utf8');

const hostassistCardHtml = `
        <!-- Project 6 (Independent Case Study 4): MakeMyTrip HostAssist AI -->
        <div class="pm-case-card clickable-card" onclick="if(!event.target.closest('a')) window.location.href='hostassist.html';" style="cursor:pointer; border-color:var(--border-highlight); margin-top:2.5rem;">
          <div class="pm-card-banner">
            <div>
              <div class="pm-domain-tags">
                <span class="domain-pill">TravelTech AI</span>
                <span class="domain-pill">Homestay Copilot</span>
                <span class="domain-pill">Dynamic Pricing</span>
                <span class="domain-pill" style="background:rgba(245,158,11,0.18); color:#F59E0B; border-color:rgba(245,158,11,0.5); font-weight:700;">💡 INDEPENDENT PM CASE STUDY</span>
              </div>
              <h3 class="pm-card-title">MakeMyTrip Partner Connect: HostAssist AI & Dynamic Pricing Copilot</h3>
              <p class="pm-card-subtitle">AI-Powered Homestay Host Automation & Revenue Optimization Engine</p>
            </div>
          </div>

          <!-- Product User Journey: HostAssist AI -->
          <div class="project-hero-visual-card hero-visual-hostassist" style="background: linear-gradient(135deg, rgba(229,57,53,0.12), rgba(245,158,11,0.12)); border-color: rgba(229,57,53,0.35);">
            <div class="visual-card-header">
              <span class="visual-header-badge" style="background:rgba(229,57,53,0.2); color:#EF4444; border-color:rgba(239,68,68,0.4);">🏨 HOMESTAY HOST AUTOMATION JOURNEY</span>
              <span class="visual-header-title">User Story: Sub-5 Min AI Response & +21.4% RevPAR Lift</span>
            </div>
            <div class="visual-workflow-nodes">
              <div class="visual-node-box"><div class="visual-node-icon">🏨</div><div class="visual-node-label">Guest Inquiry</div><div class="visual-node-sub">Instant Booking Request</div></div>
              <div class="visual-flow-arrow">&rarr;</div>
              <div class="visual-node-box visual-node-active" style="border-color:#E53935;"><div class="visual-node-icon">💬</div><div class="visual-node-label">AI Auto-Reply</div><div class="visual-node-sub">Multilingual Messaging</div></div>
              <div class="visual-flow-arrow">&rarr;</div>
              <div class="visual-node-box"><div class="visual-node-icon">📊</div><div class="visual-node-label">Dynamic Pricing</div><div class="visual-node-sub">Rate Optimization Engine</div></div>
              <div class="visual-flow-arrow">&rarr;</div>
              <div class="visual-node-box"><div class="visual-node-icon">📅</div><div class="visual-node-label">Calendar Sync</div><div class="visual-node-sub">Multi-OTAs Inventory</div></div>
              <div class="visual-flow-arrow">&rarr;</div>
              <div class="visual-node-box"><div class="visual-node-icon">🧹</div><div class="visual-node-label">Turnover Assist</div><div class="visual-node-sub">Housekeeping Dispatch</div></div>
              <div class="visual-flow-arrow">&rarr;</div>
              <div class="visual-node-box visual-node-highlight" style="border-color:#F59E0B;"><div class="visual-node-icon">⭐</div><div class="visual-node-label">Review Boost</div><div class="visual-node-sub">3.2m Response & +21.4% RevPAR</div></div>
            </div>
          </div>

          <div class="pm-card-body">
            <div class="pm-exec-summary">
              <strong>Executive Summary:</strong> Conceptualized HostAssist AI for MakeMyTrip homestay hosts—automating 24/7 guest inquiry responses, dynamic seasonal pricing rules, multi-OTA calendar synchronization, and review sentiment synthesis. Reduced guest response time by 98% (4.2h &rarr; 3.2 min) and boosted host RevPAR revenue by +21.4%.
            </div>

            <div class="pm-kpi-grid">
              <div class="pm-kpi-card"><div class="pm-kpi-val">3.2 Min</div><div class="pm-kpi-lbl">Guest Response Time (was 4.2h)</div></div>
              <div class="pm-kpi-card"><div class="pm-kpi-val">+21.4%</div><div class="pm-kpi-lbl">Host RevPAR Revenue Lift</div></div>
              <div class="pm-kpi-card"><div class="pm-kpi-val">94.8%</div><div class="pm-kpi-lbl">Guest AI CSAT Rating</div></div>
            </div>

            <div class="pm-role-bar">
              <div class="pm-role-title">My Role & Competencies:</div>
              <div class="pm-role-tags">
                <span class="role-pill">⚡ Product Strategy</span>
                <span class="role-pill">⚡ User Research</span>
                <span class="role-pill">⚡ PRD Specs</span>
                <span class="role-pill">⚡ Wireframes</span>
                <span class="role-pill">⚡ Prioritization</span>
                <span class="role-pill">⚡ Revenue Modeling</span>
                <span class="role-pill">⚡ AI Copilots</span>
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
                      <span class="thinking-field-content">Independent Homestay Hosts & Boutique Property Managers on MakeMyTrip & Goibibo.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">The Core Friction</span>
                      <span class="thinking-field-content">Slow guest response times (4.2h average) and static pricing leading to 45%+ unbooked room nights.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Frequency & Pain Point</span>
                      <span class="thinking-field-content"><strong>Frequency:</strong> Multiple daily guest booking inquiries & check-in coordination messages.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Affected Business Metric</span>
                      <span class="thinking-field-content" style="color:var(--secondary); font-weight:600;">Host RevPAR (Revenue Per Available Room) & Guest Booking Conversion</span>
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
                      <span class="thinking-field-content">Vikram Sharma (Villa Host, Goa) & Priya Nair (Coorg Cottage Operator).</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">User Pain Points</span>
                      <span class="thinking-field-content">78% of hosts cited messaging fatigue and fear of complex manual dynamic pricing setup.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Key Behavioral Findings</span>
                      <span class="thinking-field-content">Guests who receive a response within 5 minutes are 3.4x more likely to confirm a booking.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Journey Bottleneck Identified</span>
                      <span class="thinking-field-content" style="color:var(--warning); font-weight:600;">Manual multi-OTA calendar updates causing double-booking cancellations.</span>
                    </div>
                  </div>
                </div>

                <!-- Card 3: Product Decisions & Trade-offs -->
                <div class="thinking-card" style="border-color:var(--border-highlight);">
                  <div class="thinking-card-header">
                    <div class="thinking-card-icon" style="background:rgba(229,57,53,0.18); color:#EF4444;">⚖️</div>
                    <div class="thinking-card-title" style="color:var(--text-main);">⚖️ Product Strategy & Solution</div>
                  </div>
                  <div class="thinking-card-body">
                    <div class="thinking-field">
                      <span class="thinking-field-label">Alternative Solutions Rejected</span>
                      <span class="thinking-field-content">Rule-based static auto-responders (robotic & incapable of custom guest Q&A).</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Technical & Business Constraints</span>
                      <span class="thinking-field-content">Real-time calendar lock APIs and strict host review moderation compliance.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Prioritization & MVP Cutoff</span>
                      <span class="thinking-field-content" style="color:var(--secondary); font-weight:600;">Prioritized AI Guest Auto-Responder + One-Click Dynamic Pricing Engine for MVP v1.0.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Risk Analysis & Guardrails</span>
                      <span class="thinking-field-content">Host override controls for automated price discounts to prevent revenue loss.</span>
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
                      <span class="thinking-field-content">HostAssist AI Copilot with automated guest messaging, dynamic pricing engine, and review synthesis.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Why It Worked</span>
                      <span class="thinking-field-content">Eliminated response friction and optimized room rates dynamically based on local demand surges.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Quantified Business Metrics</span>
                      <span class="thinking-field-content" style="color:var(--success); font-weight:700;">98% faster response (4.2h &rarr; 3.2 min), +21.4% RevPAR revenue lift, 94.8% CSAT rating.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Future Product Roadmap</span>
                      <span class="thinking-field-content">AI smart lock integration & automated guest identity verification (KYC).</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class="pm-card-actions">
              <a href="hostassist.html" class="btn btn-primary" style="background:linear-gradient(135deg, #E53935, #F59E0B); color:white; font-weight:800; padding:0.85rem 1.65rem; font-size:0.95rem; text-decoration:none;">
                Explore Complete Case Study &rarr;
              </a>
            </div>
          </div>
        </div>
`;

if (!indexContent.includes('hostassist.html')) {
  // Update Tab count to 4 in Independent PM Case Studies
  indexContent = indexContent.replace(
    '💡 Independent PM Case Studies (3)',
    '💡 Independent PM Case Studies (4)'
  );
  indexContent = indexContent.replace(
    '(3 Self-Initiated Projects)',
    '(4 Self-Initiated Projects)'
  );

  // Insert hostassistCardHtml right after snapmint project card inside group-case-studies
  const snapmintPos = indexContent.indexOf('href="snapmint.html"');
  if (snapmintPos !== -1) {
    const cardEndPos = indexContent.indexOf('</div>\n        </div>', snapmintPos);
    if (cardEndPos !== -1) {
      const pos = cardEndPos + 16;
      indexContent = indexContent.substring(0, pos) + '\n\n' + hostassistCardHtml + indexContent.substring(pos);
      fs.writeFileSync(indexFile, indexContent, 'utf8');
      console.log('Injected HostAssist AI into Category 2 in index.html!');
    }
  }
}

console.log('Complete HostAssist AI case study integration finished!');
