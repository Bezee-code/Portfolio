const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
const cssFile = path.join(__dirname, 'css', 'style.css');

// 1. Update index.html branding font sizes
let indexContent = fs.readFileSync(indexFile, 'utf8');

const oldBranding = `<div style="display: flex; align-items: center; flex-shrink: 0;">
        <div style="white-space: nowrap;">
          <div style="font-weight: 800; font-size: 0.95rem; color: #ffffff; line-height: 1.1; font-family: var(--font-heading); white-space: nowrap;">Souvik Ghosh</div>
          <div style="font-size: 0.725rem; color: #38bdf8; font-weight: 600; white-space: nowrap;">Senior Manager @ CK Birla Group &bull; IIM Calcutta MBA</div>
        </div>
      </div>`;

const newBranding = `<div style="display: flex; align-items: center; flex-shrink: 0;">
        <div style="white-space: nowrap;">
          <div style="font-weight: 800; font-size: 0.9rem; color: #ffffff; line-height: 1.1; font-family: var(--font-heading); white-space: nowrap;">Souvik Ghosh</div>
          <div style="font-size: 0.7rem; color: #38bdf8; font-weight: 600; white-space: nowrap;">Senior Manager @ CK Birla Group &bull; IIM Calcutta MBA</div>
        </div>
      </div>`;

if (indexContent.includes('Senior Manager @ CK Birla Group &bull; IIM Calcutta MBA')) {
  indexContent = indexContent.replace(oldBranding, newBranding);
  fs.writeFileSync(indexFile, indexContent, 'utf8');
  console.log('Updated compact branding in index.html!');
}

// 2. Update css/style.css with spacious height & centered inset container
let cssContent = fs.readFileSync(cssFile, 'utf8');

const perfectHeaderDimensionsCss = `
/* ==========================================================================
   SPACIOUS TOP BAR WITH INSET CONTAINER & BALANCED CORNER PADDING
   ========================================================================== */
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
  padding: 0.85rem 0 !important; /* Bigger, comfortable top bar height */
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.45);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.header-full-container {
  max-width: 1220px !important; /* Constrained width to pull CV button inward away from edge */
  margin: 0 auto !important;
  padding: 0 2rem !important; /* Balanced left & right padding */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.85rem;
  width: 100%;
  box-sizing: border-box;
}

.header-nav-links {
  display: flex;
  align-items: center;
  gap: 0.35rem !important;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link-item {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.785rem !important; /* Slightly smaller text for optimal spacing */
  font-weight: 600;
  padding: 0.35rem 0.6rem !important;
  border-radius: 9999px;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.nav-link-item:hover {
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.08);
}

.nav-link-item.active {
  color: var(--text-main);
  background: rgba(99, 102, 241, 0.2);
  border: 1px solid rgba(99, 102, 241, 0.4);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.header-cv-btn {
  background: linear-gradient(135deg, #10b981, #059669) !important;
  color: black !important;
  font-weight: 800 !important;
  font-size: 0.8rem !important;
  padding: 0.4rem 0.85rem !important;
  border-radius: 9999px !important;
  text-decoration: none !important;
  box-shadow: 0 3px 12px rgba(16, 185, 129, 0.3) !important;
  white-space: nowrap;
}

body {
  padding-top: 78px !important; /* Matches bigger top bar height */
}
`;

if (!cssContent.includes('SPACIOUS TOP BAR WITH INSET CONTAINER')) {
  cssContent += '\n' + perfectHeaderDimensionsCss;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Appended spacious header dimensions to css/style.css!');
} else {
  const startPos = cssContent.indexOf('SPACIOUS TOP BAR WITH INSET CONTAINER');
  cssContent = cssContent.substring(0, startPos - 4) + perfectHeaderDimensionsCss;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Updated spacious header dimensions in css/style.css!');
}

console.log('Successfully completed top bar dimension optimization!');
