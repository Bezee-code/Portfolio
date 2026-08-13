const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
const cssFile = path.join(__dirname, 'css', 'style.css');

// 1. Update index.html top header branding to white-space: nowrap
let indexContent = fs.readFileSync(indexFile, 'utf8');

const oldBranding = `<div style="display: flex; align-items: center;">
        <div>
          <div style="font-weight: 800; font-size: 1.05rem; color: #ffffff; line-height: 1.1; font-family: var(--font-heading);">Souvik Ghosh</div>
          <div style="font-size: 0.775rem; color: #38bdf8; font-weight: 600;">Senior Manager @ CK Birla Group &bull; IIM Calcutta MBA</div>
        </div>
      </div>`;

const newBranding = `<div style="display: flex; align-items: center; flex-shrink: 0;">
        <div style="white-space: nowrap;">
          <div style="font-weight: 800; font-size: 0.95rem; color: #ffffff; line-height: 1.1; font-family: var(--font-heading); white-space: nowrap;">Souvik Ghosh</div>
          <div style="font-size: 0.725rem; color: #38bdf8; font-weight: 600; white-space: nowrap;">Senior Manager @ CK Birla Group &bull; IIM Calcutta MBA</div>
        </div>
      </div>`;

if (indexContent.includes('Senior Manager @ CK Birla Group &bull; IIM Calcutta MBA')) {
  indexContent = indexContent.replace(oldBranding, newBranding);
  fs.writeFileSync(indexFile, indexContent, 'utf8');
  console.log('Updated branding white-space: nowrap in index.html!');
}

// 2. Update css/style.css to make .full-top-header ultra thin and compact
let cssContent = fs.readFileSync(cssFile, 'utf8');

const thinHeaderCss = `
/* Ultra-Thin & Sleek Translucent Floating Top Header */
.full-top-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
  background: rgba(9, 13, 22, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.35rem 0 !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.header-full-container {
  max-width: 1380px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.header-nav-links {
  display: flex;
  align-items: center;
  gap: 0.5rem !important;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link-item {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.8rem !important;
  font-weight: 600;
  padding: 0.25rem 0.65rem !important;
  border-radius: 9999px;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.header-cv-btn {
  background: linear-gradient(135deg, #10b981, #059669) !important;
  color: black !important;
  font-weight: 800 !important;
  font-size: 0.775rem !important;
  padding: 0.35rem 0.85rem !important;
  border-radius: 9999px !important;
  text-decoration: none !important;
  box-shadow: 0 3px 10px rgba(16, 185, 129, 0.3) !important;
  white-space: nowrap;
}

body {
  padding-top: 54px !important;
}
`;

if (!cssContent.includes('Ultra-Thin & Sleek Translucent Floating Top Header')) {
  cssContent += '\n' + thinHeaderCss;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Appended ultra-thin header CSS to css/style.css!');
}

console.log('Successfully completed thin top bar optimization!');
