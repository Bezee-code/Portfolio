const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
const cssFile = path.join(__dirname, 'css', 'style.css');

let indexContent = fs.readFileSync(indexFile, 'utf8');

// 1. Insert #fullTopHeader right after <body>
const topHeaderHtml = `
  <!-- Full-Width Translucent Floating Top Navigation Header -->
  <header id="fullTopHeader" class="full-top-header">
    <div class="header-full-container">
      <div style="display: flex; align-items: center; gap: 0.85rem;">
        <div style="width: 38px; height: 38px; border-radius: 50%; background: linear-gradient(135deg, #0052FF, #00F0FF); display: flex; align-items: center; justify-content: center; font-weight: 800; color: white; font-size: 0.95rem; box-shadow: 0 0 15px rgba(0, 240, 255, 0.4);">
          SG
        </div>
        <div>
          <div style="font-weight: 800; font-size: 1.05rem; color: #ffffff; line-height: 1.1; font-family: var(--font-heading);">Souvik Ghosh</div>
          <div style="font-size: 0.775rem; color: #38bdf8; font-weight: 600;">Senior Manager @ CK Birla Group &bull; IIM Calcutta MBA</div>
        </div>
      </div>

      <nav class="header-nav-links">
        <a href="#hero" class="nav-link-item active">Home</a>
        <a href="#why-hire-me" class="nav-link-item">Why Hire Me</a>
        <a href="#framework" class="nav-link-item">PM Framework</a>
        <a href="#case-studies" class="nav-link-item">PM Projects (4)</a>
        <a href="#beyond-portfolio" class="nav-link-item">Beyond Portfolio</a>
        <a href="#contact" class="nav-link-item">Contact</a>
      </nav>

      <div class="header-actions">
        <button id="topHeaderThemeToggle" onclick="toggleTheme()" class="theme-floating-pill" style="position:static; margin:0; padding:0.4rem 0.85rem; font-size:0.85rem;">
          🌙 Dark
        </button>
        <a href="CV_souvik_P.pdf" download="CV_souvik_P.pdf" target="_blank" class="header-cv-btn">
          📄 Download CV (PDF) 📥
        </a>
      </div>
    </div>
  </header>
`;

if (!indexContent.includes('id="fullTopHeader"')) {
  indexContent = indexContent.replace('<body>', '<body>\n' + topHeaderHtml);
  console.log('Inserted fullTopHeader into index.html!');
}

// 2. Replace right side visual with apple-profile-card containing headshot photo
const appleCardHtml = `
      <!-- Right Side Executive Apple Profile Visual Card -->
      <div class="hero-visual-wrapper animate-fade-up delay-3" style="margin-top: 3.25rem;">
        <div class="apple-profile-card">
          
          <div style="display: flex; align-items: center; gap: 1.25rem; margin-bottom: 1.5rem;">
            <div class="headshot-glow-frame">
              <img src="images/souvik_headshot.jpg" alt="Souvik Ghosh Headshot" class="profile-headshot-img">
            </div>
            <div>
              <h3 class="profile-card-name">Souvik Ghosh</h3>
              <p class="profile-card-role">Product @ CK Birla Group</p>
            </div>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <div class="status-badge-green">
              <span class="status-dot-pulse"></span>
              <span>Open to PM Opportunities</span>
            </div>
          </div>

          <div class="profile-card-divider"></div>

          <!-- Bullet Points List -->
          <ul class="profile-bullets-list">
            <li class="profile-bullet-item">
              <span class="bullet-icon">🎓</span>
              <div class="bullet-text"><strong>MBA</strong> &mdash; <span>IIM Calcutta</span></div>
            </li>
            <li class="profile-bullet-item">
              <span class="bullet-icon">💻</span>
              <div class="bullet-text"><strong>Ex-Cognizant</strong> <span>Software Engineer</span></div>
            </li>
            <li class="profile-bullet-item">
              <span class="bullet-icon">🤖</span>
              <div class="bullet-text"><strong>AI Product</strong> <span>& Enterprise SaaS</span></div>
            </li>
            <li class="profile-bullet-item">
              <span class="bullet-icon">📍</span>
              <div class="bullet-text"><strong>Kolkata</strong><span>, India</span></div>
            </li>
            <li class="profile-bullet-item">
              <span class="bullet-icon">✈️</span>
              <div class="bullet-text"><strong>Open to Relocate</strong> <span>across India</span></div>
            </li>
          </ul>

        </div>
      </div>
`;

const visualStart = indexContent.indexOf('<div class="hero-visual-wrapper');
if (visualStart !== -1) {
  const visualEnd = indexContent.indexOf('</section>', visualStart);
  indexContent = indexContent.substring(0, visualStart) + appleCardHtml + '\n    ' + indexContent.substring(visualEnd);
  console.log('Inserted apple-profile-card with headshot photo into index.html!');
}

fs.writeFileSync(indexFile, indexContent, 'utf8');

// 3. Ensure master CSS in style.css for fullTopHeader and apple-profile-card
require('./build_perfect_second_picture_css.js');

console.log('Successfully updated index.html & style.css!');
