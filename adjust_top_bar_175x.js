const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'css', 'style.css');
let cssContent = fs.readFileSync(cssFile, 'utf8');

const proportionedHeaderCss = `
/* ==========================================================================
   ELEGANT 1.75X PROPORTIONED FLOATING TOP HEADER BAR
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
  padding: 0.65rem 0 !important;
  box-shadow: 0 4px 22px rgba(0, 0, 0, 0.4);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.header-full-container {
  max-width: 1380px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  width: 100%;
  box-sizing: border-box;
}

.header-nav-links {
  display: flex;
  align-items: center;
  gap: 0.65rem !important;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link-item {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.85rem !important;
  font-weight: 600;
  padding: 0.4rem 0.8rem !important;
  border-radius: 9999px;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.header-cv-btn {
  background: linear-gradient(135deg, #10b981, #059669) !important;
  color: black !important;
  font-weight: 800 !important;
  font-size: 0.85rem !important;
  padding: 0.45rem 1rem !important;
  border-radius: 9999px !important;
  text-decoration: none !important;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3) !important;
  white-space: nowrap;
}

body {
  padding-top: 72px !important;
}
`;

if (!cssContent.includes('ELEGANT 1.75X PROPORTIONED FLOATING TOP HEADER BAR')) {
  cssContent += '\n' + proportionedHeaderCss;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Appended 1.75x proportioned header CSS to css/style.css!');
} else {
  // Replace existing section
  const startPos = cssContent.indexOf('ELEGANT 1.75X PROPORTIONED FLOATING TOP HEADER BAR');
  cssContent = cssContent.substring(0, startPos - 4) + proportionedHeaderCss;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Updated 1.75x proportioned header CSS in css/style.css!');
}

console.log('Successfully applied 1.75x top bar sizing!');
