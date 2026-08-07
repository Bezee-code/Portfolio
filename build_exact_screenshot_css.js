const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'css', 'style.css');

let baseCSS = fs.readFileSync(cssPath, 'utf8');

const extraStyles = `
/* ==========================================
   RECRUITER SNAPSHOT PROFILE CARD (EXACT MATCH FOR USER SCREENSHOT)
   ========================================== */
.apple-profile-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 22px;
  padding: 1.65rem;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25), 0 0 30px rgba(99, 102, 241, 0.12);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.apple-profile-card:hover {
  border-color: var(--border-highlight);
  box-shadow: 0 24px 50px var(--primary-glow);
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
  background: linear-gradient(135deg, var(--primary), var(--secondary), var(--success));
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
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
  color: var(--text-main);
  line-height: 1.2;
}

.profile-card-role {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--secondary);
  margin-top: 0.15rem;
}

.status-badge-wrapper {
  margin-bottom: 1.15rem;
}

.status-badge-green {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--success);
}

.status-dot-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--success);
  box-shadow: 0 0 10px var(--success);
  animation: pulseDot 2s infinite;
}

@keyframes pulseDot {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

.profile-card-divider {
  height: 1px;
  background: var(--border-color);
  margin-bottom: 1.15rem;
}

.profile-bullets-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.profile-bullet-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: var(--text-main);
}

.bullet-icon {
  font-size: 1.1rem;
}

.bullet-text strong {
  color: var(--text-main);
}

.bullet-text span {
  color: var(--text-muted);
}

/* Floating Navigation Bar (Permanent Floating Top Bar) */
.floating-nav-container {
  position: fixed;
  top: 1.25rem;
  left: 50%;
  transform: translateX(-50%) translateY(0);
  z-index: 9999;
  opacity: 1;
  pointer-events: auto;
  transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  max-width: 95vw;
}

.floating-nav-container.visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.floating-nav-pill {
  background: rgba(15, 22, 38, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 9999px;
  padding: 0.45rem 0.75rem 0.45rem 1.25rem;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.4), 0 0 24px rgba(99, 102, 241, 0.15);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.floating-nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.floating-nav-item {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.4rem 0.85rem;
  border-radius: 9999px;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.floating-nav-item:hover {
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.08);
}

.floating-nav-item.active {
  color: var(--text-main);
  background: rgba(99, 102, 241, 0.25);
  border: 1px solid rgba(99, 102, 241, 0.4);
}

.theme-slider-pill {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 9999px;
  padding: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all var(--transition-fast);
}

.theme-slider-track {
  position: relative;
  width: 52px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
  box-sizing: border-box;
}

.theme-icon {
  font-size: 0.8rem;
  z-index: 2;
  user-select: none;
}

.theme-slider-thumb {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;
}

[data-theme="light"] .theme-slider-thumb {
  transform: translateX(26px);
  background: linear-gradient(135deg, #f59e0b, #ec4899);
}

/* User Journey Flow Single Line Flex Layout */
.visual-workflow-nodes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 0.4rem;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
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
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  flex: 1 1 0px;
  min-width: 95px;
  min-height: 85px;
  box-sizing: border-box;
}

.visual-node-box:hover {
  transform: translateY(-3px);
  border-color: var(--border-highlight);
  background: rgba(255, 255, 255, 0.08);
}

.visual-node-icon {
  font-size: 1.25rem;
  margin-bottom: 0.3rem;
}

.visual-node-label {
  font-family: var(--font-heading);
  font-size: 0.775rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.25;
  margin-bottom: 0.15rem;
}

.visual-node-sub {
  font-size: 0.65rem;
  color: var(--text-muted);
  line-height: 1.25;
}

.visual-flow-arrow {
  color: var(--border-highlight);
  font-size: 1.1rem;
  font-weight: 800;
  opacity: 0.75;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1px;
}

/* 2x2 Product Thinking Grid */
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
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.thinking-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-highlight);
  box-shadow: 0 16px 36px var(--primary-glow);
  background: var(--bg-card-hover);
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

/* Light Mode Overrides */
[data-theme="light"] body {
  background-color: #f8fafc !important;
  background-image: 
    radial-gradient(circle at 15% 15%, rgba(99, 102, 241, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 85% 65%, rgba(2, 132, 199, 0.06) 0%, transparent 40%),
    radial-gradient(circle at 50% 90%, rgba(219, 39, 119, 0.05) 0%, transparent 50%) !important;
  color: #0f172a !important;
}

[data-theme="light"] .apple-profile-card,
[data-theme="light"] .impact-card,
[data-theme="light"] .pm-case-card,
[data-theme="light"] .thinking-card,
[data-theme="light"] .recruiter-snapshot-card,
[data-theme="light"] .beyond-card,
[data-theme="light"] .why-card,
[data-theme="light"] .pm-step-card {
  background: #ffffff !important;
  border-color: #cbd5e1 !important;
  color: #0f172a !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) !important;
}

[data-theme="light"] .floating-nav-pill {
  background: rgba(255, 255, 255, 0.92) !important;
  border-color: #cbd5e1 !important;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.12) !important;
}

[data-theme="light"] .floating-nav-item {
  color: #475569 !important;
}

[data-theme="light"] .floating-nav-item:hover,
[data-theme="light"] .floating-nav-item.active {
  color: #0f172a !important;
  background: rgba(79, 70, 229, 0.1) !important;
}
`;

if (!baseCSS.includes('.apple-profile-card')) {
  baseCSS += '\n' + extraStyles;
  fs.writeFileSync(cssPath, baseCSS, 'utf8');
  console.log('Appended screenshot styles to style.css successfully!');
} else {
  console.log('apple-profile-card already present in style.css');
}
