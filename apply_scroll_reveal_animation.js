const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'css', 'style.css');
const indexFile = path.join(__dirname, 'index.html');

let cssContent = fs.readFileSync(cssFile, 'utf8');
let indexContent = fs.readFileSync(indexFile, 'utf8');

const scrollRevealCss = `
/* ==========================================================================
   STAGE 2: SCROLL-BASED REVEAL ANIMATION SYSTEM
   - Pure CSS transitions driven by lightweight IntersectionObserver
   - Executes ONCE per element when entering viewport (15% threshold)
   - Zero continuous loops / zero layout shifts / preserves existing hover states
   - 100% Accessibility (prefers-reduced-motion: reduce) support
   ========================================================================== */

/* Section Headers Reveal (Section 1) */
.section-header,
.category-group-header {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 500ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform;
}

.section-header.is-visible,
.category-group-header.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Project Cards Reveal (Section 2) */
.pm-case-card {
  opacity: 0;
  transform: translateY(35px);
  transition: opacity 650ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform;
}

.pm-case-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Internal Project Content Staggered Reveal (Section 3) */
.pm-case-card .pm-card-banner,
.pm-case-card .project-hero-visual-card {
  opacity: 0;
  transform: translateY(15px);
  transition: opacity 500ms cubic-bezier(0.22, 1, 0.36, 1) 0ms,
              transform 500ms cubic-bezier(0.22, 1, 0.36, 1) 0ms;
}

.pm-case-card .pm-exec-summary,
.pm-case-card .pm-kpi-grid,
.pm-case-card .pm-role-bar {
  opacity: 0;
  transform: translateY(15px);
  transition: opacity 500ms cubic-bezier(0.22, 1, 0.36, 1) 100ms,
              transform 500ms cubic-bezier(0.22, 1, 0.36, 1) 100ms;
}

.pm-case-card .pm-thinking-grid-section {
  opacity: 0;
  transform: translateY(15px);
  transition: opacity 500ms cubic-bezier(0.22, 1, 0.36, 1) 200ms,
              transform 500ms cubic-bezier(0.22, 1, 0.36, 1) 200ms;
}

.pm-case-card .pm-card-actions {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 400ms cubic-bezier(0.22, 1, 0.36, 1) 300ms,
              transform 400ms cubic-bezier(0.22, 1, 0.36, 1) 300ms;
}

.pm-case-card.is-visible .pm-card-banner,
.pm-case-card.is-visible .project-hero-visual-card,
.pm-case-card.is-visible .pm-exec-summary,
.pm-case-card.is-visible .pm-kpi-grid,
.pm-case-card.is-visible .pm-role-bar,
.pm-case-card.is-visible .pm-thinking-grid-section,
.pm-case-card.is-visible .pm-card-actions {
  opacity: 1;
  transform: translateY(0);
}

/* 2x2 Product Thinking Cards Reveal */
.thinking-card {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 400ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 400ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform;
}

.pm-case-card.is-visible .thinking-card:nth-child(1) { transition-delay: 220ms; opacity: 1; transform: translateY(0); }
.pm-case-card.is-visible .thinking-card:nth-child(2) { transition-delay: 300ms; opacity: 1; transform: translateY(0); }
.pm-case-card.is-visible .thinking-card:nth-child(3) { transition-delay: 380ms; opacity: 1; transform: translateY(0); }
.pm-case-card.is-visible .thinking-card:nth-child(4) { transition-delay: 460ms; opacity: 1; transform: translateY(0); }

/* General Section Cards (Why Cards, Cert Cards, Beyond Cards) */
.why-card,
.cert-card,
.beyond-card {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 550ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 550ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform;
}

.why-card.is-visible,
.cert-card.is-visible,
.beyond-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Mobile Adjustments (max-width: 640px) */
@media (max-width: 640px) {
  .section-header,
  .category-group-header {
    transform: translateY(12px);
    transition-duration: 400ms;
  }

  .pm-case-card {
    transform: translateY(20px);
    transition-duration: 500ms;
  }

  .thinking-card,
  .why-card,
  .cert-card,
  .beyond-card {
    transform: translateY(10px);
    transition-duration: 350ms;
  }
}

/* Accessibility Support for prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .section-header,
  .category-group-header,
  .pm-case-card,
  .pm-case-card *,
  .thinking-card,
  .why-card,
  .cert-card,
  .beyond-card {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
    animation: none !important;
  }
}
`;

// Append CSS to style.css
if (!cssContent.includes('STAGE 2: SCROLL-BASED REVEAL ANIMATION SYSTEM')) {
  cssContent += '\n' + scrollRevealCss;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Appended Stage 2 Scroll Reveal CSS to css/style.css!');
} else {
  const startPos = cssContent.indexOf('STAGE 2: SCROLL-BASED REVEAL ANIMATION SYSTEM');
  cssContent = cssContent.substring(0, startPos - 4) + scrollRevealCss;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Updated Stage 2 Scroll Reveal CSS in css/style.css!');
}

// Inject IntersectionObserver Script into index.html
const scrollObserverScript = `
<!-- Stage 2: Scroll-Based IntersectionObserver Reveal Script -->
<script>
document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.section-header, .category-group-header, .pm-case-card, .thinking-card, .why-card, .cert-card, .beyond-card').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Reveal ONCE, keep visible forever!
      }
    });
  }, observerOptions);

  const targetSelectors = '.section-header, .category-group-header, .pm-case-card, .thinking-card, .why-card, .cert-card, .beyond-card';
  document.querySelectorAll(targetSelectors).forEach(el => {
    revealObserver.observe(el);
  });
});
</script>
`;

if (!indexContent.includes('Stage 2: Scroll-Based IntersectionObserver Reveal Script')) {
  indexContent = indexContent.replace('</body>', scrollObserverScript + '\n</body>');
  fs.writeFileSync(indexFile, indexContent, 'utf8');
  console.log('Injected Stage 2 IntersectionObserver script into index.html!');
}

console.log('Successfully completed Stage 2 Scroll Reveal Animation Integration!');
