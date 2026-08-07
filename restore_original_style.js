const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'css', 'style.css');

const originalCSS = `/* modern design system - PM portfolio */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  --bg-dark: #090D16;
  --bg-card: rgba(19, 27, 46, 0.7);
  --bg-card-hover: rgba(28, 39, 64, 0.85);
  --border-color: rgba(255, 255, 255, 0.08);
  --border-highlight: rgba(99, 102, 241, 0.35);
  
  --primary: #6366f1;
  --primary-hover: #4f46e5;
  --primary-glow: rgba(99, 102, 241, 0.25);
  --secondary: #38bdf8;
  --accent: #ec4899;
  --success: #10b981;
  --warning: #f59e0b;
  
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-code: 'JetBrains Mono', monospace;
  
  --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --header-bg: rgba(9, 13, 22, 0.85);
}

/* Light Theme Variables */
:root[data-theme="light"],
html[data-theme="light"],
html.light-mode {
  --bg-dark: #f8fafc !important;
  --bg-card: #ffffff !important;
  --bg-card-hover: #f1f5f9 !important;
  --border-color: #cbd5e1 !important;
  --border-highlight: rgba(79, 70, 229, 0.4) !important;
  
  --primary: #4f46e5 !important;
  --primary-hover: #4338ca !important;
  --primary-glow: rgba(79, 70, 229, 0.15) !important;
  --secondary: #0284c7 !important;
  --accent: #db2777 !important;
  --success: #059669 !important;
  --warning: #d97706 !important;
  
  --text-main: #0f172a !important;
  --text-muted: #475569 !important;
  --text-dim: #64748b !important;
  --header-bg: rgba(255, 255, 255, 0.95) !important;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--bg-dark);
  color: var(--text-main);
  font-family: var(--font-body);
  line-height: 1.6;
  overflow-x: hidden;
  background-image: 
    radial-gradient(circle at 15% 15%, rgba(99, 102, 241, 0.12) 0%, transparent 40%),
    radial-gradient(circle at 85% 65%, rgba(6, 182, 212, 0.1) 0%, transparent 40%),
    radial-gradient(circle at 50% 90%, rgba(236, 72, 153, 0.08) 0%, transparent 50%);
  background-attachment: fixed;
  min-height: 100vh;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Theme Toggle Button */
.theme-toggle-btn {
  background: var(--bg-card);
  border: 1px solid var(--border-highlight);
  color: var(--text-main);
  padding: 0.45rem 0.9rem;
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all var(--transition-fast);
  box-shadow: 0 2px 8px var(--primary-glow);
}

.theme-toggle-btn:hover {
  transform: translateY(-2px);
  border-color: var(--primary);
  background: var(--bg-card-hover);
}

/* Floating Theme Switcher Badge */
.theme-floating-pill {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 999;
  background: var(--bg-card);
  border: 1px solid var(--border-highlight);
  color: var(--text-main);
  padding: 0.65rem 1.25rem;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
}

/* Header & Nav */
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
  z-index: 100;
}

.top-header .nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
  box-sizing: border-box;
}

.logo-group {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.logo-badge {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-weight: 800;
  color: white;
  font-size: 1.1rem;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-name {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--text-main);
}

.logo-tag {
  font-size: 0.75rem;
  color: var(--secondary);
  font-weight: 500;
}

.top-header-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.top-nav-item {
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
}

.top-nav-item:hover {
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.08);
}

[data-theme="light"] .top-nav-item:hover {
  background: rgba(0, 0, 0, 0.05);
}

@media (max-width: 768px) {
  .top-header-nav {
    display: none;
  }
}

/* FLOATING NAVIGATION EXPERIENCE (PERMANENT FLOATING TOP BAR) */
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

[data-theme="light"] .floating-nav-pill {
  background: rgba(255, 255, 255, 0.88);
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.12), 0 0 20px rgba(99, 102, 241, 0.1);
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
  background: rgba(99, 102, 241, 0.2);
  border: 1px solid rgba(99, 102, 241, 0.4);
}

/* APPLE / LINEAR SLIDING THEME TOGGLE SWITCH */
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

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
}

/* HERO SECTION */
.hero {
  position: relative;
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 3.5rem;
  align-items: center;
  padding: 5rem 0 4rem 0;
  margin-bottom: 3.5rem;
  overflow: hidden;
}

.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 0.95rem;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  color: var(--secondary);
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--success);
  box-shadow: 0 0 10px var(--success);
}

.hero-title {
  font-family: var(--font-heading);
  font-size: 3.25rem;
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.03em;
  margin-bottom: 1.25rem;
  color: var(--text-main);
}

.gradient-text {
  background: linear-gradient(135deg, #6366f1 0%, #38bdf8 50%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 1.75rem;
  max-width: 680px;
}

.hero-badges-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2rem;
}

.hero-badge-item {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 600;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.75rem;
  flex-wrap: wrap;
}

.icon-btn-linkedin {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: rgba(10, 102, 194, 0.15);
  border: 1px solid rgba(10, 102, 194, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #38bdf8;
  text-decoration: none;
  transition: all var(--transition-fast);
}

.icon-btn-linkedin:hover {
  transform: translateY(-2px);
  background: rgba(10, 102, 194, 0.25);
}

.hero-impact-bar {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  width: 100%;
  border-top: 1px solid var(--border-color);
  padding-top: 2rem;
}

.impact-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1rem 0.85rem;
  text-align: center;
}

.impact-val {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--secondary);
}

.impact-lbl {
  font-size: 0.725rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

.hero-profile-container {
  width: 100%;
  max-width: 360px;
  background: var(--bg-card);
  border: 1px solid var(--border-highlight);
  border-radius: 28px;
  padding: 2rem;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5), 0 0 40px var(--primary-glow);
}

.profile-avatar-frame {
  width: 110px;
  height: 110px;
  margin: 0 auto 1.25rem auto;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
  padding: 3px;
}

.profile-avatar-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--bg-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
}

/* FEATURED CASE STUDY CARDS */
.pm-case-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  margin-bottom: 3.5rem;
  backdrop-filter: blur(16px);
}

.pm-case-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-highlight);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4), 0 0 35px var(--primary-glow);
}

.pm-card-banner {
  padding: 2rem 2.25rem 1.5rem 2.25rem;
  background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(99,102,241,0.06) 100%);
  border-bottom: 1px solid var(--border-color);
}

.domain-pill {
  background: rgba(99, 102, 241, 0.12);
  color: var(--secondary);
  border: 1px solid rgba(99, 102, 241, 0.25);
  font-size: 0.725rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-right: 0.4rem;
  margin-bottom: 0.4rem;
  display: inline-block;
}

.pm-card-title {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.25;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
}

.pm-card-subtitle {
  font-size: 0.875rem;
  color: var(--secondary);
  font-weight: 600;
}

.pm-card-body {
  padding: 2rem 2.25rem;
}

.pm-exec-summary {
  background: rgba(0, 0, 0, 0.2);
  border-left: 4px solid var(--primary);
  padding: 1.25rem 1.5rem;
  border-radius: 0 14px 14px 0;
  margin-bottom: 2rem;
  font-size: 0.95rem;
  color: var(--text-main);
  line-height: 1.65;
  border-top: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.pm-kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.pm-kpi-card {
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 1.15rem 1rem;
  text-align: center;
  transition: all var(--transition-fast);
}

.pm-kpi-card:hover {
  border-color: var(--border-highlight);
  background: rgba(99, 102, 241, 0.08);
  transform: translateY(-2px);
}

.pm-kpi-val {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--secondary);
  line-height: 1.2;
}

.pm-kpi-lbl {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 0.35rem;
  font-weight: 500;
}

.pm-role-bar {
  margin-bottom: 2rem;
}

.pm-role-title {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.pm-role-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.role-pill {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  font-size: 0.775rem;
  font-weight: 600;
  padding: 0.3rem 0.85rem;
  border-radius: 9999px;
  transition: all var(--transition-fast);
}

.role-pill:hover {
  border-color: var(--border-highlight);
  color: var(--text-main);
  background: rgba(99, 102, 241, 0.1);
}

/* PRODUCT USER JOURNEY WORKFLOW (TOP SECTION OF EACH CASE STUDY CARD) */
.project-hero-visual-card {
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 1.5rem;
  margin: 2rem 2.25rem 0 2.25rem;
  position: relative;
  overflow: hidden;
}

.visual-card-header {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1.25rem;
}

.visual-header-badge {
  font-size: 0.725rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  border: 1px solid transparent;
}

.visual-header-title {
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-main);
}

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

.visual-workflow-nodes::-webkit-scrollbar {
  height: 4px;
}

.visual-workflow-nodes::-webkit-scrollbar-thumb {
  background: var(--border-highlight);
  border-radius: 4px;
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

.visual-node-active {
  border-color: #FA26A0;
  background: rgba(250, 38, 160, 0.1);
  box-shadow: 0 4px 15px rgba(250, 38, 160, 0.2);
}

.visual-node-highlight {
  border-color: #7928CA;
  background: rgba(121, 40, 202, 0.15);
  box-shadow: 0 4px 15px rgba(121, 40, 202, 0.25);
}

/* THEMES FOR PROJECT HERO VISUALS */
.hero-visual-firefly {
  background: linear-gradient(135deg, rgba(250, 38, 160, 0.08), rgba(121, 40, 202, 0.08));
  border-color: rgba(250, 38, 160, 0.3);
}

.hero-visual-stanza {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(0, 223, 216, 0.08));
  border-color: rgba(16, 185, 129, 0.3);
}

.hero-visual-orient {
  background: linear-gradient(135deg, rgba(2, 132, 199, 0.08), rgba(0, 240, 255, 0.08));
  border-color: rgba(2, 132, 199, 0.3);
}

.hero-visual-snapmint {
  background: linear-gradient(135deg, rgba(0, 82, 255, 0.08), rgba(56, 189, 248, 0.08));
  border-color: rgba(0, 82, 255, 0.3);
}

/* 2x2 PRODUCT THINKING GRID */
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

/* Action Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: all var(--transition-fast);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-hover));
  color: white;
  box-shadow: 0 4px 14px var(--primary-glow);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--primary-glow);
}

.btn-outline {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-main);
  border: 1px solid var(--border-color);
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--border-highlight);
  transform: translateY(-2px);
}

.btn-sm {
  padding: 0.45rem 0.9rem;
  font-size: 0.85rem;
  border-radius: var(--radius-sm);
}

/* RECRUITER SNAPSHOT CARD */
.recruiter-snapshot-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.recruiter-snapshot-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  backdrop-filter: blur(12px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.recruiter-snapshot-card:hover {
  transform: translateY(-5px);
  border-color: var(--border-highlight);
  box-shadow: 0 20px 40px var(--primary-glow);
  background: var(--bg-card-hover);
}

.snapshot-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.snapshot-desc {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* BEYOND THE PORTFOLIO SECTION */
.beyond-insights-grid, .why-hire-grid, .product-framework-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.beyond-card, .why-card, .pm-step-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  backdrop-filter: blur(12px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.beyond-card:hover, .why-card:hover, .pm-step-card:hover {
  transform: translateY(-5px);
  border-color: var(--border-highlight);
  box-shadow: 0 20px 40px var(--primary-glow);
  background: var(--bg-card-hover);
}

.beyond-card-title, .why-card-title, .pm-step-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.beyond-card-desc, .why-card-text, .pm-step-desc {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* Mobile Responsiveness */
@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .hero-title {
    font-size: 2.6rem;
  }
  .beyond-insights-grid, .why-hire-grid, .product-framework-grid, .recruiter-snapshot-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .pm-thinking-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 2.1rem;
  }
  .beyond-insights-grid, .why-hire-grid, .product-framework-grid, .recruiter-snapshot-grid {
    grid-template-columns: 1fr;
  }
  .pm-card-banner, .pm-card-body {
    padding: 1.25rem;
  }
}
`;

fs.writeFileSync(cssPath, originalCSS, 'utf8');
console.log('Restored original design system CSS successfully!');
