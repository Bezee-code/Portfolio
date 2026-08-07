const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const enlargedCardStyles = `
/* ==========================================================================
   ENLARGED EXECUTIVE PROFILE CARD (PROMINENT HERO PRESENCE)
   ========================================================================== */
.hero-visual-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.apple-profile-card {
  width: 100%;
  max-width: 460px !important;
  background: rgba(13, 19, 32, 0.88) !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  border-radius: 26px !important;
  padding: 2.25rem 2rem !important;
  backdrop-filter: blur(24px) !important;
  -webkit-backdrop-filter: blur(24px) !important;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 40px rgba(99, 102, 241, 0.2) !important;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
  position: relative;
  overflow: hidden;
}

.apple-profile-card:hover {
  border-color: rgba(99, 102, 241, 0.5) !important;
  box-shadow: 0 28px 60px rgba(99, 102, 241, 0.3) !important;
  transform: translateY(-5px) !important;
}

.profile-card-header {
  display: flex;
  align-items: center;
  gap: 1.35rem !important;
  margin-bottom: 1.35rem !important;
}

.headshot-glow-frame {
  position: relative;
  width: 92px !important;
  height: 92px !important;
  border-radius: 50% !important;
  padding: 4px !important;
  background: linear-gradient(135deg, #0052FF, #00F0FF, #6366f1) !important;
  box-shadow: 0 0 25px rgba(0, 240, 255, 0.45) !important;
  flex-shrink: 0;
}

.profile-card-name {
  font-family: var(--font-heading);
  font-size: 1.6rem !important;
  font-weight: 800 !important;
  color: #ffffff !important;
  line-height: 1.2;
}

.profile-card-role {
  font-size: 0.975rem !important;
  font-weight: 600 !important;
  color: #38bdf8 !important;
  margin-top: 0.25rem !important;
}

.status-badge-wrapper {
  margin-bottom: 1.35rem !important;
}

.status-badge-green {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem !important;
  padding: 0.5rem 1.15rem !important;
  background: rgba(16, 185, 129, 0.14) !important;
  border: 1px solid rgba(16, 185, 129, 0.4) !important;
  border-radius: 9999px !important;
  font-size: 0.875rem !important;
  font-weight: 700 !important;
  color: #10b981 !important;
}

.profile-card-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1) !important;
  margin-bottom: 1.35rem !important;
}

.profile-bullets-list {
  display: flex;
  flex-direction: column;
  gap: 1rem !important;
}

.profile-bullet-item {
  display: flex;
  align-items: center;
  gap: 1rem !important;
  font-size: 0.975rem !important;
}

.bullet-icon {
  font-size: 1.3rem !important;
  width: 28px !important;
  display: inline-block;
  text-align: center;
}
`;

css += '\n' + enlargedCardStyles;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Appended enlarged apple profile card styles to style.css!');
