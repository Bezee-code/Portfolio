const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'css', 'style.css');
let cssContent = fs.readFileSync(cssFile, 'utf8');

const slowerHeroEntranceAnimationCss = `
/* ==========================================================================
   EDITORIAL HERO ENTRANCE ANIMATION SYSTEM (SLOWER & MORE ELEGANT TIMINGS)
   - Pure CSS keyframe entrance sequence
   - Executes ONCE on page initial load
   - Zero continuous loops / zero floating artifacts / zero design mutations
   - 100% Accessibility (prefers-reduced-motion: reduce) support
   ========================================================================== */

/* Keyframe Definitions */
@keyframes heroBadgeEntrance {
  0% {
    opacity: 0;
    transform: translateY(12px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroHeadlineEntrance {
  0% {
    opacity: 0;
    transform: translateY(24px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroDescEntrance {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroChipEntrance {
  0% {
    opacity: 0;
    transform: translateY(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroCardEntrance {
  0% {
    opacity: 0;
    transform: translateX(25px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Step 1: Role Badge (Delay: 150ms, Duration: 550ms) */
.hero .badge-pill {
  opacity: 0;
  animation: heroBadgeEntrance 550ms cubic-bezier(0.22, 1, 0.36, 1) 150ms forwards;
}

/* Step 2: Hero Headline (Delay: 300ms, Duration: 900ms) */
.hero .hero-title {
  opacity: 0;
  animation: heroHeadlineEntrance 900ms cubic-bezier(0.22, 1, 0.36, 1) 300ms forwards;
}

/* Step 3: Description (Delay: 650ms, Duration: 750ms) */
.hero .hero-description {
  opacity: 0;
  animation: heroDescEntrance 750ms cubic-bezier(0.22, 1, 0.36, 1) 650ms forwards;
}

/* Step 4: Capability Chips (Staggered 90ms between chips) */
.hero .hero-badge-item {
  opacity: 0;
}

.hero .hero-badge-item:nth-child(1) { animation: heroChipEntrance 500ms cubic-bezier(0.22, 1, 0.36, 1) 900ms forwards; }
.hero .hero-badge-item:nth-child(2) { animation: heroChipEntrance 500ms cubic-bezier(0.22, 1, 0.36, 1) 990ms forwards; }
.hero .hero-badge-item:nth-child(3) { animation: heroChipEntrance 500ms cubic-bezier(0.22, 1, 0.36, 1) 1080ms forwards; }
.hero .hero-badge-item:nth-child(4) { animation: heroChipEntrance 500ms cubic-bezier(0.22, 1, 0.36, 1) 1170ms forwards; }
.hero .hero-badge-item:nth-child(5) { animation: heroChipEntrance 500ms cubic-bezier(0.22, 1, 0.36, 1) 1260ms forwards; }
.hero .hero-badge-item:nth-child(6) { animation: heroChipEntrance 500ms cubic-bezier(0.22, 1, 0.36, 1) 1350ms forwards; }

/* Step 5: Executive Profile Card (Delay: 300ms, Duration: 950ms) */
.hero .apple-profile-card,
.hero .hero-visual-wrapper {
  opacity: 0;
  animation: heroCardEntrance 950ms cubic-bezier(0.22, 1, 0.36, 1) 300ms forwards;
}

/* Supporting Actions & Impact Bar Entrance */
.hero .hero-actions {
  opacity: 0;
  animation: heroDescEntrance 650ms cubic-bezier(0.22, 1, 0.36, 1) 800ms forwards;
}

.hero .hero-impact-bar {
  opacity: 0;
  animation: heroDescEntrance 700ms cubic-bezier(0.22, 1, 0.36, 1) 1100ms forwards;
}

/* Accessibility Support for prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .hero .badge-pill,
  .hero .hero-title,
  .hero .hero-description,
  .hero .hero-badge-item,
  .hero .hero-actions,
  .hero .hero-impact-bar,
  .hero .apple-profile-card,
  .hero .hero-visual-wrapper {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
`;

const startPos = cssContent.indexOf('EDITORIAL HERO ENTRANCE ANIMATION SYSTEM');
if (startPos !== -1) {
  cssContent = cssContent.substring(0, startPos - 4) + slowerHeroEntranceAnimationCss;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Updated to slower hero entrance animation timings in css/style.css!');
} else {
  cssContent += '\n' + slowerHeroEntranceAnimationCss;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Appended slower hero entrance animation CSS to css/style.css!');
}

console.log('Successfully completed slower animation timing update!');
