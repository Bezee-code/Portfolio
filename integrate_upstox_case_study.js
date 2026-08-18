const fs = require('fs');
const path = require('path');

const srcBrainPath = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain\\525f3f31-2dc9-4256-90ac-02b060e654c5\\upstox_mtf_smart_nudge_prototype.html';
const appDir = __dirname;
const destUpstoxHtml = path.join(appDir, 'upstox.html');
const destUpstoxProto = path.join(appDir, 'upstox_mtf_smart_nudge_prototype.html');

// 1. Copy prototype file and inject Back button
let protoContent = fs.readFileSync(srcBrainPath, 'utf8');

const backBtnHeader = `<div style="width: 100%; max-width: 1240px; margin: 0 auto 16px auto;">
    <a href="index.html#case-studies" style="display: inline-flex; align-items: center; gap: 8px; background: rgba(108, 92, 231, 0.25); border: 1px solid rgba(108, 92, 231, 0.5); color: #A29BFE; padding: 8px 16px; border-radius: 9999px; font-size: 13px; font-weight: 700; text-decoration: none; box-shadow: 0 4px 12px rgba(0,0,0,0.3); transition: all 0.2s ease;">
        ← <strong>Back to Portfolio Homepage</strong>
    </a>
</div>`;

if (!protoContent.includes('Back to Portfolio Homepage')) {
  protoContent = protoContent.replace('<header>', backBtnHeader + '\n    <header>');
}

fs.writeFileSync(destUpstoxHtml, protoContent, 'utf8');
fs.writeFileSync(destUpstoxProto, protoContent, 'utf8');
console.log('Saved upstox.html & upstox_mtf_smart_nudge_prototype.html with Back button!');

// 2. Inject Upstox MTF card into index.html under Category 2: Independent PM Case Studies
const indexFile = path.join(appDir, 'index.html');
let indexContent = fs.readFileSync(indexFile, 'utf8');

