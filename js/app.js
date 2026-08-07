/**
 * Main Application Logic for PM Portfolio Website
 * Featuring 2x2 Product Thinking Grid & Seamless Project Page Navigation (Vercel & Notion Spec)
 */

let portfolioData = null;

// Initialize app on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadPortfolioData();
  renderProfile();
  renderSkills();
  renderCaseStudies();
  initFloatingNav();
  setupEventListeners();
});

// Theme Mode Logic (Delegated to global ThemeManager in js/theme.js)
function initTheme() {
  if (window.ThemeManager) {
    const current = window.ThemeManager.getTheme();
    window.ThemeManager.updateAllUI(current);
  }
}

function toggleTheme() {
  if (window.ThemeManager) {
    window.ThemeManager.toggleTheme();
  }
}

function updateThemeToggleUI(theme) {
  if (window.ThemeManager) {
    window.ThemeManager.updateAllUI(theme);
  }
}

// Load stored data or default
function loadPortfolioData() {
  const stored = localStorage.getItem('pm_portfolio_custom_data');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (parsed && parsed.caseStudies && Array.isArray(parsed.caseStudies) && parsed.caseStudies.length >= 4) {
        const hasAllGrids = parsed.caseStudies.every(cs => cs && cs.productThinking && cs.productThinking.problemCard);
        if (hasAllGrids) {
          portfolioData = parsed;
        } else {
          portfolioData = DEFAULT_PORTFOLIO_DATA;
          localStorage.removeItem('pm_portfolio_custom_data');
        }
      } else {
        portfolioData = DEFAULT_PORTFOLIO_DATA;
      }
    } catch(e) {
      portfolioData = DEFAULT_PORTFOLIO_DATA;
    }
  } else {
    portfolioData = DEFAULT_PORTFOLIO_DATA;
  }

  if (!portfolioData || !portfolioData.caseStudies || portfolioData.caseStudies.length < 4) {
    portfolioData = DEFAULT_PORTFOLIO_DATA;
  }
}

// Save portfolio data to localStorage
function savePortfolioData() {
  localStorage.setItem('pm_portfolio_custom_data', JSON.stringify(portfolioData));
}

// Render Profile Header & Hero
function renderProfile() {
  const p = portfolioData.profile;
  document.querySelectorAll('.user-name').forEach(el => el.textContent = p.name);
  document.querySelectorAll('.user-role').forEach(el => el.textContent = p.role);
  
  const heroTagline = document.getElementById('heroTagline');
  if (heroTagline) heroTagline.textContent = p.tagline;

  const heroBio = document.getElementById('heroBio');
  if (heroBio) heroBio.textContent = p.bio;

  const emailLink = document.getElementById('emailLink');
  if (emailLink) emailLink.href = `mailto:${p.email}`;

  const linkedinLink = document.getElementById('linkedinLink');
  if (linkedinLink) {
    linkedinLink.href = p.linkedin;
    linkedinLink.target = "_blank";
  }

  const githubLink = document.getElementById('githubLink');
  if (githubLink) {
    githubLink.href = p.github;
    githubLink.target = "_blank";
  }

  // Render Transition Story
  const storyContainer = document.getElementById('transitionStoryList');
  if (storyContainer && p.transitionStory) {
    storyContainer.innerHTML = p.transitionStory.map(item => `
      <div class="highlight-item">
        <span class="highlight-icon">✨</span>
        <div>
          <strong style="color:var(--text-main); font-weight:600;">${item.priorRole} → ${item.pmSuperpower}:</strong>
          <span>${item.description}</span>
        </div>
      </div>
    `).join('');
  }
}

