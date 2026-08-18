const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'css', 'style.css');
const indexFile = path.join(__dirname, 'index.html');

let cssContent = fs.readFileSync(cssFile, 'utf8');
let indexContent = fs.readFileSync(indexFile, 'utf8');

const stage4Css = `
/* ==========================================================================
   STAGE 4: INTERACTIVE PRODUCT JOURNEY VISUALIZATIONS
   - Project-specific product journey visualizer
   - Sequential step activation & progressive connecting line animation
   - Responsive horizontal (desktop) -> vertical (mobile) layout
   - 100% Accessibility & prefers-reduced-motion support
   ========================================================================== */

.project-hero-visual-card {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 600ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform;
}

.pm-case-card.is-visible .project-hero-visual-card,
.project-hero-visual-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Inactive Node Base State (opacity: 0.55) */
.visual-workflow-nodes .visual-node-box {
  opacity: 0.55;
  transform: scale(0.98);
  transition: opacity 400ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 400ms cubic-bezier(0.22, 1, 0.36, 1),
              border-color 400ms cubic-bezier(0.22, 1, 0.36, 1),
              background 400ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform, border-color;
}

/* Arrow Flow Base State */
.visual-workflow-nodes .visual-flow-arrow {
  opacity: 0.3;
  transition: opacity 400ms cubic-bezier(0.22, 1, 0.36, 1), color 400ms cubic-bezier(0.22, 1, 0.36, 1);
}

/* Sequential Node Activation Timing (200ms-250ms interval) */
.pm-case-card.is-visible .visual-workflow-nodes .visual-node-box:nth-child(1),
.project-hero-visual-card.is-visible .visual-workflow-nodes .visual-node-box:nth-child(1) {
  opacity: 1;
  transform: scale(1.03);
  transition-delay: 0ms;
}

.pm-case-card.is-visible .visual-workflow-nodes .visual-flow-arrow:nth-child(2),
.project-hero-visual-card.is-visible .visual-workflow-nodes .visual-flow-arrow:nth-child(2) {
  opacity: 1;
  color: var(--primary);
  transition-delay: 110ms;
}

.pm-case-card.is-visible .visual-workflow-nodes .visual-node-box:nth-child(3),
.project-hero-visual-card.is-visible .visual-workflow-nodes .visual-node-box:nth-child(3) {
  opacity: 1;
  transform: scale(1.03);
  transition-delay: 220ms;
}

.pm-case-card.is-visible .visual-workflow-nodes .visual-flow-arrow:nth-child(4),
.project-hero-visual-card.is-visible .visual-workflow-nodes .visual-flow-arrow:nth-child(4) {
  opacity: 1;
  color: var(--primary);
  transition-delay: 330ms;
}

.pm-case-card.is-visible .visual-workflow-nodes .visual-node-box:nth-child(5),
.project-hero-visual-card.is-visible .visual-workflow-nodes .visual-node-box:nth-child(5) {
  opacity: 1;
  transform: scale(1.03);
  transition-delay: 440ms;
}

.pm-case-card.is-visible .visual-workflow-nodes .visual-flow-arrow:nth-child(6),
.project-hero-visual-card.is-visible .visual-workflow-nodes .visual-flow-arrow:nth-child(6) {
  opacity: 1;
  color: var(--primary);
  transition-delay: 550ms;
}

.pm-case-card.is-visible .visual-workflow-nodes .visual-node-box:nth-child(7),
.project-hero-visual-card.is-visible .visual-workflow-nodes .visual-node-box:nth-child(7) {
  opacity: 1;
  transform: scale(1.03);
  transition-delay: 660ms;
}

.pm-case-card.is-visible .visual-workflow-nodes .visual-flow-arrow:nth-child(8),
.project-hero-visual-card.is-visible .visual-workflow-nodes .visual-flow-arrow:nth-child(8) {
  opacity: 1;
  color: var(--primary);
  transition-delay: 770ms;
}

.pm-case-card.is-visible .visual-workflow-nodes .visual-node-box:nth-child(9),
.project-hero-visual-card.is-visible .visual-workflow-nodes .visual-node-box:nth-child(9) {
  opacity: 1;
  transform: scale(1.03);
  transition-delay: 880ms;
}

.pm-case-card.is-visible .visual-workflow-nodes .visual-flow-arrow:nth-child(10),
.project-hero-visual-card.is-visible .visual-workflow-nodes .visual-flow-arrow:nth-child(10) {
  opacity: 1;
  color: var(--primary);
  transition-delay: 990ms;
}

.pm-case-card.is-visible .visual-workflow-nodes .visual-node-box:nth-child(11),
.project-hero-visual-card.is-visible .visual-workflow-nodes .visual-node-box:nth-child(11) {
  opacity: 1;
  transform: scale(1.03);
  transition-delay: 1100ms;
}

.pm-case-card.is-visible .visual-workflow-nodes .visual-flow-arrow:nth-child(12),
.project-hero-visual-card.is-visible .visual-workflow-nodes .visual-flow-arrow:nth-child(12) {
  opacity: 1;
  color: var(--primary);
  transition-delay: 1210ms;
}

.pm-case-card.is-visible .visual-workflow-nodes .visual-node-box:nth-child(13),
.project-hero-visual-card.is-visible .visual-workflow-nodes .visual-node-box:nth-child(13) {
  opacity: 1;
  transform: scale(1.03);
  transition-delay: 1320ms;
}

/* Node Hover Interaction */
.visual-node-box:hover {
  opacity: 1 !important;
  transform: translateY(-2px) scale(1.04) !important;
  border-color: var(--border-highlight) !important;
}

/* Mobile Responsive Vertical Flow */
@media (max-width: 860px) {
  .visual-workflow-nodes {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }

  .visual-flow-arrow {
    transform: rotate(90deg);
    align-self: center;
    margin: 0.15rem 0;
  }
}

/* Accessibility Support for prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .project-hero-visual-card,
  .visual-workflow-nodes .visual-node-box,
  .visual-workflow-nodes .visual-flow-arrow {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
`;

if (!cssContent.includes('STAGE 4: INTERACTIVE PRODUCT JOURNEY VISUALIZATIONS')) {
  cssContent += '\n' + stage4Css;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Appended Stage 4 Journey Visualizations CSS to css/style.css!');
} else {
  const startPos = cssContent.indexOf('STAGE 4: INTERACTIVE PRODUCT JOURNEY VISUALIZATIONS');
  cssContent = cssContent.substring(0, startPos - 4) + stage4Css;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Updated Stage 4 Journey Visualizations CSS in css/style.css!');
}

// Update IntersectionObserver target selectors in index.html to observe project-hero-visual-card
if (indexContent.includes('.pm-thinking-grid-section, .thinking-card')) {
  indexContent = indexContent.replaceAll(
    '.pm-thinking-grid-section, .thinking-card',
    '.project-hero-visual-card, .pm-thinking-grid-section, .thinking-card'
  );
  fs.writeFileSync(indexFile, indexContent, 'utf8');
  console.log('Updated IntersectionObserver target selectors in index.html for Stage 4!');
}

console.log('Successfully completed Stage 4 Journey Visualizations integration!');
