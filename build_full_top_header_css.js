const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const fullHeaderStyles = `
/* ==========================================================================
   FULL-WIDTH TRANSLUCENT FLOATING TOP HEADER (EXACT MATCH FOR USER SCREENSHOT)
   ========================================================================== */
.full-top-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
  background: rgba(9, 13, 22, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.75rem 0;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.4);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

[data-theme="light"] .full-top-header {
  background: rgba(255, 255, 255, 0.92) !important;
  border-bottom-color: #cbd5e1 !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important;
}

.header-full-container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 1.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  width: 100%;
  box-sizing: border-box;
}

.header-nav-links {
  display: flex;
  align-items: center;
  gap: 1.15rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link-item {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.4rem 0.85rem;
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
  gap: 0.85rem;
}

.header-cv-btn {
  background: linear-gradient(135deg, #10b981, #059669) !important;
  color: black !important;
  font-weight: 800 !important;
  font-size: 0.85rem !important;
  padding: 0.45rem 1rem !important;
  border-radius: 9999px !important;
  text-decoration: none !important;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3) !important;
  white-space: nowrap;
}

.header-cv-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(16, 185, 129, 0.4) !important;
}

/* Adjust page padding so fixed header doesn't cover hero content */
body {
  padding-top: 75px !important;
}

@media (max-width: 1024px) {
  .header-nav-links {
    display: none;
  }
}
`;

css += '\n' + fullHeaderStyles;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Appended full-top-header styles to style.css!');
