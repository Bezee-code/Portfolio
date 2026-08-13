const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
const cssFile = path.join(__dirname, 'css', 'style.css');

// 1. Update index.html
let indexContent = fs.readFileSync(indexFile, 'utf8');

// Add Certifications link to top nav
if (!indexContent.includes('href="#certifications"')) {
  indexContent = indexContent.replace(
    '<a href="#beyond-portfolio" class="nav-link-item">Beyond Portfolio</a>',
    '<a href="#beyond-portfolio" class="nav-link-item">Beyond Portfolio</a>\n        <a href="#certifications" class="nav-link-item">Certifications</a>'
  );
}

const certificationsSectionHtml = `
    <!-- Certifications & Verified Credentials Section -->
    <section id="certifications" style="scroll-margin-top: 100px; padding-top: 3.5rem; padding-bottom: 2rem;">
      <div class="section-header" style="margin-bottom: 2.25rem;">
        <div>
          <div class="badge-pill" style="margin-bottom: 0.75rem; background: rgba(16, 185, 129, 0.12); border-color: rgba(16, 185, 129, 0.35); color: #10b981;">
            <span class="badge-dot" style="background: #10b981;"></span>
            <span>VERIFIED PROFESSIONAL CREDENTIALS</span>
          </div>
          <h2 class="section-title" style="font-size: 2.2rem; margin-bottom: 0.5rem;">Professional Certifications</h2>
          <p class="section-subtitle" style="font-size: 1rem; max-width: 820px; color: var(--text-muted);">
            Industry-recognized certifications in Agile Project Management, Enterprise CRM Operations, and Agentic AI Architecture.
          </p>
        </div>
      </div>

      <div class="certifications-grid">
        
        <!-- Certification 1: Google Project Management -->
        <div class="cert-card">
          <div>
            <div class="cert-card-header">
              <div class="cert-logo-box" style="background: rgba(66, 133, 244, 0.12); border-color: rgba(66, 133, 244, 0.35); color: #4285F4;">
                <span style="font-weight: 800; font-size: 1.4rem;">G</span>
              </div>
              <div>
                <span class="cert-issuer-tag">Google &bull; Coursera</span>
                <h3 class="cert-title">Google Project Management Professional Certificate</h3>
              </div>
            </div>
            <div class="cert-body">
              <p class="cert-desc">
                Completed 7 intensive courses covering Agile & Scrum methodologies, sprint execution, project initiation, risk management, and AI-accelerated job search strategies.
              </p>
              <div class="cert-highlights-tags">
                <span class="cert-tag">Agile & Scrum</span>
                <span class="cert-tag">Sprint Planning</span>
                <span class="cert-tag">Risk & Execution</span>
                <span class="cert-tag">AI Workflows</span>
              </div>
            </div>
          </div>
          <div class="cert-footer">
            <span class="cert-date">Issued May 2026 &bull; 7-Course Series</span>
            <a href="https://coursera.org/verify/professional-cert/11VKN3SBRHE9" target="_blank" rel="noopener noreferrer" class="cert-verify-link">
              Verify Certificate ↗
            </a>
          </div>
        </div>

        <!-- Certification 2: Salesforce Sales Operations -->
        <div class="cert-card">
          <div>
            <div class="cert-card-header">
              <div class="cert-logo-box" style="background: rgba(0, 161, 224, 0.12); border-color: rgba(0, 161, 224, 0.35); color: #00A1E0;">
                ☁️
              </div>
              <div>
                <span class="cert-issuer-tag">Salesforce &bull; Pathstream</span>
                <h3 class="cert-title">Salesforce Sales Operations Professional Certificate</h3>
              </div>
            </div>
            <div class="cert-body">
              <p class="cert-desc">
                Specialized in CRM architecture, lead pipeline management, sales opportunity tracking, and building executive dashboards across Salesforce Sales Cloud & Service Cloud.
              </p>
              <div class="cert-highlights-tags">
                <span class="cert-tag">Salesforce CRM</span>
                <span class="cert-tag">Lead Pipeline</span>
                <span class="cert-tag">Service Cloud</span>
                <span class="cert-tag">Analytics Dashboards</span>
              </div>
            </div>
          </div>
          <div class="cert-footer">
            <span class="cert-date">Issued Apr 2026 &bull; 4-Course Series</span>
            <a href="https://coursera.org/verify/professional-cert/U1B8JYH2H3GB" target="_blank" rel="noopener noreferrer" class="cert-verify-link">
              Verify Certificate ↗
            </a>
          </div>
        </div>

        <!-- Certification 3: ServiceNow Micro-Certification Agentic AI Executive -->
        <div class="cert-card">
          <div>
            <div class="cert-card-header">
              <div class="cert-logo-box" style="background: rgba(13, 148, 136, 0.15); border-color: rgba(13, 148, 136, 0.4); color: #14B8A6;">
                🤖
              </div>
              <div>
                <span class="cert-issuer-tag">ServiceNow Executive</span>
                <h3 class="cert-title">Micro-Certification – Agentic AI Executive</h3>
              </div>
            </div>
            <div class="cert-body">
              <p class="cert-desc">
                Certified in enterprise Agentic AI architecture, autonomous multi-agent workflow orchestration, LLM guardrails, and executive AI strategy implementation.
              </p>
              <div class="cert-highlights-tags">
                <span class="cert-tag">Agentic AI</span>
                <span class="cert-tag">Workflow Orchestration</span>
                <span class="cert-tag">LLM Guardrails</span>
                <span class="cert-tag">Executive AI Strategy</span>
              </div>
            </div>
          </div>
          <div class="cert-footer">
            <span class="cert-date">Issued Oct 2025 &bull; Executive Credential</span>
            <span class="cert-verified-badge">✓ Verified License</span>
          </div>
        </div>

      </div>
    </section>
`;

