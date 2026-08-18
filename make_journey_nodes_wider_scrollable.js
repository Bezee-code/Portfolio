const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'css', 'style.css');
let cssContent = fs.readFileSync(cssFile, 'utf8');

const widerScrollableJourneyCss = `
/* ==========================================================================
   WIDER HORIZONTAL SCROLLING PRODUCT JOURNEY NODES
   - Expanded node box width (min-width: 175px) for an interactive horizontal timeline
   - Custom styled smooth scrollbar track
   - Clear visual scroll hint indicator
   ========================================================================== */

.project-hero-visual-card {
  padding: 1.25rem 1.5rem;
  background: rgba(10, 14, 23, 0.75);
  border: 1px solid var(--border-color);
  border-radius: 18px;
  margin-bottom: 2rem;
  overflow: hidden;
}

.visual-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

/* Horizontal Scroll Track */
.visual-workflow-nodes {
  display: flex !important;
  align-items: center !important;
  gap: 0.85rem !important;
  overflow-x: auto !important;
  overflow-y: hidden !important;
  padding: 0.5rem 0.25rem 1.1rem 0.25rem !important;
  scroll-behavior: smooth !important;
  -webkit-overflow-scrolling: touch !important;
}

/* Custom Scrollbar Styling */
.visual-workflow-nodes::-webkit-scrollbar {
  height: 6px !important;
}

.visual-workflow-nodes::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.06) !important;
  border-radius: 9999px !important;
}

.visual-workflow-nodes::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #6366f1, #38bdf8) !important;
  border-radius: 9999px !important;
}

.visual-workflow-nodes::-webkit-scrollbar-thumb:hover {
  background: #6366f1 !important;
}

/* Wider Node Box (min-width: 175px) */
.visual-workflow-nodes .visual-node-box {
  min-width: 175px !important;
  max-width: 210px !important;
  flex-shrink: 0 !important;
  padding: 1rem 1.15rem !important;
  background: rgba(19, 27, 46, 0.85) !important;
  border: 1px solid var(--border-color) !important;
  border-radius: 14px !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  text-align: center !important;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3) !important;
}

.visual-node-icon {
  font-size: 1.5rem !important;
  margin-bottom: 0.4rem !important;
}

.visual-node-label {
  font-family: var(--font-heading) !important;
  font-size: 0.875rem !important;
  font-weight: 700 !important;
  color: var(--text-main) !important;
  line-height: 1.3 !important;
  margin-bottom: 0.2rem !important;
}

.visual-node-sub {
  font-size: 0.725rem !important;
  color: var(--text-muted) !important;
  line-height: 1.35 !important;
}

.visual-flow-arrow {
  flex-shrink: 0 !important;
  font-size: 1rem !important;
  color: var(--secondary) !important;
  padding: 0 0.15rem !important;
}
`;

if (!cssContent.includes('WIDER HORIZONTAL SCROLLING PRODUCT JOURNEY NODES')) {
  cssContent += '\n' + widerScrollableJourneyCss;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Appended wider scrollable journey nodes CSS to css/style.css!');
} else {
  const startPos = cssContent.indexOf('WIDER HORIZONTAL SCROLLING PRODUCT JOURNEY NODES');
  cssContent = cssContent.substring(0, startPos - 4) + widerScrollableJourneyCss;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Updated wider scrollable journey nodes CSS in css/style.css!');
}

console.log('Successfully completed wider journey nodes update!');
