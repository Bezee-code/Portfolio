const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
const cssFile = path.join(__dirname, 'css', 'style.css');

let indexContent = fs.readFileSync(indexFile, 'utf8');

const fourCertificationsHtml = `
      <div class="certifications-grid">
        
        <!-- Certification 1: IBM AI Product Manager (1st Position) -->
        <div class="cert-card" style="border-color: rgba(15, 98, 254, 0.4);">
          <div>
            <div class="cert-card-header">
              <div class="cert-logo-box" style="background: rgba(15, 98, 254, 0.15); border-color: rgba(15, 98, 254, 0.4); color: #0f62fe;">
                <span style="font-weight: 800; font-size: 1.1rem;">IBM</span>
              </div>
              <div>
                <span class="cert-issuer-tag" style="color: #0f62fe;">IBM &bull; Coursera &bull; SkillUp</span>
                <h3 class="cert-title">IBM AI Product Manager Professional Certificate</h3>
              </div>
            </div>
            <div class="cert-body">
              <p class="cert-desc">
                Completed 10 intensive courses in Generative AI, prompt engineering (Chain of Thought, DALL-E, ChatGPT), AI product strategy, foundation models, and building AI-powered products.
              </p>
              <div class="cert-highlights-tags">
                <span class="cert-tag" style="border-color: rgba(15, 98, 254, 0.3); background: rgba(15, 98, 254, 0.1);">AI Product Strategy</span>
                <span class="cert-tag">Generative AI</span>
                <span class="cert-tag">Prompt Engineering</span>
                <span class="cert-tag">Foundation Models</span>
              </div>
            </div>
          </div>
          <div class="cert-footer">
            <span class="cert-date">Issued Aug 2026 &bull; 10-Course Series</span>
            <a href="https://coursera.org/verify/professional-cert/YZJSW00XDLSH" target="_blank" rel="noopener noreferrer" class="cert-verify-link" style="color: #0f62fe; background: rgba(15, 98, 254, 0.12); border-color: rgba(15, 98, 254, 0.35);">
              Verify Certificate ↗
            </a>
          </div>
        </div>

        <!-- Certification 2: Google Project Management (2nd Position) -->
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

        <!-- Certification 3: Salesforce Sales Operations (3rd Position) -->
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

        <!-- Certification 4: ServiceNow Micro-Certification Agentic AI Executive (4th Position) -->
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
`;

// Replace <div class="certifications-grid">...</div> in index.html
const gridStart = indexContent.indexOf('<div class="certifications-grid">');
if (gridStart !== -1) {
  const gridEnd = indexContent.indexOf('</section>', gridStart);
  indexContent = indexContent.substring(0, gridStart) + fourCertificationsHtml + '\n    ' + indexContent.substring(gridEnd);
  fs.writeFileSync(indexFile, indexContent, 'utf8');
  console.log('Replaced certifications grid with 4 ordered certifications in index.html!');
}

// 2. Update css/style.css for 4-column grid layout
let cssContent = fs.readFileSync(cssFile, 'utf8');

if (cssContent.includes('grid-template-columns: repeat(3, 1fr);')) {
  cssContent = cssContent.replace(
    'grid-template-columns: repeat(3, 1fr);',
    'grid-template-columns: repeat(4, 1fr);'
  );
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Updated certifications grid to 4-column layout in style.css!');
}

console.log('Successfully completed 4-certification update!');
