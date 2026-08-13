const fs = require('fs');
const path = require('path');

const cssFile = path.join(__dirname, 'css', 'style.css');
let cssContent = fs.readFileSync(cssFile, 'utf8');

const heroGapCss = `
/* ==========================================================================
   OPTIMIZED HERO TOP MARGIN & GENTLE VERTICAL SPACING
   ========================================================================= */
body {
  padding-top: 64px !important;
}

#hero.container {
  padding-top: 1rem !important;
  padding-bottom: 1.5rem !important;
}

.hero {
  padding: 1rem 0 2.5rem 0 !important;
  margin-bottom: 2rem !important;
}

.apple-profile-card {
  margin-top: 0.5rem !important;
}
`;

if (!cssContent.includes('OPTIMIZED HERO TOP MARGIN')) {
  cssContent += '\n' + heroGapCss;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Appended hero gap optimization CSS to css/style.css!');
} else {
  const startPos = cssContent.indexOf('OPTIMIZED HERO TOP MARGIN');
  cssContent = cssContent.substring(0, startPos - 4) + heroGapCss;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Updated hero gap optimization CSS in css/style.css!');
}

console.log('Successfully reduced vertical space above hero badge!');
