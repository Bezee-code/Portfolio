const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const scrollFloatingStyles = `
/* ==========================================================================
   TOP HEADER & FLOATING SCROLL NAVIGATION (VERCEL / APPLE / LINEAR SPEC)
   ========================================================================== */

.top-header {
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

/* Floating Navigation Bar (Hidden initially, appears on scroll > 110px) */
.floating-nav-container {
  position: fixed;
  top: 1.25rem;
  left: 50%;
  transform: translateX(-50%) translateY(-20px);
  z-index: 9999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  max-width: 95vw;
}

.floating-nav-container.visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.floating-nav-pill {
  background: rgba(13, 19, 32, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 9999px;
  padding: 0.4rem 0.75rem 0.4rem 1.15rem;
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

css += '\n' + scrollFloatingStyles;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Appended scroll-floating navigation styles to style.css!');
