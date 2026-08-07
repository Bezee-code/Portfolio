const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'css', 'style.css');

const linearCSS = `/* ==========================================================================
   DESIGN SYSTEM: LINEAR.APP, STRIPE & VERCEL CRAFTED PRODUCT DESIGN SPEC
   Author: Senior Product Designer @ Linear & Design Director @ Stripe
   ========================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  /* Obsidian / Charcoal Void Palette (Linear & Vercel Spec) */
  --bg-dark: #08090a;
  --bg-card: rgba(14, 16, 22, 0.75);
  --bg-card-hover: rgba(22, 25, 35, 0.9);
  --border-color: rgba(255, 255, 255, 0.08);
  --border-highlight: rgba(255, 255, 255, 0.18);
  
  /* Precision Accent Tones (Single Accent Focus) */
  --primary: #6366f1;
  --primary-hover: #4f46e5;
  --primary-glow: rgba(99, 102, 241, 0.12);
  --secondary: #94a3b8;
  --accent: #818cf8;
  --success: #10b981;
  --warning: #f59e0b;
  
  /* Editorial High-Contrast Typography */
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  
  /* Tactile Border Radius System (Linear / Raycast 8px - 12px) */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
  
  --font-heading: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-code: 'JetBrains Mono', monospace;
  
  --transition-fast: 0.15s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-normal: 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  --header-bg: rgba(8, 9, 10, 0.85);
}

/* Light Theme Variables (Stripe Clean Light Mode Spec) */
:root[data-theme="light"],
html[data-theme="light"],
html.light-mode {
  --bg-dark: #f8fafc !important;
  --bg-card: #ffffff !important;
  --bg-card-hover: #f1f5f9 !important;
  --border-color: #e2e8f0 !important;
  --border-highlight: #cbd5e1 !important;
  
  --primary: #4f46e5 !important;
  --primary-hover: #4338ca !important;
  --primary-glow: rgba(79, 70, 229, 0.08) !important;
  --secondary: #475569 !important;
  --accent: #6366f1 !important;
  --success: #059669 !important;
  --warning: #d97706 !important;
  
  --text-main: #0f172a !important;
  --text-muted: #475569 !important;
  --text-dim: #64748b !important;
  --header-bg: rgba(255, 255, 255, 0.92) !important;
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
  background-image: radial-gradient(ellipse at 50% 0%, rgba(99, 102, 241, 0.06) 0%, transparent 60%);
  background-attachment: fixed;
  min-height: 100vh;
  transition: background-color 0.25s ease, color 0.25s ease;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Remove AI-Generated Multi-Color Text Gradient -> Crisp Editorial Typography */
.gradient-text {
  background: none !important;
  -webkit-background-clip: unset !important;
  -webkit-text-fill-color: initial !important;
  color: var(--text-main) !important;
}

/* Container & Whitespace */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
}

/* Section Spacing & Headers */
.section-header {
  margin-bottom: 3.5rem;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-main);
  margin-bottom: 0.75rem;
}

.section-subtitle {
  font-size: 1.05rem;
  color: var(--text-muted);
  max-width: 640px;
  line-height: 1.6;
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
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--text-main);
  font-size: 0.95rem;
  transition: all var(--transition-fast);
}

.logo-group:hover .logo-badge {
  border-color: var(--border-highlight);
  background: rgba(255, 255, 255, 0.1);
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-name {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: -0.02em;
  color: var(--text-main);
}

.logo-tag {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
}

.top-header-nav {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.top-nav-item {
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.4rem 0.85rem;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.top-nav-item:hover {
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.05);
}

[data-theme="light"] .top-nav-item:hover {
  background: rgba(0, 0, 0, 0.05);
}

@media (max-width: 768px) {
  .top-header-nav {
    display: none;
  }
}

/* FLOATING NAVIGATION EXPERIENCE (PERMANENT FIXED FLOATING TOP PILL) */
.floating-nav-container {
  position: fixed;
  top: 1.25rem;
  left: 50%;
  transform: translateX(-50%) translateY(0);
  z-index: 9999;
  opacity: 1;
  pointer-events: auto;
  transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  max-width: 95vw;
}

.floating-nav-container.visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.floating-nav-pill {
  background: rgba(14, 16, 22, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  padding: 0.35rem 0.75rem 0.35rem 1.15rem;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

[data-theme="light"] .floating-nav-pill {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.floating-nav-links {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.floating-nav-item {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.825rem;
  font-weight: 500;
  padding: 0.4rem 0.85rem;
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.floating-nav-item:hover {
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.06);
}

.floating-nav-item.active {
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.1);
  font-weight: 600;
}

/* APPLE / LINEAR SLIDING THEME TOGGLE SWITCH */
.theme-slider-pill {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  padding: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all var(--transition-fast);
  margin-left: 0.25rem;
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
  font-size: 0.75rem;
  z-index: 2;
  user-select: none;
  line-height: 1;
}

.theme-slider-thumb {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 24px;
  height: 24px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;
}

[data-theme="light"] .theme-slider-thumb {
  transform: translateX(26px);
  background: #0f172a;
}

/* FLOATING THEME PILL (BOTTOM RIGHT FALLBACK) */
.theme-floating-pill {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 999;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  color: var(--text-main);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
  transition: all var(--transition-fast);
}

.theme-floating-pill:hover {
  border-color: var(--border-highlight);
  background: var(--bg-card-hover);
}

/* HERO SECTION - REFINED CRAFTED TYPOGRAPHY & WHITESPACE */
.hero {
  position: relative;
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 4rem;
  align-items: center;
  padding: 7rem 0 5rem 0;
  margin-bottom: 2rem;
}

.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
  margin-bottom: 1.75rem;
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--success);
}

.hero-title {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.035em;
  margin-bottom: 1.5rem;
  color: var(--text-main);
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin-bottom: 2rem;
  max-width: 640px;
}

.hero-badges-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2.25rem;
}

.hero-badge-item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.775rem;
  font-weight: 500;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
}

/* BUTTON SYSTEM (PREMIUM MINIMAL BUTTONS) */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.65rem 1.35rem;
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all var(--transition-fast);
}

/* Primary Button: Crisp Solid Light/White Button */
.btn-primary {
  background: #ffffff;
  color: #08090a;
  border-color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.btn-primary:hover {
  background: #e2e8f0;
  border-color: #e2e8f0;
  color: #08090a;
}

[data-theme="light"] .btn-primary {
  background: #0f172a;
  color: #ffffff;
  border-color: #0f172a;
}

[data-theme="light"] .btn-primary:hover {
  background: #1e293b;
  border-color: #1e293b;
}

/* Secondary / Outline Button: Ghost Button */
.btn-outline, .btn-secondary {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-main);
  border: 1px solid var(--border-color);
}

.btn-outline:hover, .btn-secondary:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--border-highlight);
  color: var(--text-main);
}

.btn-sm {
  padding: 0.45rem 0.9rem;
  font-size: 0.8rem;
  border-radius: var(--radius-sm);
}

.icon-btn-linkedin {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.icon-btn-linkedin:hover {
  border-color: var(--border-highlight);
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.08);
}

/* HERO IMPACT METRICS GRID */
.hero-impact-bar {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.85rem;
  width: 100%;
  border-top: 1px solid var(--border-color);
  padding-top: 2rem;
}

.impact-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 0.85rem 0.75rem;
  text-align: center;
  transition: all var(--transition-fast);
}

.impact-card:hover {
  border-color: var(--border-highlight);
  background: var(--bg-card-hover);
}

.impact-val {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-main);
  letter-spacing: -0.02em;
}

.impact-lbl {
  font-size: 0.725rem;
  color: var(--text-muted);
  margin-top: 0.2rem;
  font-weight: 500;
}

/* HERO PROFILE AVATAR CARD */
.hero-profile-container {
  width: 100%;
  max-width: 360px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.35);
  transition: all var(--transition-fast);
}

.hero-profile-container:hover {
  border-color: var(--border-highlight);
}

.profile-avatar-frame {
  width: 100px;
  height: 100px;
  margin: 0 auto 1.25rem auto;
  border-radius: 50%;
  border: 2px solid var(--border-highlight);
  padding: 3px;
}

.profile-avatar-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--text-main);
}

/* FEATURED PROJECT CARDS (LINEAR / STRIPE CLEAN CARDS) */
.pm-case-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 4rem;
}

.pm-case-card:hover {
  border-color: var(--border-highlight);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
  background: var(--bg-card-hover);
}

.pm-card-banner {
  padding: 1.75rem 2rem 1.25rem 2rem;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid var(--border-color);
}

.domain-pill {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-muted);
  border: 1px solid var(--border-color);
  font-size: 0.725rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: var(--radius-full);
  margin-right: 0.35rem;
  margin-bottom: 0.35rem;
  display: inline-block;
}

.pm-card-title {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.25;
  letter-spacing: -0.025em;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
}

.pm-card-subtitle {
  font-size: 0.875rem;
  color: var(--text-muted);
  font-weight: 500;
}

.pm-card-body {
  padding: 1.75rem 2rem;
}

.pm-exec-summary {
  background: rgba(255, 255, 255, 0.02);
  border-left: 3px solid var(--text-main);
  padding: 1rem 1.25rem;
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  margin-bottom: 2rem;
  font-size: 0.925rem;
  color: var(--text-main);
  line-height: 1.6;
  border-top: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.pm-kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 0.85rem;
  margin-bottom: 2rem;
}

.pm-kpi-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1rem 0.85rem;
  text-align: center;
  transition: all var(--transition-fast);
}

.pm-kpi-card:hover {
  border-color: var(--border-highlight);
  background: rgba(255, 255, 255, 0.04);
}

.pm-kpi-val {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-main);
  letter-spacing: -0.02em;
}

.pm-kpi-lbl {
  font-size: 0.725rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
  font-weight: 500;
}

.pm-role-bar {
  margin-bottom: 2rem;
}

.pm-role-title {
  font-size: 0.775rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.pm-role-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.role-pill {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-full);
}

/* PRODUCT USER JOURNEY FLOW (TOP SECTION OF PROJECT CARDS) */
.project-hero-visual-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
  margin: 1.5rem 2rem 0 2rem;
}

.visual-card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.visual-header-badge {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border-color);
  color: var(--text-main);
}

.visual-header-title {
  font-family: var(--font-heading);
  font-size: 0.875rem;
  font-weight: 600;
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
}

.visual-node-box {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 0.75rem 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
  flex: 1 1 0px;
  min-width: 95px;
  min-height: 85px;
  box-sizing: border-box;
}

.visual-node-box:hover {
  border-color: var(--border-highlight);
  background: rgba(255, 255, 255, 0.06);
}

.visual-node-icon {
  font-size: 1.15rem;
  margin-bottom: 0.25rem;
}

.visual-node-label {
  font-family: var(--font-heading);
  font-size: 0.775rem;
  font-weight: 600;
  color: var(--text-main);
  line-height: 1.2;
}

.visual-node-sub {
  font-size: 0.65rem;
  color: var(--text-muted);
  line-height: 1.25;
}

.visual-flow-arrow {
  color: var(--border-color);
  font-size: 1rem;
  font-weight: 700;
  opacity: 0.7;
  flex-shrink: 0;
  padding: 0 1px;
}

/* 2x2 PRODUCT THINKING & STRATEGY GRID */
.pm-thinking-grid-section {
  margin-bottom: 2rem;
}

.thinking-section-title {
  font-size: 0.775rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.pm-thinking-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.thinking-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.35rem;
  transition: all var(--transition-fast);
  display: flex;
  flex-direction: column;
}

.thinking-card:hover {
  border-color: var(--border-highlight);
  background: rgba(255, 255, 255, 0.04);
}

.thinking-card-header {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1rem;
  padding-bottom: 0.65rem;
  border-bottom: 1px solid var(--border-color);
}

.thinking-card-icon {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--text-main);
}

.thinking-card-title {
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-main);
}

.thinking-card-body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.55;
}

.thinking-field-label {
  font-size: 0.725rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.thinking-field-content {
  color: var(--text-main);
}

/* RECRUITER QUICK VIEW / SNAPSHOT SECTION */
.recruiter-snapshot-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.recruiter-snapshot-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  transition: all var(--transition-fast);
}

.recruiter-snapshot-card:hover {
  border-color: var(--border-highlight);
  background: var(--bg-card-hover);
}

.snapshot-title {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.snapshot-desc {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* BEYOND THE PORTFOLIO & FRAMEWORKS */
.beyond-insights-grid, .why-hire-grid, .product-framework-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.beyond-card, .why-card, .pm-step-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  transition: all var(--transition-fast);
  display: flex;
  flex-direction: column;
}

.beyond-card:hover, .why-card:hover, .pm-step-card:hover {
  border-color: var(--border-highlight);
  background: var(--bg-card-hover);
}

.beyond-card-title, .why-card-title, .pm-step-title {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.beyond-card-desc, .why-card-text, .pm-step-desc {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* RESPONSIVE MEDIA QUERIES */
@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 5rem 0 3rem 0;
  }
  .hero-title {
    font-size: 2.4rem;
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
    font-size: 2rem;
  }
  .beyond-insights-grid, .why-hire-grid, .product-framework-grid, .recruiter-snapshot-grid {
    grid-template-columns: 1fr;
  }
  .pm-card-banner, .pm-card-body {
    padding: 1.25rem;
  }
}
`;

fs.writeFileSync(cssPath, linearCSS, 'utf8');
console.log('Linear & Stripe design system CSS updated successfully!');
