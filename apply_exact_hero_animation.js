const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'css', 'style.css');
let cssContent = fs.readFileSync(cssFile, 'utf8');

const exactHeroEntranceAnimationCss = `
/* ==========================================================================
   EDITORIAL HERO ENTRANCE ANIMATION SYSTEM (EXACT DESIGN SPECIFICATION)
   - Pure CSS keyframe entrance sequence
   - Executes ONCE on page initial load (< 1.3s total)
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

/* Step 1: Role Badge (Delay: 100ms, Duration: 350ms) */
.hero .badge-pill {
  opacity: 0;
  animation: heroBadgeEntrance 350ms cubic-bezier(0.22, 1, 0.36, 1) 100ms forwards;
}

/* Step 2: Hero Headline (Delay: 200ms, Duration: 600ms) */
.hero .hero-title {
  opacity: 0;
  animation: heroHeadlineEntrance 600ms cubic-bezier(0.22, 1, 0.36, 1) 200ms forwards;
}

/* Step 3: Description (Delay: 450ms, Duration: 500ms) */
.hero .hero-description {
  opacity: 0;
  animation: heroDescEntrance 500ms cubic-bezier(0.22, 1, 0.36, 1) 450ms forwards;
}

/* Step 4: Capability Chips (Staggered 60ms between chips) */
.hero .hero-badge-item {
  opacity: 0;
}

.hero .hero-badge-item:nth-child(1) { animation: heroChipEntrance 300ms cubic-bezier(0.22, 1, 0.36, 1) 650ms forwards; }
.hero .hero-badge-item:nth-child(2) { animation: heroChipEntrance 300ms cubic-bezier(0.22, 1, 0.36, 1) 710ms forwards; }
.hero .hero-badge-item:nth-child(3) { animation: heroChipEntrance 300ms cubic-bezier(0.22, 1, 0.36, 1) 770ms forwards; }
.hero .hero-badge-item:nth-child(4) { animation: heroChipEntrance 300ms cubic-bezier(0.22, 1, 0.36, 1) 830ms forwards; }
.hero .hero-badge-item:nth-child(5) { animation: heroChipEntrance 300ms cubic-bezier(0.22, 1, 0.36, 1) 890ms forwards; }
.hero .hero-badge-item:nth-child(6) { animation: heroChipEntrance 300ms cubic-bezier(0.22, 1, 0.36, 1) 950ms forwards; }

/* Step 5: Executive Profile Card (Delay: 200ms, Duration: 650ms) */
.hero .apple-profile-card,
.hero .hero-visual-wrapper {
  opacity: 0;
  animation: heroCardEntrance 650ms cubic-bezier(0.22, 1, 0.36, 1) 200ms forwards;
}

/* Supporting Actions & Impact Bar Entrance */
.hero .hero-actions {
  opacity: 0;
  animation: heroDescEntrance 400ms cubic-bezier(0.22, 1, 0.36, 1) 550ms forwards;
}

.hero .hero-impact-bar {
  opacity: 0;
  animation: heroDescEntrance 450ms cubic-bezier(0.22, 1, 0.36, 1) 750ms forwards;
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
  cssContent = cssContent.substring(0, startPos - 4) + exactHeroEntranceAnimationCss;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Updated to exact specified hero entrance animation timings in css/style.css!');
} else {
  cssContent += '\n' + exactHeroEntranceAnimationCss;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Appended exact hero entrance animation CSS to css/style.css!');
}

console.log('Successfully completed exact hero animation integration!');
