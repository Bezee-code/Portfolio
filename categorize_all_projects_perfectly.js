const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
const cssFile = path.join(__dirname, 'css', 'style.css');

let indexContent = fs.readFileSync(indexFile, 'utf8');

// 1. New Section Header with Interactive Filter Tabs and Category Subheaders
const categorizedSectionHeader = `
    <!-- Case Studies Section with Clear Enterprise vs. Independent Categorization -->
    <section id="case-studies" style="scroll-margin-top: 100px; padding-top: 3.5rem;">
      
      <!-- Main Section Header -->
      <div class="section-header" style="margin-bottom: 2rem;">
        <div>
          <div class="badge-pill" style="margin-bottom: 0.75rem; background: rgba(99, 102, 241, 0.12); border-color: rgba(99, 102, 241, 0.35); color: #818cf8;">
            <span class="badge-dot" style="background: #818cf8;"></span>
            <span>PRODUCT PORTFOLIO & WORK CATEGORIES</span>
          </div>
          <h2 class="section-title" style="font-size: 2.3rem; margin-bottom: 0.5rem;">Product Management Portfolio (5 Projects)</h2>
          <p class="section-subtitle" style="font-size: 1.025rem; max-width: 860px; color: var(--text-muted);">
            Categorized into <strong>Enterprise Organizational Products</strong> (delivered within corporate roles) and <strong>Independent PM Strategy Case Studies</strong> (self-initiated product teardowns & feature specs).
          </p>
        </div>
      </div>

      <!-- Interactive Category Filter Tabs -->
      <div class="project-category-tabs" style="display: flex; gap: 0.85rem; margin-bottom: 2.75rem; flex-wrap: wrap;">
        <button onclick="filterProjects('all')" id="tab-filter-all" class="category-tab-btn active">
          ⚡ All Projects (5)
        </button>
        <button onclick="filterProjects('enterprise')" id="tab-filter-enterprise" class="category-tab-btn">
          🏢 Enterprise & Corporate Work (2)
        </button>
        <button onclick="filterProjects('case-studies')" id="tab-filter-case-studies" class="category-tab-btn">
          💡 Independent PM Case Studies (3)
        </button>
      </div>

      <!-- Category Group 1: Enterprise & Organizational Work -->
      <div class="project-category-group" id="group-enterprise" style="margin-bottom: 3.5rem;">
        <div class="category-group-header" style="background: linear-gradient(90deg, rgba(99,102,241,0.12), transparent); border-left: 4px solid #6366f1; padding: 1rem 1.25rem; border-radius: 0 12px 12px 0; margin-bottom: 2rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <h3 style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--text-main); margin: 0;">
                🏢 Enterprise & Organizational Work <span style="font-size: 0.9rem; font-weight: 600; color: #818cf8; margin-left: 0.5rem;">(2 Corporate Projects)</span>
              </h3>
              <p style="font-size: 0.875rem; color: var(--text-muted); margin: 0.25rem 0 0 0;">
                Real-world enterprise systems, B2B ERP integrations, and Healthcare AI products architected during organizational roles.
              </p>
            </div>
            <span style="background: rgba(99,102,241,0.2); border: 1px solid rgba(99,102,241,0.4); color: #818cf8; font-size: 0.75rem; font-weight: 700; padding: 0.3rem 0.75rem; border-radius: 9999px;">
              Live Organizational Systems
            </span>
          </div>
        </div>

        <div class="grid-cards">
`;

// Find where case studies start in index.html
const oldHeaderStart = indexContent.indexOf('<!-- Case Studies Section -->');
const fireflyCardStart = indexContent.indexOf('<!-- Project 1: Adobe Firefly -->');

