const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'css', 'style.css');
const indexFile = path.join(__dirname, 'index.html');

let cssContent = fs.readFileSync(cssFile, 'utf8');
let indexContent = fs.readFileSync(indexFile, 'utf8');

// 1. Inject story indicator bar into every pm-thinking-grid-section in index.html
const storyBarHtml = `<div class="thinking-story-bar">
                <span class="story-step step-1">01 Problem</span>
                <span class="story-arrow">&rarr;</span>
                <span class="story-step step-2">02 Insight</span>
                <span class="story-arrow">&rarr;</span>
                <span class="story-step step-3">03 Decision</span>
                <span class="story-arrow">&rarr;</span>
                <span class="story-step step-4">04 Impact</span>
              </div>`;

if (!indexContent.includes('thinking-story-bar')) {
  indexContent = indexContent.replaceAll(
    '<div class="thinking-section-title">🧠 Product Thinking & Strategy Breakdown</div>',
    '<div class="thinking-section-title">🧠 Product Thinking & Strategy Breakdown</div>\n              ' + storyBarHtml
  );
  fs.writeFileSync(indexFile, indexContent, 'utf8');
  console.log('Injected Product Thinking Story Bar into index.html!');
}

// 2. Append Stage 3 CSS
const stage3Css = `
/* ==========================================================================
   STAGE 3: PRODUCT THINKING STORY ANIMATION & STEP CONNECTOR
   - Sequential story reveal: 01 Problem -> 02 Insight -> 03 Decision -> 04 Impact
   - Active step border flash during reveal sequence
   - Subtle story step indicator bar
   - 100% Accessibility & prefers-reduced-motion support
   ========================================================================== */

/* Compact Story Step Indicator Bar */
.thinking-story-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.65rem 0 1.25rem 0;
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-muted);
  flex-wrap: wrap;
}

.thinking-story-bar .story-step {
  padding: 0.25rem 0.6rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  color: var(--text-muted);
  transition: all 400ms cubic-bezier(0.22, 1, 0.36, 1);
}

.thinking-story-bar .story-arrow {
  color: var(--text-dim);
  font-size: 0.75rem;
}

/* Active Step Indicators during section reveal */
.pm-case-card.is-visible .story-step.step-1, .pm-thinking-grid-section.is-visible .story-step.step-1 { color: #818cf8; border-color: rgba(99, 102, 241, 0.4); background: rgba(99, 102, 241, 0.12); }
.pm-case-card.is-visible .story-step.step-2, .pm-thinking-grid-section.is-visible .story-step.step-2 { color: #38bdf8; border-color: rgba(56, 189, 248, 0.4); background: rgba(56, 189, 248, 0.12); }
.pm-case-card.is-visible .story-step.step-3, .pm-thinking-grid-section.is-visible .story-step.step-3 { color: #f59e0b; border-color: rgba(245, 158, 11, 0.4); background: rgba(245, 158, 11, 0.12); }
.pm-case-card.is-visible .story-step.step-4, .pm-thinking-grid-section.is-visible .story-step.step-4 { color: #34d399; border-color: rgba(16, 185, 129, 0.4); background: rgba(16, 185, 129, 0.12); }

/* Sequential Thinking Cards Keyframe Entrance with Active Flash */
@keyframes thinkingCardSequentialEntrance {
  0% {
    opacity: 0;
    transform: translateY(18px);
    border-color: var(--border-color);
  }
  50% {
    opacity: 1;
    transform: translateY(-2px);
    border-color: rgba(99, 102, 241, 0.6);
    box-shadow: 0 4px 16px rgba(99, 102, 241, 0.2);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    border-color: var(--border-color);
    box-shadow: none;
  }
}

.pm-thinking-grid .thinking-card {
  opacity: 0;
  transform: translateY(18px);
  will-change: opacity, transform, border-color;
  transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1),
              border-color 300ms cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 300ms cubic-bezier(0.22, 1, 0.36, 1);
}

.pm-case-card.is-visible .pm-thinking-grid .thinking-card:nth-child(1),
.pm-thinking-grid-section.is-visible .thinking-card:nth-child(1) {
  animation: thinkingCardSequentialEntrance 450ms cubic-bezier(0.22, 1, 0.36, 1) 0ms forwards;
}

.pm-case-card.is-visible .pm-thinking-grid .thinking-card:nth-child(2),
.pm-thinking-grid-section.is-visible .thinking-card:nth-child(2) {
  animation: thinkingCardSequentialEntrance 450ms cubic-bezier(0.22, 1, 0.36, 1) 140ms forwards;
}

.pm-case-card.is-visible .pm-thinking-grid .thinking-card:nth-child(3),
.pm-thinking-grid-section.is-visible .thinking-card:nth-child(3) {
  animation: thinkingCardSequentialEntrance 450ms cubic-bezier(0.22, 1, 0.36, 1) 280ms forwards;
}

.pm-case-card.is-visible .pm-thinking-grid .thinking-card:nth-child(4),
.pm-thinking-grid-section.is-visible .thinking-card:nth-child(4) {
  animation: thinkingCardSequentialEntrance 450ms cubic-bezier(0.22, 1, 0.36, 1) 420ms forwards;
}

/* Subtle Thinking Card Hover (2-3px max lift, crisp border) */
.thinking-card:hover {
  transform: translateY(-3px) !important;
  border-color: var(--border-highlight) !important;
}

/* Accessibility Support for prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .thinking-story-bar .story-step,
  .pm-thinking-grid .thinking-card {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
`;

if (!cssContent.includes('STAGE 3: PRODUCT THINKING STORY ANIMATION')) {
  cssContent += '\n' + stage3Css;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Appended Stage 3 Product Thinking CSS to css/style.css!');
} else {
  const startPos = cssContent.indexOf('STAGE 3: PRODUCT THINKING STORY ANIMATION');
  cssContent = cssContent.substring(0, startPos - 4) + stage3Css;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Updated Stage 3 Product Thinking CSS in css/style.css!');
}

// 3. Update IntersectionObserver target selectors in index.html
if (indexContent.includes('.section-header, .category-group-header, .pm-case-card, .thinking-card')) {
  indexContent = indexContent.replaceAll(
    '.section-header, .category-group-header, .pm-case-card, .thinking-card, .why-card, .cert-card, .beyond-card',
    '.section-header, .category-group-header, .pm-case-card, .pm-thinking-grid-section, .thinking-card, .why-card, .cert-card, .beyond-card'
  );
  fs.writeFileSync(indexFile, indexContent, 'utf8');
  console.log('Updated IntersectionObserver target selectors in index.html!');
}

console.log('Successfully completed Stage 3 Product Thinking Story integration!');
