const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const alignCardStyles = `
/* ==========================================================================
   ALIGN PROFILE CARD TOP WITH 'BUILDING AI-POWERED PRODUCTS' & EXPAND HEIGHT
   ========================================================================== */

.hero {
  align-items: flex-start !important;
}

.hero-visual-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 3.25rem !important; /* Top aligns card with 'Building AI-Powered Products' headline */
}

.apple-profile-card {
  width: 100%;
  max-width: 470px !important;
  background: rgba(13, 19, 32, 0.9) !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  border-radius: 28px !important;
  padding: 2.85rem 2.25rem !important; /* Increased vertical padding to extend bottom level */
  backdrop-filter: blur(24px) !important;
  -webkit-backdrop-filter: blur(24px) !important;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45), 0 0 45px rgba(99, 102, 241, 0.22) !important;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.apple-profile-card:hover {
  border-color: rgba(99, 102, 241, 0.5) !important;
  box-shadow: 0 32px 70px rgba(99, 102, 241, 0.32) !important;
  transform: translateY(-5px) !important;
}

.profile-card-header {
  display: flex;
  align-items: center;
  gap: 1.4rem !important;
  margin-bottom: 1.5rem !important;
}

.headshot-glow-frame {
  position: relative;
  width: 96px !important;
  height: 96px !important;
  border-radius: 50% !important;
  padding: 4px !important;
  background: linear-gradient(135deg, #0052FF, #00F0FF, #6366f1) !important;
  box-shadow: 0 0 28px rgba(0, 240, 255, 0.48) !important;
  flex-shrink: 0;
}

.profile-card-name {
  font-family: var(--font-heading);
  font-size: 1.65rem !important;
  font-weight: 800 !important;
  color: #ffffff !important;
  line-height: 1.2;
}

.profile-card-role {
  font-size: 1rem !important;
  font-weight: 600 !important;
  color: #38bdf8 !important;
  margin-top: 0.3rem !important;
}

.status-badge-wrapper {
  margin-bottom: 1.5rem !important;
}

.status-badge-green {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem !important;
  padding: 0.55rem 1.25rem !important;
  background: rgba(16, 185, 129, 0.15) !important;
  border: 1px solid rgba(16, 185, 129, 0.45) !important;
  border-radius: 9999px !important;
  font-size: 0.9rem !important;
  font-weight: 700 !important;
  color: #10b981 !important;
}

.profile-card-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1) !important;
  margin-bottom: 1.5rem !important;
}

.profile-bullets-list {
  display: flex;
  flex-direction: column;
  gap: 1.15rem !important;
}

.profile-bullet-item {
  display: flex;
  align-items: center;
  gap: 1.15rem !important;
  font-size: 1.025rem !important;
}

.bullet-icon {
  font-size: 1.35rem !important;
  width: 30px !important;
  display: inline-block;
  text-align: center;
}
`;

css += '\n' + alignCardStyles;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Appended top alignment and taller height styles to style.css!');