if (oldHeaderStart !== -1 && fireflyCardStart !== -1) {
  // Extract Orient Electric and Healthcare AI cards
  const orientStart = indexContent.indexOf('<!-- Project 3: Orient Electric');
  const snapmintStart = indexContent.indexOf('<!-- Project 4: Snapmint');
  const hospitalStart = indexContent.indexOf('<!-- Project 5: Healthcare Agentic AI Suite');
  const sectionEnd = indexContent.indexOf('<!-- Beyond the Portfolio Section');

  const fireflyCard = indexContent.substring(fireflyCardStart, indexContent.indexOf('<!-- Project 2: Stanza Living'));
  const stanzaCard = indexContent.substring(indexContent.indexOf('<!-- Project 2: Stanza Living'), orientStart);
  const orientCard = indexContent.substring(orientStart, snapmintStart);
  const snapmintCard = indexContent.substring(snapmintStart, hospitalStart);
  const hospitalCard = indexContent.substring(hospitalStart, sectionEnd);

  // Add Category badges to Orient & Hospital cards
  const updatedOrientCard = orientCard.replace(
    '<span class="domain-pill">Supply Chain</span>',
    '<span class="domain-pill">Supply Chain</span>\n                <span class="domain-pill" style="background:rgba(99,102,241,0.2); color:#818CF8; border-color:rgba(99,102,241,0.5); font-weight:700;">🏢 CORPORATE ENTERPRISE WORK</span>'
  );

  const updatedHospitalCard = hospitalCard.replace(
    '<span class="domain-pill">ICU Decision Engine</span>',
    '<span class="domain-pill">ICU Decision Engine</span>\n                <span class="domain-pill" style="background:rgba(99,102,241,0.2); color:#818CF8; border-color:rgba(99,102,241,0.5); font-weight:700;">🏢 CORPORATE ENTERPRISE WORK</span>'
  );

  // Add Category badges to Firefly, Stanza, Snapmint cards
  const updatedFireflyCard = fireflyCard.replace(
    '<span class="domain-pill">Localization</span>',
    '<span class="domain-pill">Localization</span>\n                <span class="domain-pill" style="background:rgba(245,158,11,0.18); color:#F59E0B; border-color:rgba(245,158,11,0.5); font-weight:700;">💡 INDEPENDENT PM CASE STUDY</span>'
  );

  const updatedStanzaCard = stanzaCard.replace(
    '<span class="domain-pill">Ticket Automation</span>',
    '<span class="domain-pill">Ticket Automation</span>\n                <span class="domain-pill" style="background:rgba(245,158,11,0.18); color:#F59E0B; border-color:rgba(245,158,11,0.5); font-weight:700;">💡 INDEPENDENT PM CASE STUDY</span>'
  );

  const updatedSnapmintCard = snapmintCard.replace(
    '<span class="domain-pill">Payment UX</span>',
    '<span class="domain-pill">Payment UX</span>\n                <span class="domain-pill" style="background:rgba(245,158,11,0.18); color:#F59E0B; border-color:rgba(245,158,11,0.5); font-weight:700;">💡 INDEPENDENT PM CASE STUDY</span>'
  );

  const category2Header = `
        </div>
      </div>

      <!-- Category Group 2: Independent PM Strategy Case Studies -->
      <div class="project-category-group" id="group-case-studies" style="margin-bottom: 2rem;">
        <div class="category-group-header" style="background: linear-gradient(90deg, rgba(245,158,11,0.12), transparent); border-left: 4px solid #f59e0b; padding: 1rem 1.25rem; border-radius: 0 12px 12px 0; margin-bottom: 2rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <h3 style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--text-main); margin: 0;">
                💡 Independent PM Strategy Case Studies & Teardowns <span style="font-size: 0.9rem; font-weight: 600; color: #f59e0b; margin-left: 0.5rem;">(3 Self-Initiated Projects)</span>
              </h3>
              <p style="font-size: 0.875rem; color: var(--text-muted); margin: 0.25rem 0 0 0;">
                Self-initiated product teardowns, market opportunity analyses, PRD specs, and UX wireframes created independently outside organizational work.
              </p>
            </div>
            <span style="background: rgba(245,158,11,0.2); border: 1px solid rgba(245,158,11,0.4); color: #f59e0b; font-size: 0.75rem; font-weight: 700; padding: 0.3rem 0.75rem; border-radius: 9999px;">
              Self-Initiated Strategy Specs
            </span>
          </div>
        </div>

        <div class="grid-cards">
  `;

  const newSectionContent = categorizedSectionHeader +
    updatedOrientCard + '\n\n' +
    updatedHospitalCard + '\n' +
    category2Header +
    updatedFireflyCard + '\n\n' +
    updatedStanzaCard + '\n\n' +
    updatedSnapmintCard + '\n        </div>\n      </div>\n    </section>\n\n    ';

  indexContent = indexContent.substring(0, oldHeaderStart) + newSectionContent + indexContent.substring(sectionEnd);
  fs.writeFileSync(indexFile, indexContent, 'utf8');
  console.log('Successfully updated index.html with 2 project categories!');
}

// 2. Add JavaScript filter logic in js/app.js or inline in index.html
const filterJs = `
<script>
function filterProjects(category) {
  // Update Tab active state
  document.querySelectorAll('.category-tab-btn').forEach(btn => btn.classList.remove('active'));
  const activeTab = document.getElementById('tab-filter-' + category);
  if (activeTab) activeTab.classList.add('active');

  const groupEnterprise = document.getElementById('group-enterprise');
  const groupCaseStudies = document.getElementById('group-case-studies');

  if (category === 'all') {
    if (groupEnterprise) groupEnterprise.style.display = 'block';
    if (groupCaseStudies) groupCaseStudies.style.display = 'block';
  } else if (category === 'enterprise') {
    if (groupEnterprise) groupEnterprise.style.display = 'block';
    if (groupCaseStudies) groupCaseStudies.style.display = 'none';
  } else if (category === 'case-studies') {
    if (groupEnterprise) groupEnterprise.style.display = 'none';
    if (groupCaseStudies) groupCaseStudies.style.display = 'block';
  }
}
</script>
`;

if (!indexContent.includes('filterProjects(category)')) {
  indexContent = indexContent.replace('</body>', filterJs + '\n</body>');
  fs.writeFileSync(indexFile, indexContent, 'utf8');
  console.log('Appended filterProjects JS script to index.html!');
}

// 3. Add CSS for category tabs in css/style.css
let cssContent = fs.readFileSync(cssFile, 'utf8');

const categoryCss = `
/* ==========================================================================
   PROJECT CATEGORY TABS & GROUP STYLES
   ========================================================================== */
.category-tab-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0.65rem 1.35rem;
  border-radius: 9999px;
  cursor: pointer;
  transition: all var(--transition-fast);
  outline: none;
}

.category-tab-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-main);
  border-color: var(--border-highlight);
}

.category-tab-btn.active {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(56, 189, 248, 0.25));
  border-color: #6366f1;
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
}

/* Light Mode Overrides for Category Tabs */
[data-theme="light"] .category-tab-btn {
  background: #f1f5f9;
  border-color: #cbd5e1;
  color: #475569;
}

[data-theme="light"] .category-tab-btn:hover {
  background: #e2e8f0;
  color: #0f172a;
}

[data-theme="light"] .category-tab-btn.active {
  background: #6366f1;
  color: #ffffff;
  border-color: #4f46e5;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
}
`;

if (!cssContent.includes('PROJECT CATEGORY TABS & GROUP STYLES')) {
  cssContent += '\n' + categoryCss;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Appended category tab CSS to css/style.css!');
}

console.log('Successfully completed full project categorization!');
