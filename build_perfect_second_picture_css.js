const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const perfectStyles = `
/* ==========================================================================
   PERFECT SECOND PICTURE DESIGN SYSTEM (EXACT MATCH FOR USER SCREENSHOT 2)
   ========================================================================== */

/* Full-Width Translucent Floating Top Navigation Header */
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

body {
  padding-top: 75px !important;
}

/* Enlarged Profile Card Top-Aligned */
.hero {
  align-items: flex-start !important;
}

.hero-visual-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 3.25rem !important;
}

.apple-profile-card {
  width: 100%;
  max-width: 470px !important;
  background: rgba(13, 19, 32, 0.9) !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  border-radius: 28px !important;
  padding: 2.85rem 2.25rem !important;
  backdrop-filter: blur(24px) !important;
  -webkit-backdrop-filter: blur(24px) !important;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45), 0 0 45px rgba(99, 102, 241, 0.22) !important;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
  position: relative;
  overflow: hidden;
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

.profile-headshot-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
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

.status-dot-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #10b981;
  box-shadow: 0 0 10px #10b981;
  animation: pulseDot 2s infinite;
}

@keyframes pulseDot {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
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
  list-style: none;
  padding: 0;
  margin: 0;
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

.bullet-text {
  color: #94a3b8;
  font-weight: 500;
}

.bullet-text strong {
  color: #ffffff;
  font-weight: 700;
}

/* User Journey Single Line Layout */
.visual-workflow-nodes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 0.4rem;
}

.visual-node-box {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 0.75rem 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 0px;
  min-width: 95px;
  min-height: 85px;
  box-sizing: border-box;
}

/* PM Thinking 2x2 Grid */
.pm-thinking-grid-section {
  margin-bottom: 2.25rem;
}

.thinking-section-title {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.pm-thinking-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.thinking-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 18px;
  padding: 1.5rem;
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.thinking-card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.15rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color);
}

.thinking-card-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid var(--border-highlight);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: var(--secondary);
}

.thinking-card-title {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-main);
}

.thinking-card-body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.thinking-field {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.thinking-field-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--secondary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.thinking-field-content {
  color: var(--text-main);
}
`;

if (!css.includes('PERFECT SECOND PICTURE DESIGN SYSTEM')) {
  css += '\n' + perfectStyles;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Appended perfect second picture styles to style.css!');
} else {
  console.log('Styles already present in style.css');
}