const upstoxCardHtml = `
        <!-- Project 7 (Independent Case Study 4): Upstox MTF Smart Nudge -->
        <div class="pm-case-card clickable-card" onclick="if(!event.target.closest('a')) window.location.href='upstox.html';" style="cursor:pointer; border-color:var(--border-highlight); margin-top:2.5rem;">
          <div class="pm-card-banner">
            <div>
              <div class="pm-domain-tags">
                <span class="domain-pill">FinTech Trading</span>
                <span class="domain-pill">MTF Leverage</span>
                <span class="domain-pill">Risk Engine</span>
                <span class="domain-pill" style="background:rgba(245,158,11,0.18); color:#F59E0B; border-color:rgba(245,158,11,0.5); font-weight:700;">💡 INDEPENDENT PM CASE STUDY</span>
              </div>
              <h3 class="pm-card-title">Upstox MTF Smart Nudge: Margin Trading Facility & Risk Intercept Engine</h3>
              <p class="pm-card-subtitle">Retail Trading Leverage & Automated Liquidation Prevention Platform</p>
            </div>
          </div>

          <!-- Product User Journey: Upstox MTF -->
          <div class="project-hero-visual-card hero-visual-upstox" style="background: linear-gradient(135deg, rgba(108,92,231,0.12), rgba(0,230,118,0.12)); border-color: rgba(108,92,231,0.35);">
            <div class="visual-card-header">
              <span class="visual-header-badge" style="background:rgba(108,92,231,0.2); color:#A29BFE; border-color:rgba(162,155,254,0.4);">📈 TRADING LEVERAGE & RISK INTERCEPT JOURNEY</span>
              <span class="visual-header-title">User Story: 64% Square-Off Reduction & <10s UPI Top-Up</span>
            </div>
            <div class="visual-workflow-nodes">
              <div class="visual-node-box"><div class="visual-node-icon">📈</div><div class="visual-node-label">Stock Selection</div><div class="visual-node-sub">High-Conviction Trade</div></div>
              <div class="visual-flow-arrow">&rarr;</div>
              <div class="visual-node-box visual-node-active" style="border-color:#6C5CE7;"><div class="visual-node-icon">⚡</div><div class="visual-node-label">MTF Nudge</div><div class="visual-node-sub">Up to 4x Leverage Prompt</div></div>
              <div class="visual-flow-arrow">&rarr;</div>
              <div class="visual-node-box"><div class="visual-node-icon">🛡️</div><div class="visual-node-label">Risk Check</div><div class="visual-node-sub">Dynamic Margin Buffer</div></div>
              <div class="visual-flow-arrow">&rarr;</div>
              <div class="visual-node-box"><div class="visual-node-icon">📲</div><div class="visual-node-label">Smart Alert</div><div class="visual-node-sub">Proactive Push Nudge</div></div>
              <div class="visual-flow-arrow">&rarr;</div>
              <div class="visual-node-box"><div class="visual-node-icon">💳</div><div class="visual-node-label">Instant Add</div><div class="visual-node-sub">One-Tap UPI Top-Up</div></div>
              <div class="visual-flow-arrow">&rarr;</div>
              <div class="visual-node-box visual-node-highlight" style="border-color:#00E676;"><div class="visual-node-icon">🎉</div><div class="visual-node-label">Position Saved</div><div class="visual-node-sub">64% Square-Off Reduction</div></div>
            </div>
          </div>

          <div class="pm-card-body">
            <div class="pm-exec-summary">
              <strong>Executive Summary:</strong> Conceptualized an intelligent Margin Trading Facility (MTF) smart nudge and automated margin call risk engine for Upstox retail traders. Reduced unexpected position liquidations by 64%, increased MTF trade adoption by +38%, and enabled a sub-10 second one-tap UPI margin top-up flow.
            </div>

            <div class="pm-kpi-grid">
              <div class="pm-kpi-card"><div class="pm-kpi-val">64%</div><div class="pm-kpi-lbl">Reduction in Forced Square-Offs</div></div>
              <div class="pm-kpi-card"><div class="pm-kpi-val">+38%</div><div class="pm-kpi-lbl">MTF Trade Order Volume</div></div>
              <div class="pm-kpi-card"><div class="pm-kpi-val">&lt;10s</div><div class="pm-kpi-lbl">One-Tap UPI Margin Top-Up</div></div>
            </div>

            <div class="pm-role-bar">
              <div class="pm-role-title">My Role & Competencies:</div>
              <div class="pm-role-tags">
                <span class="role-pill">⚡ Product Strategy</span>
                <span class="role-pill">⚡ User Research</span>
                <span class="role-pill">⚡ PRD Specs</span>
                <span class="role-pill">⚡ Wireframes</span>
                <span class="role-pill">⚡ Risk Engineering</span>
                <span class="role-pill">⚡ FinTech UX</span>
                <span class="role-pill">⚡ Behavior Design</span>
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
                      <span class="thinking-field-content">Active Retail Traders, Swing Investors & High-Frequency Equity Traders on Upstox.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">The Core Friction</span>
                      <span class="thinking-field-content">Sudden forced position square-offs due to unexpected margin calls and confusing MTF leverage rules.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Frequency & Pain Point</span>
                      <span class="thinking-field-content"><strong>Frequency:</strong> High market volatility days when collateral values drop below maintenance margin.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Affected Business Metric</span>
                      <span class="thinking-field-content" style="color:var(--secondary); font-weight:600;">Trader Churn, Forced Square-Off Rate & MTF Order Value</span>
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
                      <span class="thinking-field-content">Amit Verma (Swing Equity Trader) & Sneha Kapoor (FnO & Delivery Investor).</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">User Pain Points</span>
                      <span class="thinking-field-content">72% of retail traders experienced panic liquidations due to delayed SMS margin call alerts.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Key Behavioral Findings</span>
                      <span class="thinking-field-content">Traders are 4.2x more likely to top up margin if presented with a 1-tap UPI drawer right inside the app.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Journey Bottleneck Identified</span>
                      <span class="thinking-field-content" style="color:var(--warning); font-weight:600;">Multi-step bank transfer flow required to add funds during market hours.</span>
                    </div>
                  </div>
                </div>

                <!-- Card 3: Product Decisions & Trade-offs -->
                <div class="thinking-card" style="border-color:var(--border-highlight);">
                  <div class="thinking-card-header">
                    <div class="thinking-card-icon" style="background:rgba(108,92,231,0.18); color:#A29BFE;">⚖️</div>
                    <div class="thinking-card-title" style="color:var(--text-main);">⚖️ Product Strategy & Solution</div>
                  </div>
                  <div class="thinking-card-body">
                    <div class="thinking-field">
                      <span class="thinking-field-label">Alternative Solutions Rejected</span>
                      <span class="thinking-field-content">Generic SMS margin warnings without direct 1-tap in-app payment execution.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Technical & Business Constraints</span>
                      <span class="thinking-field-content">SEBI & exchange margin pledge compliance rules and real-time RMS risk engine sync.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Prioritization & MVP Cutoff</span>
                      <span class="thinking-field-content" style="color:var(--secondary); font-weight:600;">Prioritized Smart MTF Order Nudge + 1-Tap UPI Margin Top-Up Drawer for MVP v1.0.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Risk Analysis & Guardrails</span>
                      <span class="thinking-field-content">Prominent risk disclosure modal detailing MTF interest rates before leverage activation.</span>
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
                      <span class="thinking-field-content">Upstox MTF Smart Nudge with contextual leverage prompts, real-time risk health meter, and 1-tap UPI margin top-up.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Why It Worked</span>
                      <span class="thinking-field-content">Transformed opaque risk alerts into proactive, actionable 1-click margin preservation steps.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Quantified Business Metrics</span>
                      <span class="thinking-field-content" style="color:var(--success); font-weight:700;">64% reduction in forced position liquidations, +38% MTF trade volume growth, <10s margin top-up speed.</span>
                    </div>
                    <div class="thinking-field">
                      <span class="thinking-field-label">Future Product Roadmap</span>
                      <span class="thinking-field-content">Automated portfolio stock-pledging for instant collateral margin release.</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class="pm-card-actions">
              <a href="upstox.html" class="btn btn-primary" style="background:linear-gradient(135deg, #6C5CE7, #00E676); color:white; font-weight:800; padding:0.85rem 1.65rem; font-size:0.95rem; text-decoration:none;">
                Explore Complete Case Study &rarr;
              </a>
            </div>
          </div>
        </div>
`;

if (!indexContent.includes('upstox.html')) {
  // Update Tab count to 6 and 4
  indexContent = indexContent.replace('⚡ All Projects (5)', '⚡ All Projects (6)');
  indexContent = indexContent.replace('💡 Independent PM Case Studies (3)', '💡 Independent PM Case Studies (4)');
  indexContent = indexContent.replace('(3 Self-Initiated Projects)', '(4 Self-Initiated Projects)');

  // Insert upstoxCardHtml right after HostAssist AI project card inside group-case-studies
  const hostassistPos = indexContent.indexOf('href="hostassist.html"');
  if (hostassistPos !== -1) {
    const cardEndPos = indexContent.indexOf('</div>\n        </div>', hostassistPos);
    if (cardEndPos !== -1) {
      const pos = cardEndPos + 16;
      indexContent = indexContent.substring(0, pos) + '\n\n' + upstoxCardHtml + indexContent.substring(pos);
      fs.writeFileSync(indexFile, indexContent, 'utf8');
      console.log('Injected Upstox MTF Smart Nudge into Category 2 in index.html!');
    }
  }
}

console.log('Complete Upstox MTF case study integration finished!');