// Render Skills Matrix
function renderSkills() {
  const container = document.getElementById('skillsContainer');
  if (!container || !portfolioData.skills) return;

  container.innerHTML = portfolioData.skills.map(cat => `
    <div class="skill-category-card">
      <h3>${cat.category}</h3>
      <div class="skills-list">
        ${cat.items.map(s => `
          <div class="skill-bar-item">
            <div class="skill-bar-label">
              <span style="color:var(--text-main); font-weight:600;">${s.name}</span>
              <span style="color:var(--secondary); font-size:0.8rem; font-weight:700;">${s.level}%</span>
            </div>
            <div class="skill-bar-track">
              <div class="skill-bar-fill" style="width:${s.level}%;"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Render Case Studies with 2x2 Product Thinking Grid & Dedicated Page Navigation
function renderCaseStudies() {
  const grid = document.getElementById('caseStudiesGrid');
  if (!grid) return;

  let html = '';

  portfolioData.caseStudies.forEach(cs => {
    // Determine Domain Pills & Themes
    let domainPills = ['AI', 'SaaS', 'Enterprise'];
    let themeClass = 'journey-theme-pink-purple';
    let isFirefly = cs.id.includes('firefly');
    let isOrient = cs.id.includes('orient');
    let isSnapmint = cs.id.includes('snapmint');
    let isStanza = cs.id.includes('stanza');
    
    let pageUrl = isFirefly ? 'firefly.html' : (isOrient ? 'orient.html' : (isSnapmint ? 'snapmint.html' : (isStanza ? 'stanza.html' : null)));
    
    let buttonGradient = isOrient 
      ? 'linear-gradient(135deg, #dc2626, #0284c7)' 
      : (isSnapmint 
        ? 'linear-gradient(135deg, #0052FF, #00F0FF)' 
        : (isStanza 
          ? 'linear-gradient(135deg, #6366F1, #10B981)' 
          : 'linear-gradient(135deg, #FA26A0, #c084fc)'));

    if (isFirefly) {
      domainPills = ['Generative AI', 'Global SaaS', 'Localization'];
      themeClass = 'journey-theme-pink-purple';
    } else if (isStanza) {
      domainPills = ['AI Vision', 'PropTech', 'SLA Automation'];
      themeClass = 'journey-theme-green-blue';
    } else if (isOrient) {
      domainPills = ['Enterprise B2B', 'SAP ERP', 'Supply Chain'];
      themeClass = 'journey-theme-enterprise-blue';
    } else if (isSnapmint) {
      domainPills = ['FinTech', 'BNPL', 'UPI AutoMandate'];
      themeClass = 'journey-theme-fintech-blue';
    }

    // PM Role Tags
    const roleTags = ['Product Strategy', 'User Research', 'PRD Specs', 'Wireframes', 'Prioritization', 'Stakeholder Management', 'Launch', 'Analytics'];

    // Netlify Link Button if present
    const netlifyBtn = cs.netlifyUrl ? `
      <a href="${cs.netlifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background:linear-gradient(135deg, #10b981, #059669); color:black; font-weight:800; font-size:0.9rem;">
        🌐 Launch Live Netlify Prototype (fabulous-centaur) &rarr;
      </a>
    ` : '';

    // Render Unique Execution Journey Flow
    const journeyHtml = `
      <div class="execution-journey-wrapper ${themeClass}">
        <div class="journey-header-bar">
          <div class="journey-header-title">
            <span>🚀 Product Execution Journey & Lifecycle</span>
          </div>
        </div>

        <div class="journey-grid-container">
          ${cs.executionJourney.map((node, index) => `
            <div class="journey-node-card">
              <div class="journey-step-num">STAGE 0${node.step}</div>
              <div class="journey-node-icon-box">${node.icon}</div>
              <div class="journey-node-title">${node.title}</div>
              <div class="journey-node-sub">${node.subtitle}</div>
              ${index < cs.executionJourney.length - 1 ? `<div class="journey-arrow-divider">&rarr;</div>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Render 2x2 Product Thinking Grid (NO ACCORDION, ALWAYS VISIBLE)
    const pt = cs.productThinking;
    const thinkingGridHtml = `
      <div class="pm-thinking-grid-section">
        <div class="thinking-section-title">🧠 Product Thinking & Strategy Breakdown (Always Visible)</div>
        <div class="pm-thinking-grid">
          
          <!-- Card 1: Problem Statement -->
          <div class="thinking-card">
            <div class="thinking-card-header">
              <div class="thinking-card-icon">🎯</div>
              <div class="thinking-card-title">${pt.problemCard.title}</div>
            </div>
            <div class="thinking-card-body">
              <div class="thinking-field">
                <span class="thinking-field-label">Target User</span>
                <span class="thinking-field-content">${pt.problemCard.user}</span>
              </div>
              <div class="thinking-field">
                <span class="thinking-field-label">The Core Friction</span>
                <span class="thinking-field-content">${pt.problemCard.problem}</span>
              </div>
              <div class="thinking-field">
                <span class="thinking-field-label">Frequency & Pain Point</span>
                <span class="thinking-field-content"><strong>Frequency:</strong> ${pt.problemCard.frequency} &bull; ${pt.problemCard.pain}</span>
              </div>
              <div class="thinking-field">
                <span class="thinking-field-label">Affected Business Metric</span>
                <span class="thinking-field-content" style="color:var(--secondary); font-weight:600;">${pt.problemCard.metric}</span>
              </div>
            </div>
          </div>

          <!-- Card 2: User Research & Insights -->
          <div class="thinking-card">
            <div class="thinking-card-header">
              <div class="thinking-card-icon">👤</div>
              <div class="thinking-card-title">${pt.researchCard.title}</div>
            </div>
            <div class="thinking-card-body">
              <div class="thinking-field">
                <span class="thinking-field-label">Primary Personas Studied</span>
                <span class="thinking-field-content">${pt.researchCard.primaryUsers}</span>
              </div>
              <div class="thinking-field">
                <span class="thinking-field-label">User Pain Points</span>
                <span class="thinking-field-content">${pt.researchCard.painPoints}</span>
              </div>
              <div class="thinking-field">
                <span class="thinking-field-label">Key Behavioral Findings</span>
                <span class="thinking-field-content">${pt.researchCard.findings}</span>
              </div>
              <div class="thinking-field">
                <span class="thinking-field-label">Journey Bottleneck Identified</span>
                <span class="thinking-field-content" style="color:var(--warning); font-weight:600;">${pt.researchCard.bottlenecks}</span>
              </div>
            </div>
          </div>

          <!-- Card 3: Product Decisions & Trade-offs -->
          <div class="thinking-card" style="border-color:var(--border-highlight);">
            <div class="thinking-card-header">
              <div class="thinking-card-icon" style="background:rgba(236,72,153,0.15); color:var(--accent);">⚖️</div>
              <div class="thinking-card-title" style="color:var(--text-main);">${pt.decisionsCard.title}</div>
            </div>
            <div class="thinking-card-body">
              <div class="thinking-field">
                <span class="thinking-field-label">Alternative Solutions Rejected</span>
                <span class="thinking-field-content">${pt.decisionsCard.alternatives}</span>
              </div>
              <div class="thinking-field">
                <span class="thinking-field-label">Technical & Business Constraints</span>
                <span class="thinking-field-content">${pt.decisionsCard.constraints}</span>
              </div>
              <div class="thinking-field">
                <span class="thinking-field-label">Prioritization & MVP Cutoff</span>
                <span class="thinking-field-content" style="color:var(--secondary); font-weight:600;">${pt.decisionsCard.prioritization}</span>
              </div>
              <div class="thinking-field">
                <span class="thinking-field-label">Risk Analysis & Guardrails</span>
                <span class="thinking-field-content">${pt.decisionsCard.risk}</span>
              </div>
            </div>
          </div>

          <!-- Card 4: Final Solution & Impact -->
          <div class="thinking-card">
            <div class="thinking-card-header">
              <div class="thinking-card-icon" style="background:rgba(16,185,129,0.15); color:var(--success);">🚀</div>
              <div class="thinking-card-title">${pt.solutionCard.title}</div>
            </div>
            <div class="thinking-card-body">
              <div class="thinking-field">
                <span class="thinking-field-label">Chosen Product Solution</span>
                <span class="thinking-field-content">${pt.solutionCard.chosenSolution}</span>
              </div>
              <div class="thinking-field">
                <span class="thinking-field-label">Why It Worked</span>
                <span class="thinking-field-content">${pt.solutionCard.whyItWorked}</span>
              </div>
              <div class="thinking-field">
                <span class="thinking-field-label">Quantified Business Metrics</span>
                <span class="thinking-field-content" style="color:var(--success); font-weight:700;">${pt.solutionCard.businessMetrics}</span>
              </div>
              <div class="thinking-field">
                <span class="thinking-field-label">Future Product Roadmap</span>
                <span class="thinking-field-content">${pt.solutionCard.futureRoadmap}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;

    // Action CTA configuration
    const ctaButton = pageUrl ? `
      <a href="${pageUrl}" class="btn btn-primary" style="background:${buttonGradient}; color:white; font-weight:800; padding:0.85rem 1.65rem; font-size:0.95rem; text-decoration:none;">
        Explore Complete Case Study &rarr;
      </a>
    ` : `
      <button class="btn btn-primary open-case-study-btn" data-id="${cs.id}" style="padding:0.85rem 1.65rem; font-size:0.95rem; font-weight:700;">
        Read Full Case Study & PRD &rarr;
      </button>
    `;

    html += `
      <div class="pm-case-card ${pageUrl ? 'clickable-card' : ''}" ${pageUrl ? `onclick="if(!event.target.closest('a')) window.location.href='${pageUrl}';"` : ''} style="${pageUrl ? 'cursor:pointer; border-color:var(--border-highlight);' : ''}">
        <!-- 1. Hero Banner -->
        <div class="pm-card-banner">
          <div>
            <div class="pm-domain-tags">
              ${domainPills.map(d => `<span class="domain-pill">${d}</span>`).join('')}
              <span class="domain-pill" style="background:rgba(16,185,129,0.15); color:var(--success); border-color:var(--success);">● ${cs.status}</span>
            </div>
            <h3 class="pm-card-title">${cs.title}</h3>
            <p class="pm-card-subtitle">${cs.category}</p>
          </div>
        </div>

        <!-- 2. Hero Visual Workflow Diagram (Placed immediately below banner & above Executive Summary) -->
        ${getProjectHeroVisual(cs.id)}

        <!-- Card Body -->
        <div class="pm-card-body">
          <!-- 2. Executive Summary -->
          <div class="pm-exec-summary">
            <strong>Executive Summary:</strong> ${cs.summary}
          </div>

          <!-- 3. Quick Metrics Bar (KPI Cards) -->
          <div class="pm-kpi-grid">
            ${cs.impactBadges.map(b => `
              <div class="pm-kpi-card">
                <div class="pm-kpi-val">${b.value}</div>
                <div class="pm-kpi-lbl">${b.label}</div>
              </div>
            `).join('')}
          </div>

          <!-- 4. My Role Capabilities -->
          <div class="pm-role-bar">
            <div class="pm-role-title">My Role & Competencies:</div>
            <div class="pm-role-tags">
              ${roleTags.map(r => `<span class="role-pill">⚡ ${r}</span>`).join('')}
            </div>
          </div>

          <!-- 5. UNIQUE PRODUCT EXECUTION JOURNEY -->
          ${journeyHtml}

          <!-- 6. 2x2 PRODUCT THINKING GRID -->
          ${thinkingGridHtml}

          <!-- 7. Action Footer CTAs -->
          <div class="pm-card-actions">
            ${ctaButton}
            ${netlifyBtn}
          </div>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;

  // Modal Triggers for Full PRD Deep-Dive (if any fallback remains)
  grid.querySelectorAll('.open-case-study-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      openCaseStudyModal(id);
    });
  });
}

// Open Case Study Modal
function openCaseStudyModal(caseStudyId) {
  const cs = portfolioData.caseStudies.find(item => item.id === caseStudyId);
  if (!cs) return;

  const modal = document.getElementById('caseStudyModal');
  if (!modal) return;

  document.getElementById('modalCaseTitle').textContent = cs.title;
  document.getElementById('modalCaseCategory').textContent = `${cs.category} • ${cs.status}`;

  // Populate Overview Pane
  const netlifyCallout = cs.netlifyUrl ? `
    <div style="background:rgba(16, 185, 129, 0.15); border:1px solid #10b981; padding:1.25rem; border-radius:12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
      <div>
        <h4 style="color:#10b981; font-size:1.05rem;">🌐 Live Deployed Prototype Available</h4>
        <p style="color:var(--text-muted); font-size:0.85rem;">Inspect the standalone interactive app hosted on Netlify.</p>
      </div>
      <a href="${cs.netlifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="background:#10b981; color:black; font-weight:800;">
        Launch fabulous-centaur-ae200d.netlify.app ↗
      </a>
    </div>
  ` : '';

  document.getElementById('overviewPane').innerHTML = `
    <div style="display:flex; flex-direction:column; gap:1.5rem;">
      ${netlifyCallout}

      <div style="background:rgba(99, 102, 241, 0.08); border:1px solid var(--border-highlight); padding:1.25rem; border-radius:12px;">
        <h3 style="color:var(--primary); font-family:var(--font-heading); margin-bottom:0.5rem;">Executive Summary</h3>
        <p style="color:var(--text-main); font-size:0.95rem; line-height:1.6;">${cs.summary}</p>
      </div>

      <div>
        <h3 style="color:var(--secondary); font-family:var(--font-heading); margin-bottom:0.5rem;">Problem Statement</h3>
        <p style="color:var(--text-muted); line-height:1.7;">${cs.overview.problemStatement}</p>
      </div>

      <div>
        <h3 style="color:var(--secondary); font-family:var(--font-heading); margin-bottom:0.75rem;">Target User Personas</h3>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1rem;">
          ${cs.overview.personas.map(p => `
            <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:12px; padding:1.25rem;">
              <h4 style="color:var(--text-main); font-size:1.1rem; margin-bottom:0.25rem;">${p.name}</h4>
              <p style="color:var(--secondary); font-size:0.8rem; font-weight:600; margin-bottom:0.75rem;">${p.role}</p>
              <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem;"><strong>Pain Point:</strong> ${p.painPoint}</p>
              <p style="font-size:0.85rem; color:var(--success);"><strong>Core Goal:</strong> ${p.goal}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Populate PRD Pane
  const prd = cs.prd;
  document.getElementById('prdPane').innerHTML = `
    <div class="prd-document">
      <div class="prd-header-block">
        <div class="prd-meta-item"><label>PRD TITLE</label><span>${prd.title}</span></div>
        <div class="prd-meta-item"><label>VERSION</label><span>${prd.version}</span></div>
        <div class="prd-meta-item"><label>AUTHOR</label><span>${prd.author}</span></div>
      </div>

      <div class="prd-section">
        <h3>🎯 Product Objective</h3>
        <p style="color:var(--text-main); font-weight:500; font-size:1rem;">${prd.objective}</p>
      </div>

      <div class="prd-section">
        <h3>📋 User Stories & Technical Guardrails</h3>
        ${prd.userStories.map(us => `
          <div class="user-story-card">
            <div class="user-story-title">[${us.id}] ${us.title}</div>
            <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:0.75rem;">
              <em>As a ${us.asA}, I want to ${us.iWantTo}, so that ${us.soThat}.</em>
            </p>
            <strong style="font-size:0.8rem; color:var(--secondary); text-transform:uppercase;">Acceptance Criteria:</strong>
            <ul class="ac-list" style="margin-top:0.35rem;">
              ${us.acceptanceCriteria.map(ac => `<li>${ac}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <div class="prd-section">
        <h3>🚫 Out of Scope</h3>
        <ul class="ac-list">
          ${prd.outOfScope.map(item => `<li style="color:var(--text-dim);">${item}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  // Setup Wireframe Prototype Viewer
  setupWireframeViewer(cs.wireframeFlow);

  // Render Metrics Charts
  renderRetentionChart('retentionChartContainer', cs.metrics.retentionChart);
  renderSlaChart('slaChartContainer', cs.metrics.slaChart);

  // Show Modal
  modal.classList.add('active');
}

// Customizer Modal Logic
function openEditorModal() {
  const modal = document.getElementById('editorModal');
  if (!modal) return;

  const p = portfolioData.profile;
  document.getElementById('editName').value = p.name;
  document.getElementById('editRole').value = p.role;
  document.getElementById('editTagline').value = p.tagline;
  document.getElementById('editBio').value = p.bio;
  document.getElementById('editEmail').value = p.email;
  document.getElementById('editPhone').value = p.phone || "";
  document.getElementById('editLinkedin').value = p.linkedin || "";

  modal.classList.add('active');
}

// Event Listeners Setup
function setupEventListeners() {
  // Theme Toggle Buttons
  document.querySelectorAll('.theme-toggle-btn, #floatingThemePill').forEach(btn => {
    btn.addEventListener('click', () => {
      toggleTheme();
    });
  });

  // Modal Close buttons
  document.querySelectorAll('.close-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    });
  });

  // Tab switching in Case Study modal
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetPane = btn.getAttribute('data-tab');
      document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      
      btn.classList.add('active');
      const pane = document.getElementById(targetPane);
      if (pane) pane.classList.add('active');
    });
  });

  // Customizer Form Submit
  const editorForm = document.getElementById('editorForm');
  if (editorForm) {
    editorForm.addEventListener('submit', (e) => {
      e.preventDefault();
      portfolioData.profile.name = document.getElementById('editName').value;
      portfolioData.profile.role = document.getElementById('editRole').value;
      portfolioData.profile.tagline = document.getElementById('editTagline').value;
      portfolioData.profile.bio = document.getElementById('editBio').value;
      portfolioData.profile.email = document.getElementById('editEmail').value;
      portfolioData.profile.phone = document.getElementById('editPhone').value;
      portfolioData.profile.linkedin = document.getElementById('editLinkedin').value;

      savePortfolioData();
      renderProfile();
      document.getElementById('editorModal').classList.remove('active');
      alert('Portfolio details updated!');
    });
  }

  // Export JSON Button
  const exportBtn = document.getElementById('exportJsonBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const jsonStr = JSON.stringify(portfolioData, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'pm_portfolio_data.json';
      a.click();
    });
  }

  // Initialize Floating Nav interactions
  initFloatingNav();
}

// Floating Navigation Scroll & Active Section Highlighting
function initFloatingNav() {
  const floatingNav = document.getElementById('floatingNav');
  if (!floatingNav) return;

  const handleScroll = () => {
    if (window.scrollY > 110) {
      floatingNav.classList.add('visible');
    } else {
      floatingNav.classList.remove('visible');
    }
    updateActiveFloatingNav();
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // Smooth scroll for nav items
  document.querySelectorAll('.floating-nav-item[data-section]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('data-section');
      if (targetId === 'hero') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const floatingNavLinks = document.getElementById('floatingNavLinks');
  if (mobileMenuBtn && floatingNavLinks) {
    mobileMenuBtn.onclick = (e) => {
      e.stopPropagation();
      floatingNavLinks.classList.toggle('open');
      mobileMenuBtn.classList.toggle('active');
    };

    document.addEventListener('click', (e) => {
      if (!floatingNav.contains(e.target)) {
        floatingNavLinks.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
      }
    });
  }
}

function updateActiveFloatingNav() {
  const scrollY = window.scrollY;
  if (scrollY < 180) {
    document.querySelectorAll('.floating-nav-item[data-section]').forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('data-section') === 'hero') {
        item.classList.add('active');
      }
    });
    return;
  }

  const sections = document.querySelectorAll('section[id]');
  const scrollPos = scrollY + 220;

  sections.forEach(sec => {
    const id = sec.getAttribute('id');
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    if (scrollPos >= top && scrollPos < top + height) {
      document.querySelectorAll('.floating-nav-item[data-section]').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === id) {
          item.classList.add('active');
        }
      });
    }
  });
}

// Generate Product User Journey Visualizations
function getProjectHeroVisual(csId) {
  if (csId.includes('firefly')) {
    return `
      <div class="project-hero-visual-card hero-visual-firefly">
        <div class="visual-card-header">
          <span class="visual-header-badge" style="background:rgba(250,38,160,0.15); color:#FA26A0; border-color:rgba(250,38,160,0.3);">✨ CREATIVE LOCALIZATION JOURNEY</span>
          <span class="visual-header-title">User Story: From English Master Art to 40+ Localized Campaigns</span>
        </div>
        <div class="visual-workflow-nodes">
          <div class="visual-node-box"><div class="visual-node-icon">🎨</div><div class="visual-node-label">Creative Team</div><div class="visual-node-sub">Campaign Kickoff</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box"><div class="visual-node-icon">📤</div><div class="visual-node-label">Upload Master</div><div class="visual-node-sub">English Creative Asset</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box visual-node-active" style="border-color:#FA26A0;"><div class="visual-node-icon">🔍</div><div class="visual-node-label">AI Detects Region</div><div class="visual-node-sub">Target Market Geo</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box"><div class="visual-node-icon">🌐</div><div class="visual-node-label">AI Localizes</div><div class="visual-node-sub">Nuanced Transcreate</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box"><div class="visual-node-icon">📐</div><div class="visual-node-label">Typography Fit</div><div class="visual-node-sub">Auto Font Bounding</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box"><div class="visual-node-icon">🛡️</div><div class="visual-node-label">Brand Review</div><div class="visual-node-sub">Governance Check</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box visual-node-highlight" style="border-color:#c084fc;"><div class="visual-node-icon">🚀</div><div class="visual-node-label">Published</div><div class="visual-node-sub">48h Campaign Launch</div></div>
        </div>
      </div>
    `;
  } else if (csId.includes('stanza')) {
    return `
      <div class="project-hero-visual-card hero-visual-stanza">
        <div class="visual-card-header">
          <span class="visual-header-badge" style="background:rgba(16,185,129,0.15); color:#10b981; border-color:rgba(16,185,129,0.3);">🛠️ RESIDENT MAINTENANCE JOURNEY</span>
          <span class="visual-header-title">User Story: Frictionless Complaint-to-Resolution Experience</span>
        </div>
        <div class="visual-workflow-nodes">
          <div class="visual-node-box"><div class="visual-node-icon">👤</div><div class="visual-node-label">Resident</div><div class="visual-node-sub">App Experience</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box"><div class="visual-node-icon">📱</div><div class="visual-node-label">Reports Issue</div><div class="visual-node-sub">Photo Ticket Entry</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box visual-node-active" style="border-color:#10b981;"><div class="visual-node-icon">👁️</div><div class="visual-node-label">AI Categorization</div><div class="visual-node-sub">Vision Triage Score</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box"><div class="visual-node-icon">⚡</div><div class="visual-node-label">Priority Assign</div><div class="visual-node-sub">SLA Timer Trigger</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box"><div class="visual-node-icon">👷</div><div class="visual-node-label">Tech Dispatch</div><div class="visual-node-sub">Geofenced Vendor</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box"><div class="visual-node-icon">🔧</div><div class="visual-node-label">Issue Resolved</div><div class="visual-node-sub">Work Verification</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box visual-node-highlight" style="border-color:#00dfd8;"><div class="visual-node-icon">⭐</div><div class="visual-node-label">Resident Feedback</div><div class="visual-node-sub">4.6/5 CSAT Score</div></div>
        </div>
      </div>
    `;
  } else if (csId.includes('orient')) {
    return `
      <div class="project-hero-visual-card hero-visual-orient">
        <div class="visual-card-header">
          <span class="visual-header-badge" style="background:rgba(2,132,199,0.15); color:#00F0FF; border-color:rgba(0,240,255,0.3);">🏢 DEALER SALES RETURN JOURNEY</span>
          <span class="visual-header-title">User Story: 3-Day B2B Return & Credit Note Settlement</span>
        </div>
        <div class="visual-workflow-nodes">
          <div class="visual-node-box"><div class="visual-node-icon">🏬</div><div class="visual-node-label">Dealer Reports Return</div><div class="visual-node-sub">Defective Claim</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box"><div class="visual-node-icon">📄</div><div class="visual-node-label">SRN Submitted</div><div class="visual-node-sub">Portal Entry</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box"><div class="visual-node-icon">📋</div><div class="visual-node-label">Field Verification</div><div class="visual-node-sub">QR Inspection Scan</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box visual-node-active" style="border-color:#0284c7;"><div class="visual-node-icon">🔄</div><div class="visual-node-label">Approval Workflow</div><div class="visual-node-sub">Automated Hierarchy</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box"><div class="visual-node-icon">⚙️</div><div class="visual-node-label">SAP Reconciliation</div><div class="visual-node-sub">Real-Time Ledger Sync</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box"><div class="visual-node-icon">💳</div><div class="visual-node-label">Credit Note Gen</div><div class="visual-node-sub">₹8 Cr Monthly Volume</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box visual-node-highlight" style="border-color:#00F0FF;"><div class="visual-node-icon">💰</div><div class="visual-node-label">Dealer Settlement</div><div class="visual-node-sub">3-Day Turnaround</div></div>
        </div>
      </div>
    `;
  } else if (csId.includes('snapmint')) {
    return `
      <div class="project-hero-visual-card hero-visual-snapmint">
        <div class="visual-card-header">
          <span class="visual-header-badge" style="background:rgba(0,82,255,0.15); color:#38BDF8; border-color:rgba(56,189,248,0.3);">💳 BNPL CUSTOMER JOURNEY</span>
          <span class="visual-header-title">User Story: Sub-30sec Credit Approval & Frictionless Checkout</span>
        </div>
        <div class="visual-workflow-nodes">
          <div class="visual-node-box"><div class="visual-node-icon">🛒</div><div class="visual-node-label">Customer Shopping</div><div class="visual-node-sub">E-Commerce Cart</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box"><div class="visual-node-icon">💳</div><div class="visual-node-label">Select EMI</div><div class="visual-node-sub">Snapmint BNPL Option</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box visual-node-active" style="border-color:#0052FF;"><div class="visual-node-icon">⚡</div><div class="visual-node-label">Eligibility Check</div><div class="visual-node-sub">Real-Time Score</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box"><div class="visual-node-icon">🆔</div><div class="visual-node-label">Instant KYC</div><div class="visual-node-sub">PAN & Aadhaar Mandate</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box"><div class="visual-node-icon">✅</div><div class="visual-node-label">Approval</div><div class="visual-node-sub">Instant Sanction</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box"><div class="visual-node-icon">🎉</div><div class="visual-node-label">Checkout</div><div class="visual-node-sub">+28% Conversion</div></div>
          <div class="visual-flow-arrow">&rarr;</div>
          <div class="visual-node-box visual-node-highlight" style="border-color:#38BDF8;"><div class="visual-node-icon">📊</div><div class="visual-node-label">Repayment Dash</div><div class="visual-node-sub">AutoMandate Schedule</div></div>
        </div>
      </div>
    `;
  }
  return '';
}