if (!indexContent.includes('id="certifications"')) {
  const contactPos = indexContent.indexOf('<!-- Contact & Footer Callout -->');
  if (contactPos !== -1) {
    indexContent = indexContent.substring(0, contactPos) + certificationsSectionHtml + '\n\n    ' + indexContent.substring(contactPos);
    fs.writeFileSync(indexFile, indexContent, 'utf8');
    console.log('Injected #certifications section into index.html!');
  }
}

// 2. Update css/style.css
let cssContent = fs.readFileSync(cssFile, 'utf8');

const certCss = `
/* ==========================================================================
   CERTIFICATIONS & VERIFIED CREDENTIALS SECTION
   ========================================================================== */
.certifications-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 1024px) {
  .certifications-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .certifications-grid {
    grid-template-columns: 1fr;
  }
}

.cert-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 1.65rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: all var(--transition-normal);
}

.cert-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-highlight);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25), 0 0 30px var(--primary-glow);
}

.cert-card-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.15rem;
}

.cert-logo-box {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  flex-shrink: 0;
}

.cert-issuer-tag {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--secondary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.cert-title {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.3;
  margin-top: 0.25rem;
}

.cert-desc {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.cert-highlights-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 1.5rem;
}

.cert-tag {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  color: var(--text-main);
  font-size: 0.725rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
}

.cert-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  font-size: 0.775rem;
}

.cert-date {
  color: var(--text-dim);
  font-weight: 500;
}

.cert-verify-link {
  color: #10b981;
  font-weight: 700;
  text-decoration: none;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.35);
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  transition: all var(--transition-fast);
}

.cert-verify-link:hover {
  background: rgba(16, 185, 129, 0.25);
  color: #34d399;
}

.cert-verified-badge {
  color: #14b8a6;
  font-weight: 700;
  background: rgba(13, 148, 136, 0.15);
  border: 1px solid rgba(13, 148, 136, 0.35);
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
}

/* Light Mode Overrides for Certifications */
[data-theme="light"] .cert-card {
  background: #ffffff !important;
  border-color: #cbd5e1 !important;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05) !important;
}

[data-theme="light"] .cert-title {
  color: #0f172a !important;
}

[data-theme="light"] .cert-desc {
  color: #475569 !important;
}

[data-theme="light"] .cert-tag {
  background: #f1f5f9 !important;
  border-color: #e2e8f0 !important;
  color: #334155 !important;
}

[data-theme="light"] .cert-footer {
  border-top-color: #e2e8f0 !important;
}
`;

if (!cssContent.includes('CERTIFICATIONS & VERIFIED CREDENTIALS SECTION')) {
  cssContent += '\n' + certCss;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Appended certifications CSS to css/style.css!');
}

console.log('Done creating Certifications section!');
