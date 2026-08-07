const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const appleCardStyles = `
/* ==========================================================================
   RECRUITER SNAPSHOT PROFILE CARD (EXACT MATCH FOR USER SCREENSHOT)
   ========================================================================== */
.hero-visual-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.apple-profile-card {
  width: 100%;
  max-width: 380px;
  background: rgba(13, 19, 32, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 22px;
  padding: 1.65rem;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35), 0 0 30px rgba(99, 102, 241, 0.15);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.apple-profile-card:hover {
  border-color: rgba(99, 102, 241, 0.4);
  box-shadow: 0 24px 50px rgba(99, 102, 241, 0.25);
  transform: translateY(-4px);
}

.profile-card-header {
  display: flex;
  align-items: center;
  gap: 1.15rem;
  margin-bottom: 1.15rem;
}

.headshot-glow-frame {
  position: relative;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(135deg, #0052FF, #00F0FF, #6366f1);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.35);
  flex-shrink: 0;
}

.profile-headshot-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.profile-card-titles {
  display: flex;
  flex-direction: column;
}

.profile-card-name {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
}

.profile-card-role {
  font-size: 0.875rem;
  font-weight: 600;
  color: #38bdf8;
  margin-top: 0.2rem;
}

.status-badge-wrapper {
  margin-bottom: 1.15rem;
}

.status-badge-green {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1rem;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.35);
  border-radius: 9999px;
  font-size: 0.825rem;
  font-weight: 700;
  color: #10b981;
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
  background: rgba(255, 255, 255, 0.08);
  margin-bottom: 1.15rem;
}

.profile-bullets-list {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.profile-bullet-item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  font-size: 0.9rem;
}

.bullet-icon {
  font-size: 1.15rem;
  width: 24px;
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

[data-theme="light"] .apple-profile-card {
  background: #ffffff !important;
  border-color: #cbd5e1 !important;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.08) !important;
}

[data-theme="light"] .profile-card-name {
  color: #0f172a !important;
}

[data-theme="light"] .bullet-text strong {
  color: #0f172a !important;
}

[data-theme="light"] .bullet-text {
  color: #475569 !important;
}
`;

if (!css.includes('.apple-profile-card')) {
  css += '\n' + appleCardStyles;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('Appended apple-profile-card CSS to style.css!');
} else {
  // Replace existing apple-profile-card section to guarantee 100% exact screenshot styling
  console.log('apple-profile-card present, appending screenshot styling rules...');
  css += '\n' + appleCardStyles;
  fs.writeFileSync(cssPath, css, 'utf8');
}
